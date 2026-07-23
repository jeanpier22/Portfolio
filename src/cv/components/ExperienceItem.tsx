import type { Experiencia } from '../data/cv'
import { Bullet, Chip, EntryHeader, Lettermark } from './ui'

export function ExperienceItem({ item }: { item: Experiencia }) {
  return (
    <article className="keep mb-2.5 flex gap-3 last:mb-0">
      <Lettermark sigla={item.sigla} activo={item.actual} />

      <div className="min-w-0 flex-1">
        <EntryHeader titulo={item.puesto} meta={item.periodo} />

        <p className="text-cuerpo leading-tight font-semibold text-accent-deep">
          {item.empresa}
          {item.ubicacion && (
            <span className="font-normal text-muted"> · {item.ubicacion}</span>
          )}
        </p>

        <ul className="mt-1 space-y-0.5">
          {item.logros.map((l) => (
            <Bullet key={l}>{l}</Bullet>
          ))}
        </ul>

        {item.stack && (
          <div className="mt-1.5 flex flex-wrap gap-1">
            {item.stack.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

