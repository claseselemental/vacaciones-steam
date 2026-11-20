/* Vacaciones Digitales STEAM · Elemental
   Para cambiar precios, fechas, horarios o el número de WhatsApp, edita solo este bloque. */
const CONFIG = {
  whatsapp: '59171537266',            // 591 + número, sin espacios
  inicio: 'lunes 7 de diciembre de 2026',
  duracion: '2 semanas · 6 clases de 1 h 30 min',
  precios: [259, 239, 219],           // precio por curso con 1, 2 y 3 o más cursos
  mapa: 'https://www.google.com/maps/search/?api=1&query=Elemental+Bolivia+Av.+6+de+Agosto+2570+La+Paz',
  videoRegalo: 'QEk_d3gRSiI',
};

const LMV = 'Lunes, miércoles y viernes';
const MJS = 'Martes, jueves y sábado';

const CURSOS = {
  minecraft: {
    nombre: 'Programación con Minecraft Education', corto: 'Minecraft Education',
    nivel: 'Básico / intermedio', edadMin: 8, dias: LMV, hora: '11:00 – 12:30',
    color: '#2E9E3F', video: 'DbpY-ljkIgY', img: 'assets/cursos/minecraft.webp',
    desc: 'Aprenden a programar desde cero dentro de los mundos de Minecraft: le dan órdenes a su «Agente» para que construya, mine y resuelva retos por ellos.',
    logro: 'Automatizan grandes construcciones con un solo comando.',
    clases: ['Introducción a la programación', 'Estructuras cíclicas', 'Ciclo For y ciclo While', 'Estructuras condicionales', 'Condicionales simples y dobles', 'Funciones y automatización de tareas'],
  },
  mcreator: {
    nombre: 'Creación de mods para Minecraft con MCreator', corto: 'Mods con MCreator',
    nivel: 'Básico', edadMin: 8, dias: LMV, hora: '15:00 – 16:30',
    color: '#1F4FBF', video: 'hltRsYg3JiU', img: 'assets/cursos/mcreator.webp',
    desc: 'Dejan de usar mods de otros y hacen los suyos: diseñan bloques, herramientas, armaduras y criaturas, y programan cómo se comportan dentro del juego.',
    logro: 'Terminan con su propio mod: objetos, un bioma y una criatura creados por ellos.',
    clases: ['Introducción a MCreator y texturas 2D', 'Herramientas y bloques para Minecraft', 'Armaduras y programación de eventos', 'Biomas y dimensiones', 'Modelado 3D básico con Blockbench', 'Entidades e inteligencia artificial básica'],
  },
  roblox: {
    nombre: 'Programación de videojuegos con Roblox Studio', corto: 'Roblox Studio',
    nivel: 'Básico / intermedio', edadMin: 8, dias: MJS, hora: '11:00 – 12:30',
    color: '#E11D2E', video: 'oufphkJkNjY', img: 'assets/cursos/roblox.webp',
    desc: 'No es un curso para jugar Roblox: es para crear juegos. Modelan escenarios en 3D y programan con Lua las trampas, plataformas y mecánicas de su propio mundo.',
    logro: 'Publican su juego en Roblox para que sus amigos lo jueguen.',
    clases: ['Introducción a Roblox Studio', 'Modelado 3D y efectos visuales', 'Generación de terrenos', 'Introducción a la programación con Lua', 'Sentencias cíclicas', 'Publicación del juego en Internet'],
  },
  python: {
    nombre: 'Programación con Python', corto: 'Python',
    nivel: 'Básico', edadMin: 12, dias: LMV, hora: '17:00 – 18:30',
    color: '#17889A', video: 'ir0nZneDBwA', img: 'assets/cursos/python.webp',
    desc: 'Su primer lenguaje de programación «de verdad», uno de los más usados en el mundo. Escriben código real y lo ven funcionar desde la primera clase.',
    logro: 'Crean calculadoras y pequeños juegos de preguntas con su propio código.',
    clases: ['Introducción a Python y entorno de trabajo', 'Tipos de datos', 'Entrada de datos con input()', 'Condicionales if, else y elif', 'Bucles for y while', 'Listas y funciones'],
  },
  unity: {
    nombre: 'Programación de videojuegos con Unity', corto: 'Unity',
    nivel: 'Básico', edadMin: 12, dias: MJS, hora: '15:00 – 16:30',
    color: '#E07A0C', video: 'UlBRMi-rAoY', img: 'assets/cursos/unity.webp',
    desc: 'El motor con el que se hacen videojuegos profesionales. Arman un juego 2D de plataformas y lo programan de forma visual, conectando nodos en lugar de escribir código.',
    logro: 'Exportan un juego 2D con menú y niveles, listo para compartir.',
    clases: ['Introducción a Unity y su entorno de trabajo', 'Personajes, escenarios y capas en 2D', 'Programación visual con Script Machine', 'Físicas y sentencias de control', 'Varias escenas y menús', 'Planificación y exportación del juego'],
  },
  lego: {
    nombre: 'Robótica con Lego', corto: 'Robótica con Lego',
    nivel: 'Básico', edadMin: 8, dias: LMV, hora: '15:00 – 16:30',
    color: '#1E88C7', video: 'vRQ1OgIdfGM', img: 'assets/cursos/lego.webp',
    desc: 'Arman y programan un robot LEGO Mindstorms EV3 con sus propias manos: motores, engranajes y sensores que le permiten moverse y reaccionar solo.',
    logro: 'Su robot esquiva obstáculos, sigue una línea y reconoce colores.',
    clases: ['Introducción a LEGO Mindstorms EV3', 'Programación básica y control de motores', 'Estructuras y mecanismos de movimiento', 'Sensores y actuadores', 'Robot evasor de obstáculos', 'Robot seguidor de línea y detector de colores'],
  },
  mbot: {
    nombre: 'Robótica con mBot', corto: 'Robótica con mBot',
    nivel: 'Básico', edadMin: 10, dias: LMV, hora: '11:00 – 12:30',
    color: '#2447A8', video: '5QEtL1sIUH4', img: 'assets/cursos/mbot.webp',
    desc: 'Conocen por dentro un robot educativo y lo programan por bloques: controlan sus ruedas, luces y sonidos, y le enseñan a «sentir» lo que tiene alrededor.',
    logro: 'Su robot esquiva obstáculos, sigue una línea y compite en mini sumo.',
    clases: ['Introducción al mBot', 'Programación básica del mBot', 'Actuadores: motores, luces y sonido', 'Introducción a los sensores', 'mBot evasor de obstáculos', 'mBot seguidor de línea y mini sumo'],
  },
};

