import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import { contacto, competencias, intereses } from '../data/cv'
import { GitHubIcon, LinkedInIcon, Section } from './ui'

const CANALES = [
  {
    icon: Mail,
    label: 'Email',
    valor: contacto.email,
    href: `mailto:${contacto.email}`,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    valor: contacto.telefono,
    href: `tel:${contacto.telefono.replace(/\s/g, '')}`,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    valor: contacto.linkedin.etiqueta,
    href: contacto.linkedin.url,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    valor: contacto.github.etiqueta,
    href: contacto.github.url,
  },
]

export function Contact() {
  return (
    <Section id="contacto" className="pb-8">
      <div className="glass relative overflow-hidden p-8 sm:p-12">
        {/* Halo de marca detrás del CTA. */}
        <div className="from-accent/20 pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br to-transparent blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="kicker mb-3">Contacto</p>
            <h2 className="text-fg text-3xl font-extrabold tracking-tight sm:text-4xl">
              Construyamos algo <span className="text-gradient">juntos</span>
            </h2>
            <p className="text-fg-soft mt-4 max-w-md text-base leading-relaxed">
              ¿Tienes un proyecto de software, IA o automatización? ¿O buscas alguien que
              enseñe estos temas? Escríbeme y conversamos.
            </p>

            <p className="text-fg-muted mt-6 flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {contacto.ubicacion}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CANALES.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="border-hair hover:border-accent/50 group flex items-center gap-3 rounded-xl border p-3 transition-colors"
                >
                  <span className="bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <c.icon className="size-4.5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="text-fg-muted block text-xs">{c.label}</span>
                    <span className="text-fg group-hover:text-accent block truncate text-sm font-medium transition-colors">
                      {c.valor}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Lado humano: competencias transversales + intereses. */}
          <div className="space-y-6">
            <div>
              <h3 className="text-fg-muted mb-3 text-xs font-semibold uppercase tracking-wider">
                Cómo trabajo
              </h3>
              <ul className="space-y-2">
                {competencias.map((c) => (
                  <li key={c} className="text-fg-soft relative pl-4 text-sm leading-relaxed">
                    <span className="bg-accent/60 absolute left-0 top-2 size-1.5 rotate-45 rounded-[1px]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-fg-muted mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                <Heart className="size-3.5" /> Más allá del código
              </h3>
              <div className="flex flex-wrap gap-2">
                {intereses.map((i) => (
                  <span
                    key={i}
                    className="border-hair text-fg-soft rounded-full border px-3 py-1 text-sm"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="text-fg-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row sm:px-8">
        <p>© 2026 Jeanpier Ancori Sánchez</p>
        <p className="font-mono text-xs">Hecho con React · Vite · Tailwind</p>
        <div className="flex items-center gap-2">
          <a
            href={contacto.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={contacto.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GitHubIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
