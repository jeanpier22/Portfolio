/**
 * Proyectos de código desplegados — la sección que "muestra" en vez de "contar".
 *
 * Curado a mano a propósito (no se jala la API de GitHub): un portafolio es un
 * carrete de lo mejor, no un volcado de todos los repos. Aquí van solo los
 * proyectos con demo pública en Vercel; los repos de clase o de prueba quedan
 * fuera. Para añadir uno nuevo: copia su screenshot a public/ y agrega su objeto.
 *
 * Las descripciones están escritas a partir de las apps reales; edítalas si
 * quieres afinar el mensaje.
 */
export interface ProyectoCodigo {
  nombre: string
  /** Frase corta que resume el producto. */
  tagline: string
  descripcion: string
  /** Screenshot de la demo, en public/. */
  imagen: string
  demo: string
  repo: string
  tags: string[]
  /** Destaca el proyecto principal (borde acentuado). */
  destacado?: boolean
}

export const proyectosCodigo: ProyectoCodigo[] = [
  {
    nombre: 'Scraper Web — Agente de IA',
    tagline: 'Extrae datos de cualquier web y redacta el cold email solo',
    descripcion:
      'Agente construido con LangGraph que hace scraping de un sitio web, interpreta su contenido y genera automáticamente un cold email personalizado, listo para enviar al destinatario. Panel con API token y headers configurables.',
    imagen: '/demo-agente.jpg',
    demo: 'https://agente-lang-graph.vercel.app',
    repo: 'https://github.com/jeanpier22/Agente-Lang-Graph',
    tags: ['LangGraph', 'Python', 'IA aplicada', 'Web scraping', 'Vercel'],
    destacado: true,
  },
  {
    nombre: 'Haku Wiñay · Noa Jayatai',
    tagline: 'Vitrina de emprendimientos rurales de La Unión, Arequipa',
    descripcion:
      'Plataforma web que da visibilidad a las familias emprendedoras de la provincia de La Unión: productos del campo —vinos artesanales, miel, truchas, panadería— directo del productor. Diseño editorial con secciones de emprendimientos, historia y contacto.',
    imagen: '/demo-haku.jpg',
    demo: 'https://haku-winay-noa-jayatai.vercel.app',
    repo: 'https://github.com/jeanpier22/Haku-Winay-Noa-Jayatai',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
]