const MODALIDADES = {
  online: {
    titulo: 'Online', emoji: '💻', etiqueta: 'Modalidad online',
    h1: 'Cursos vacacionales online',
    lead: 'Clases en vivo por Zoom con profesor, desde casa. Para estudiantes de toda Bolivia.',
    mascota: 'assets/pj/p2.webp',
    cursos: ['minecraft', 'mcreator', 'roblox', 'python', 'unity'],
    datos: [
      ['Inicio', 'Lunes 7 de diciembre'],
      ['Duración', '2 semanas · 3 clases por semana'],
      ['Edades', '8 a 17 años, según el curso'],
      ['Modalidad', 'En vivo por Zoom'],
    ],
    necesita: '💻 Solo necesita una computadora o laptop con internet.',
  },
  presencial: {
    titulo: 'Presencial', emoji: '🏫', etiqueta: 'Modalidad presencial',
    h1: 'Cursos vacacionales presenciales en La Paz',
    lead: 'Clases en nuestras aulas de la Av. 6 de Agosto, con el profesor al lado. Solo en la ciudad de La Paz.',
    mascota: 'assets/pj/p10.webp',
    cursos: ['minecraft', 'mcreator', 'roblox', 'lego', 'mbot', 'python'],
    datos: [
      ['Inicio', 'Lunes 7 de diciembre'],
      ['Duración', '2 semanas · 3 clases por semana'],
      ['Edades', '8 a 17 años, según el curso'],
      ['Dónde', 'Av. 6 de Agosto #2570, piso 2'],
    ],
    necesita: '🤖 Usan las computadoras y los kits de robótica de la academia.',
  },
};

