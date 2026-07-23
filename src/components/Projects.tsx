import { Radar, Droplets } from 'lucide-react'
import type { ComponentType } from 'react'
import { proyectos } from '../data/cv'
import { Chip, Figura, Section, SectionHeader } from './ui'

/**
 * Metadatos de presentación por proyecto, indexados por el `id` estable de
 * `cv.ts`. El contenido (nombre, contexto, puntos) sigue saliendo de los datos;
 * aquí solo vive lo visual: icono, etiquetas y qué foto sugerir.
 */
const META: Record<
  string,
  {
    icon: ComponentType<{ className?: string; strokeWidth?: number }>
    tags: string[]
    figura: { titulo: string; detalle: string; ratio: string; src?: string }
  }
> = {
  mabis: {
    icon: Radar,
    tags: ['Radar de microondas', 'Reconstrucción de imagen', 'OpenAI API', 'Plataforma web'],
    figura: {
      // Ilustración conceptual (SVG) mientras no haya foto real del equipo. Para
      // sustituirla: copia tu foto a public/ y cambia `src` por su ruta.
      src: '/proj-mabis.svg',
      titulo: 'El dispositivo MABIS o su plataforma',
      detalle:
        'Foto del equipo/prototipo, o una captura de la plataforma web de visualización (con datos ficticios si son sensibles). Si no puedes mostrar el hardware real: un render o la imagen de radiofrecuencia reconstruida.',
      ratio: '4/3',
    },
  },
  arsenico: {
    icon: Droplets,
    tags: ['Sensor electromagnético', 'Ansys HFSS', 'MATLAB', 'FONDECYT'],
    figura: {
      src: '/proj-arsenico.svg',
      titulo: 'El sensor de arsénico o su antena',
      detalle:
        'Foto del prototipo portátil, la antena/sensor, o una gráfica del desplazamiento del S11 vs. concentración. Alternativa: el diseño en Ansys HFSS.',
      ratio: '4/3',
    },
  },
}

export function Projects() {
  return (
    <Section id="proyectos">
      <SectionHeader
        kicker="Proyectos"
        title="Los sistemas que he ayudado a construir"
        intro="Proyectos reales de I+D en instrumentación biomédica y ambiental. Aquí describo qué es cada sistema; mi rol concreto está en la sección de experiencia."
      />

      <div className="space-y-8">
        {proyectos.map((p, idx) => {
          const meta = META[p.id]
          const Icon = meta?.icon ?? Radar
          // Alterna el lado de la imagen para dar ritmo a la lectura.
          const imgFirst = idx % 2 === 1
          return (
            <article
              key={p.id}
              className="glass card-hover grid gap-6 overflow-hidden p-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8"
            >
              <div className={imgFirst ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3">
                  <span className="bg-accent/10 text-accent ring-accent/20 flex size-11 items-center justify-center rounded-xl ring-1">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <p className="text-fg-muted font-mono text-xs">{p.contexto}</p>
                </div>

                <h3 className="text-fg mt-4 text-xl font-bold sm:text-2xl">{p.nombre}</h3>

                <ul className="mt-4 space-y-2.5">
                  {p.puntos.map((punto, i) => (
                    <li key={i} className="text-fg-soft relative pl-4 text-sm leading-relaxed">
                      <span className="bg-accent/60 absolute left-0 top-2 size-1.5 rotate-45 rounded-[1px]" />
                      {punto}
                    </li>
                  ))}
                </ul>

                {meta && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {meta.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                )}
              </div>

              <div className={imgFirst ? 'lg:order-1' : ''}>
                <Figura
                  ratio={meta?.figura.ratio ?? '4/3'}
                  src={meta?.figura.src}
                  alt={p.nombre}
                  titulo={meta?.figura.titulo ?? 'Imagen del proyecto'}
                  detalle={meta?.figura.detalle ?? 'Una foto o gráfica representativa del proyecto.'}
                  icon={Icon}
                />
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
