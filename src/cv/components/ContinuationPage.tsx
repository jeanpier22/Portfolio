import type { ReactNode } from 'react'
import { contacto, perfil } from '../data/cv'

/**
 * Hoja de continuación: franja de identidad, cabecera con nombre y número de
 * página, y la columna de contenido. La comparten todas las hojas salvo la
 * primera, para que añadir una página nueva no signifique copiar y pegar la
 * cabecera —que es como se desincronizan los documentos de varias hojas.
 */
export function ContinuationPage({
  numero,
  children,
}: {
  numero: number
  children: ReactNode
}) {
  return (
    <section className="page flex">
      {/* Franja de identidad para que todas las hojas se lean como un mismo documento */}
      <div className="rail w-[6mm] shrink-0" />

      <div className="flex flex-1 flex-col justify-between px-[12mm] py-[9mm]">
        <header className="flex items-baseline justify-between border-b border-line pb-2">
          <span className="text-rotulo font-extrabold tracking-[0.14em] text-ink uppercase">
            {perfil.nombre} {perfil.apellido}
          </span>
          <span className="text-micro font-mono text-muted">
            {contacto.email} · Página {numero}
          </span>
        </header>

        {children}
      </div>
    </section>
  )
}