/* ---------- utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bs = (n) => 'Bs ' + n.toLocaleString('es-BO');
const precioPor = (n) => CONFIG.precios[Math.min(Math.max(n, 1), CONFIG.precios.length) - 1];
const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;
const MAX_TRAMO = CONFIG.precios.length;
const PRECIO_MIN = CONFIG.precios[MAX_TRAMO - 1];
// api.whatsapp.com conserva los emojis; wa.me a veces los cambia por «?»
const waLink = (texto) => `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(texto)}`;
const edadTexto = (c) => `${c.edadMin} a 17 años`;

/* ---------- estado de la reserva ---------- */
const CLAVE = 'elemental-vacacional-reserva-v2';
let estado = { items: {}, alumnos: {}, tutor: '', telefono: '' };
try {
  const g = JSON.parse(localStorage.getItem(CLAVE));
  if (g && typeof g.items === 'object') estado = { ...estado, ...g };
} catch (e) { /* sin almacenamiento: la página funciona igual */ }
const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) {} };

const lineas = () => Object.keys(estado.items)
  .filter((k) => estado.items[k] > 0 && CURSOS[k.split(':')[1]] && MODALIDADES[k.split(':')[0]])
  .map((k) => { const [mod, id] = k.split(':'); return { k, mod, id, curso: CURSOS[id], cant: estado.items[k] }; });
const totalCupos = () => lineas().reduce((s, l) => s + l.cant, 0);
const alumno = (k, j) => {
  const a = (estado.alumnos[k] || [])[j];
  return a && typeof a === 'object' ? a : { n: typeof a === 'string' ? a : '', e: '' };
};

function cambiar(k, delta) {
  const n = Math.max(0, Math.min(9, (estado.items[k] || 0) + delta));
  if (n === 0) { delete estado.items[k]; delete estado.alumnos[k]; }
  else { estado.items[k] = n; estado.alumnos[k] = (estado.alumnos[k] || []).slice(0, n); }
  guardar(); pintar();
}

/* ---------- precios ---------- */
function preciosHTML() {
  const base = CONFIG.precios[0];
  return CONFIG.precios.map((p, i) => {
    const n = i + 1;
    const ultimo = n === MAX_TRAMO;
    const ahorro = (base - p) * n;
    return `<li class="${ultimo ? 'best' : ''}">
      ${ultimo ? '<em class="tag">⭐ Mejor precio</em>' : ''}
      <span>${ultimo ? `${n} o más cursos` : plural(n, 'curso', 'cursos')}</span>
      <b>${bs(p)}</b>
      <small>${n === 1 ? 'precio normal' : 'cada uno'}</small>
      ${ahorro > 0 ? `<i class="save">Ahorras ${bs(ahorro)}${ultimo ? ' o más' : ''}</i>` : '<i class="save save-none">—</i>'}
    </li>`;
  }).join('');
}

/* ---------- portada de curso y video (se carga solo al hacer clic) ---------- */
function portada(img, video, titulo) {
  if (!video) return `<div class="cover"><img src="${img}" alt="${esc(titulo)}" loading="lazy" width="960" height="540"></div>`;
  return `
  <button class="cover" type="button" data-video="${video}" aria-label="Ver video: ${esc(titulo)}">
    <img src="${img}" alt="" loading="lazy" width="960" height="540">
    <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>
    <span class="cover-tag">▶ Ver video</span>
  </button>`;
}

const ICONOS = {
  video: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10.5l5-3v9l-5-3z"/></svg>',
  diploma: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 8h10M7 11h6"/><circle cx="16" cy="17" r="2.5"/><path d="M14.8 19l-.8 3 2-1 2 1-.8-3"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 10.5l2.2 2.2L15 8"/></svg>',
  trofeo: '<svg viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 21h8M9 18h6"/></svg>',
};

