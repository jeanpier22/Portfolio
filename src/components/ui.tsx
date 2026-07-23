import { useEffect, useRef, useState } from 'react'
import type { ComponentType, ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Hook de revelado al hacer scroll.
 *
 * Devuelve un `ref` para el elemento y un booleano `visible` que pasa a true la
 * primera vez que el bloque entra en el viewport. Se usa una sola vez por
 * elemento (`unobserve`) para que no vuelva a animarse al volver a subir.
 *
 * Por qué un hook y no una librería: una sola dependencia menos y el
 * IntersectionObserver nativo cubre exactamente este caso.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, visible }
}

/**
 * Contenedor de sección con revelado. Centraliza el ancho máximo, el padding
 * horizontal responsive y el ancla de navegación (`id`), de modo que todas las
 * secciones comparten márgenes por construcción.
 */
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  const { ref, visible } = useReveal<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 ${
        visible ? 'is-visible' : ''
      } ${className}`}
    >
      {children}
    </section>
  )
}

/** Rótulo + título de sección, con el mismo formato en todo el portafolio. */
export function SectionHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="kicker mb-3">{kicker}</p>
      <h2 className="text-fg text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="text-fg-soft mt-4 text-base leading-relaxed sm:text-lg">{intro}</p>}
    </header>
  )
}

/** Etiqueta compacta de tecnología / palabra clave. */
export function Chip({
  children,
  dim = false,
}: {
  children: ReactNode
  /** Atenuada: se usa para las tecnologías en formación (nunca como experiencia). */
  dim?: boolean
}) {
  return (
    <span
      className={[
        'rounded-md border px-2 py-0.5 font-mono text-xs font-medium tracking-wide',
        dim
          ? 'border-hair/70 bg-white/[0.02] text-fg-muted'
          : 'border-hair bg-white/[0.04] text-fg-soft',
      ].join(' ')}
    >
      {children}
    </span>
  )
}

/** Monograma con iniciales — mismo criterio que el CV: no hay logos oficiales. */
export function Lettermark({
  sigla,
  active = false,
}: {
  sigla: string
  active?: boolean
}) {
  return (
    <span
      className={[
        'flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold tracking-tight',
        active
          ? 'from-accent to-accent-deep bg-gradient-to-br text-white shadow-lg shadow-sky-500/20'
          : 'text-fg-muted bg-white/[0.04] ring-1 ring-hair',
      ].join(' ')}
    >
      {sigla}
    </span>
  )
}

/**
 * Placeholder de imagen — el componente clave del portafolio mientras no haya
 * fotos reales.
 *
 * Renderiza un recuadro punteado que ANUNCIA qué imagen debería ir ahí, con su
 * proporción y una recomendación concreta. En cuanto tengas la foto, se le pasa
 * `src` y el mismo componente la muestra recortada a la proporción correcta: no
 * hay que tocar el layout.
 *
 * `ratio` acepta cualquier valor CSS de `aspect-ratio` ("16/9", "4/5", "1/1").
 */
export function Figura({
  ratio = '16/9',
  titulo,
  detalle,
  src,
  alt,
  icon: Icon = ImageIcon,
  className = '',
}: {
  ratio?: string
  /** Qué foto va aquí, en una línea. Ej: "Retrato profesional". */
  titulo: string
  /** Recomendación de encuadre / contenido / resolución. */
  detalle: string
  /** Cuando exista la imagen real, su ruta (p. ej. "/perfil.jpg"). */
  src?: string
  alt?: string
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>
  className?: string
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? titulo}
        style={{ aspectRatio: ratio }}
        className={`w-full rounded-2xl border border-hair object-cover ${className}`}
      />
    )
  }

  return (
    <figure
      style={{ aspectRatio: ratio }}
      className={`group relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-hair bg-white/[0.015] p-6 text-center ${className}`}
    >
      {/* Retícula sutil para que se lea como "zona de imagen" y no como error. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-hair) 1px, transparent 1px), linear-gradient(90deg, var(--color-hair) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 78%)',
        }}
      />
      <span className="relative flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/25">
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <figcaption className="relative">
        <p className="text-fg text-sm font-bold">{titulo}</p>
        <p className="text-fg-muted mx-auto mt-1 max-w-[36ch] text-xs leading-relaxed">
          {detalle}
        </p>
        <p className="text-accent/70 mt-2 font-mono text-[10px] tracking-widest uppercase">
          Imagen sugerida · {ratio.replace('/', ':')}
        </p>
      </figcaption>
    </figure>
  )
}

/** Icono de LinkedIn (lucide v1 quitó los iconos de marca — SVG inline). */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 9.75h4.15V21H2.9V9.75Zm6.9 0h3.98v1.54h.06c.55-1 1.9-2.06 3.92-2.06 4.19 0 4.96 2.63 4.96 6.05V21h-4.14v-4.9c0-1.17-.02-2.68-1.68-2.68-1.69 0-1.95 1.28-1.95 2.6V21H9.8V9.75Z" />
    </svg>
  )
}

/** Icono de GitHub — inline por el mismo motivo. */
export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}
