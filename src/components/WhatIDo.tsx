import { Bot, Code2, Cpu, GraduationCap } from 'lucide-react'
import type { ComponentType } from 'react'
import { Chip, Section, SectionHeader } from './ui'

interface Servicio {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  titulo: string
  descripcion: string
  tags: string[]
}

/**
 * Los cuatro pilares de lo que hago. No son "servicios inventados": cada uno
 * está respaldado por un rol o proyecto real que aparece más abajo en la web.
 */
const SERVICIOS: Servicio[] = [
  {
    icon: Code2,
    titulo: 'Desarrollo de software',
    descripcion:
      'Aplicaciones full-stack de principio a fin: back-end en Python/FastAPI, front-end en React y plataformas web de visualización y control conectadas a hardware.',
    tags: ['Python', 'React', 'FastAPI', 'APIs REST', 'PostgreSQL'],
  },
  {
    icon: Bot,
    titulo: 'Inteligencia artificial aplicada',
    descripcion:
      'Integro modelos de lenguaje en productos reales: informes clínicos generados con la API de OpenAI y agentes con LangChain/LangGraph para automatizar tareas.',
    tags: ['OpenAI API', 'LLMs', 'RAG', 'LangGraph', 'n8n'],
  },
  {
    icon: Cpu,
    titulo: 'Automatización e integración HW–SW',
    descripcion:
      'Conecto software con instrumentación y planta: control de equipos por SCPI, sistemas embebidos y automatización industrial con PLC, SCADA y redes Modbus/Profibus.',
    tags: ['SCPI', 'Sistemas embebidos', 'PLC', 'SCADA'],
  },
  {
    icon: GraduationCap,
    titulo: 'Docencia y mentoría técnica',
    descripcion:
      'Más de 3 años enseñando desarrollo de software y electrónica a nivel universitario y técnico: del concepto a la arquitectura y, al final, el código.',
    tags: ['Python', 'Desarrollo web', 'Big Data', 'Robótica'],
  },
]

export function WhatIDo() {
  return (
    <Section id="que-hago">
      <SectionHeader
        kicker="Qué hago"
        title="Del sensor al modelo, todo en la misma cabeza"
        intro="No elijo entre hardware, software e IA: los combino. Esto es lo que puedo construir contigo."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {SERVICIOS.map((s) => (
          <article key={s.titulo} className="glass card-hover flex flex-col gap-4 p-6">
            <span className="bg-accent/10 text-accent ring-accent/20 flex size-12 items-center justify-center rounded-xl ring-1">
              <s.icon className="size-6" strokeWidth={2} />
            </span>
            <div>
              <h3 className="text-fg text-lg font-bold">{s.titulo}</h3>
              <p className="text-fg-soft mt-2 text-sm leading-relaxed">{s.descripcion}</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {s.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
