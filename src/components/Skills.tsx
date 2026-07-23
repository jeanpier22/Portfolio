import { Brain, Cog, Code2, Database } from 'lucide-react'
import type { ComponentType } from 'react'
import { skills, idiomas } from '../data/cv'
import { deviconSrc, skillIcons } from '../lib/devicon'
import { Section, SectionHeader } from './ui'

/** Icono por grupo, emparejado con el título tal como aparece en `cv.ts`. */
const ICONS: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'Desarrollo de Software': Code2,
  'Inteligencia Artificial': Brain,
  'Datos & Bases de Datos': Database,
  'Ingeniería & Automatización': Cog,
}

/**
 * Estilo por nivel. Se respeta la regla del proyecto: lo que está en formación
 * se atenúa y se etiqueta, nunca se muestra como experiencia consolidada.
 */
function nivelClase(estado?: string) {
  if (estado === 'formacion') {
    return 'border-hair/60 bg-white/[0.015] text-fg-muted'
  }
  if (estado === 'avanzado') {
    return 'border-accent/40 bg-accent/10 text-accent-soft'
  }
  if (estado === 'solido') {
    return 'border-hair bg-white/[0.05] text-fg'
  }
  return 'border-hair bg-white/[0.03] text-fg-soft'
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        kicker="Competencias"
        title="El stack con el que trabajo"
        intro="Agrupado por dominio. Lo que estoy aprendiendo ahora se muestra atenuado y marcado — no lo vendo como experiencia consolidada."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((grupo) => {
          const Icon = ICONS[grupo.titulo] ?? Code2
          return (
            <div key={grupo.titulo} className="glass p-6">
              <h3 className="text-fg mb-4 flex items-center gap-2.5 font-bold">
                <Icon className="text-accent size-5" strokeWidth={2.2} />
                {grupo.titulo}
              </h3>
              <div className="flex flex-wrap gap-2">
                {grupo.items.map((item) => {
                  const icons = skillIcons[item.nombre] ?? []
                  const dim = item.estado === 'formacion'
                  return (
                    <span
                      key={item.nombre}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 ${nivelClase(item.estado)}`}
                    >
                      {/* Logo Devicon donde existe; atenuado si está en formación,
                          para respetar la regla de no venderlo como consolidado. */}
                      {icons.map((slug) => (
                        <img
                          key={slug}
                          src={deviconSrc(slug)}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className={`size-4 ${dim ? 'opacity-50 grayscale' : ''}`}
                        />
                      ))}
                      <span className="font-mono text-xs font-medium">{item.nombre}</span>
                      {dim && <span className="text-xs opacity-60">· en formación</span>}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Leyenda + idiomas */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="glass flex flex-wrap items-center gap-x-5 gap-y-2 p-5 text-xs">
          <span className="text-fg-muted font-semibold uppercase tracking-wider">Nivel</span>
          <span className="text-accent-soft flex items-center gap-1.5">
            <span className="border-accent/40 bg-accent/10 size-3 rounded border" /> Avanzado
          </span>
          <span className="text-fg flex items-center gap-1.5">
            <span className="border-hair size-3 rounded border bg-white/[0.05]" /> Sólido
          </span>
          <span className="text-fg-muted flex items-center gap-1.5">
            <span className="border-hair/60 size-3 rounded border bg-white/[0.015]" /> En formación
          </span>
        </div>

        <div className="glass p-5">
          <h3 className="text-fg-muted mb-3 text-xs font-semibold uppercase tracking-wider">
            Idiomas
          </h3>
          <div className="space-y-3">
            {idiomas.map((idioma) => (
              <div key={idioma.nombre}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-fg text-sm font-medium">{idioma.nombre}</span>
                  <span className="text-fg-muted font-mono text-xs">{idioma.nivel}</span>
                </div>
                <div className="bg-hair h-1.5 overflow-hidden rounded-full">
                  <div
                    className="from-accent to-accent-deep h-full rounded-full bg-gradient-to-r"
                    style={{ width: `${idioma.dominio}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
