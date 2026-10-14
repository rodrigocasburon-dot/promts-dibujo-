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
  - *Fusión*: mezcla dos palabras en un solo ser, por ejemplo «mono payaso» o «calavera
    perro». La segunda palabra siempre es un animal, personaje o criatura que presta sus
    rasgos a la primera, y los personajes concuerdan en género («gato brujo», «rana bruja»).
- **Protagonista**:
  - *Cualquiera*: animales, personajes, criaturas u objetos.
  - *Humanos*: solo personas y personajes («vikingo», «abuela», «bailarina»).
  - *Híbridos humanos*: siempre una fusión de humano con animal o criatura
    («mujer gato», «vikingo pulpo», «abuela yeti»).
- **Favoritos (☆/★)**: marca los prompts que te gustan.
- **No me gusta (👎)**: solo para combinaciones completas *palabra + acción + lugar*.
  Esa combinación no vuelve a salir, pero las palabras sueltas sí. Puedes deshacerlo en la
  pestaña Favoritos.
- **Generador**
  - *Todo*: cualquier combinación.
  - *Mi zona*: combina los elementos de tus favoritos.
  - *Reto*: evita los elementos de tus favoritos, para salir de tu zona de confort.
- **Tiempo de dibujo (⏱️)**: elige un tiempo y pulsa *Empezar*. Puedes pausar y continuar.
  Mientras corre el tiempo, la pantalla no se apaga.
  - *Auto*: propone un tiempo según el nivel (palabra 5 min, + acción 10 min, + lugar 20 min).
  - *Fases orientativas*: la barra se divide en **encaje** (20 %), **desarrollo** (60 %) y
    **remates** (20 %), con un pitido suave al cambiar de fase.
  - *Aviso de cierre*: doble pitido cuando queda el 10 % del tiempo.
  - *Prórroga*: al acabar, puedes pedir una sola vez un poco más de tiempo para cerrar
    (20 % del tiempo, entre 30 s y 5 min).
  - *Registro*: al terminar marcas «Lo acabé», «Me faltó poco» o «No llegué».
- **Modo dibujo**: al pulsar *Empezar* se abre una pantalla limpia con solo el prompt,
  el tiempo, ☆ y 👎. Con *✕ Salir* vuelves a la pantalla principal y el tiempo se pausa;
  *Continuar* te devuelve al modo dibujo. Al marcar cómo te ha ido, vuelves automáticamente.
- **Pestañas**: Generar, Historial, Favoritos y Progreso.
- **Progreso**: estadísticas de tus dibujos por nivel y por tiempo, con consejos
  (por ejemplo, si en cierto nivel y tiempo casi nunca llegas).

Los favoritos, el historial y el progreso se guardan en el propio navegador (si borras los datos de
navegación, o usas otro dispositivo, no aparecerán).

## Añadir tus propias palabras

Abre `index.html` con un editor de texto y busca la sección «LISTAS DE PALABRAS».
Hay cinco listas: `SUSTANTIVOS`, `ACCIONES`, `LUGARES`, `ESTILOS` y `PERSONALIDADES`.
En los sustantivos, `g` indica el género (`"m"` o `"f"`) para que el estilo concuerde
(«calavera malvada», «gato malvado»), y `k` el tipo (animal, personaje, persona,
criatura u objeto), que decide qué fusiones tienen sentido. Las reglas están en `FUSIONES`, y las
parejas demasiado parecidas en `PAREJAS_EVITAR`.

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
