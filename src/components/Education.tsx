import { GraduationCap, BookOpen, BadgeCheck } from 'lucide-react'
import { educacion, formacion, certificaciones } from '../data/cv'
import { Section, SectionHeader } from './ui'

export function Education() {
  return (
    <Section id="formacion">
      <SectionHeader
        kicker="Formación"
        title="Grados, especialización y certificaciones"
        intro="Separo a propósito los grados académicos de la formación continua: igualarlos restaría peso al grado."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Grados académicos */}
        <div>
          <h3 className="text-fg mb-4 flex items-center gap-2.5 text-lg font-bold">
            <GraduationCap className="text-accent size-5" strokeWidth={2.2} /> Educación
          </h3>
          <div className="space-y-4">
            {educacion.map((e) => (
              <div key={e.titulo} className="glass card-hover p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-fg font-bold">{e.titulo}</h4>
                  <span className="text-accent font-mono text-xs whitespace-nowrap">
                    {e.periodo}
                  </span>
                </div>
                <p className="text-fg-soft mt-1 text-sm">{e.institucion}</p>
                {e.detalle && (
                  <span className="border-hair text-fg-muted mt-2 inline-block rounded border px-2 py-0.5 text-xs">
                    {e.detalle}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Certificaciones de una línea */}
          <h3 className="text-fg mb-4 mt-8 flex items-center gap-2.5 text-lg font-bold">
            <BadgeCheck className="text-accent size-5" strokeWidth={2.2} /> Certificaciones
          </h3>
          <ul className="glass space-y-3 p-5">
            {certificaciones.map((c, i) => (
              <li key={i} className="text-fg-soft relative pl-5 text-sm leading-relaxed">
                <BadgeCheck className="text-accent absolute left-0 top-0.5 size-4" strokeWidth={2} />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Formación continua */}
        <div>
          <h3 className="text-fg mb-4 flex items-center gap-2.5 text-lg font-bold">
            <BookOpen className="text-accent size-5" strokeWidth={2.2} /> Formación continua
          </h3>
          <div className="space-y-4">
            {formacion.map((p) => (
              <div key={p.id} className="glass card-hover p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-fg font-bold">{p.nombre}</h4>
                  <span className="text-accent font-mono text-xs whitespace-nowrap">
                    {p.periodo}
                  </span>
                </div>
                <p className="text-fg-soft mt-1 text-sm">
                  {p.entidad ?? 'Autodidacta'}
                  {p.detalle && <span className="text-fg-muted"> · {p.detalle}</span>}
                </p>
                <ul className="mt-3 space-y-2">
                  {p.puntos.map((punto, i) => (
                    <li key={i} className="text-fg-soft relative pl-4 text-sm leading-relaxed">
                      <span className="bg-accent/60 absolute left-0 top-2 size-1.5 rotate-45 rounded-[1px]" />
                      {punto}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
