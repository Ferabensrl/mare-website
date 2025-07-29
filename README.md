# 🌐 MARÉ Website Institucional

**Website institucional de MARÉ - Tu estilo en cada detalle**

## 📋 Descripción

Website institucional de la marca MARÉ, diseñado para generar demanda del consumidor final y atraer nuevos distribuidores. **No es un e-commerce**, sino una plataforma de presentación de marca con productos sin precios.

## 🎯 Objetivos

- **Generar awareness** de la marca MARÉ
- **Atraer consumidores finales** que busquen productos en comercios
- **Conseguir nuevos distribuidores** para expandir red de venta
- **Mostrar productos** sin precios (enfoque institucional)
- **Dirigir tráfico** desde Instagram hacia contacto directo

## 🏗️ Arquitectura

### Tecnologías
- **React 18** + **TypeScript**
- **Tailwind CSS** con paleta MARÉ personalizada
- **Vite** para desarrollo y build
- **React Router** para navegación

### Estructura
```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── ui/              # WhatsAppButton, etc.
│   └── sections/        # Secciones reutilizables
├── pages/               # Páginas principales
├── data/                # JSON editables
├── types/               # Tipos TypeScript
└── utils/               # Utilidades
```

## 🎨 Diseño

### Paleta de Colores MARÉ
- **Nude**: `#F5F0E8` - Color principal de fondo
- **Cream**: `#E8DDD4` - Acentos suaves  
- **Brown**: `#8F6A50` - Color principal de marca
- **Dark**: `#6B4E37` - Textos y contrastes
- **Accent**: `#D4B5A0` - Destacados

### Identidad
- **Femenina y elegante**
- **Moderna y clean**
- **Responsive design**
- **Animaciones suaves**

## 📱 Páginas

1. **Inicio** - Video hero + logo + destacados
2. **Sobre Nosotros** - Historia Feraben/MARÉ + misión/visión  
3. **Productos** - Grid SIN precios + botón "Me interesa"
4. **Tips & Estilo** - Blog visual editable
5. **Contacto** - WhatsApp + Instagram + CTA distribuidores

## 🔄 Sincronización con Catálogo B2B

### Script de Sincronización
```bash
node sync-catalogo.js
```

**Función**: 
- Lee productos del catálogo B2B (`mare-catalog-v2`)
- **Elimina precios** y datos B2B
- Agrega botones WhatsApp con mensajes personalizados
- Copia imágenes automáticamente
- Genera `productos-web.json` para website

### Flujo de Actualización
```
📊 Excel → 🔄 Catálogo B2B → 🌐 Website Institucional
```

## 📞 Integración WhatsApp

### Mensajes Automáticos
- **Productos**: "Hola, me interesa este producto: [CÓDIGO]"
- **Distribuidores**: "Quiero ser distribuidor de MARÉ"
- **Consumidores**: "Busco productos MARÉ cerca de mi ubicación"

### Número de Contacto
`+598 99 123 456` (configurable en components/ui/WhatsAppButton.tsx)

## 🚀 Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
```

### Build para Producción  
```bash
npm run build
```

### Verificar Tipos
```bash
npm run typecheck
```

## 🌐 Deploy

### Dominio
- **mareuy.com** (comprado en Cloudflare)
- DNS apunta a Vercel
- SSL automático

### Pipeline
```
GitHub → Vercel → mareuy.com
```

## 📝 Contenido Editable

### Archivos JSON
- `src/data/contenido.json` - Sobre nosotros, destacados, contacto
- `src/data/tips-blog.json` - Posts del blog Tips & Estilo
- `src/data/productos-web.json` - Productos sincronizados (auto-generado)

### Actualización de Contenido
1. Editar archivos JSON directamente
2. Hacer commit y push
3. Deploy automático en Vercel

## 🎯 Estrategia Digital

### Customer Journey
```
Instagram → Website → WhatsApp → Conversión
```

### Diferenciación vs Catálogo B2B
- **Catálogo B2B**: CON precios, para mayoristas
- **Website**: SIN precios, para consumidor final + distribuidores
- **Misma base de datos**, diferentes presentaciones

## 📊 Métricas Objetivo

- **Leads de distribuidores** via WhatsApp
- **Consultas de consumidores** por ubicación
- **Tráfico desde Instagram**
- **Tiempo en página de productos**

## 🔧 Configuración

### Variables de Entorno (.env.local)
```
VITE_WHATSAPP_NUMBER=+59899123456
VITE_INSTAGRAM_URL=https://instagram.com/mare.uy
VITE_EMAIL_CONTACT=contacto@mareuy.com
```

## 📞 Soporte Técnico

Para dudas sobre implementación, contactar con referencia a:
- **CLAUDE.md** - Documentación completa del ecosistema
- **Sección "WEBSITE INSTITUCIONAL MARÉ"**

---

**🚀 MARÉ Website - Generando demanda, conectando clientes**