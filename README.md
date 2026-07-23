# Portafolio — Jeanpier Ancori Sánchez

Portafolio web (una sola página) construido sobre la misma identidad visual del
`cv-app`: React 19 + Vite 8 + Tailwind CSS v4, tipografías Plus Jakarta Sans /
JetBrains Mono y la paleta `ink` + `accent` sky-blue, reinterpretada para un
tema **oscuro** de pantalla.

## Comandos

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # comprobación de tipos + build a dist/
npm run preview  # sirve dist/ para revisar el build
npm run lint     # oxlint
```

## Arquitectura

Dos páginas, **una sola fuente de contenido**. Build multi-página de Vite:

- **`index.html`** → el portafolio (tema oscuro). Entrada `src/main.tsx`.
- **`cv.html`** → el CV imprimible en A4 (papel blanco). Entrada `src/cv/main.tsx`.
  El botón «Descargar CV» del hero lo abre; ahí se exporta el PDF con
  `window.print()` (texto vectorial, legible por ATS).

Piezas clave:

- **`src/data/cv.ts`** — **la única fuente de verdad del contenido.** La usan
  tanto las secciones del portafolio como el CV. Editar aquí actualiza los dos a
  la vez: al desplegar, el CV descargable siempre refleja lo último.
- **`src/cv/`** — el generador del CV, portado desde el proyecto `cv-app`. Sus
  componentes importan `./data/cv`, que es un **re-export** (`src/cv/data/cv.ts`)
  del `src/data/cv.ts` de arriba — por eso no hay contenido duplicado.
  `src/cv/data/perfiles.ts` decide qué entra en cada versión del CV.
- **`src/index.css`** — sistema de diseño del portafolio en `@theme` (tema
  oscuro): colores, tipografías y utilidades (`.glass`, `.card-hover`, `.reveal`).
- **`src/cv/index.css`** — el CSS del CV (papel A4, reglas de impresión). Es
  independiente del anterior: cada página carga solo el suyo.
- **`src/components/ui.tsx`** — primitivas del portafolio: `Section`,
  `SectionHeader`, `Chip`, `Lettermark`, `Figura` y el hook `useReveal`.
- **`src/components/*.tsx`** — una sección del portafolio por archivo, en `App.tsx`.

> El proyecto `cv-app` (repo aparte) sigue existiendo como el CV independiente,
> pero el portafolio ya no depende de él: tiene su propia copia del generador y
> su propia fuente de datos.

### Reglas de contenido heredadas del CV

Se respetan las mismas que el `cv-app`: no se inventa experiencia, las tecnologías
en aprendizaje se muestran **atenuadas y marcadas** («en formación»), y grados
académicos y formación continua van separados.

---

## 📸 Guía de imágenes

Ahora mismo el portafolio funciona con **una sola foto real** (`public/perfil.jpg`,
reutilizada del CV) en el hero. El resto de imágenes son **placeholders**: cada
recuadro punteado indica qué foto va ahí y con qué proporción.

### Cómo sustituir un placeholder por una foto real

1. Copia tu imagen a la carpeta `public/` (p. ej. `public/lab.jpg`).
2. En el componente correspondiente, al `<Figura .../>` pásale `src`:
   ```tsx
   <Figura src="/lab.jpg" ratio="4/5" titulo="..." detalle="..." />
   ```
   El mismo componente la recorta a la proporción indicada; no tocas el layout.

### Qué imágenes conseguir (ordenadas por impacto)

| # | Dónde | Proporción | Qué foto y recomendación |
|---|-------|-----------|--------------------------|
| 1 | **Hero** (ya puesta) | 4:5 vertical | Retrato profesional. La actual sirve; lo ideal es una con fondo neutro o desenfocado, buena luz, mirando a cámara. Es la primera impresión. |
| 2 | **Sobre mí** → «Foto tuya en acción» | 4:5 vertical | Tú trabajando: en el laboratorio, frente al equipo MABIS, o dando clase. Es la que más humaniza el sitio. Luz natural. |
| 3 | **Sobre mí** → «Foto ambiente / setup» | 16:9 | Tu escritorio, pizarra con diagramas, o el banco de instrumentación. Apoyo secundario; funciona en blanco y negro. |
| 4 | **Proyectos → MABIS** | 4:3 | El dispositivo/prototipo, **o** una captura de la plataforma web (usa datos ficticios si son sensibles), **o** una imagen de radiofrecuencia reconstruida. |
| 5 | **Proyectos → Sensor de arsénico** | 4:3 | El prototipo portátil, la antena/sensor, o una gráfica del S11 vs. concentración. Alternativa: el diseño en Ansys HFSS. |
| 6 | **Redes sociales** → `public/og.jpg` | 1200×630 px | Imagen de previsualización al compartir el enlace (WhatsApp/LinkedIn). Puede ser tu foto + nombre + titular sobre el fondo oscuro de marca. No se ve en la web, solo al pegar el link. |

### Ideas de imágenes adicionales (opcionales)

Si consigues más material, estos huecos serían fáciles de añadir:

- **Logos de tecnologías** en la marquesina del hero (hoy son texto): quedan bien
  como texto, pero podrías cambiarlos por iconos SVG.
- **Fotos de docencia** (aula, alumnos de espaldas por privacidad) para reforzar
  la sección «Qué hago → Docencia».
- **Diagramas propios** (arquitectura de MABIS, flujo del agente de informes con
  OpenAI): un diagrama que hayas hecho tú vale más que una foto de stock.
- **Certificados** (CCNA, PAEP): miniaturas enlazables en la sección de formación.

> Consejo: evita fotos de stock genéricas. Una foto tuya real, aunque sea con el
> móvil pero bien iluminada, comunica más que un banco de imágenes.
