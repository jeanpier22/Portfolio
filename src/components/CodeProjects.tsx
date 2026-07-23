import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { proyectosCodigo } from '../data/proyectosCodigo'
import { Chip, GitHubIcon, Section, SectionHeader } from './ui'

export function CodeProjects() {
  return (
    <Section id="codigo">
      <SectionHeader
        kicker="Proyectos de código"
        title="Software que puedes abrir y usar"
        intro="A diferencia de la investigación biomédica (confidencial), estos proyectos están desplegados y en vivo. Entra a la demo o mira el código."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {proyectosCodigo.map((p) => (
          <article
            key={p.nombre}
            className={[
              'glass card-hover group flex flex-col overflow-hidden',
              p.destacado ? 'ring-1 ring-accent/30' : '',
            ].join(' ')}
          >
            {/* Miniatura: screenshot real de la demo */}
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="relative block overflow-hidden border-b border-hair"
            >
              <img
                src={p.imagen}
                alt={`Captura de ${p.nombre}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {p.destacado && (
                <span className="bg-accent/90 absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white">
                  Destacado
                </span>
              )}
              <span className="text-fg absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-ink/70 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </a>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-fg text-lg font-bold">{p.nombre}</h3>
              <p className="text-accent mt-1 text-sm font-medium">{p.tagline}</p>
              <p className="text-fg-soft mt-3 text-sm leading-relaxed">{p.descripcion}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="from-accent to-accent-deep inline-flex items-center gap-2 rounded-lg bg-gradient-to-br px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform hover:-translate-y-0.5"
                >
                  Ver demo <ExternalLink className="size-4" />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="border-hair text-fg hover:border-accent/50 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
                >
                  <GitHubIcon className="size-4" /> Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
