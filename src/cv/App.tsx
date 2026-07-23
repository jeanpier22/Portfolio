import { ArrowLeft } from 'lucide-react'
import { ContinuationPage } from './components/ContinuationPage'
import { PageOne } from './components/PageOne'
import { Secciones } from './components/Secciones'
import { Toolbar } from './components/Toolbar'
import { activo } from './data/perfiles'

/**
 * El número de hojas y su contenido los decide el perfil activo
 * (`src/data/perfiles.ts`), no este archivo: cambiar de versión del CV no
 * debería obligar a añadir o borrar componentes de página.
 */
export default function App() {
  return (
    <>
      {/* Vuelta al portafolio. `no-print` para que no salga en el PDF. */}
      <a
        href="./index.html"
        className="no-print fixed top-5 left-5 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
      >
        <ArrowLeft className="size-4" />
        Portafolio
      </a>
      <main className="print-stack flex flex-col items-center gap-10 px-4 py-12">
        <PageOne />
        {activo.hojas.map((secciones, i) => (
          <ContinuationPage key={i} numero={i + 2}>
            <Secciones nombres={secciones} />
          </ContinuationPage>
        ))}
      </main>
      <Toolbar />
    </>
  )
}
