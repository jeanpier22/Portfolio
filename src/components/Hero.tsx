import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react'
import { perfil, contacto } from '../data/cv'
import { deviconSrc } from '../lib/devicon'
import { GitHubIcon, LinkedInIcon } from './ui'

/**
 * Tecnologías que desfilan en la marquesina, con logo. Puro escaparate, no
 * exhaustivo: se eligen las que tienen logo de Devicon para que el carrusel sea
 * consistente (todas con icono).
 */
const STACK = [
  { name: 'Python', slug: 'python' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'React', slug: 'react' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Tailwind', slug: 'tailwindcss' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Java', slug: 'java' },
  { name: 'Git', slug: 'git' },
  { name: 'Bootstrap', slug: 'bootstrap' },
  { name: 'JavaScript', slug: 'javascript' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Columna de texto */}
        <div>
          <p className="border-hair bg-white/[0.03] text-fg-soft mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-75" />
              <span className="bg-accent relative inline-flex size-2 rounded-full" />
            </span>
            Disponible para proyectos de software · IA · automatización
          </p>

          <h1 className="text-fg text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {perfil.nombre}{' '}
            <span className="text-gradient">{perfil.apellido}</span>
          </h1>

          <p className="text-accent mt-4 flex items-center gap-2 font-mono text-sm sm:text-base">
            <Sparkles className="size-4" strokeWidth={2.2} />
            {perfil.titular}
          </p>

          <p className="text-fg-soft mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            {perfil.resumen}
          </p>

          <p className="text-fg-muted mt-5 flex items-center gap-1.5 text-sm">
            <MapPin className="size-4" strokeWidth={2} />
            {contacto.ubicacion}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="from-accent to-accent-deep inline-flex items-center gap-2 rounded-xl bg-gradient-to-br px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos
              <ArrowDown className="size-4" />
            </a>
            {/* Abre el CV (cv.html), que se renderiza desde el MISMO src/data/cv.ts
                que el portafolio: al desplegar siempre está actualizado. Desde ahí
                se descarga el PDF con el botón "Descargar PDF" (window.print). */}
            <a
              href="./cv.html"
              target="_blank"
              rel="noreferrer"
              className="border-hair text-fg hover:border-accent/50 inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors"
            >
              <Download className="size-4" />
              Descargar CV
            </a>
            <a
              href="#contacto"
              className="text-fg-soft hover:text-fg inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition-colors"
            >
              Contáctame
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={contacto.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-fg-muted hover:text-accent hover:border-accent/40 border-hair flex size-10 items-center justify-center rounded-xl border transition-colors"
              >
                <LinkedInIcon className="size-4.5" />
              </a>
              <a
                href={contacto.github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-fg-muted hover:text-accent hover:border-accent/40 border-hair flex size-10 items-center justify-center rounded-xl border transition-colors"
              >
                <GitHubIcon className="size-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna de retrato */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="from-accent/30 absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr to-transparent blur-2xl" />
          <div className="glass overflow-hidden rounded-[1.75rem] p-2">
            {/*
              Foto reutilizada del CV. Para el portafolio, lo ideal es un retrato
              vertical (4/5) con más aire; ver el README para la recomendación.
            */}
            <img
              src="./perfil.jpg"
              alt={`${perfil.nombre} ${perfil.apellido}`}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
            />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 shadow-xl">
            <p className="text-fg text-2xl font-extrabold">+3 años</p>
            <p className="text-fg-muted text-xs">desarrollando software</p>
          </div>
          <div className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl">
            <p className="text-accent text-2xl font-extrabold">Developer</p>
            <p className="text-fg-muted text-xs">& Ingeniero electrónico</p>
          </div>
        </div>
      </div>

      {/* Marquesina de tecnologías: dos copias seguidas para el bucle infinito. */}
      <div className="relative mt-16 overflow-hidden border-y border-hair py-4">
        <div className="marquee-track gap-3">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={i}
              className="text-fg-soft border-hair bg-white/[0.03] inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-sm"
            >
              <img src={deviconSrc(tech.slug)} alt="" aria-hidden className="size-4" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
