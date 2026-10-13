// Listas de elementos para generar prompts.
// Puedes añadir o quitar elementos libremente.
// Sustantivos: g = género ("m" masculino, "f" femenino) para concordar con el estilo.

const SUSTANTIVOS = [
  { t: "calavera", g: "f" }, { t: "gato", g: "m" }, { t: "dragón", g: "m" },
  { t: "bruja", g: "f" }, { t: "robot", g: "m" }, { t: "seta", g: "f" },
  { t: "astronauta", g: "m" }, { t: "pulpo", g: "m" }, { t: "tetera", g: "f" },
  { t: "caballero", g: "m" }, { t: "sirena", g: "f" }, { t: "zorro", g: "m" },
  { t: "fantasma", g: "m" }, { t: "búho", g: "m" }, { t: "planta carnívora", g: "f" },
  { t: "dinosaurio", g: "m" }, { t: "abuela", g: "f" }, { t: "pez globo", g: "m" },
  { t: "vampiro", g: "m" }, { t: "rana", g: "f" }, { t: "faro", g: "m" },
  { t: "mago", g: "m" }, { t: "ballena", g: "f" }, { t: "cactus", g: "m" },
  { t: "samurái", g: "m" }, { t: "mariposa", g: "f" }, { t: "oso", g: "m" },
  { t: "bicicleta", g: "f" }, { t: "cuervo", g: "m" }, { t: "princesa", g: "f" },
  { t: "esqueleto", g: "m" }, { t: "caracol", g: "m" }, { t: "lámpara", g: "f" },
  { t: "pirata", g: "m" }, { t: "conejo", g: "m" }, { t: "medusa", g: "f" },
  { t: "golem", g: "m" }, { t: "tortuga", g: "f" }, { t: "payaso", g: "m" },
  { t: "zapato", g: "m" }, { t: "ciervo", g: "m" }, { t: "guerrera", g: "f" },
  { t: "alien", g: "m" }, { t: "lobo", g: "m" }, { t: "casa", g: "f" },
  { t: "unicornio", g: "m" }, { t: "abeja", g: "f" }, { t: "minotauro", g: "m" },
  { t: "taza de café", g: "f" }, { t: "perro", g: "m" }, { t: "hada", g: "f" },
  { t: "cocinero", g: "m" }, { t: "serpiente", g: "f" }, { t: "árbol", g: "m" },
  { t: "momia", g: "f" }, { t: "pingüino", g: "m" }, { t: "nube", g: "f" },
  { t: "ninja", g: "m" }, { t: "manzana", g: "f" }, { t: "demonio", g: "m" },
  { t: "jirafa", g: "f" }, { t: "anciano", g: "m" }, { t: "llave", g: "f" },
  { t: "cangrejo", g: "m" }, { t: "gárgola", g: "f" }, { t: "tren", g: "m" },
  { t: "sapo", g: "m" }, { t: "luna", g: "f" }, { t: "escarabajo", g: "m" },
];

const ACCIONES = [
  "bailando", "durmiendo", "leyendo un libro", "cocinando", "pescando",
  "volando", "llorando", "riéndose", "tocando la guitarra", "corriendo",
  "escondiéndose", "pintando un cuadro", "tomando té", "peleando",
  "meditando", "saltando", "comiendo ramen", "nadando", "escalando",
  "cantando", "tejiendo", "jugando al ajedrez", "haciendo yoga",
  "regando plantas", "patinando", "estornudando", "abrazando a alguien",
  "lanzando un hechizo", "conduciendo", "haciendo la compra", "bostezando",
  "construyendo algo", "persiguiendo una mariposa", "enfadándose",
  "haciendo una foto", "escribiendo una carta", "comiendo helado",
  "esquiando", "tirándose de cabeza", "barriendo", "flotando",
  "tocando la batería", "haciendo malabares", "derritiéndose", "huyendo",
];

const LUGARES = [
  "en una biblioteca", "en el espacio", "bajo el mar", "en un desierto",
  "en una cocina", "en un bosque encantado", "en una ciudad futurista",
  "en un cementerio", "en la cima de una montaña", "en un tren",
  "en una cafetería", "en un castillo", "dentro de una cueva",
  "en una playa", "en el metro", "en un mercado", "en una nave espacial",
  "en un jardín japonés", "sobre un tejado", "en un supermercado",
  "en un volcán", "en una feria", "en un pantano", "en una iglesia en ruinas",
  "en un barco pirata", "en una habitación desordenada", "en la nieve",
  "dentro de una botella", "en un laboratorio", "en un circo",
  "en un parque bajo la lluvia", "en una gasolinera de noche",
  "en un museo", "en una isla diminuta", "en un ascensor",
  "en un campo de girasoles", "en una oficina", "en una selva",
];

// Estilos / objetivos: [masculino, femenino]. Si es invariable, repite la palabra.
const ESTILOS = [
  ["kawaii", "kawaii"], ["steampunk", "steampunk"], ["cyberpunk", "cyberpunk"],
  ["gótico", "gótica"], ["gigante", "gigante"], ["diminuto", "diminuta"],
  ["mecánico", "mecánica"], ["de cristal", "de cristal"], ["zombi", "zombi"],
  ["medieval", "medieval"], ["anciano", "anciana"], ["bebé", "bebé"],
  ["en llamas", "en llamas"], ["hecho de nubes", "hecha de nubes"],
  ["de papel", "de papel"], ["mutante", "mutante"], ["elegante", "elegante"],
  ["triste", "triste"], ["furioso", "furiosa"], ["con tentáculos", "con tentáculos"],
  ["de chocolate", "de chocolate"], ["pixelado", "pixelada"],
  ["art nouveau", "art nouveau"], ["prehistórico", "prehistórica"],
  ["con armadura", "con armadura"], ["de peluche", "de peluche"],
  ["oxidado", "oxidada"], ["mágico", "mágica"], ["de los años 80", "de los años 80"],
  ["fantasmal", "fantasmal"], ["vegetal", "vegetal"], ["submarino", "submarina"],
  ["con alas", "con alas"], ["de hielo", "de hielo"], ["punk", "punk"],
  ["barroco", "barroca"], ["minimalista", "minimalista"], ["cósmico", "cósmica"],
];