/* ---------- pestañas de modalidad ---------- */
function tarjeta(mod, id) {
  const c = CURSOS[id];
  const k = `${mod}:${id}`;
  return `
  <article class="course" style="--c:${c.color}" data-course="${k}">
    ${portada(c.img, c.video, c.nombre)}
    <div class="course-body">
      <p class="course-level">${esc(c.nivel)} · ${esc(edadTexto(c))}</p>
      <h3>${esc(c.nombre)}</h3>
      <dl class="when">
        <div><dt>📆 Días</dt><dd>${esc(c.dias)}</dd></div>
        <div><dt>⏰ Hora</dt><dd>${esc(c.hora)}</dd></div>
      </dl>
      <p class="course-desc">${esc(c.desc)}</p>
      <p class="course-goal"><b>🏁 Al terminar:</b> ${esc(c.logro)}</p>
      <details>
        <summary>Contenido del curso</summary>
        <ol>${c.clases.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>
      </details>
      <div class="course-foot" data-foot="${k}"></div>
    </div>
  </article>`;
}

function panelModalidad(mod) {
  const m = MODALIDADES[mod];
  const otra = mod === 'online' ? 'presencial' : 'online';
  return `
  <div class="mhero mhero-${mod}">
    <div class="wrap mhero-grid">
      <div>
        <p class="eyebrow">Vacaciones Digitales STEAM · ${esc(m.etiqueta)}</p>
        <h1>${esc(m.h1)}</h1>
        <p class="lead">${esc(m.lead)}</p>
        <dl class="facts">${m.datos.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>
        <div class="mhero-actions">
          ${mod === 'presencial' ? `<a class="chip-btn" href="${CONFIG.mapa}" target="_blank" rel="noopener">📍 Ver ubicación en Google Maps</a>` : ''}
          <a class="chip-btn chip-switch" href="#${otra}">⇄ Cambiar a ${otra}</a>
        </div>
      </div>
      <img class="mhero-mascot" src="${m.mascota}" alt="" width="640" height="640">
    </div>
  </div>

  <div class="wrap price-strip">
    <p class="kicker">Promo vacaciones</p>
    <h2>Mientras más cursos, pagas menos por cada uno</h2>
    <ul class="prices prices-compact">${preciosHTML()}</ul>
    <p class="fine-left">Vale para un mismo niño o para hermanos y primos que se inscriban en la misma reserva. Puedes mezclar online y presencial.</p>
  </div>

  <div class="wrap block block-tight">
    <div class="section-head">
      <p class="kicker">Paso 1 · Elige los cursos</p>
      <h2>${m.cursos.length} cursos ${mod === 'online' ? 'online' : 'presenciales'}</h2>
      <p class="section-lead">Mira el video, revisa el horario y agrégalo a tu reserva. ${esc(m.necesita)}</p>
    </div>
    <div class="courses">${m.cursos.map((id) => tarjeta(mod, id)).join('')}</div>
    <a class="switch-card" href="#${otra}">
      <span aria-hidden="true">${MODALIDADES[otra].emoji}</span>
      <span><small>¿Prefieres otra modalidad?</small><b>Ver cursos ${otra === 'online' ? 'online por Zoom' : 'presenciales en La Paz'}</b></span>
      <span aria-hidden="true">⇄</span>
    </a>
  </div>

  <div class="band">
    <div class="wrap block">
      <div class="perks-head">
        <img src="assets/pj/p12.webp" alt="" width="640" height="640" loading="lazy">
        <div>
          <p class="kicker">Incluido en todos los cursos</p>
          <h2>Lo que recibe tu hijo con la inscripción</h2>
        </div>
      </div>
      <ul class="perks">
        <li><i aria-hidden="true">${ICONOS.video}</i><b>Clases grabadas</b><span>Cada clase se sube a una lista de YouTube para los inscritos. Si falta un día, la ve cuando pueda.</span></li>
        <li><i aria-hidden="true">${ICONOS.diploma}</i><b>Certificado</b><span>Al terminar recibe su certificado por las 9 horas de formación del curso.</span></li>
        <li><i aria-hidden="true">${ICONOS.chat}</i><b>Seguimiento</b><span>Tomamos asistencia, te avisamos si no llegó y tienes un grupo de WhatsApp con el equipo.</span></li>
        <li><i aria-hidden="true">${ICONOS.trofeo}</i><b>Proyecto propio</b><span>Aprenden haciendo: cada curso termina con un proyecto creado por tu hijo.</span></li>
      </ul>
      <div class="raffle">
        <div class="raffle-imgs">
          <img src="assets/kit-escena.webp" alt="Kit armable estilo Lego de Minecraft, armado" width="900" height="601" loading="lazy">
          <img src="assets/kit-caja.webp" alt="Caja del kit armable estilo Lego de Minecraft" width="900" height="600" loading="lazy">
        </div>
        <div>
          <h3>🎉 Participa en el sorteo</h3>
          <p>Todos los inscritos entran al sorteo de <b>gift cards de Robux</b> y <b>kits armables estilo Lego</b>.</p>
        </div>
      </div>
      <div class="gift">
        <div class="gift-video">${portada('assets/cursos/tinkercad.webp', CONFIG.videoRegalo, 'Diseño 3D con Tinkercad')}</div>
        <div>
          <span class="pill pill-yellow">🎁 Gratis con cualquier curso</span>
          <h3>Curso de Diseño 3D con Tinkercad</h3>
          <p>Todos los inscritos, online o presenciales, reciben automáticamente un curso online de diseño 3D: aprenden a crear objetos en tres dimensiones a partir de figuras simples.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="closing">
    <div class="wrap closing-grid">
      <img src="assets/pj/p3.webp" alt="" width="640" height="640" loading="lazy">
      <div>
        <p class="kicker kicker-light">Paso 2 · Reserva</p>
        <h2>Envía tu reserva por WhatsApp</h2>
        <p>Abre tu reserva, revisa el total y confírmala. Te llega un mensaje listo a nuestro WhatsApp y te respondemos para confirmar el cupo y coordinar el pago.</p>
        <div class="btn-row" data-closing-cta></div>
      </div>
    </div>
  </div>`;
}

