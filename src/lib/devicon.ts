/**
 * Logos de tecnología (Devicon), auto-alojados en `public/devicon/`.
 *
 * Se descargaron solo los SVG que se usan (no la fuente entera ni un CDN) para
 * que carguen rápido y el sitio no dependa de un servicio externo en runtime.
 * Devicon cubre lenguajes/frameworks/herramientas; lo que no tiene logo —SCPI,
 * RAG, MCP, PLC, SCADA, ANSYS…— se queda como chip de texto.
 */
export const deviconSrc = (slug: string) => `/devicon/${slug}.svg`

/**
 * Mapa de nombre de skill (tal cual en `cv.ts`) → slugs de Devicon.
 * Un chip combinado («Spark / Hadoop») muestra los dos logos.
 */
export const skillIcons: Record<string, string[]> = {
  Python: ['python'],
  JavaScript: ['javascript'],
  React: ['react'],
  FastAPI: ['fastapi'],
  'HTML & CSS': ['html5'],
  'Tailwind CSS': ['tailwindcss'],
  Bootstrap: ['bootstrap'],
  Java: ['java'],
  'Flutter / Android Studio': ['flutter', 'androidstudio'],
  Git: ['git'],
  Postman: ['postman'],
  TypeScript: ['typescript'],
  Angular: ['angularjs'],
  'Node.js': ['nodejs'],
  'SQL / PostgreSQL / MySQL': ['postgresql', 'mysql'],
  'Supabase / Firebase': ['supabase', 'firebase'],
  'Spark / Hadoop': ['apachespark', 'hadoop'],
  MATLAB: ['matlab'],
}
