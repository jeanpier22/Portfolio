import { Briefcase, FlaskConical, MapPin } from 'lucide-react'
import { experiencia } from '../data/cv'
import type { Experiencia } from '../data/cv'
import { Chip, Lettermark, Section, SectionHeader } from './ui'

/**
 * Selección explícita por sigla, no por posición en el array.
 *
 * `cv.ts` incluye la entrada condensada `MA` Y las tres que resume (M3/MI/MB).
 * Mostrar ambas se leería repetido, así que aquí se eligen las detalladas y se
 * omite la condensada. Se nombran por sigla para que reordenar `cv.ts` nunca
 * cambie qué aparece.
 */
const bySigla = (s: string) => experiencia.find((e) => e.sigla === s)!
const PROFESIONAL = ['ZB', 'CE', 'UC', 'ST'].map(bySigla)
const INVESTIGACION = ['M3', 'MI', 'MB', 'WA'].map(bySigla)

function TimelineItem({ e }: { e: Experiencia }) {
  return (
    <li className="relative pl-14">
      {/* Nodo sobre la línea vertical del <ol>. */}
      <span className="absolute left-0 top-0">
        <Lettermark sigla={e.sigla} active={e.actual} />
      </span>

      <div className="glass card-hover p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-fg text-lg font-bold">{e.puesto}</h3>
          <span className="text-accent font-mono text-xs whitespace-nowrap">{e.periodo}</span>
        </div>
        <p className="text-fg-soft mt-0.5 text-sm font-medium">{e.empresa}</p>
        {e.ubicacion && (
          <p className="text-fg-muted mt-1 flex items-center gap-1 text-xs">
            <MapPin className="size-3" /> {e.ubicacion}
          </p>
        )}

        <ul className="mt-3 space-y-2">
          {e.logros.map((l, i) => (
            <li key={i} className="text-fg-soft relative pl-4 text-sm leading-relaxed">
              <span className="bg-accent/60 absolute left-0 top-2 size-1.5 rotate-45 rounded-[1px]" />
              {l}
            </li>
          ))}
        </ul>

        {e.stack && (
          <div className="mt-4 flex flex-wrap gap-2">
            {e.stack.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}

function Timeline({
  icon: Icon,
  titulo,
  items,
}: {
  icon: typeof Briefcase
  titulo: string
  items: Experiencia[]
}) {
  return (
    <div>
      <h3 className="text-fg mb-6 flex items-center gap-2.5 text-xl font-bold">
        <Icon className="text-accent size-5" strokeWidth={2.2} />
        {titulo}
      </h3>
      {/* La línea vertical se dibuja con un borde a la altura del monograma (size-11 = 44px → centro 22px). */}
      <ol className="relative ml-[21px] space-y-6 border-l border-hair pl-0">
        {items.map((e) => (
          <TimelineItem key={e.sigla} e={e} />
        ))}
      </ol>
    </div>
  )
}

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeader
        kicker="Trayectoria"
        title="Dónde he trabajado y qué he investigado"
        intro="Dos líneas paralelas: el trabajo profesional y la investigación aplicada en radiofrecuencia e imagen médica."
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        <Timeline icon={Briefcase} titulo="Experiencia profesional" items={PROFESIONAL} />
        <Timeline icon={FlaskConical} titulo="Investigación aplicada" items={INVESTIGACION} />
      </div>
    </Section>
  )
}
