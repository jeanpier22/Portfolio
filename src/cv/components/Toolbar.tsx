import { useState } from 'react'
import { Download, Info, X } from 'lucide-react'
import { perfil } from '../data/cv'

/**
 * Barra flotante que no se imprime (`no-print`).
 *
 * La exportación usa `window.print()` en lugar de una librería tipo html2pdf:
 * el PDF resultante conserva el texto seleccionable y vectorial, pesa poco y
 * es legible por los filtros ATS de los portales de empleo.
 */
export function Toolbar() {
  const [ayudaVisible, setAyudaVisible] = useState(false)

  function exportar() {
    // El título del documento define el nombre por defecto del archivo PDF.
    const original = document.title
    document.title = `CV - ${perfil.nombre} ${perfil.apellido}`
    window.print()
    setTimeout(() => {
      document.title = original
    }, 500)
  }

  return (
    <div className="no-print fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {ayudaVisible && (
        <div className="w-72 rounded-xl border border-white/10 bg-[#111c2f]/95 p-4 text-white shadow-2xl backdrop-blur">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-bold tracking-wide uppercase">
              Ajustes de impresión
            </p>
            <button
              onClick={() => setAyudaVisible(false)}
              className="text-white/50 hover:text-white"
              aria-label="Cerrar ayuda"
            >
              <X className="size-4" />
            </button>
          </div>
          <ol className="space-y-1.5 text-[11px] leading-relaxed text-white/70">
            <li>
              <b className="text-white">1.</b> Destino:{' '}
              <b className="text-sky-300">Guardar como PDF</b>
            </li>
            <li>
              <b className="text-white">2.</b> Márgenes:{' '}
              <b className="text-sky-300">Ninguno</b>
            </li>
            <li>
              <b className="text-white">3.</b> Activa{' '}
              <b className="text-sky-300">Gráficos de fondo</b>
            </li>
            <li>
              <b className="text-white">4.</b> Escala:{' '}
              <b className="text-sky-300">Predeterminada (100 %)</b>
            </li>
          </ol>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setAyudaVisible((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur transition hover:bg-white/20"
          aria-label="Ayuda de impresión"
        >
          <Info className="size-5" />
        </button>

        <button
          onClick={exportar}
          className="flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-sky-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/40 transition hover:brightness-110 active:scale-[0.98]"
        >
          <Download className="size-4" strokeWidth={2.6} />
          Descargar PDF
        </button>
      </div>
    </div>
  )
}
