import {
  BadgeCheck,
  Briefcase,
  FlaskConical,
  Heart,
  Microscope,
  Rocket,
  Users,
} from 'lucide-react'
import { competencias, intereses } from '../data/cv'
import {
  activo,
  certificacionesActivas,
  experienciaInvestigacion,
  experienciaLaboral,
  formacionActiva,
  proyectosActivos,
  type Seccion,
} from '../data/perfiles'
import { ExperienceItem } from './ExperienceItem'
import { Bullet, EntryHeader, SectionTitle } from './ui'

/**
 * Cada sección de las hojas de continuación, indexada por su clave.
 *
 * El perfil decide qué secciones se renderizan y en qué hoja; este archivo solo
 * sabe cómo pintar cada una. Antes esto vivía repartido entre `PageTwo` y
 * `PageThree`, lo que obligaba a mover JSX a mano cada vez que cambiaba el
 * reparto entre hojas.
 */
const CONTENIDO: Record<Seccion, () => React.ReactNode> = {
  'experiencia-cont': () => (
    <>
      <SectionTitle icon={Briefcase}>Experiencia profesional (cont.)</SectionTitle>
      {experienciaLaboral.slice(activo.laboralEnHoja1).map((e) => (
        <ExperienceItem key={e.sigla} item={e} />
      ))}
    </>
  ),

  proyectos: () => (
    <>
      <SectionTitle icon={FlaskConical}>Proyectos destacados</SectionTitle>
      <div className="space-y-2">
        {proyectosActivos.map((p) => (
          <div key={p.id} className="keep rounded-lg bg-slate-50/80 p-2.5">
            <EntryHeader titulo={p.nombre} meta={p.contexto} />
            <ul className="mt-1 space-y-0.5">
              {p.puntos.map((pt) => (
                <Bullet key={pt}>{pt}</Bullet>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  ),

  investigacion: () => (
    <>
      <SectionTitle icon={Microscope}>Investigación aplicada</SectionTitle>
      {experienciaInvestigacion.map((e) => (
        <ExperienceItem key={e.sigla} item={e} />
      ))}
    </>
  ),

  formacion: () => (
    <>
      <SectionTitle icon={Rocket}>Especialización y formación complementaria</SectionTitle>
      <div className="space-y-1">
        {formacionActiva.map((f) => (
          <div
            key={f.id}
            className="keep rounded-lg border border-accent/20 bg-accent/4 p-2"
          >
            <EntryHeader titulo={f.nombre} meta={f.periodo} />
            {(f.entidad || f.detalle) && (
              <p className="text-cuerpo leading-tight font-semibold text-accent-deep">
                {f.entidad}
                {f.detalle && (
                  <span className="font-normal text-muted">
                    {f.entidad && ' · '}
                    {f.detalle}
                  </span>
                )}
              </p>
            )}
            {f.puntos.length > 0 && (
              <ul className="mt-1 grid grid-cols-2 gap-x-6 gap-y-0.5">
                {f.puntos.map((pt) => (
                  <Bullet key={pt}>{pt}</Bullet>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  ),

  /**
   * Certificaciones y, si el perfil las incluye, competencias. Sin ellas la
   * lista pasa a dos columnas: a una sola quedaría una columna larga y media
   * hoja vacía al lado.
   */
  credenciales: () =>
    activo.competencias ? (
      <div className="grid grid-cols-2 gap-7">
        <div className="keep">
          <SectionTitle icon={BadgeCheck}>Certificaciones</SectionTitle>
          <ul className="space-y-1">
            {certificacionesActivas.map((c) => (
              <Bullet key={c} icon={BadgeCheck}>
                {c}
              </Bullet>
            ))}
          </ul>
        </div>
        <div className="keep">
          <SectionTitle icon={Users}>Competencias personales</SectionTitle>
          <ul className="space-y-1">
            {competencias.map((c) => (
              <Bullet key={c}>{c}</Bullet>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <>
        <SectionTitle icon={BadgeCheck}>Certificaciones</SectionTitle>
        <ul className="grid grid-cols-2 gap-x-7 gap-y-1">
          {certificacionesActivas.map((c) => (
            <Bullet key={c} icon={BadgeCheck}>
              {c}
            </Bullet>
          ))}
        </ul>
      </>
    ),

  intereses: () => (
    <>
      <SectionTitle icon={Heart}>Intereses</SectionTitle>
      <div className="flex flex-wrap gap-1.5">
        {intereses.map((i) => (
          <span
            key={i}
            className="text-nota rounded-full bg-accent/8 px-2.5 py-px font-medium text-accent-deep"
          >
            {i}
          </span>
        ))}
      </div>
    </>
  ),
}

/** ¿Tiene contenido esta sección con el perfil activo? */
function tieneContenido(seccion: Seccion): boolean {
  switch (seccion) {
    case 'experiencia-cont':
      return experienciaLaboral.length > activo.laboralEnHoja1
    case 'proyectos':
      return proyectosActivos.length > 0
    case 'investigacion':
      return experienciaInvestigacion.length > 0
    case 'formacion':
      return formacionActiva.length > 0
    case 'intereses':
      return activo.intereses
    default:
      return true
  }
}

export function Secciones({ nombres }: { nombres: Seccion[] }) {
  return (
    <>
      {nombres.filter(tieneContenido).map((nombre) => (
        <div key={nombre} className="mt-2">
          {CONTENIDO[nombre]()}
        </div>
      ))}
    </>
  )
}
