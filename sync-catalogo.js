/**
 * Script de sincronización automática
 * Transforma productos del catálogo B2B → Website institucional (sin precios)
 */

import fs from 'fs';
import path from 'path';

// Configuración con rutas absolutas
const CONFIG = {
  catalogoPath: 'C:\\Users\\Usuario\\mare-catalog-v2\\public\\productos.json',
  imagenesPath: 'C:\\Users\\Usuario\\mare-catalog-v2\\public\\imagenes\\',
  outputPath: 'C:\\Users\\Usuario\\mare-website\\src\\data\\productos-web.json',
  outputImagesPath: 'C:\\Users\\Usuario\\mare-website\\public\\imagenes\\',
  whatsappNumber: '+59897998999'
};

/**
 * Transforma un producto del catálogo B2B a formato website institucional
 */
function transformarProducto(productoCatalogo) {
  return {
    codigo: productoCatalogo.codigo,
    nombre: productoCatalogo.nombre,
    descripcion: productoCatalogo.descripcion,
    categoria: productoCatalogo.categoria,
    medidas: productoCatalogo.medidas,
    imagenes: productoCatalogo.imagenes || [],
    imagenVariantes: productoCatalogo.imagenVariantes,
    sinColor: productoCatalogo.sinColor || false,
    permitirSurtido: productoCatalogo.permitirSurtido || false,
    colores: productoCatalogo.colores || {},
    variantes: productoCatalogo.variantes || {},
    whatsappMessage: `Hola, me interesa este producto: ${productoCatalogo.codigo}`
    // NOTA: Eliminamos el precio y campos B2B específicos
  };
}

/**
 * Copia imágenes del catálogo al website
 */
async function copiarImagenes() {
  try {
    console.log('📁 Copiando imágenes del catálogo...');
    
    // Crear directorio de destino si no existe
    if (!fs.existsSync(CONFIG.outputImagesPath)) {
      fs.mkdirSync(CONFIG.outputImagesPath, { recursive: true });
    }
    
    // Verificar si el directorio origen existe
    if (!fs.existsSync(CONFIG.imagenesPath)) {
      console.log('⚠️  Directorio de imágenes del catálogo no encontrado');
      return false;
    }
    
    // Copiar todas las imágenes
    const imagenes = fs.readdirSync(CONFIG.imagenesPath);
    let copiedCount = 0;
    
    for (const imagen of imagenes) {
      const origen = path.join(CONFIG.imagenesPath, imagen);
      const destino = path.join(CONFIG.outputImagesPath, imagen);
      
      try {
        fs.copyFileSync(origen, destino);
        copiedCount++;
      } catch (error) {
        console.log(`⚠️  Error copiando ${imagen}:`, error.message);
      }
    }
    
    console.log(`✅ ${copiedCount} imágenes copiadas exitosamente`);
    return true;
    
  } catch (error) {
    console.error('❌ Error copiando imágenes:', error.message);
    return false;
  }
}

/**
 * Sincroniza productos del catálogo
 */
async function sincronizarProductos() {
  try {
    console.log('🔄 Iniciando sincronización de productos...');
    
    // Verificar archivo de productos del catálogo
    if (!fs.existsSync(CONFIG.catalogoPath)) {
      throw new Error(`Archivo de productos del catálogo no encontrado: ${CONFIG.catalogoPath}`);
    }
    
    // Leer productos del catálogo
    const productosRaw = fs.readFileSync(CONFIG.catalogoPath, 'utf8');
    const catalogoData = JSON.parse(productosRaw);
    
    // Extraer productos del formato con versioning
    const productosCatalogo = catalogoData.productos || catalogoData;
    
    console.log(`📦 Encontrados ${productosCatalogo.length} productos en el catálogo`);
    console.log(`📅 Versión del catálogo: ${catalogoData.version || 'legacy'}`);
    
    // Transformar productos para website
    const productosWeb = productosCatalogo.map(transformarProducto);
    
    // Crear directorio de salida si no existe
    const outputDir = path.dirname(CONFIG.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Guardar productos transformados
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(productosWeb, null, 2));
    
    console.log(`✅ ${productosWeb.length} productos sincronizados para website`);
    
    // Estadísticas
    const stats = {
      total: productosWeb.length,
      conImagenes: productosWeb.filter(p => p.imagenes.length > 0).length,
      sinImagenes: productosWeb.filter(p => p.imagenes.length === 0).length,
      conVariantesImg: productosWeb.filter(p => p.imagenVariantes).length,
      conColores: productosWeb.filter(p => Object.keys(p.colores).length > 0).length,
      sinColor: productosWeb.filter(p => p.sinColor).length,
      conSurtido: productosWeb.filter(p => p.permitirSurtido).length,
      categorias: new Set(productosWeb.map(p => p.categoria)).size
    };
    
    console.log('\\n📊 ESTADÍSTICAS DEL WEBSITE:');
    console.log(`   - Total productos: ${stats.total}`);
    console.log(`   - Con imágenes: ${stats.conImagenes}`);
    console.log(`   - Sin imágenes: ${stats.sinImagenes}`);
    console.log(`   - Con imagen de variantes: ${stats.conVariantesImg}`);
    console.log(`   - Con colores: ${stats.conColores}`);
    console.log(`   - Sin color: ${stats.sinColor}`);
    console.log(`   - Permiten surtido: ${stats.conSurtido}`);
    console.log(`   - Categorías únicas: ${stats.categorias}`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error sincronizando productos:', error.message);
    return false;
  }
}

/**
 * Ejecuta la sincronización completa
 */
async function ejecutarSincronizacion() {
  console.log('🌐 SINCRONIZACIÓN CATÁLOGO → WEBSITE MARÉ');
  console.log('==========================================\\n');
  
  try {
    // 1. Sincronizar productos
    const productosOk = await sincronizarProductos();
    if (!productosOk) {
      throw new Error('Falló la sincronización de productos');
    }
    
    // 2. Copiar imágenes
    const imagenesOk = await copiarImagenes();
    if (!imagenesOk) {
      console.log('⚠️  Advertencia: No se pudieron copiar todas las imágenes');
    }
    
    console.log('\\n🎉 ¡SINCRONIZACIÓN COMPLETADA EXITOSAMENTE!');
    console.log('   El website ya tiene los productos actualizados del catálogo');
    console.log('   SIN precios - perfecto para consumidor final');
    
    return true;
    
  } catch (error) {
    console.error('\\n💥 ERROR EN SINCRONIZACIÓN:', error.message);
    return false;
  }
}

// Ejecutar siempre
console.log('🌐 Iniciando sincronización...');
ejecutarSincronizacion()
  .then(success => {
    console.log(success ? '✅ Sincronización exitosa' : '❌ Sincronización falló');
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });

export { ejecutarSincronizacion, sincronizarProductos, copiarImagenes };