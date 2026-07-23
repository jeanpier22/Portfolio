/**
 * Fuente única de verdad del CV.
 *
 * Toda la información visible en pantalla y en el PDF sale de este archivo.
 * Para actualizar el CV no hace falta tocar ningún componente: basta con
 * editar los objetos de abajo.
 *
 * Regla del proyecto: no se inventa experiencia. Lo que está en aprendizaje
 * se marca con `estado: 'formacion'` y se renderiza como "En formación".
 */

export type NivelSkill = 'formacion' | 'solido' | 'avanzado'

export interface Skill {
  nombre: string
  estado?: NivelSkill
}

export interface GrupoSkills {
  titulo: string
  items: Skill[]
}

export interface Experiencia {
  /** Iniciales usadas como lettermark cuando no hay logo de la empresa. */
  sigla: string
  empresa: string
  puesto: string
  ubicacion?: string
  periodo: string
  actual?: boolean
  logros: string[]
  stack?: string[]
  /**
   * Marca los puestos de investigación. Determina bajo qué sección se
   * renderizan, en lugar de deducirlo de la posición en el array: así mover una
   * experiencia entre páginas nunca la reclasifica por accidente.
   */
  investigacion?: boolean
}

export interface Estudio {
  institucion: string
  titulo: string
  periodo: string
  detalle?: string
}

export interface Programa {
  /** Clave estable para seleccionarlo desde un perfil. */
  id: string
  nombre: string
  /** Institución. Ausente en la formación autodidacta en curso. */
  entidad?: string
  periodo: string
  /** Modalidad o denominación oficial, p. ej. «PAEP». */
  detalle?: string
  /** De qué trató el programa. Vacío mientras no haya fuente que lo respalde. */
  puntos: string[]
}

export interface Proyecto {
  /** Clave estable para seleccionarlo desde un perfil. */
  id: string
  nombre: string
  contexto: string
  puntos: string[]
}

export interface Idioma {
  nombre: string
  nivel: string
  /** 0–100, usado para la barra de progreso. */
  dominio: number
}

// ---------------------------------------------------------------------------
// Identidad y contacto
// ---------------------------------------------------------------------------

export const perfil = {
  nombre: 'Jeanpier Ancori',
  apellido: 'Sánchez',
  titular: 'Ingeniero Electrónico · Desarrollo de Software & IA',
  foto: 'perfil.jpg',
  resumen:
    'Ingeniero Electrónico y de Telecomunicaciones con Maestría en Internet de las Cosas (IoT). Desarrollo software para dispositivos biomédicos en Zamenis Biotech, combinando Python, integración hardware–software y desarrollo web. Docente universitario y técnico con más de 3 años formando a estudiantes en desarrollo de software. Actualmente me especializo en Inteligencia Artificial aplicada y automatización inteligente.',
} as const

export const contacto = {
  telefono: '+51 950 736 076',
  email: 'jeanpier.ancori@gmail.com',
  ubicacion: 'Cerro Colorado, Arequipa — Perú',
  linkedin: {
    etiqueta: 'in/jeanpier-ancori-sánchez',
    url: 'https://www.linkedin.com/in/jeanpier-ancori-s%C3%A1nchez-35a33515b/',
  },
  github: {
    etiqueta: 'github.com/jeanpier22',
    url: 'https://github.com/jeanpier22',
  },
} as const

// ---------------------------------------------------------------------------
// Competencias técnicas
// ---------------------------------------------------------------------------

