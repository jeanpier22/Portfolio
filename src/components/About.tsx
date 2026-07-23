import { GraduationCap, Cpu, Code2 } from 'lucide-react'
import { Figura, Section, SectionHeader } from './ui'

/** Cifras de un vistazo. Todas respaldadas por el contenido del CV. */
const STATS = [
  { valor: '3+', label: 'años como docente técnico' },
  { valor: '6', label: 'cursos distintos dictados' },
  { valor: '−45 %', label: 'tiempo de adquisición en MABIS' },
  { valor: '2', label: 'proyectos de investigación con fondos' },
]

export function About() {
  return (
    <Section id="sobre-mi">
      <SectionHeader
        kicker="Sobre mí"
        title="Ingeniero que aprende construyendo"
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          <p>
            Soy <strong className="text-fg">Ingeniero Electrónico y de Telecomunicaciones</strong>{' '}
            (UCSP) con Maestría en Internet de las Cosas. Vivo entre tres mundos que para mí
            son el mismo: el <span className="text-accent">hardware</span> que mide el mundo
            real, el <span className="text-accent">software</span> que lo interpreta y la{' '}
            <span className="text-accent">IA</span> que lo automatiza.
          </p>
          <p>
            Hoy programo el software de un dispositivo biomédico en{' '}
            <strong className="text-fg">Zamenis Biotech</strong>, doy clases de desarrollo en{' '}
            <strong className="text-fg">CERTUS</strong> y dirijo laboratorios de ingeniería
            en la <strong className="text-fg">UCSP</strong>. Me especializo en inteligencia
            artificial aplicada y automatización inteligente.
          </p>
          <p className="text-fg-soft">
            Aprendo construyendo. Prefiero entender el <em>porqué</em> de una decisión de
            arquitectura antes que copiar código — y esa misma forma de trabajar es la que
            enseño.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass p-4">
                <p className="text-gradient text-2xl font-extrabold sm:text-3xl">{s.valor}</p>
                <p className="text-fg-muted mt-1 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Tres roles actuales resumidos como identidades. */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="border-hair text-fg-soft inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm">
              <Code2 className="text-accent size-4" /> Programador de sistemas
            </span>
            <span className="border-hair text-fg-soft inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm">
              <GraduationCap className="text-accent size-4" /> Docente universitario
            </span>
            <span className="border-hair text-fg-soft inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm">
              <Cpu className="text-accent size-4" /> Investigador en RF & IoT
            </span>
          </div>
        </div>

        {/* Foto de contexto: trabajando / enseñando. */}
        <div className="space-y-4">
          {/* Ilustración conceptual (SVG) de "programando". Cuando tengas una
              foto real tuya trabajando, cambia `src` por su ruta: es el hueco
              que más humaniza el portafolio y una foto real siempre gana. */}
          <Figura
            src="/coding.svg"
            alt="Desarrollando software frente al monitor"
            ratio="4/5"
            titulo="Foto tuya en acción"
            detalle="Ilustración provisional. Lo ideal es tu foto REAL trabajando (laboratorio, clase o frente al equipo MABIS), vertical 4:5, luz natural."
          />
          {/* Ilustración conceptual (SVG). Para poner una foto real de tu setup,
              copia la imagen a public/ y cambia `src` por su ruta. */}
          <Figura
            src="/setup.svg"
            alt="Entorno de trabajo: código, señal y hardware"
            ratio="16/9"
            titulo="Foto ambiente / setup"
            detalle="Tu escritorio, pizarra con diagramas o el banco de instrumentación. Sirve de apoyo secundario; puede ir en blanco y negro."
          />
        </div>
      </div>
    </Section>
  )
}