/* ---------- reserva: cálculo, avisos y mensaje ---------- */
function avisoHorario(ls) {
  const porHora = {};
  ls.forEach((l) => { const h = `${l.curso.dias} · ${l.curso.hora}`; (porHora[h] = porHora[h] || []).push(l); });
  return Object.entries(porHora)
    .filter(([, g]) => g.length > 1)
    .map(([h, g]) => `<b>${g.map((l) => `${esc(l.curso.corto)} (${MODALIDADES[l.mod].titulo.toLowerCase()})`).join(' y ')}</b> son a la misma hora: ${esc(h.toLowerCase())}. Está bien si son para niños distintos.`);
}

function sugerencia(n) {
  if (n === 0) return '';
  if (n >= MAX_TRAMO) return `🎉 Tienes el mejor precio: ${bs(precioPor(n))} por curso.`;
  return `Agrega 1 curso más y cada uno baja a ${bs(precioPor(n + 1))}.`;
}

const NUM = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

function mensaje() {
  const ls = lineas();
  const n = totalCupos();
  const pu = precioPor(n);
  const ahorro = (CONFIG.precios[0] - pu) * n;
  const filas = [];
  let i = 0;
  ls.forEach((l) => {
    const m = MODALIDADES[l.mod];
    filas.push([
      `${NUM[i] || `${i + 1}.`} *${l.curso.corto}* · ${m.emoji} ${m.titulo}${l.cant > 1 ? ` · ${l.cant} cupos` : ''}`,
      `     🗓️ ${l.curso.dias} · ⏰ ${l.curso.hora}`,
    ].join('\n'));
    i++;
  });
  return [
    '¡Hola, Elemental! 👋',
    'Quiero reservar en *Vacaciones Digitales STEAM* 🚀',
    `📅 Inicio: ${CONFIG.inicio}`,
    '',
    '📚 *Cursos:*',
    ...filas,
    '',
    `💰 *Total:* ${plural(n, 'curso', 'cursos')} × ${bs(pu)} = *${bs(n * pu)}*`,
    ...(ahorro > 0 ? [`🎉 Ahorro con la promo: ${bs(ahorro)}`] : []),
    '',
    `🙋 Tutor: ${estado.tutor.trim()}`,
    `📱 WhatsApp: ${(estado.telefono || '').trim()}`,
    '',
    '¡Gracias! 😊',
  ].join('\n');
}

