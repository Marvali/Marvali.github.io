/* ---------- CONTENT (edit here) ---------- */
const UI = {
  en: {
    nav_projects: "Projects", nav_cv: "CV", nav_contact: "Contact",
    hero_eyebrow: "// portfolio · 2026",
    hero_h1a: "I build AI systems", hero_h1b: "and think like an attacker.",
    hero_lead: "Software developer with a cybersecurity and applied AI background. Information Systems Engineering at Universidad de Alcalá.",
    cta_projects: "Explore projects", cta_cv: "Download CV (PDF)", scroll: "scroll ↓",
    projects_title: "Selected projects", cv_title: "Curriculum",
    contact_title: "Contact", contact_lead: "Open to internships and collaborations.",
    code: "View code on GitHub ↗", wip: "In progress", nocode: "Course work — no public repository",
    nav_news: "News", news_title: "News & finds", news_curated: "Picked by me", news_auto: "Trending on GitHub this week",
    news_updated: "Updated", news_empty: "Nothing new yet — the list refreshes every Monday.", news_open: "Open on GitHub ↗",
    tab_repos: "Repos", tab_cve: "CVE of the week", tab_ai: "AI papers", tab_cyber: "Security papers", tab_classics: "Classics",
    note_repos: "New GitHub repositories gaining stars this week, on topics I follow.",
    note_cve: "Vulnerabilities added this week to CISA's Known Exploited Vulnerabilities catalog — exploited in the wild.",
    note_ai: "Most upvoted papers of the week on Hugging Face Daily Papers.",
    note_cyber: "New arXiv cs.CR papers this week, ranked by relevance to my interests (LLM security, malware, reverse engineering…).",
    note_classics: "One landmark paper per domain, rotating every week.",
    feed_empty: "Nothing here yet — feeds refresh every Monday.",
    close: "Close", news_q: "Want more?", news_cta: "Get informed!", swipe: "scroll to explore", proj_note: "Click one to open it full screen", photos_title: "Beyond the code", news_all: "See the full list", story_hint: "keep scrolling ↓", prev: "Previous", next: "Next"
  },
  es: {
    nav_projects: "Proyectos", nav_cv: "CV", nav_contact: "Contacto",
    hero_eyebrow: "// portfolio · 2026",
    hero_h1a: "Construyo sistemas de IA", hero_h1b: "y pienso como un atacante.",
    hero_lead: "Desarrollador de software con experiencia en ciberseguridad e IA aplicada. Ingeniería de Sistemas de Información en la Universidad de Alcalá.",
    cta_projects: "Explorar proyectos", cta_cv: "Descargar CV (PDF)", scroll: "desliza ↓",
    projects_title: "Proyectos seleccionados", cv_title: "Currículum",
    contact_title: "Contacto", contact_lead: "Abierto a prácticas y colaboraciones.",
    code: "Ver código en GitHub ↗", wip: "En curso", nocode: "Trabajo académico — sin repositorio público",
    nav_news: "Noticias", news_title: "Noticias y hallazgos", news_curated: "Selección propia", news_auto: "Tendencias de GitHub esta semana",
    news_updated: "Actualizado", news_empty: "Todavía nada nuevo: la lista se actualiza cada lunes.", news_open: "Abrir en GitHub ↗",
    tab_repos: "Repos", tab_cve: "CVE de la semana", tab_ai: "Papers de IA", tab_cyber: "Papers de seguridad", tab_classics: "Clásicos",
    note_repos: "Repositorios nuevos de GitHub que ganan estrellas esta semana, sobre temas que sigo.",
    note_cve: "Vulnerabilidades añadidas esta semana al catálogo KEV de la CISA: se están explotando en el mundo real.",
    note_ai: "Papers más votados de la semana en Hugging Face Daily Papers.",
    note_cyber: "Papers nuevos de arXiv cs.CR esta semana, ordenados por relevancia para mis intereses (seguridad de LLM, malware, ingeniería inversa…).",
    note_classics: "Un paper de referencia por ámbito, que cambia cada semana.",
    feed_empty: "Todavía no hay nada: los feeds se actualizan cada lunes.",
    close: "Cerrar", news_q: "¿Quieres más?", news_cta: "¡Infórmate!", swipe: "desliza para explorar", proj_note: "Pulsa uno para abrirlo a pantalla completa", photos_title: "Fuera del código", news_all: "Ver la lista completa", story_hint: "sigue bajando ↓", prev: "Anterior", next: "Siguiente"
  }
};

