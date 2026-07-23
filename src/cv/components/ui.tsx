import type { ComponentType, ReactNode } from 'react'

/** Título de sección de la columna principal (papel blanco). */
export function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  children: ReactNode
}) {
  return (
    <div className="keep mb-2 flex items-center gap-2.5">
      <span className="flex size-6 items-center justify-center rounded-md bg-accent/12 text-accent-deep">
        <Icon className="size-3.5" strokeWidth={2.4} />
      </span>
      <h2 className="text-rotulo font-extrabold tracking-[0.14em] text-ink uppercase">
        {children}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}

/** Título de sección de la barra lateral oscura. */
export function AsideTitle({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  children: ReactNode
}) {
  return (
    <div className="mb-1.5 flex items-center gap-2">
      <Icon className="size-3.5 text-accent" strokeWidth={2.4} />
      <h3 className="text-rotulo font-bold tracking-[0.14em] text-white/95 uppercase">
        {children}
      </h3>
      <span className="h-px flex-1 bg-white/15" />
    </div>
  )
}

/**
 * Monograma de la empresa. Se usa en lugar del logo oficial: evita depender de
 * archivos externos y mantiene una identidad visual coherente en el PDF.
 * Si más adelante hay logos reales, este componente es el único punto a cambiar.
 */
export function Lettermark({ sigla, activo }: { sigla: string; activo?: boolean }) {
  return (
    <span
      className={[
        'flex size-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-extrabold tracking-tight',
        activo
          ? 'bg-linear-to-br from-accent to-accent-deep text-white shadow-sm'
          : 'bg-ink/6 text-ink/55 ring-1 ring-ink/8',
      ].join(' ')}
    >
      {sigla}
    </span>
  )
}

/** Etiqueta compacta para tecnologías. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="text-nota rounded border border-line bg-slate-50 px-1.5 py-0.5 font-mono font-medium tracking-wide text-muted">
      {children}
    </span>
  )
}

/**
 * Icono de LinkedIn.
 * lucide-react v1 eliminó los iconos de marca, así que se define aquí como SVG
 * inline: sin dependencias extra y se imprime nítido a cualquier tamaño.
 */
export function LinkedInIcon({
  className,
}: {
  className?: string
  /** Aceptado por compatibilidad con los iconos de lucide; aquí no se usa. */
  strokeWidth?: number
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 9.75h4.15V21H2.9V9.75Zm6.9 0h3.98v1.54h.06c.55-1 1.9-2.06 3.92-2.06 4.19 0 4.96 2.63 4.96 6.05V21h-4.14v-4.9c0-1.17-.02-2.68-1.68-2.68-1.69 0-1.95 1.28-1.95 2.6V21H9.8V9.75Z" />
    </svg>
  )
}

/** Icono de GitHub. Inline por el mismo motivo que el de LinkedIn. */
export function GitHubIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

/**
 * Viñeta. La usan TODAS las listas del CV — logros, proyectos, especialización,
 * competencias, certificaciones — para que el tamaño, la sangría y el marcador
 * sean idénticos en ambas hojas. Si una lista necesita otro icono se pasa por
 * `icon`; lo que no se hace es reescribir el `<li>` a mano en cada sección,
 * que es como aparecieron tres estilos de viñeta distintos.
 */
export function Bullet({
  icon: Icon,
  children,
}: {
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>
  children: ReactNode
}) {
  return (
    <li className="text-cuerpo relative pl-4 text-body">
      {Icon ? (
        <Icon className="absolute top-[3.5px] left-0 size-3 text-accent" strokeWidth={2.4} />
      ) : (
        <span className="absolute top-1.5 left-0 size-1.5 rotate-45 rounded-[1px] bg-accent/45" />
      )}
      {children}
    </li>
  )
}

/**
 * Cabecera de una entrada: título a la izquierda y dato de contexto a la
 * derecha. Se repite en experiencia, proyectos, especialización y formación,
 * así que vive aquí para que las cuatro compartan tamaño y alineación.
 */
export function EntryHeader({ titulo, meta }: { titulo: ReactNode; meta?: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="text-puesto font-bold text-ink">{titulo}</h3>
      {meta && (
        <span className="text-micro shrink-0 font-mono whitespace-nowrap text-muted">
          {meta}
        </span>
      )}
    </div>
  )
}