function cuerpoReserva() {
  const ls = lineas();
  const n = totalCupos();
  if (n === 0) {
    return `
    <div class="empty">
      <img src="assets/pj/p6.webp" alt="" width="640" height="640">
      <h3>Tu reserva está vacía</h3>
      <p>Agrega los cursos que te interesen y aquí verás el total con tu descuento.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#online" data-close-cart>💻 Cursos online</a>
        <a class="btn btn-navy" href="#presencial" data-close-cart>🏫 Cursos presenciales</a>
      </div>
    </div>`;
  }
  const pu = precioPor(n);
  const ahorro = (CONFIG.precios[0] - pu) * n;
  const avisos = avisoHorario(ls);
  return `
  <ul class="lines">
    ${ls.map((l) => `
    <li class="line" style="--c:${l.curso.color}">
      <div class="line-top">
        <div>
          <span class="pill">${MODALIDADES[l.mod].emoji} ${MODALIDADES[l.mod].titulo}</span>
          <h3>${esc(l.curso.corto)}</h3>
          <p>${esc(l.curso.dias)} · ${esc(l.curso.hora)}</p>
        </div>
        <div class="qty" role="group" aria-label="Cupos para ${esc(l.curso.corto)}">
          <button type="button" data-step="-1" data-k="${l.k}" aria-label="Quitar un cupo">−</button>
          <output>${l.cant}</output>
          <button type="button" data-step="1" data-k="${l.k}" aria-label="Agregar un cupo">+</button>
        </div>
      </div>
    </li>`).join('')}
  </ul>

  ${avisos.length ? `<div class="notice">${avisos.map((a) => `<p>⚠️ ${a}</p>`).join('')}</div>` : ''}

  <div class="summary">
    <div class="sum-row"><span>${plural(n, 'curso', 'cursos')} × ${bs(pu)}</span><b>${bs(n * pu)}</b></div>
    ${ahorro > 0 ? `<div class="sum-row sum-save"><span>Ahorras con la promo</span><b>${bs(ahorro)}</b></div>` : ''}
    <p class="sum-hint">${sugerencia(n)}</p>
  </div>

  <div class="who">
    <label class="field">
      <span>Tu nombre (papá, mamá o tutor)</span>
      <input type="text" data-tutor value="${esc(estado.tutor)}" placeholder="Nombre y apellido" autocomplete="name" maxlength="60" required>
    </label>
    <label class="field">
      <span>Tu número de WhatsApp</span>
      <input type="tel" inputmode="tel" data-telefono value="${esc(estado.telefono)}" placeholder="Ej.: 71234567" autocomplete="tel" maxlength="20" required>
    </label>
    <p class="field-error" data-error hidden></p>
  </div>

  <details class="preview">
    <summary>👀 Ver el mensaje que se enviará</summary>
    <pre data-preview>${esc(mensaje())}</pre>
  </details>

  <button class="btn btn-wa btn-block btn-big" type="button" data-send>
    Confirmar reserva por WhatsApp <span aria-hidden="true">→</span>
  </button>
  <p class="fine">Se abrirá tu WhatsApp con el mensaje listo: solo presiona enviar. Te respondemos por el mismo chat para confirmar el cupo y coordinar el pago.</p>
  <button class="link-btn" type="button" data-vaciar>🗑️ Vaciar reserva</button>`;
}

