import {
  Cpu,
  Database,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { contacto, idiomas, perfil, skills } from '../data/cv'
import { AsideTitle, GitHubIcon, LinkedInIcon } from './ui'

const contactItems = [
  { icon: Phone, texto: contacto.telefono },
  { icon: Mail, texto: contacto.email },
  { icon: MapPin, texto: contacto.ubicacion },
  {
    icon: LinkedInIcon,
    texto: contacto.linkedin.etiqueta,
    href: contacto.linkedin.url,
  },
  {
    icon: GitHubIcon,
    texto: contacto.github.etiqueta,
    href: contacto.github.url,
  },
]

function SkillList({ titulo }: { titulo: string }) {
  const grupo = skills.find((g) => g.titulo === titulo)
  if (!grupo) return null

  return (
    <ul className="flex flex-wrap gap-x-1 gap-y-0.5">
      {grupo.items.map((s) => (
        <li
          key={s.nombre}
          className={[
            'rounded-md px-2 py-0.5 text-nota font-medium',
            s.estado === 'formacion'
              ? 'bg-white/5 text-white/55 ring-1 ring-white/10 ring-inset'
              : 'bg-white/10 text-white/90',
          ].join(' ')}
        >
          {s.nombre}
          {s.estado === 'formacion' && <span className="text-accent/80"> ·</span>}
        </li>
      ))}
    </ul>
  )
}

export function Sidebar() {
  return (
    <aside className="flex w-[68mm] flex-col justify-between bg-linear-to-b from-[#0d1729] via-[#101f38] to-[#0a1a2b] px-[9mm] py-[9mm] text-white">
      {/* Bloque de identidad: retrato, nombre y datos de contacto */}
      <div>
        <div className="relative mx-auto w-fit">
          <div className="absolute -inset-1 rounded-full bg-linear-to-br from-accent to-transparent opacity-60" />
          <img
            src={perfil.foto}
            alt={`${perfil.nombre} ${perfil.apellido}`}
            className="relative size-[29mm] rounded-full object-cover ring-2 ring-white/20"
          />
        </div>

        <div className="mt-3.5 text-center">
          <h1 className="text-[20px] leading-[1.1] font-extrabold tracking-tight text-white">
            {perfil.nombre}
            <span className="block font-semibold text-white/70">{perfil.apellido}</span>
          </h1>
          <div className="mx-auto mt-2 h-0.5 w-10 rounded-full bg-accent" />
          <p className="text-nota mt-2 font-medium text-accent">{perfil.titular}</p>
        </div>

        <ul className="mt-3.5 space-y-1.5">
          {contactItems.map(({ icon: Icon, texto, href }) => (
            <li key={texto} className="flex items-start gap-2.5">
              <span className="mt-px flex size-4.5 shrink-0 items-center justify-center rounded bg-white/10">
                <Icon className="size-2.5 text-accent" strokeWidth={2.4} />
              </span>
              {href ? (
                <a href={href} className="text-nota break-all text-white/80">
                  {texto}
                </a>
              ) : (
                <span className="text-nota text-white/80">{texto}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <AsideTitle icon={Cpu}>Desarrollo</AsideTitle>
        <SkillList titulo="Desarrollo de Software" />
      </div>

      <div className="mt-2.5">
        <AsideTitle icon={Sparkles}>Inteligencia Artificial</AsideTitle>
        <SkillList titulo="Inteligencia Artificial" />
        <p className="text-micro mt-1.5 text-white/40">
          · Tecnologías actualmente en formación
        </p>
      </div>

      <div className="mt-2.5">
        <AsideTitle icon={Database}>Datos & Bases de Datos</AsideTitle>
        <SkillList titulo="Datos & Bases de Datos" />
      </div>

      <div className="mt-2.5">
        <AsideTitle icon={Wrench}>Ingeniería & Automatización</AsideTitle>
        <SkillList titulo="Ingeniería & Automatización" />
      </div>

      <div className="mt-2.5">
        <AsideTitle icon={Languages}>Idiomas</AsideTitle>
        <div className="space-y-2">
          {idiomas.map((i) => (
            <div key={i.nombre}>
              <div className="flex items-baseline justify-between">
                <span className="text-nota font-semibold text-white/90">{i.nombre}</span>
                <span className="text-micro text-white/50">{i.nivel}</span>
              </div>
              <div className="mt-1 h-0.75 overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full bg-linear-to-r from-accent to-sky-300"
                  style={{ width: `${i.dominio}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