const BASE = "https://github.com/Marvali/";
const PROJECTS = [
  { hue: 275, wip: true,
    title: { en: "Thesis: Secure On-Premise LLM", es: "TFG: LLM seguro on-premise" },
    tag: { en: "Query confidential documents without data leaving", es: "Consulta documentos confidenciales sin que los datos salgan" },
    desc: {
      en: "A self-hosted LLM with a hybrid RAG pipeline (BM25 keyword search + dense vector retrieval) so organizations can query internal documents without data ever leaving their infrastructure. Security scope: offline inference, document-level access control at retrieval time, audit logging, and testing against prompt injection and sensitive-data leakage.",
      es: "Un LLM autoalojado con un pipeline RAG híbrido (búsqueda por palabras BM25 + recuperación vectorial densa) para que las organizaciones consulten sus documentos internos sin que los datos salgan de su infraestructura. Alcance de seguridad: inferencia aislada, control de acceso por documento en la recuperación, registro de auditoría y pruebas contra prompt injection y fuga de datos sensibles."
    },
    stats: [["BM25 + dense", { en: "hybrid retrieval", es: "recuperación híbrida" }], ["Access control", { en: "per document, at retrieval", es: "por documento, al recuperar" }], ["ENS · ISO 27001", { en: "aligned with", es: "alineado con" }]],
    stack: ["Local LLMs", "Hybrid RAG", "BM25", "Audit logging", "Prompt-injection testing", "Python"] },

  { repo: "RAG-LLM-", hue: 262,
    title: { en: "F1 Regulations RAG", es: "RAG del reglamento de F1" },
    tag: { en: "Ask questions to the 2026 FIA technical rules", es: "Pregunta al reglamento técnico FIA 2026" },
    desc: {
      en: "A Retrieval-Augmented Generation pipeline: the regulations PDF is split into chunks, embedded and indexed, so a local LLM answers grounded in the actual text instead of its pretraining. It supports both raw semantic search and generated answers.",
      es: "Un pipeline de Retrieval-Augmented Generation: el PDF del reglamento se divide en fragmentos, se vectoriza y se indexa, de modo que un LLM local responde apoyándose en el texto real y no solo en su preentrenamiento. Admite búsqueda semántica directa y respuestas generadas."
    },
    stats: [["FAISS", { en: "vector index", es: "índice vectorial" }], ["MiniLM", { en: "embeddings", es: "embeddings" }], ["Qwen", { en: "local LLM via LM Studio", es: "LLM local con LM Studio" }]],
    stack: ["Python", "FAISS", "Sentence Transformers", "PyPDF", "NumPy", "Pandas", "LM Studio"] },

  { repo: "Vision-Artificial-isaac-diego", hue: 248,
    title: { en: "Pedestrian Detection & Tracking", es: "Detección y seguimiento de peatones" },
    tag: { en: "Classical vision vs. deep learning", es: "Visión clásica frente a deep learning" },
    desc: {
      en: "Computer-vision course work plus a final project that compares classical ACF people detectors (Caltech, INRIA) with YOLOv4. Each person is tracked with a constant-velocity Kalman filter and Hungarian assignment on 1 − IoU, evaluated with IoU and Dice against ground truth.",
      es: "Prácticas de visión artificial y un proyecto final que compara detectores clásicos ACF (Caltech, INRIA) con YOLOv4. Cada persona se sigue con un filtro de Kalman de velocidad constante y asignación húngara sobre 1 − IoU, evaluado con IoU y Dice frente a la verdad terreno."
    },
    stats: [["ACF vs YOLOv4", { en: "detectors compared", es: "detectores comparados" }], ["Kalman", { en: "+ Hungarian tracking", es: "+ seguimiento húngaro" }], ["IoU · Dice", { en: "evaluation", es: "evaluación" }]],
    stack: ["MATLAB", "YOLOv4", "Kalman filter", "HOG + SVM", "GoogLeNet", "GPU"] },

  { repo: "Trabajos-Softcomp-duoq", hue: 178,
    title: { en: "Evolutionary Algorithms for Wind Farms", es: "Algoritmos evolutivos para parques eólicos" },
    tag: { en: "Soft computing applied to energy", es: "Soft computing aplicado a la energía" },
    desc: {
      en: "Soft-computing assignments on evolutionary algorithms. The final project uses Coral Reef Optimization to place wind turbines on a grid, maximizing average power under a Jensen wake model, with caching, parallel evaluation and early stopping.",
      es: "Trabajos de soft computing con algoritmos evolutivos. El proyecto final usa Coral Reef Optimization para colocar aerogeneradores en una malla maximizando la potencia media bajo el modelo de estela de Jensen, con caché, evaluación en paralelo y parada temprana."
    },
    stats: [["~15×", { en: "Numba speed-up on hot routine", es: "aceleración con Numba" }], ["20×20 · 50×50", { en: "grids, 20 and 50 turbines", es: "mallas, 20 y 50 turbinas" }], ["8760 h", { en: "wind series", es: "serie de viento" }]],
    stack: ["Python", "NumPy", "SciPy", "Numba", "joblib", "Matplotlib", "MATLAB"] },

  { repo: "PL1Paradigmas", hue: 30,
    title: { en: "Concurrent Cookie Factory", es: "Fábrica de galletas concurrente" },
    tag: { en: "Threads, shared resources and RMI", es: "Hilos, recursos compartidos y RMI" },
    desc: {
      en: "A cookie factory simulated with Java threads: bakers, ovens and packers share a warehouse and a coffee machine. The server shows its state in a Swing GUI, while a remote client over Java RMI refreshes it every second and can pause or resume individual bakers.",
      es: "Una fábrica de galletas simulada con hilos Java: panaderos, hornos y empaquetadores comparten un almacén y una cafetera. El servidor muestra su estado en una GUI Swing y un cliente remoto por Java RMI lo refresca cada segundo y puede pausar o reanudar panaderos."
    },
    stats: [["Threads", { en: "synchronized actors", es: "actores sincronizados" }], ["RMI", { en: "remote client", es: "cliente remoto" }], ["1 s", { en: "live refresh", es: "refresco en vivo" }]],
    stack: ["Java 23", "Maven", "Swing", "Java RMI", "Concurrency"] },

  { repo: "Recetas-paginasweb-frontYBack", hue: 42,
    title: { en: "Recipe Social Network", es: "Red social de recetas" },
    tag: { en: "Full-stack web architecture", es: "Arquitectura web full-stack" },
    desc: {
      en: "A social network for learning to cook and sharing recipes, built for a web architecture course at Universidad de Alcalá. It includes login and registration, user profiles, a recipe timeline, friend search and messaging.",
      es: "Una red social para aprender a cocinar y compartir recetas, desarrollada para la asignatura de arquitectura web en la Universidad de Alcalá. Incluye registro e inicio de sesión, perfiles, un timeline de recetas, búsqueda de amigos y mensajería."
    },
    stats: [["Front + Back", { en: "end to end", es: "de punta a punta" }], ["PostgreSQL", { en: "database", es: "base de datos" }], ["Tomcat", { en: "deployment", es: "despliegue" }]],
    stack: ["HTML5", "CSS3", "JavaScript", "FastAPI", "Java", "Apache Tomcat", "PostgreSQL"] },

  { repo: "Base-de-datos", hue: 192,
    title: { en: "Cinema Relational Database", es: "Base de datos relacional de cine" },
    tag: { en: "Modeling, triggers and roles in PostgreSQL", es: "Modelado, triggers y roles en PostgreSQL" },
    desc: {
      en: "A relational movie database for PostgreSQL: modeling, CSV loading with cleaning of about 8,000 rows, analytical queries, audit triggers that log changes and recompute average ratings, and four roles with different permissions.",
      es: "Una base de datos relacional de cine para PostgreSQL: modelado, carga desde CSV con depuración de unas 8 000 filas, consultas analíticas, triggers de auditoría que registran cambios y recalculan la puntuación media, y cuatro roles con permisos distintos."
    },
    stats: [["~8,000", { en: "rows cleaned", es: "filas depuradas" }], ["Triggers", { en: "audit + avg score", es: "auditoría + media" }], ["4", { en: "permission roles", es: "roles de permisos" }]],
    stack: ["SQL", "PL/pgSQL", "PostgreSQL 12+", "Python", "psycopg2"] },

  { repo: null, hue: 348,
    title: { en: "Post-Quantum Cryptography Demo", es: "Demo de criptografía post-cuántica" },
    tag: { en: "ML-KEM vs RSA-2048", es: "ML-KEM frente a RSA-2048" },
    desc: {
      en: "A small Python project experimenting with Kyber-512 (ML-KEM) key encapsulation and comparing it with RSA-2048.",
      es: "Un pequeño proyecto en Python que experimenta con la encapsulación de claves Kyber-512 (ML-KEM) y la compara con RSA-2048."
    },
    stats: [["Kyber-512", { en: "ML-KEM", es: "ML-KEM" }], ["vs RSA-2048", { en: "compared", es: "comparado" }], ["Apr 2026", { en: "Cryptography, UAH", es: "Criptografía, UAH" }]],
    stack: ["Python", "Kyber", "ML-KEM", "RSA"] },

  { repo: null, hue: 4,
    title: { en: "Tor & OSINT Security Exercises", es: "Ejercicios de seguridad: Tor y OSINT" },
    tag: { en: "Anonymity limits and digital footprints", es: "Límites del anonimato y huella digital" },
    desc: {
      en: "Two academic exercises: the limits of Tor anonymity against a hardened OPSEC model with a controlled proof of concept, and a team investigation reconstructing a subject's routine and location from public sources, with ethical safeguards.",
      es: "Dos ejercicios académicos: los límites del anonimato de Tor frente a un modelo OPSEC reforzado, con una prueba de concepto controlada, y una investigación en equipo que reconstruye la rutina y ubicación de un sujeto desde fuentes públicas, con salvaguardas éticas."
    },
    stats: [["Tor", { en: "OPSEC analysis", es: "análisis OPSEC" }], ["OSINT", { en: "public sources only", es: "solo fuentes públicas" }], ["Ethics", { en: "built-in safeguards", es: "salvaguardas éticas" }]],
    stack: ["Tor", "OSINT", "OPSEC", "Security"] }
];