/* ---------- pintar todo lo que depende de la reserva ---------- */
function pintar() {
  const n = totalCupos();

  $$('[data-foot]').forEach((el) => {
    const k = el.dataset.foot;
    const cant = estado.items[k] || 0;
    el.innerHTML = cant
      ? `<div class="added"><span>En tu reserva</span>
           <div class="qty"><button type="button" data-step="-1" data-k="${k}" aria-label="Quitar un cupo">−</button><output>${cant}</output><button type="button" data-step="1" data-k="${k}" aria-label="Agregar un cupo">+</button></div>
         </div>
         <button class="btn btn-wa btn-block" type="button" data-open-cart>Ver mi reserva</button>`
      : `<div class="from"><b>${bs(CONFIG.precios[0])}</b><span>por curso</span><small>· ${bs(PRECIO_MIN)} c/u llevando ${MAX_TRAMO} o más</small></div>
         <button class="btn btn-primary btn-block" type="button" data-add="${k}">+ Agregar a mi reserva</button>`;
    el.closest('.course').classList.toggle('is-added', cant > 0);
  });

  $$('[data-closing-cta]').forEach((el) => {
    const consulta = `<a class="btn btn-ghost" href="${waLink('¡Hola, Elemental! 👋 Tengo una consulta sobre las Vacaciones Digitales STEAM.')}" target="_blank" rel="noopener">💬 Tengo una consulta</a>`;
    el.innerHTML = n
      ? `<button class="btn btn-wa" type="button" data-open-cart>Revisar y enviar mi reserva</button>${consulta}`
      : `<a class="btn btn-yellow" href="#${el.closest('[data-panel]').dataset.panel}" data-to-courses>↑ Elegir cursos</a>${consulta}`;
  });

  $$('[data-cart-count]').forEach((el) => { el.textContent = n; el.hidden = n === 0; });

  const bar = $('[data-cartbar]');
  bar.hidden = n === 0;
  document.body.classList.toggle('has-bar', n > 0);
  if (n > 0) {
    $('[data-bar-total]').textContent = `${plural(n, 'curso', 'cursos')} · ${bs(n * precioPor(n))}`;
    $('[data-bar-hint]').textContent = sugerencia(n);
  }

  $('[data-cart-body]').innerHTML = cuerpoReserva();
}

const actualizarVistaPrevia = () => { const p = $('[data-preview]'); if (p) p.textContent = mensaje(); };

/* ---------- contador de visitas (GoatCounter) ---------- */
// Las visitas se cuentan por pestaña (#online, #presencial...) y los clics importantes como eventos.
const colaConteo = [];
function contar(datos) {
  const gc = window.goatcounter;
  if (gc && gc.count) { try { gc.count(datos); } catch (_) { /* sin conteo */ } } else colaConteo.push(datos);
}
window.addEventListener('load', () => { colaConteo.splice(0).forEach(contar); });
const contarEvento = (nombre, titulo) => contar({ path: nombre, title: titulo || nombre, event: true });
let ultimaVista = '';
function contarVista(nombre) {
  if (nombre === ultimaVista) return;
  ultimaVista = nombre;
  contar({ path: `/vacaciones-steam/${nombre === 'inicio' ? '' : '#' + nombre}`, title: `Pestaña: ${nombre}` });
}

