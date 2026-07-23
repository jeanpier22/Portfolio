/**
 * Adaptador de ruta — NO es contenido.
 *
 * La fuente única de verdad del CV vive en `src/data/cv.ts` (la usa también el
 * portafolio). Este archivo solo re-exporta ese módulo para que los componentes
 * del CV, portados desde el proyecto `cv-app`, conserven sus imports originales
 * (`../data/cv`) sin editarlos uno por uno.
 *
 * Consecuencia: editar `src/data/cv.ts` actualiza a la vez el portafolio y el
 * CV descargable. Ya no hay dos copias que mantener.
 */
export * from '../../data/cv'
