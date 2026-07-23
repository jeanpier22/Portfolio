/**
 * Logos de tecnología, auto-alojados (no CDN ni fuentes en runtime).
 *
 * Dos fuentes:
 *  - `public/devicon/` — Devicon, logos **a color** (lenguajes/frameworks).
 *  - `public/logos/`   — Simple Icons, logos **monocromos** tintados en claro,
 *    para lo que Devicon no tiene (OpenAI, LangChain, n8n, Qdrant, Power BI…).
 *
 * Lo que no es un producto con logo —RAG, LLMs & Prompt Engineering, APIs REST,
 * SCPI, PLC, SCADA, ANSYS, LlamaIndex, LangFuse— se queda como chip de texto.
 */

/** Helper para la marquesina del hero (solo Devicon, por slug). */
export const deviconSrc = (slug: string) => `/devicon/${slug}.svg`

/**
 * Mapa **por parte** de skill → ruta de logo.
 *
 * La clave es cada tecnología individual, no el nombre compuesto. Así, para un
 * chip como «SQL / PostgreSQL / MySQL», el componente parte el nombre por `/` y
 * pone cada logo pegado a SU palabra ([🐘] PostgreSQL / [🐬] MySQL), en vez de
 * amontonar los logos al inicio. Las partes sin logo (SQL, RAG, SCPI…) solo
 * muestran texto.
 */
export const partIcon: Record<string, string> = {
  // Devicon (a color)
  Python: '/devicon/python.svg',
  JavaScript: '/devicon/javascript.svg',
  React: '/devicon/react.svg',
  FastAPI: '/devicon/fastapi.svg',
  'HTML & CSS': '/devicon/html5.svg',
  'Tailwind CSS': '/devicon/tailwindcss.svg',
  Bootstrap: '/devicon/bootstrap.svg',
  Java: '/devicon/java.svg',
  Flutter: '/devicon/flutter.svg',
  'Android Studio': '/devicon/androidstudio.svg',
  Git: '/devicon/git.svg',
  Postman: '/devicon/postman.svg',
  TypeScript: '/devicon/typescript.svg',
  Angular: '/devicon/angularjs.svg',
  'Node.js': '/devicon/nodejs.svg',
  PostgreSQL: '/devicon/postgresql.svg',
  MySQL: '/devicon/mysql.svg',
  Supabase: '/devicon/supabase.svg',
  Firebase: '/devicon/firebase.svg',
  Spark: '/devicon/apachespark.svg',
  Hadoop: '/devicon/hadoop.svg',
  MATLAB: '/devicon/matlab.svg',
  // IA: Lobe Icons a color donde se ve bien; Simple Icons / Lobe mono tintado en
  // claro para los brands monocromos o de color muy oscuro (openai, mcp,
  // langgraph, crewai). Qdrant y Power BI no están en Lobe → Simple Icons.
  'OpenAI API': '/logos/openai.svg',
  LangChain: '/logos/langchain.svg',
  LangGraph: '/logos/langgraph.svg',
  LlamaIndex: '/logos/llamaindex.svg',
  LangFuse: '/logos/langfuse.svg',
  CrewAI: '/logos/crewai.svg',
  MCP: '/logos/modelcontextprotocol.svg',
  n8n: '/logos/n8n.svg',
  Qdrant: '/logos/qdrant.svg',
  'Power BI': '/logos/powerbi.svg',
}
