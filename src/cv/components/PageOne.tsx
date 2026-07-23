import { Briefcase, GraduationCap, UserRound } from 'lucide-react'
import { educacion } from '../data/cv'
import { activo, experienciaLaboral } from '../data/perfiles'
import { ExperienceItem } from './ExperienceItem'
import { Secciones } from './Secciones'
import { Sidebar } from './Sidebar'
import { EntryHeader, SectionTitle } from './ui'

export function PageOne() {
  return (
    <section className="page flex">
      <Sidebar />

      {/* `justify-between` reparte el aire sobrante entre los tres bloques
          en vez de acumularlo al final de la hoja. */}
      <div className="flex flex-1 flex-col justify-between px-[11mm] py-[9mm]">
        <div>
          <SectionTitle icon={UserRound}>Perfil profesional</SectionTitle>
          <p className="text-cuerpo text-body">{activo.resumen}</p>
        </div>

        {/* Va inmediatamente después del perfil: los grados son la credencial
            más fuerte y al pie de la hoja se leían como un apéndice. */}
        <div className="mt-3">
          <SectionTitle icon={GraduationCap}>Formación académica</SectionTitle>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2.5">
            {educacion.map((e) => (
              <div key={e.titulo} className="keep border-l-2 border-accent/25 pl-3">
                <EntryHeader titulo={e.titulo} />
                <p className="text-cuerpo leading-tight font-semibold text-accent-deep">
                  {e.institucion}
                </p>
                <p className="text-micro font-mono text-muted">
                  {e.periodo}
                  {e.detalle && ` · ${e.detalle}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <SectionTitle icon={Briefcase}>Experiencia profesional</SectionTitle>
          {experienciaLaboral.slice(0, activo.laboralEnHoja1).map((e) => (
            <ExperienceItem key={e.sigla} item={e} />
          ))}
        </div>

        <Secciones nombres={activo.hoja1} />
      </div>
    </section>
  )
}