/* CV */
const CV = {
  en: [
    { wide: true, h: "Profile", items: [{ t: "Software Development · Cybersecurity · Applied AI", s: "I'm a software developer with an Information Systems Engineering background and hands-on cybersecurity experience. I build applications end to end in Python, Java and SQL, from REST APIs (FastAPI) and databases to full-stack web apps and applied AI systems. On the security side, I come from cyber threat intelligence: OSINT investigations, OPSEC-hardened research environments and systems administration. Right now I'm building a secure, on-premise LLM system for confidential document analysis." }] },
    { h: "Education", items: [{ t: "BSc Information Systems Engineering", s: "Universidad de Alcalá · 2022 – 2027 · coursework completed, thesis in progress" }, { t: "Higher Technician, Telecom & Computer Systems", s: "Salesianos de Atocha, Madrid · 2020 – 2022" }] },
    { h: "Experience", items: [{ t: "Cyber Threat Intelligence Intern (OSINT)", s: "Qintegra · 2022 · OSINT monitoring and strategic reports; sock-puppet personas under strict OPSEC (Tails, segregated networks); forensic acquisition fundamentals" }, { t: "IT Technician (Internship)", s: "OpenSpring S.L. / Datatronics · 2022 · VMs, servers, VoIP, technical support" }] },
    { h: "Skills", items: [{ t: "Languages", s: "Python, MATLAB, Java, C++, SQL, Bash, PowerShell, HTML, CSS" }, { t: "Software & systems", s: "OOP, UML, FastAPI, PostgreSQL, Power BI, Linux, Windows, Docker, Git, virtualization, Jira" }, { t: "Security", s: "OSINT & CTI, OPSEC, forensic acquisition fundamentals, network security, Tor, cryptography" }, { t: "AI", s: "Hybrid RAG, local LLM deployment, AI-assisted development (Claude Code, Codex, GitHub Copilot), evolutionary algorithms, k-NN, SVM, neural networks, object detection & tracking" }] },
    { h: "Certifications", items: [{ t: "Cisco CCNA (Switching, Routing & Wireless), CCNAv7, IT Essentials", s: "Power BI basic course" }] },
    { h: "Languages", items: [{ t: "Spanish", s: "Native" }, { t: "English", s: "B2 spoken/written · C1 reading/listening" }] }
  ],
  es: [
    { wide: true, h: "Perfil", items: [{ t: "Desarrollo de software · Ciberseguridad · IA aplicada", s: "Soy desarrollador de software, con formación en Ingeniería de Sistemas de Información y experiencia práctica en ciberseguridad. Construyo aplicaciones de principio a fin en Python, Java y SQL, desde APIs REST (FastAPI) y bases de datos hasta aplicaciones web full-stack y sistemas de IA aplicada. En seguridad vengo de la inteligencia de amenazas: investigaciones OSINT, entornos de investigación con OPSEC reforzado y administración de sistemas. Ahora mismo desarrollo un sistema LLM seguro y on-premise para analizar documentos confidenciales." }] },
    { h: "Formación", items: [{ t: "Grado en Ingeniería de Sistemas de Información", s: "Universidad de Alcalá · 2022 – 2027 · asignaturas completadas, TFG en curso" }, { t: "Técnico Superior en Telecomunicaciones e Informática", s: "Salesianos de Atocha, Madrid · 2020 – 2022" }] },
    { h: "Experiencia", items: [{ t: "Becario de Cyber Threat Intelligence (OSINT)", s: "Qintegra · 2022 · monitorización OSINT e informes estratégicos; perfiles sock-puppet con OPSEC estricto (Tails, redes segregadas); fundamentos de adquisición forense" }, { t: "Técnico informático (prácticas)", s: "OpenSpring S.L. / Datatronics · 2022 · VMs, servidores, VoIP, soporte técnico" }] },
    { h: "Habilidades", items: [{ t: "Lenguajes", s: "Python, MATLAB, Java, C++, SQL, Bash, PowerShell, HTML, CSS" }, { t: "Software y sistemas", s: "POO, UML, FastAPI, PostgreSQL, Power BI, Linux, Windows, Docker, Git, virtualización, Jira" }, { t: "Seguridad", s: "OSINT y CTI, OPSEC, fundamentos de adquisición forense, seguridad de redes, Tor, criptografía" }, { t: "IA", s: "RAG híbrido, despliegue de LLM locales, desarrollo asistido por IA (Claude Code, Codex, GitHub Copilot), algoritmos evolutivos, k-NN, SVM, redes neuronales, detección y seguimiento de objetos" }] },
    { h: "Certificaciones", items: [{ t: "Cisco CCNA (Switching, Routing & Wireless), CCNAv7, IT Essentials", s: "Curso básico de Power BI" }] },
    { h: "Idiomas", items: [{ t: "Español", s: "Nativo" }, { t: "Inglés", s: "B2 hablado/escrito · C1 lectura/comprensión" }] }
  ]
};

