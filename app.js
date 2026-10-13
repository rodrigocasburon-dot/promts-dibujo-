// ---------- Estado guardado en el navegador ----------
const CLAVE_FAVS = "prompts-dibujo:favoritos";
const CLAVE_HIST = "prompts-dibujo:historial";

function cargar(clave) {
  try { return JSON.parse(localStorage.getItem(clave)) || []; } catch { return []; }
}
function guardar(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch {}
}

let favoritos = cargar(CLAVE_FAVS);   // lista de prompts
let historial = cargar(CLAVE_HIST);   // últimos prompts generados
let actual = null;

// Un prompt es: { s: sustantivo, e: estilo (forma masculina) | null, a: acción | null, l: lugar | null }

// ---------- Utilidades ----------
const azar = (lista) => lista[Math.floor(Math.random() * lista.length)];
const sustPorTexto = Object.fromEntries(SUSTANTIVOS.map((x) => [x.t, x]));
const estiloPorClave = Object.fromEntries(ESTILOS.map((x) => [x[0], x]));

function texto(p) {
  const partes = [p.s];
  if (p.e) {
    const genero = sustPorTexto[p.s]?.g === "f" ? 1 : 0;
    partes.push(estiloPorClave[p.e]?.[genero] ?? p.e);
  }
  if (p.a) partes.push(p.a);
  if (p.l) partes.push(p.l);
  return partes.join(" ");
}
const esFavorito = (p) => favoritos.some((f) => texto(f) === texto(p));

// Elementos que aparecen en los favoritos, por categoría
function elementosFavoritos(campo) {
  return [...new Set(favoritos.map((f) => f[campo]).filter(Boolean))];
}

// Devuelve la lista de la que elegir según el modo del generador
function bolsa(campo, completa, modo, avisos, nombre) {
  if (modo === "todo") return completa;
  const favs = elementosFavoritos(campo);
  if (modo === "favoritos") {
    if (favs.length) return favs;
    avisos.push(`aún no tienes ${nombre} favoritos`);
    return completa;
  }
  // modo "reto": todo lo que no esté en favoritos
  const resto = completa.filter((x) => !favs.includes(x));
  if (resto.length) return resto;
  avisos.push(`ya tienes todos los ${nombre} en favoritos`);
  return completa;
}

// ---------- Generar ----------
function generar() {
  const nivel = Number(document.querySelector("input[name=nivel]:checked").value);
  const conEstilo = document.getElementById("con-estilo").checked;
  const modo = document.querySelector("input[name=modo]:checked").value;
  const avisos = [];

  let p;
  // Unos cuantos intentos para no repetir el prompt anterior
  for (let i = 0; i < 10; i++) {
    p = {
      s: azar(bolsa("s", SUSTANTIVOS.map((x) => x.t), modo, avisos, "sustantivos")),
      e: conEstilo ? azar(bolsa("e", ESTILOS.map((x) => x[0]), modo, avisos, "estilos")) : null,
      a: nivel >= 2 ? azar(bolsa("a", ACCIONES, modo, avisos, "acciones")) : null,
      l: nivel >= 3 ? azar(bolsa("l", LUGARES, modo, avisos, "lugares")) : null,
    };
    if (!actual || texto(p) !== texto(actual)) break;
  }

  actual = p;
  historial = [p, ...historial.filter((h) => texto(h) !== texto(p))].slice(0, 20);
  guardar(CLAVE_HIST, historial);

  const unicos = [...new Set(avisos)];
  document.getElementById("aviso").textContent =
    unicos.length ? `Nota: ${unicos.join(", ")}; se ha usado la lista completa.` : "";
  pintar();
}

function alternarFavorito(p) {
  if (esFavorito(p)) favoritos = favoritos.filter((f) => texto(f) !== texto(p));
  else favoritos = [p, ...favoritos];
  guardar(CLAVE_FAVS, favoritos);
  pintar();
}

// ---------- Pintar la interfaz ----------
function filaLista(p) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto(p);
  const btn = document.createElement("button");
  btn.textContent = esFavorito(p) ? "★" : "☆";
  btn.title = esFavorito(p) ? "Quitar de favoritos" : "Añadir a favoritos";
  btn.onclick = () => alternarFavorito(p);
  li.append(span, btn);
  return li;
}

function pintar() {
  const btnFav = document.getElementById("btn-fav");
  if (actual) {
    document.getElementById("prompt").textContent = texto(actual);
    btnFav.disabled = false;
    btnFav.textContent = esFavorito(actual) ? "★ Favorito" : "☆ Favorito";
  }
  document.getElementById("historial").replaceChildren(...historial.map(filaLista));
  const lista = document.getElementById("lista-favoritos");
  lista.replaceChildren(...favoritos.map(filaLista));
  if (!favoritos.length) lista.innerHTML = "<li class='ayuda'>Todavía no tienes favoritos. Marca prompts con ☆.</li>";
  document.getElementById("contador-fav").textContent = favoritos.length;
}

// ---------- Eventos ----------
document.getElementById("btn-generar").onclick = generar;
document.getElementById("btn-fav").onclick = () => actual && alternarFavorito(actual);
document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("activa", t === tab));
    document.querySelectorAll(".vista").forEach((v) =>
      v.classList.toggle("oculta", v.id !== `vista-${tab.dataset.vista}`));
  };
});

pintar();