export const skills: GrupoSkills[] = [
  {
    titulo: 'Desarrollo de Software',
    items: [
      { nombre: 'Python', estado: 'avanzado' },
      { nombre: 'JavaScript', estado: 'solido' },
      { nombre: 'React', estado: 'solido' },
      { nombre: 'FastAPI', estado: 'solido' },
      { nombre: 'APIs REST', estado: 'solido' },
      { nombre: 'HTML & CSS', estado: 'avanzado' },
      { nombre: 'Tailwind CSS' },
      { nombre: 'Bootstrap' },
      { nombre: 'Java' },
      // Junto en una etiqueta: el entorno acompaña siempre al framework y por
      // separado costaba una fila más en la barra lateral, que va sin margen.
      { nombre: 'Flutter / Android Studio' },
      { nombre: 'Git' },
      { nombre: 'Postman' },
      // Vistos en bootcamp, no usados profesionalmente: atenuados para que
      // nadie los lea como experiencia.
      { nombre: 'TypeScript', estado: 'formacion' },
      { nombre: 'Angular', estado: 'formacion' },
      { nombre: 'Node.js', estado: 'formacion' },
    ],
  },
  {
    titulo: 'Inteligencia Artificial',
    items: [
      { nombre: 'LLMs & Prompt Engineering', estado: 'solido' },
      // Sin atenuar: está en producción en el generador de informes de MABIS.
      { nombre: 'OpenAI API', estado: 'solido' },
      { nombre: 'RAG', estado: 'formacion' },
      { nombre: 'LangChain / LangGraph', estado: 'formacion' },
      { nombre: 'CrewAI', estado: 'formacion' },
      { nombre: 'LlamaIndex', estado: 'formacion' },
      { nombre: 'MCP', estado: 'formacion' },
      { nombre: 'n8n', estado: 'formacion' },
      { nombre: 'LangFuse', estado: 'formacion' },
    ],
  },
  {
    titulo: 'Datos & Bases de Datos',
    items: [
      { nombre: 'SQL / PostgreSQL / MySQL', estado: 'solido' },
      // Agrupados para dejar sitio a Spark sin añadir una fila: la barra
      // lateral va a cero de margen.
      { nombre: 'Supabase / Firebase' },
      { nombre: 'Spark / Hadoop' },
      { nombre: 'Power BI' },
      { nombre: 'Qdrant', estado: 'formacion' },
    ],
  },
  {
    titulo: 'Ingeniería & Automatización',
    items: [
      { nombre: 'Sistemas Embebidos', estado: 'solido' },
      { nombre: 'Integración HW–SW', estado: 'avanzado' },
      { nombre: 'SCPI', estado: 'avanzado' },
      // Agrupados en una etiqueta: por separado ocupaban dos filas de la barra
      // lateral, que es la columna sin margen de la hoja 1. El detalle de cada
      // entorno (TIA Portal, Studio 5000) está en la tarjeta del PAEP.
      { nombre: 'PLC Siemens / Allen-Bradley' },
      { nombre: 'SCADA / HMI' },
      { nombre: 'Modbus / Profibus' },
      { nombre: 'MATLAB' },
      { nombre: 'ANSYS HFSS' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Trayectoria
// ---------------------------------------------------------------------------

export const experiencia: Experiencia[] = [
  {
    sigla: 'ZB',
    empresa: 'Zamenis Biotech',
    puesto: 'Programador de Sistemas y Automatización',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Mar 2024 — Actualidad',
    actual: true,
    // Este puesto y la entrada de investigación de MABIS 3.0 conviven, así que
    // el contenido está repartido a propósito: aquí el producto —plataforma,
    // procesamiento, IA—; allí el estudio clínico y la instrumentación. Sin
    // ese reparto las dos entradas se leerían como la misma copiada.
    logros: [
      'Reducción del tiempo de adquisición del dispositivo biomédico MABIS de 45 a 25 minutos (−45 %), reescribiendo el sistema central de procesamiento y eliminando bucles redundantes.',
      'Construcción del front-end y el back-end de la plataforma web de visualización y control del equipo.',
      'Automatización de los informes de diagnóstico por paciente, antes redactados a mano: un flujo con la API de OpenAI interpreta las imágenes generadas y redacta el informe.',
      // «Participación en» y no «Formulación de»: la propuesta la arma el
      // equipo. Y nada sobre el modelo de la empresa —incubadora, viabilidad
      // comercial—: eso es lectura propia, no un rol que pueda sostener.
      'Participación en la formulación de propuestas técnicas para nuevos proyectos, aportando el planteamiento de la solución.',
    ],
    stack: ['Python', 'SCPI', 'JavaScript', 'HTML/CSS', 'IA aplicada', 'Git'],
  },
  {
    sigla: 'CE',
    empresa: 'CERTUS',
    puesto: 'Docente de Desarrollo de Software',
    ubicacion: 'Arequipa, Perú',
    periodo: '2023 — Actualidad',
    actual: true,
    logros: [
      // Los nombres de malla de CERTUS no describen el contenido real: el de
      // «matemáticas aplicadas» era Python y Godot, y el de «infraestructuras»
      // era redes y telemática. Se nombra lo que de verdad se enseñó.
      'Dictado de 6 cursos distintos a grupos de ~20 estudiantes: programación en Python, desarrollo web y back-end, aplicaciones móviles y multiplataforma, redes y telemática, Big Data y pruebas de software.',
      'Enseñanza de Python, JavaScript, React, Flutter sobre Android Studio, Java, Godot, HTML/CSS, Bootstrap y Tailwind CSS, con integración de APIs y Firebase.',
      'Big Data sobre el ecosistema Spark —SQL, Streaming y MLlib— y Hadoop: entrenamiento de modelos de regresión y clasificación, desplegados como servicio con su front-end.',
      'Asesoría en proyectos tecnológicos promoviendo buenas prácticas y testing con Selenium y JUnit.',
    ],
    stack: ['Python', 'React', 'Flutter', 'Java', 'Selenium', 'JUnit'],
  },
  {
    sigla: 'UC',
    empresa: 'Universidad Católica San Pablo',
    puesto: 'Jefe de Prácticas',
    ubicacion: 'Arequipa, Perú',
    periodo: '2023 — Actualidad',
    actual: true,
    logros: [
      'Laboratorios de 4 cursos —Circuitos Electrónicos, Electrónica Digital, Señales y Sistemas, y Antenas y Propagación— en 8–9 grupos por semestre, de 10 a 24 estudiantes cada uno.',
      'Prácticas con Python para procesamiento de señales y para el cálculo y graficado de patrones de radiación a partir de datos de VNA y cámara anecoica; VHDL en electrónica digital y Proteus en circuitos.',
    ],
  },
  {
    sigla: 'ST',
    empresa: 'UCSP — Proyecto STEAM Cerro Verde',
    puesto: 'Mentor de Robótica',
    periodo: '2022 — 2023',
    logros: [
      'Capacitación en programación, electrónica y robótica a estudiantes de secundaria.',
      'Diseño de talleres y proyectos educativos con C++ y Python.',
    ],
  },
  /**
   * Versión condensada de M3 + MI + MB en una sola entrada.
   *
   * No es contenido nuevo: es la misma trayectoria contada con menos detalle,
   * para los perfiles que necesitan caber en dos hojas. Ningún perfil debe
   * incluir a la vez esta entrada y las tres que resume — se leerían repetidas.
   */
  {
    sigla: 'MA',
    empresa: 'UCSP · Zamenis Biotech — Proyecto MABIS',
    puesto: 'Practicante, tesista y asistente técnico',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Sep 2020 — Sep 2026',
    investigacion: true,
    // Una viñeta por contrato, con su periodo delante: fueron tres etapas
    // distintas y un bloque único de seis años las borraría.
    //
    // Del más reciente al más antiguo, como el resto del CV. Además así el
    // recorte por el final de `maxLogros` elimina primero lo más viejo.
    logros: [
      'Jun 2024 — Sep 2026 · Asistente técnico en MABIS 3.0 (Prociencia): estudio clínico de validación frente a imágenes ecográficas y control de instrumentación (VNA) por SCPI.',
      // Nada de «participación en una publicación científica»: aportó los datos
      // pero no figura como coautor, y no consta que se llegara a publicar.
      'Abr 2021 — Ago 2022 · Asistente y tesista: algoritmos de reconstrucción de imagen por radiofrecuencia —confocal, DAS y DMAS—, automatización de experimentos con Python y SCPI, y mediciones en entorno hospitalario.',
      'Sep 2020 — Jun 2021 · Prácticas: antena UWB cónica miniaturizada (1 cm de radio, 2–8 GHz) con patrón directivo, frente a la omnidireccional previa que degradaba la imagen. Simulada en Ansys HFSS y caracterizada en cámara anecoica —S11, impedancia, ancho de banda y de haz— con informe en formato IEEE.',
    ],
    stack: ['Python', 'SCPI', 'MATLAB', 'Ansys HFSS'],
  },
  {
    sigla: 'M3',
    empresa: 'Zamenis Biotech — MABIS 3.0 (Prociencia)',
    puesto: 'Asistente técnico de investigación',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Jun 2024 — Sep 2026',
    investigacion: true,
    logros: [
      'Asistencia técnica en el estudio clínico de validación de detección de anomalías mamarias, contrastada frente a imágenes ecográficas de pacientes.',
      'Interfaz de comunicación hardware–software: control de instrumentación (VNA) con comandos SCPI en Python.',
      'Algoritmos de generación y análisis de imagen por radiofrecuencia.',
    ],
    stack: ['Python', 'SCPI', 'VNA'],
  },
  {
    sigla: 'MI',
    empresa: 'UCSP — Proyecto MABIS',
    puesto: 'Asistente de Investigación y tesista',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Abr 2021 — Ago 2022',
    investigacion: true,
    logros: [
      'Mediciones y pruebas con antenas del sistema de imagen médica por microondas para detección temprana de cáncer de mama.',
      'Algoritmos de reconstrucción de imagen por radiofrecuencia —confocal, DAS y DMAS— y análisis de las imágenes generadas.',
      'Automatización de experimentos y control de instrumentación con Python y protocolo SCPI, con aplicaciones web y bases de datos para las mediciones.',
      'Mediciones en entorno hospitalario y preparación de los datos experimentales del proyecto.',
    ],
    stack: ['Python', 'SCPI', 'MATLAB', 'SQL'],
  },
  {
    sigla: 'MB',
    empresa: 'UCSP — Proyecto MABIS',
    puesto: 'Prácticas preprofesionales',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Sep 2020 — Jun 2021',
    investigacion: true,
    logros: [
      'Diseño y construcción de una antena sinuous UWB de alta ganancia (2–8 GHz) como sensor del sistema MABIS.',
      'Simulación electromagnética en Ansys HFSS y caracterización experimental con analizador de redes vectorial.',
      'Prototipo defendido ante jurado tras 320 horas de proyecto supervisado.',
    ],
    stack: ['Ansys HFSS', 'VNA', 'UWB'],
  },
  {
    sigla: 'WA',
    empresa: 'UCSP — Proyecto WAPES',
    puesto: 'Tesista investigador',
    ubicacion: 'Arequipa, Perú',
    periodo: 'Jul 2019 — Jul 2020',
    investigacion: true,
    logros: [
      'Sensor electromagnético de un sistema portátil que mide arsénico en fuentes de agua in situ y en tiempo real, con detección hasta 64 ppb.',
      'Estimación de la concentración por desplazamiento en frecuencia y amplitud del S11, con regresión lineal y correlación cruzada. Diseño en Ansys HFSS y cálculo en MATLAB; tesis de bachiller en un proyecto ganador de FONDECYT–SENCICO.',
    ],
    stack: ['Ansys HFSS', 'MATLAB', 'VNA'],
  },
]

// El reparto entre «Experiencia profesional» e «Investigación aplicada», y qué
// entradas entran en cada versión del CV, lo decide `perfiles.ts`.

/**
 * Solo grados académicos. La formación continua (PAEP, bootcamp) vive en
 * `certificaciones`: mezclarlas aquí igualaba visualmente un bootcamp con la
 * maestría y restaba peso al grado, que es lo que lee un filtro ATS.
 */
export const educacion: Estudio[] = [
  {
    institucion: 'Universidad Católica San Pablo',
    titulo: 'Maestría en Internet de las Cosas (IoT)',
    periodo: '2021 — 2022',
    detalle: 'Egresado',
  },
  {
    institucion: 'Universidad Católica San Pablo',
    titulo: 'Ingeniería Electrónica y de Telecomunicaciones',
    periodo: '2014 — 2020',
    detalle: 'Titulado',
  },
]

/**
 * Un producto, una tarjeta —MABIS y MABIS 3.0 son dos fases del mismo sistema,
 * no dos proyectos— y ordenadas de más reciente a más antigua.
 *
 * Aquí se describe **qué es** cada sistema; **qué hizo Jeanpier** en él vive en
 * `experiencia`. Sin esa división las tarjetas repiten las entradas de rol.
 */
export const proyectos: Proyecto[] = [
  {
    id: 'mabis',
    nombre: 'MABIS — Diagnóstico biomédico temprano',
    contexto: 'UCSP · Zamenis Biotech · 2020 — 2026',
    puntos: [
      'Dispositivo no invasivo de detección temprana de cáncer de mama basado en radar de campo cercano e imagen por microondas.',
      'Integra instrumentación de radiofrecuencia, algoritmos de reconstrucción de imagen y una plataforma web de visualización y control.',
      'En validación clínica en instituciones médicas, contrastando sus resultados frente a imágenes ecográficas (Prociencia, 2024 — 2026).',
    ],
  },
  {
    id: 'arsenico',
    nombre: 'Sensor electromagnético de detección de arsénico en agua',
    contexto: 'UCSP · FONDECYT–SENCICO · 2019 — 2020',
    puntos: [
      'Sistema portátil que mide la concentración de arsénico en fuentes de agua in situ, sin enviar muestras a laboratorio.',
      'Desarrollo completo del sensor, del diseño electromagnético a la validación; base de la tesis de bachiller.',
    ],
  },
]

/**
 * Formación continua: la especialización en curso y los programas cerrados.
 * Van en un único array —y no en constantes separadas— para que compartan
 * formato por construcción: si mañana se añade otro programa, hereda la misma
 * tarjeta sin que nadie tenga que replicar estilos.
 *
 * Ordenados por peso y actualidad, no por fecha: primero lo que estoy haciendo
 * ahora, después el programa largo, al final el bootcamp.
 */
export const formacion: Programa[] = [
  {
    id: 'datapath',
    nombre: 'Programa de AI Engineer for Developers',
    entidad: 'DataPath',
    // Fechas cerradas en vez de «En curso»: el programa termina en agosto y un
    // «En curso» escrito hoy queda desactualizado —y mintiendo— en septiembre.
    periodo: 'Jul — Ago 2026',
    // Dos viñetas densas en vez de cuatro: en la rejilla de dos columnas, cuatro
    // puntos ocupan dos filas y dos ocupan una. No se pierde ninguna tecnología.
    puntos: [
      'Agentes y sistemas multiagente con LangChain, LangGraph, LlamaIndex y CrewAI; RAG sobre Qdrant y Supabase con embeddings, indexación y re-rank; automatización low-code con n8n.',
      'Despliegue de servicios de agentes en VPS y Vercel, integrados con Chatwoot, Kommo CRM, WhatsApp y Telegram; observabilidad y seguridad con LangFuse: trazas, costes y prompt injection.',
    ],
  },
  {
    id: 'codeable',
    nombre: 'Desarrollo Web Full-Stack con IA',
    entidad: 'Codeable',
    // Con mes, no solo el año: «2025 — En curso» se lee como un programa
    // estancado; «Nov 2025» sitúa el inicio y quita esa lectura.
    periodo: 'Nov 2025 — En curso',
    puntos: [
      'Aplicaciones full stack: frontend con HTML5, CSS3, JavaScript y React; backend con FastAPI y Node.js sobre APIs REST.',
      'Construidas con asistencia de IA: Claude Code y Gemini CLI integrados en el flujo de codificación.',
    ],
  },
  {
    id: 'paep',
    nombre: 'Instrumentación, Automatización y Control de Procesos',
    entidad: 'TECSUP',
    periodo: '2022 — 2023',
    detalle: 'Programa de Alta Especialización Profesional (PAEP)',
    // Ordenadas por peso: los perfiles compactos recortan por el final, así que
    // el proyecto final —lo único que es un entregable— va antes que las redes.
    puntos: [
      'Sensores, actuadores y control PID sobre PLC Siemens y Allen-Bradley, programados en ladder con Studio 5000.',
      'Proyecto final: automatización de una planta a escala de extracción de cobre con diagramas eléctricos, P&ID, lógica ladder y SCADA.',
      'Redes industriales Modbus, Profibus y Ethernet/IP, y supervisión con pantallas HMI y SCADA.',
    ],
  },
  {
    id: 'codigo',
    nombre: 'Bootcamp Fullstack de Desarrollo Web',
    entidad: 'CodiGo by TECSUP',
    periodo: '2023',
    // El programa se cursó pero no se obtuvo el certificado. Se declara: un
    // credencial que no existe es lo primero que se cae al verificarlo, y
    // arrastra la credibilidad del resto del CV.
    detalle: 'Programa cursado, sin certificación',
    puntos: [
      'Frontend con HTML5, CSS3, JavaScript, TypeScript, React y Angular, con Tailwind y Bootstrap sobre Vite.',
      'Backend con Node.js y FastAPI: APIs REST sobre HTTP, operaciones CRUD contra MySQL y pruebas de endpoints con Postman.',
    ],
  },
]

/** Credenciales de una línea. Si algo necesita explicarse, va en `formacion`. */
export const certificaciones: string[] = [
  // Las tres CCNA en una línea: por separado ocupaban seis, y el nombre de la
  // certificación —CCNA— se repetía tres veces sin añadir nada.
  'CCNA Cisco: Routing & Switching (v6), Wireless Essentials (v7) y Enterprise Networking, Security & Automation (v7)',
  'Protocolos de Comunicación Industrial — UCSP',
  'Tecnologías Celulares Overview — CLARO',
]

export const idiomas: Idioma[] = [
  { nombre: 'Español', nivel: 'Nativo · C2', dominio: 100 },
  { nombre: 'Inglés', nivel: 'Intermedio alto · B2', dominio: 70 },
]

/** Competencias transversales (presentes en tus CVs anteriores). */
export const competencias: string[] = [
  'Comunicación didáctica y mentoría técnica',
  'Trabajo en equipos multidisciplinarios',
  'Autonomía y aprendizaje continuo',
  'Resolución de problemas bajo presión',
  'Adaptabilidad hardware–software–investigación',
  'Documentación y buenas prácticas de código',
]

export const intereses: string[] = [
  'Automatización',
  'Agentes de IA',
  'Robótica',
  'Running',
  'Música (percusión y bajo)',
  'Teatro de improvisación',
]
