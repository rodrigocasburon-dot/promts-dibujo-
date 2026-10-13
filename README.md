# ✏️ Prompts de Dibujo

Generador de ideas para dibujar, con niveles de dificultad y favoritos.

## Cómo usarla

Abre `index.html` en tu navegador (doble clic). No hace falta instalar nada: toda la app
está en ese único archivo.

- **Nivel del prompt**
  1. *Palabra*: «calavera» (el más libre)
  2. *Palabra + acción*: «calavera bailando»
  3. *Palabra + acción + lugar*: «calavera bailando en una biblioteca» (el más guiado)
- **Extras** (se pueden combinar):
  - *Estilo*: cómo se ve, por ejemplo «calavera kawaii».
  - *Personalidad*: qué carácter tiene, por ejemplo «mesa malvada». Tienes que transmitir
    esa personalidad en el dibujo.
- **Favoritos (☆/★)**: marca los prompts que te gustan.
- **No me gusta (👎)**: solo para combinaciones completas *palabra + acción + lugar*.
  Esa combinación no vuelve a salir, pero las palabras sueltas sí. Puedes deshacerlo en la
  pestaña Favoritos.
- **Generador**
  - *Todo*: cualquier combinación.
  - *Mi zona*: combina los elementos de tus favoritos.
  - *Reto*: evita los elementos de tus favoritos, para salir de tu zona de confort.

Los favoritos y el historial se guardan en el propio navegador (si borras los datos de
navegación, o usas otro dispositivo, no aparecerán).

## Añadir tus propias palabras

Abre `index.html` con un editor de texto y busca la sección «LISTAS DE PALABRAS».
Hay cinco listas: `SUSTANTIVOS`, `ACCIONES`, `LUGARES`, `ESTILOS` y `PERSONALIDADES`.
En los sustantivos, `g` indica el género (`"m"` o `"f"`) para que el estilo concuerde
(«calavera malvada», «gato malvado»).

## Tenerla en el móvil

1. En GitHub, entra en el repositorio → **Settings** → **Pages**.
2. En *Source* elige **Deploy from a branch**, selecciona la rama
   `claude/drawing-prompt-generator-1sg8a5` y la carpeta `/ (root)`, y pulsa **Save**.
3. En un par de minutos la app estará en
   <https://rodrigocasburon-dot.github.io/promts-dibujo-/>
4. Abre esa dirección en el móvil y añádela a la pantalla de inicio:
   - **iPhone (Safari)**: botón Compartir → *Añadir a pantalla de inicio*.
   - **Android (Chrome)**: menú ⋮ → *Añadir a pantalla de inicio* / *Instalar app*.

Cada vez que se suban cambios al repositorio, la app del móvil se actualiza sola.
