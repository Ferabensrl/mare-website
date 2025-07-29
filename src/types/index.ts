// Tipos para productos (sin precios, enfoque institucional)
export interface ProductoWeb {
  codigo: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  medidas: string;
  imagenes: string[];
  imagenVariantes?: string;
  sinColor: boolean;
  permitirSurtido: boolean;
  colores: Record<string, boolean>;
  variantes: Record<string, boolean>;
  whatsappMessage: string;
}

// Tipos para contenido del blog
export interface TipEstilo {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  tags: string[];
  contenido: string;
}

// Tipos para contenido editable
export interface ContenidoWeb {
  sobre: {
    titulo: string;
    subtitulo: string;
    historia: string;
    mision: string;
    vision: string;
    valores: string[];
  };
  destacados: {
    titulo: string;
    descripcion: string;
    imagen: string;
    activo: boolean;
  }[];
  contacto: {
    whatsapp: string;
    instagram: string;
    email: string;
    mensaje_cta: string;
  };
}

// Configuración de WhatsApp
export interface WhatsAppConfig {
  numero: string;
  mensajeBase: string;
}