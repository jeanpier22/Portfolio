import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhatIDo } from './components/WhatIDo'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact, Footer } from './components/Contact'

/**
 * Estructura del portafolio: una sola página con secciones ancladas.
 *
 * El orden cuenta una historia: quién soy → qué hago → dónde lo he hecho →
 * qué he construido → con qué → mi formación → cómo contactarme. Los datos de
 * todas las secciones salen de `src/data/cv.ts` (copia de la fuente del CV).
 */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
