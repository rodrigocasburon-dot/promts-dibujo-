# ✏️ Prompts de Dibujo

Generador de ideas para dibujar, con niveles de dificultad y favoritos.

## Cómo usarla

Abre `index.html` en tu navegador (doble clic). No hace falta instalar nada.

- **Nivel del prompt**
  1. *Palabra*: «calavera» (el más libre)
  2. *Palabra + acción*: «calavera bailando»
  3. *Palabra + acción + lugar*: «calavera bailando en una biblioteca» (el más guiado)
- **Añadir estilo**: añade un modificador a la palabra, por ejemplo «calavera kawaii».
- **Favoritos (☆/★)**: marca los prompts que te gustan.
- **Generador**
  - *Todo*: cualquier combinación.
  - *Mi zona*: combina los elementos de tus favoritos.
  - *Reto*: evita los elementos de tus favoritos, para salir de tu zona de confort.

Los favoritos y el historial se guardan en el propio navegador (si borras los datos de
navegación, o usas otro dispositivo, no aparecerán).

## Añadir tus propias palabras

Edita `data.js`. Hay cuatro listas: `SUSTANTIVOS`, `ACCIONES`, `LUGARES` y `ESTILOS`.
En los sustantivos, `g` indica el género (`"m"` o `"f"`) para que el estilo concuerde
(«calavera gótica», «gato gótico»).

## Archivos

- `index.html` – estructura de la página
- `style.css` – aspecto visual
- `data.js` – listas de palabras
- `app.js` – lógica (generar, favoritos, historial)
