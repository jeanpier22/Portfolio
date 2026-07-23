/**
 * Perfiles: qué parte del CV se muestra en cada versión.
 *
 * `cv.ts` guarda TODO lo que Jeanpier ha hecho y solo crece. Este archivo elige
 * qué entra, en qué orden y con cuánto detalle. La separación importa: adaptar
 * el CV a una oferta pasa a ser editar una lista de claves, no reescribir
 * contenido, así que ninguna versión pierde el historial ni se contradice con
 * otra.
 *
 * Para una postulación nueva: se copia un perfil, se ajustan las listas y se
 * apunta `PERFIL_ACTIVO` al nuevo. Nada más.
 */
import {
  certificaciones,
  experiencia,
  formacion,
  perfil,
  proyectos,
  type Experiencia,
  type Programa,
  type Proyecto,
} from './cv'

/** Secciones que puede contener una hoja de continuación, en orden. */
export type Seccion =
  | 'experiencia-cont'
  | 'proyectos'
  | 'investigacion'
  | 'formacion'
  | 'credenciales'
  | 'intereses'

export interface Perfil {
  /** Nombre interno; aparece en el título de la pestaña del navegador. */
  nombre: string
  /** Resumen del bloque «Perfil profesional». */
  resumen: string
  /** Siglas de `experiencia`, en el orden en que deben salir. */
  experiencia: string[]
  /** Cuántas experiencias laborales caben en la hoja 1. */
  laboralEnHoja1: number
  /**
   * Recorta viñetas por el final. Clave: sigla de experiencia, o `id` de
   * proyecto o programa. Por eso las viñetas de `cv.ts` van ordenadas por peso.
   */
  maxLogros?: Record<string, number>
  /** Claves de `proyectos`. Lista vacía = la sección no se renderiza. */
  proyectos: string[]
  /** Claves de `formacion`. */
  formacion: string[]
  /** Líneas extra en certificaciones, para lo que no entra como tarjeta. */
  certificacionesExtra: string[]
  competencias: boolean
  intereses: boolean
  /** Secciones extra al final de la hoja 1, tras la experiencia. */
  hoja1: Seccion[]
  /** Una entrada por hoja de continuación. */
  hojas: Seccion[][]
}

export const perfiles = {
  /** Todo el historial. Es el CV de referencia, no el de postular. */
  completo: {
    nombre: 'Completo',
    resumen: perfil.resumen,
    experiencia: ['ZB', 'CE', 'UC', 'ST', 'M3', 'MI', 'MB', 'WA'],
    laboralEnHoja1: 4,
    proyectos: ['mabis', 'arsenico'],
    formacion: ['datapath', 'codeable', 'paep', 'codigo'],
    certificacionesExtra: [],
    competencias: true,
    intereses: true,
    hoja1: [],
    hojas: [['proyectos', 'investigacion'], ['formacion', 'credenciales', 'intereses']],
  },

  /**
   * Dos hojas. El criterio: fuera lo genérico, lo antiguo y lo que ya se dice
   * en otro sitio; dentro, todo lo específico y verificable.
   *
   * Sin «Proyectos destacados» a propósito. Cada proyecto ya está contado en la
   * entrada de investigación que lo produjo —MABIS y el sensor de arsénico—, y
   * en dos hojas la tarjeta solo repetía lo que se lee unos centímetros abajo.
   * El espacio recuperado se gasta en dar detalle a investigación, que es donde
   * el trabajo va acompañado de fechas, rol y tecnologías.
   *
   * PAEP y bootcamp bajan de tarjeta a línea en certificaciones; competencias
   * personales e intereses no entran: son lo que menos aporta por milímetro.
   */
  compacto: {
    nombre: 'Compacto · 2 hojas',
    resumen:
      'Ingeniero Electrónico y de Telecomunicaciones con Maestría en IoT. Desarrollo software para dispositivos biomédicos en Zamenis Biotech —instrumentación, procesamiento de imagen y plataforma web— y aplico IA a la generación automática de informes de diagnóstico. Docente de desarrollo de software con más de 3 años de experiencia.',
    // MABIS va como la entrada condensada `MA`: las tres etapas por separado no
    // caben en dos hojas, y resumirlas cuesta menos que recortar el resto.
    experiencia: ['ZB', 'CE', 'UC', 'ST', 'MA', 'WA'],
    laboralEnHoja1: 4,
    // El PAEP cede una viñeta —la de redes, que ya está en las competencias de
    // la barra lateral— para que el bootcamp entre como tarjeta: es el único
    // sitio del CV donde aparecen Angular, MySQL, Postman y Vite.
    maxLogros: { paep: 2 },
    proyectos: [],
    formacion: ['datapath', 'codeable', 'paep', 'codigo'],
    certificacionesExtra: [],
    // Fuera las competencias transversales: al llenarse el CV de datos duros
    // —64 ppb, 45→25 min, S11, MLlib— seis frases que nadie verifica pasaron a
    // ser lo que menos aporta por milímetro. Se recuperan poniendo `true`.
    competencias: false,
    intereses: true,
    hoja1: [],
    hojas: [['investigacion', 'formacion', 'credenciales', 'intereses']],
  },
} satisfies Record<string, Perfil>

export type IdPerfil = keyof typeof perfiles

/**
 * Perfil que se renderiza. Cambiar esta línea es lo único necesario para
 * generar otra versión del CV con `npm run pdf`.
 */
export const PERFIL_ACTIVO: IdPerfil = 'compacto'

export const activo: Perfil = perfiles[PERFIL_ACTIVO]

/**
 * Ordena una colección según la lista de claves del perfil y descarta lo que no
 * esté. El orden lo manda el perfil, no el array de origen: así una versión
 * puede subir un puesto sin tocar `cv.ts`.
 */
function seleccionar<T>(fuente: T[], claves: string[], clave: (item: T) => string): T[] {
  return claves.map((c) => fuente.find((item) => clave(item) === c)).filter((x): x is T => !!x)
}

const experienciaActiva = seleccionar(experiencia, activo.experiencia, (e) => e.sigla)

/** Recorta las viñetas de las entradas que el perfil marque. */
function recortar(item: Experiencia): Experiencia {
  const max = activo.maxLogros?.[item.sigla]
  return max ? { ...item, logros: item.logros.slice(0, max) } : item
}

export const experienciaLaboral: Experiencia[] = experienciaActiva
  .filter((e) => !e.investigacion)
  .map(recortar)

export const experienciaInvestigacion: Experiencia[] = experienciaActiva
  .filter((e) => e.investigacion)
  .map(recortar)

/** Mismo recorte que `recortar`, para colecciones con `puntos` en vez de `logros`. */
function recortarPuntos<T extends { id: string; puntos: string[] }>(item: T): T {
  const max = activo.maxLogros?.[item.id]
  return max ? { ...item, puntos: item.puntos.slice(0, max) } : item
}

export const proyectosActivos: Proyecto[] = seleccionar(
  proyectos,
  activo.proyectos,
  (p) => p.id,
).map(recortarPuntos)

export const formacionActiva: Programa[] = seleccionar(
  formacion,
  activo.formacion,
  (f) => f.id,
).map(recortarPuntos)

export const certificacionesActivas: string[] = [
  ...activo.certificacionesExtra,
  ...certificaciones,
]