/* ---------- navegación por pestañas ---------- */
const PESTANAS = ['inicio', 'online', 'presencial', 'nosotros'];
const ALIAS = { elemental: 'nosotros', '': 'inicio' };
function mostrar(nombre, subir = true) {
  nombre = ALIAS[nombre] ?? nombre;
  if (!PESTANAS.includes(nombre)) nombre = 'inicio';
  $$('[data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== nombre; });
  $$('[data-tab]').forEach((t) => {
    const activa = t.dataset.tab === nombre;
    t.classList.toggle('is-active', activa);
    if (activa) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
  });
  $$('iframe[data-yt]').forEach((f) => { if (f.closest('[hidden]')) f.remove(); });
  if (subir) window.scrollTo(0, 0);
  contarVista(nombre);
}
const pestanaActual = () => location.hash.replace('#', '').split('?')[0];

/* ---------- eventos ---------- */
const dialogo = $('#cart');
let avisoTimer;
function toast(texto) {
  const t = $('[data-toast]');
  t.textContent = texto; t.hidden = false;
  clearTimeout(avisoTimer);
  avisoTimer = setTimeout(() => { t.hidden = true; }, 2600);
}

function errorReserva(texto, campo) {
  const e = $('[data-error]');
  e.textContent = texto; e.hidden = false;
  if (campo) {
    campo.classList.add('is-bad');
    campo.focus({ preventScroll: true });
    campo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('button, a');
  if (!el) return;
  if (el.matches('a[href*="api.whatsapp.com"]')) contarEvento('clic-consulta-whatsapp', 'Clic: consulta por WhatsApp');

  if (el.dataset.video) {
    contarEvento(`video-${el.dataset.video}`, 'Vio video de curso');
    const marco = document.createElement('div');
    marco.className = 'cover cover-live';
    marco.innerHTML = `<iframe data-yt src="https://www.youtube-nocookie.com/embed/${el.dataset.video}?autoplay=1&rel=0&modestbranding=1" title="Video del curso" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    el.replaceWith(marco);
    return;
  }
  if (el.dataset.slide) {
    const track = $('.carousel-track', el.closest('[data-carousel]'));
    track.scrollBy({ left: Number(el.dataset.slide) * track.clientWidth * 0.8, behavior: 'smooth' });
    return;
  }
  if (el.hasAttribute('data-to-courses')) {
    e.preventDefault();
    const destino = $('.courses', el.closest('[data-panel]'));
    if (destino) destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (el.dataset.add) {
    cambiar(el.dataset.add, 1);
    contarEvento(`agregar-${el.dataset.add}`, 'Agregó curso a la reserva');
    const n = totalCupos();
    toast(n === 1 ? '✅ Agregado a tu reserva' : `✅ Agregado · ahora cada curso te sale a ${bs(precioPor(n))}`);
    return;
  }
  if (el.dataset.step) { cambiar(el.dataset.k, Number(el.dataset.step)); return; }
  if (el.hasAttribute('data-open-cart')) { contarEvento('abrir-reserva', 'Abrió su reserva'); if (!dialogo.open) dialogo.showModal(); return; }
  if (el.hasAttribute('data-close-cart')) { dialogo.close(); return; }
  if (el.hasAttribute('data-vaciar')) {
    if (window.confirm('¿Deseas eliminar todos los cursos de tu reserva?')) {
      estado.items = {}; estado.alumnos = {}; guardar(); pintar();
    }
    return;
  }
  if (el.hasAttribute('data-send')) {
    $$('.is-bad', dialogo).forEach((x) => x.classList.remove('is-bad'));
    if (!estado.tutor.trim()) return errorReserva('Escribe tu nombre para que sepamos a quién responder.', $('[data-tutor]'));
    if ((estado.telefono || '').replace(/\D/g, '').length < 7) return errorReserva('Escribe tu número de WhatsApp para contactarte.', $('[data-telefono]'));
    contarEvento('reserva-enviada', 'Envió reserva por WhatsApp');
    window.open(waLink(mensaje()), '_blank', 'noopener');
  }
});

document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.matches('[data-tutor]')) {
    estado.tutor = el.value;
  } else if (el.matches('[data-telefono]')) {
    estado.telefono = el.value;
  } else return;
  el.classList.remove('is-bad');
  const err = $('[data-error]'); if (err) err.hidden = true;
  guardar(); actualizarVistaPrevia();
});

dialogo.addEventListener('click', (e) => { if (e.target === dialogo) dialogo.close(); });
window.addEventListener('hashchange', () => { if (dialogo.open) dialogo.close(); mostrar(pestanaActual()); });

/* ---------- inicio ---------- */
$('[data-panel="online"]').innerHTML = panelModalidad('online');
$('[data-panel="presencial"]').innerHTML = panelModalidad('presencial');
$$('[data-prices]').forEach((el) => { el.innerHTML = preciosHTML(); });
$$('[data-wa-consulta]').forEach((el) => { el.href = waLink('¡Hola, Elemental! 👋 Quiero información sobre las Vacaciones Digitales STEAM.'); });
pintar();
mostrar(pestanaActual(), false);

/* ---------- contador público de visitas ---------- */
// Si el contador no responde (o está desactivado en GoatCounter) la franja queda oculta.
fetch('https://elemental-vacaciones.goatcounter.com/counter/TOTAL.json')
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then((d) => {
    const n = Number(String(d.count || '').replace(/\D/g, ''));
    if (!n) return;
    $('[data-visitas-num]').textContent = n.toLocaleString('es-BO');
    $('[data-visitas]').hidden = false;
  })
  .catch(() => { /* sin contador visible */ });