/* ---------- ENGINE ---------- */
let lang = "en";
try { lang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en"); } catch (e) {}
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeUrl = u => (/^https:\/\/github\.com\//.test(u) ? esc(u) : "#");
const pad2 = k => String(k).padStart(2, "0");
const prevH = box => (box.querySelector(".story") && box.querySelector(".story").style.getPropertyValue("--h")) || 6;

let NEWS = null, FEEDS = null, curProj = null, opener = null, lastFocus = null, newsSel = "cve";
// photos for the "Beyond the code" panel (hidden while empty):
// { src: "assets/photos/mountain.jpg", alt: { en: "…", es: "…" } }
const PHOTOS = [];
const FEED_HUE = { curated: 38, cve: 4, cyber: 348, ai: 265, repos: 32, classics: 178 };
const NEWS_ORDER = ["cve", "ai", "cyber", "repos", "classics", "curated"];
const FEED_SRC = {
  cve: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
  ai: "https://huggingface.co/papers",
  cyber: "https://arxiv.org/list/cs.CR/recent",
  repos: "https://github.com/trending",
};

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = UI[lang][el.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  renderMain();
  renderNews();
  if (curProj !== null) fillProject();
}

/* ---------- MAIN STORY: about -> projects (horizontal) -> CV ---------- */
function storyShell(box, panels, t) {
  box.innerHTML = `
    <div class="story" style="--h:${prevH(box)}"><div class="stage" data-idx="0">
      ${panels.map((p, k) => `
        <article class="panel ${p.cls || ""}${k === 0 ? " on" : ""}" id="${p.id}" style="--hue:${p.hue}" aria-label="${esc(p.label)}">${p.html}</article>`).join("")}
      <nav class="snav" aria-label="Sections">${panels.map((p, k) =>
        `<button class="${k === 0 ? "on" : ""}" data-k="${k}" aria-label="${esc(p.label)}" title="${esc(p.label)}"></button>`).join("")}</nav>
      <p class="mono shint">${t.swipe}</p><div class="sbar"></div>
    </div></div>`;
  layoutStories();
}

function renderMain() {
  const t = UI[lang], cv = CV[lang], join = lang === "es" ? " y " : " & ";
  const panels = [];

  panels.push({ id: "hero", label: "Isaac Marval", hue: 38, cls: "heropanel", html: `
    <div class="p-left">
      <p class="mono">${t.hero_eyebrow}</p>
      <h1>${t.hero_h1a}<br><em>${t.hero_h1b}</em></h1>
      <p class="lead">${t.hero_lead}</p>
      <div class="cta"><a class="btn" href="#projects">${t.cta_projects}</a>
        <a class="btn ghost" href="assets/Isaac_Marval_CV.pdf" download>${t.cta_cv}</a></div>
    </div>
    <figure class="portrait" hidden><img src="assets/me.jpg" alt="Isaac Marval"
      onload="this.parentElement.hidden=false" onerror="this.parentElement.remove()"></figure>` });

  panels.push({ id: "projects", label: t.projects_title, hue: 38, cls: "hpanel", html: `
    <div class="hhead"><h3 class="p-title sm">${t.projects_title}</h3><p class="mono">${t.proj_note} →</p></div>
    <div class="htrack">${PROJECTS.map((p, i) => `
      <button class="pcard" data-i="${i}" style="--hue:${p.hue}">
        <span class="pc-in">
          <span class="pc-n">${pad2(i + 1)}</span>
          <span class="pc-t">${p.title[lang]}${p.wip ? ` <em class="wip">${t.wip}</em>` : ""}</span>
          <span class="pc-tag">${p.tag[lang]}</span>
          <span class="pc-go" aria-hidden="true">↗</span>
        </span>
      </button>`).join("")}</div>` });

  const groups = [[0, 1, 2], [3, 4, 5]], hues = [262, 38];
  const titles = [cv[0].h + join + cv[2].h, cv[3].h + join + cv[4].h];
  groups.forEach((g, gi) => {
    panels.push({ id: gi === 0 ? "cv" : "cv" + gi, label: titles[gi], hue: hues[gi], cls: "cvpanel", html: `
      <div class="p-left"><h3 class="p-title">${titles[gi]}</h3>
        ${gi === groups.length - 1 ? `<a class="btn" href="assets/Isaac_Marval_CV.pdf" download>${t.cta_cv}</a>` : ""}</div>
      <div class="cvcols n${g.length}">${g.map(k => `
        <div class="cvblk"><h4 class="mono">${cv[k].h}</h4>
          ${cv[k].items.map(i => `<div class="cvit"><b>${i.t}</b><span>${i.s}</span></div>`).join("")}</div>`).join("")}</div>` });
  });

  if (PHOTOS.length) panels.push({ id: "photos", label: t.photos_title, hue: 330, html: `
    <div class="p-left"><h3 class="p-title">${t.photos_title}</h3></div>
    <div class="pgrid">${PHOTOS.slice(0, 5).map(p =>
      `<img src="${esc(p.src)}" alt="${esc((p.alt || {})[lang] || "")}" loading="lazy">`).join("")}</div>` });

  storyShell($("#mainStory"), panels, t);
}

/* ---------- NEWS STORY ---------- */
function newsFeeds() {
  const t = UI[lang], n = NEWS || {}, f = FEEDS || {};
  const arx = id => (/^\d{4}\.\d{4,5}$/.test(id) ? `https://arxiv.org/abs/${id}` : "#");
  const feed = (key, updated, items) => ({
    key, items, updated,
    title: key === "curated" ? t.news_curated : t["tab_" + key],
    note: key === "curated" ? "" : t["note_" + key],
  });
  return [
    feed("curated", "", (n.curated || []).map(c => ({
      tag: `${esc(c.tag)} · ${esc(c.date)}`, title: esc(c.title),
      desc: esc((c.note || {})[lang] || (c.note || {}).en), meta: t.news_open, href: safeUrl(c.url) }))),
    feed("cve", f.updated, (f.cves || []).map(c => ({
      tag: esc(c.id), title: `${esc(c.vendor)} ${esc(c.product)}${c.ransom ? ' <em class="wip">ransomware</em>' : ""}`,
      desc: esc(c.desc), meta: esc(c.added),
      href: /^CVE-\d{4}-\d{4,}$/.test(c.id) ? `https://nvd.nist.gov/vuln/detail/${esc(c.id)}` : "#" }))),
    feed("ai", f.updated, (f.ai || []).map(p => ({
      tag: "arXiv " + esc(p.id), title: esc(p.title), desc: esc(p.summary),
      meta: `▲ ${Number(p.upvotes) || 0}`, href: arx(p.id) }))),
    feed("cyber", f.updated, (f.cyber || []).map(p => ({
      tag: esc(p.published), title: esc(p.title), desc: `${esc(p.authors)} — ${esc(p.summary)}`,
      meta: "arXiv " + esc(p.id), href: arx(p.id) }))),
    feed("repos", n.updated, (n.auto || []).map(x => ({
      tag: esc(x.topic), title: esc(x.name), desc: esc(x.desc),
      meta: `★ ${Number(x.stars) || 0}${x.lang ? " · " + esc(x.lang) : ""}`, href: safeUrl(x.url) }))),
    feed("classics", f.updated, (f.classics || []).map(p => ({
      tag: esc(p.domain === "ai" ? "AI" : "Security"), title: `${esc(p.title)} (${esc(p.year)})`,
      desc: `${esc((p.why || {})[lang] || "")} · ${esc(p.authors)}`, meta: "arXiv " + esc(p.id), href: arx(p.id) }))),
  ].filter(x => x.items.length).sort((a, b) => NEWS_ORDER.indexOf(a.key) - NEWS_ORDER.indexOf(b.key));
}

function renderNews() {
  const box = $("#newsBox");
  if (!NEWS && !FEEDS) { box.innerHTML = ""; return; }
  const t = UI[lang], feeds = newsFeeds();
  if (!feeds.length) { box.innerHTML = `<p class="mono">${t.feed_empty}</p>`; return; }
  const sel = feeds.some(f => f.key === newsSel) ? newsSel : feeds[0].key;
  box.innerHTML = `
    <div class="nwrap">
      <div class="nleft">
      <h2 class="ntitle">${t.news_q}<br><em>${t.news_cta}</em></h2>
      <ul class="nmenu" role="tablist" aria-label="${esc(t.news_title)}">${feeds.map((fd, k) => `
        <li><button class="nm" role="tab" data-feed="${fd.key}" style="--hue:${FEED_HUE[fd.key]}">
          <span class="mono">${pad2(k + 1)}</span><span class="nt">${esc(fd.title)}</span><span class="mono nc">${fd.items.length}</span>
        </button></li>`).join("")}</ul>
      </div>
      <div class="ncontent" id="ncontent" role="tabpanel"></div>
    </div>`;
  showFeed(sel);
}

function showFeed(key, animate) {
  const fd = newsFeeds().find(f => f.key === key);
  if (!fd) return;
  const t = UI[lang], wrap = $(".nwrap"), c = $("#ncontent");
  wrap.style.setProperty("--hue", FEED_HUE[key]);
  document.querySelectorAll(".nm").forEach(b => {
    const on = b.dataset.feed === key;
    b.classList.toggle("on", on); b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
  });
  c.innerHTML = `
    <div class="nhead"><p class="mono">${esc(fd.note)}${fd.updated ? ` · ${t.news_updated} ${esc(fd.updated)}` : ""}</p>
      ${FEED_SRC[key] ? `<a class="p-all" href="${FEED_SRC[key]}" target="_blank" rel="noopener">${t.news_all} ↗</a>` : ""}</div>
    <ul class="srows${fd.items.length === 1 ? " solo" : ""}">${fd.items.slice(0, 6).map(it => `
      <li><a class="srow" href="${it.href}" target="_blank" rel="noopener">
        <span class="mono tag">${it.tag}</span><span class="mono meta">${it.meta}</span>
        <b>${it.title}</b><span class="desc">${it.desc}</span>
      </a></li>`).join("")}</ul>`;
  if (animate) { c.classList.remove("swap"); void c.offsetWidth; c.classList.add("swap"); }
}

const loadJson = u => fetch(u, { cache: "no-cache" }).then(r => (r.ok ? r.json() : null)).catch(() => null);
loadJson("news.json").then(j => { NEWS = j; renderNews(); });
loadJson("feeds.json").then(j => { FEEDS = j; renderNews(); });

/* ---------- STORY ENGINE ----------
   Each .story is a tall block with a sticky 100vh stage. Scroll position picks the active
   panel; panels with a .htrack also slide it sideways 1:1 with the scroll. */
function layoutStories() {
  document.querySelectorAll(".story").forEach(st => {
    let total = 0;
    st.querySelectorAll(".panel").forEach(p => {
      let w = 1;
      const tr = p.querySelector(".htrack");
      if (tr) {
        p._ov = Math.max(0, tr.offsetWidth - p.clientWidth);
        w = Math.max(1.2, p._ov / innerHeight + 0.5);
      }
      p._w = w; total += w;
    });
    st.style.setProperty("--h", total + 1);
  });
  updateStory();
}

function updateStory() {
  const vh = innerHeight;
  document.querySelectorAll(".story").forEach(st => {
    const stage = $(".stage", st), panels = [...st.querySelectorAll(".panel")], dots = [...st.querySelectorAll(".snav button")];
    const travel = Math.max(1, st.offsetHeight - vh);
    const y = Math.min(Math.max(-st.getBoundingClientRect().top, 0), travel);
    let start = 0, idx = 0;
    panels.forEach((p, k) => {
      p._start = start; p._len = (p._w || 1) * vh;
      if (y >= start) idx = k;
      start += p._len;
    });
    panels.forEach((p, k) => {
      p.classList.toggle("on", k === idx);
      p.classList.toggle("past", k < idx);
      const tr = p.querySelector(".htrack");
      if (tr) tr.style.transform = `translate3d(${-Math.min(p._ov || 0, Math.max(0, y - p._start - 0.25 * vh))}px,0,0)`;
    });
    stage.style.setProperty("--p", y / travel);
    stage.dataset.idx = idx;
    dots.forEach((d, k) => d.classList.toggle("on", k === idx));
  });
}

function scrollToPanel(el) {
  const st = el.closest(".story");
  scrollTo({ top: st.getBoundingClientRect().top + scrollY + (el._start || 0) + 2, behavior: "smooth" });
}

addEventListener("scroll", () => requestAnimationFrame(updateStory), { passive: true });
addEventListener("resize", layoutStories);
addEventListener("load", layoutStories);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutStories);

/* ---------- PROJECT OVERLAY (full screen, grows out of the card) ---------- */
const pov = document.createElement("div");
pov.id = "pov"; pov.className = "pov";
pov.setAttribute("role", "dialog"); pov.setAttribute("aria-modal", "true"); pov.setAttribute("aria-hidden", "true");
pov.innerHTML = '<button class="pov-close" id="povClose"></button><div class="pov-body" id="povBody"></div>';
document.body.appendChild(pov);

function fillProject() {
  const p = PROJECTS[curProj], t = UI[lang], n = PROJECTS.length;
  const prev = PROJECTS[(curProj + n - 1) % n], next = PROJECTS[(curProj + 1) % n];
  $("#povClose").innerHTML = `<span aria-hidden="true">✕</span> ${t.close}`;
  $("#povBody").innerHTML = `
    <p class="mono">${pad2(curProj + 1)} / ${pad2(n)}</p>
    <h2 class="pov-t">${p.title[lang]}${p.wip ? ` <em class="wip">${t.wip}</em>` : ""}</h2>
    <p class="pov-tag">${p.tag[lang]}</p>
    <p class="pov-desc">${p.desc[lang]}</p>
    <div class="stats big">${p.stats.map(s => `<div class="stat"><b>${s[0]}</b><span>${s[1][lang]}</span></div>`).join("")}</div>
    <div class="chips">${p.stack.map(x => `<span>${x}</span>`).join("")}</div>
    <div class="pov-actions">${p.repo
      ? `<a class="btn solid" href="${BASE}${p.repo}" target="_blank" rel="noopener">${t.code}</a>`
      : `<span class="mono">${t.nocode}</span>`}</div>
    <div class="pov-nav"><button data-go="-1">← ${prev.title[lang]}</button><button data-go="1">${next.title[lang]} →</button></div>`;
}
function setRect(el) {
  const r = el && el.getBoundingClientRect();
  const ok = r && r.width && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  const v = ok ? [r.top, innerWidth - r.right, innerHeight - r.bottom, r.left] : [innerHeight / 2, innerWidth / 2, innerHeight / 2, innerWidth / 2];
  ["--ct", "--cr", "--cb", "--cl"].forEach((k, i) => pov.style.setProperty(k, v[i] + "px"));
}
function openProject(i, el) {
  lastFocus = document.activeElement; opener = el; curProj = i;
  setRect(el); fillProject(); pov.scrollTop = 0;
  document.documentElement.style.setProperty("--hue", PROJECTS[i].hue);
  document.body.style.overflow = "hidden";
  pov.getBoundingClientRect();  // commit the start rect before the transition begins
  pov.setAttribute("aria-hidden", "false"); pov.classList.add("open");
  $("#povClose").focus({ preventScroll: true });
}
function closeProject() {
  if (curProj === null) return;
  setRect($(`.pcard[data-i="${curProj}"]`));
  pov.classList.remove("open"); pov.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.documentElement.style.setProperty("--hue", 38);
  curProj = null;
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
function goProject(dir) {
  curProj = (curProj + dir + PROJECTS.length) % PROJECTS.length;
  document.documentElement.style.setProperty("--hue", PROJECTS[curProj].hue);
  fillProject(); pov.scrollTop = 0;
}
pov.addEventListener("click", e => {
  if (e.target.closest("#povClose")) closeProject();
  const g = e.target.closest("[data-go]");
  if (g) goProject(+g.dataset.go);
});
document.addEventListener("keydown", e => {
  if (curProj === null) return;
  if (e.key === "Escape") closeProject();
  else if (e.key === "ArrowRight") goProject(1);
  else if (e.key === "ArrowLeft") goProject(-1);
  else if (e.key === "Tab") {  // keep focus inside the overlay
    const f = [...pov.querySelectorAll("button,a[href]")];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- GLOBAL CLICKS ---------- */
document.addEventListener("click", e => {
  const card = e.target.closest(".pcard");
  if (card) { openProject(+card.dataset.i, card); return; }

  const nm = e.target.closest(".nm");
  if (nm) { newsSel = nm.dataset.feed; showFeed(newsSel, true); return; }

  const dot = e.target.closest(".snav button");
  if (dot) {
    const st = dot.closest(".story");
    scrollToPanel(st.querySelectorAll(".panel")[+dot.dataset.k]);
    return;
  }

  const a = e.target.closest('a[href^="#"]');
  if (a) {
    const id = a.getAttribute("href").slice(1);
    if (id === "top") { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = id && document.getElementById(id);
    if (el && el.classList.contains("panel")) { e.preventDefault(); scrollToPanel(el); return; }
  }

  const lb = e.target.closest(".lang button");
  if (lb) { lang = lb.dataset.lang; try { localStorage.setItem("lang", lang); } catch (err) {} render(); }
});

document.addEventListener("keydown", e => {
  const nm = e.target.closest && e.target.closest(".nm");
  if (!nm || !["ArrowDown", "ArrowUp"].includes(e.key)) return;
  e.preventDefault();
  const all = [...document.querySelectorAll(".nm")], i = all.indexOf(nm);
  const next = all[(i + (e.key === "ArrowDown" ? 1 : -1) + all.length) % all.length];
  newsSel = next.dataset.feed; showFeed(newsSel, true); next.focus();
});

/* theme toggle (dark by default) */
$("#themeBtn").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("theme2", dark ? "dark" : "light"); } catch (e) {}
});

/* cursor glow follows the mouse */
addEventListener("pointermove", e => {
  const g = $("#glow");
  g.style.setProperty("--x", e.clientX + "px");
  g.style.setProperty("--y", e.clientY + "px");
});

render();
