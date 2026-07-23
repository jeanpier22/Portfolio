import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

/** Enlaces de navegación. El `href` apunta a los `id` de cada <Section>. */
const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#que-hago', label: 'Qué hago' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacto', label: 'Contacto' },
]

export function Nav() {
  // La barra gana fondo sólido tras hacer un poco de scroll: transparente sobre
  // el hero, opaca sobre el contenido, para que el texto siempre se lea.
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-hair bg-ink/80 backdrop-blur-md' : 'border-b border-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <span className="from-accent to-accent-deep flex size-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm text-white">
            JA
          </span>
          <span className="text-fg hidden sm:inline">Jeanpier Ancori</span>
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-fg-soft hover:text-fg text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="from-accent to-accent-deep hidden rounded-lg bg-gradient-to-br px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Hablemos
        </a>

        {/* Móvil */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="text-fg md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-hair bg-ink/95 px-5 py-3 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-fg-soft hover:text-fg block py-2.5 text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
