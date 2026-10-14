/* ---------- CONTENT (edit here) ---------- */
const UI = {
  en: {
    nav_projects: "Projects", nav_cv: "CV", nav_contact: "Contact",
    hero_eyebrow: "// portfolio · 2026",
    hero_h1a: "I build things", hero_h1b: "to understand how they work.",
    hero_lead: "Software developer with a cybersecurity and applied AI background. Information Systems Engineering at Universidad de Alcalá — open any project below.",
    cta_projects: "Explore projects ↓", cta_cv: "Download CV (PDF)", scroll: "scroll ↓",
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
    feed_empty: "Nothing here yet — feeds refresh every Monday."
  },
  es: {
    nav_projects: "Proyectos", nav_cv: "CV", nav_contact: "Contacto",
    hero_eyebrow: "// portfolio · 2026",
    hero_h1a: "Construyo cosas", hero_h1b: "para entender cómo funcionan.",
    hero_lead: "Desarrollador de software con experiencia en ciberseguridad e IA aplicada. Ingeniería de Sistemas de Información en la Universidad de Alcalá: abre cualquier proyecto.",
    cta_projects: "Explorar proyectos ↓", cta_cv: "Descargar CV (PDF)", scroll: "desliza ↓",
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
    feed_empty: "Todavía no hay nada: los feeds se actualizan cada lunes."
  }
};

const BASE = "https://github.com/Marvali/";
const PROJECTS = [
  { hue: 300, wip: true,
    title: { en: "Thesis: Secure On-Premise LLM", es: "TFG: LLM seguro on-premise" },
    tag: { en: "Query confidential documents without data leaving", es: "Consulta documentos confidenciales sin que los datos salgan" },
    desc: {
      en: "A self-hosted LLM with a hybrid RAG pipeline (BM25 keyword search + dense vector retrieval) so organizations can query internal documents without data ever leaving their infrastructure. Security scope: offline inference, document-level access control at retrieval time, audit logging, and testing against prompt injection and sensitive-data leakage.",
      es: "Un LLM autoalojado con un pipeline RAG híbrido (búsqueda por palabras BM25 + recuperación vectorial densa) para que las organizaciones consulten sus documentos internos sin que los datos salgan de su infraestructura. Alcance de seguridad: inferencia aislada, control de acceso por documento en la recuperación, registro de auditoría y pruebas contra prompt injection y fuga de datos sensibles."
    },
    stats: [["BM25 + dense", { en: "hybrid retrieval", es: "recuperación híbrida" }], ["Access control", { en: "per document, at retrieval", es: "por documento, al recuperar" }], ["ENS · ISO 27001", { en: "aligned with", es: "alineado con" }]],
    stack: ["Local LLMs", "Hybrid RAG", "BM25", "Audit logging", "Prompt-injection testing", "Python"] },

  { repo: "RAG-LLM-", hue: 265,
    title: { en: "F1 Regulations RAG", es: "RAG del reglamento de F1" },
    tag: { en: "Ask questions to the 2026 FIA technical rules", es: "Pregunta al reglamento técnico FIA 2026" },
    desc: {
      en: "A Retrieval-Augmented Generation pipeline: the regulations PDF is split into chunks, embedded and indexed, so a local LLM answers grounded in the actual text instead of its pretraining. It supports both raw semantic search and generated answers.",
      es: "Un pipeline de Retrieval-Augmented Generation: el PDF del reglamento se divide en fragmentos, se vectoriza y se indexa, de modo que un LLM local responde apoyándose en el texto real y no solo en su preentrenamiento. Admite búsqueda semántica directa y respuestas generadas."
    },
    stats: [["FAISS", { en: "vector index", es: "índice vectorial" }], ["MiniLM", { en: "embeddings", es: "embeddings" }], ["Qwen", { en: "local LLM via LM Studio", es: "LLM local con LM Studio" }]],
    stack: ["Python", "FAISS", "Sentence Transformers", "PyPDF", "NumPy", "Pandas", "LM Studio"] },

  { repo: "Vision-Artificial-isaac-diego", hue: 190,
    title: { en: "Pedestrian Detection & Tracking", es: "Detección y seguimiento de peatones" },
    tag: { en: "Classical vision vs. deep learning", es: "Visión clásica frente a deep learning" },
    desc: {
      en: "Computer-vision course work plus a final project that compares classical ACF people detectors (Caltech, INRIA) with YOLOv4. Each person is tracked with a constant-velocity Kalman filter and Hungarian assignment on 1 − IoU, evaluated with IoU and Dice against ground truth.",
      es: "Prácticas de visión artificial y un proyecto final que compara detectores clásicos ACF (Caltech, INRIA) con YOLOv4. Cada persona se sigue con un filtro de Kalman de velocidad constante y asignación húngara sobre 1 − IoU, evaluado con IoU y Dice frente a la verdad terreno."
    },
    stats: [["ACF vs YOLOv4", { en: "detectors compared", es: "detectores comparados" }], ["Kalman", { en: "+ Hungarian tracking", es: "+ seguimiento húngaro" }], ["IoU · Dice", { en: "evaluation", es: "evaluación" }]],
    stack: ["MATLAB", "YOLOv4", "Kalman filter", "HOG + SVM", "GoogLeNet", "GPU"] },

  { repo: "Trabajos-Softcomp-duoq", hue: 150,
    title: { en: "Evolutionary Algorithms for Wind Farms", es: "Algoritmos evolutivos para parques eólicos" },
    tag: { en: "Soft computing applied to energy", es: "Soft computing aplicado a la energía" },
    desc: {
      en: "Soft-computing assignments on evolutionary algorithms. The final project uses Coral Reef Optimization to place wind turbines on a grid, maximizing average power under a Jensen wake model, with caching, parallel evaluation and early stopping.",
      es: "Trabajos de soft computing con algoritmos evolutivos. El proyecto final usa Coral Reef Optimization para colocar aerogeneradores en una malla maximizando la potencia media bajo el modelo de estela de Jensen, con caché, evaluación en paralelo y parada temprana."
    },
    stats: [["~15×", { en: "Numba speed-up on hot routine", es: "aceleración con Numba" }], ["20×20 · 50×50", { en: "grids, 20 and 50 turbines", es: "mallas, 20 y 50 turbinas" }], ["8760 h", { en: "wind series", es: "serie de viento" }]],
    stack: ["Python", "NumPy", "SciPy", "Numba", "joblib", "Matplotlib", "MATLAB"] },

  { repo: "PL1Paradigmas", hue: 20,
    title: { en: "Concurrent Cookie Factory", es: "Fábrica de galletas concurrente" },
    tag: { en: "Threads, shared resources and RMI", es: "Hilos, recursos compartidos y RMI" },
    desc: {
      en: "A cookie factory simulated with Java threads: bakers, ovens and packers share a warehouse and a coffee machine. The server shows its state in a Swing GUI, while a remote client over Java RMI refreshes it every second and can pause or resume individual bakers.",
      es: "Una fábrica de galletas simulada con hilos Java: panaderos, hornos y empaquetadores comparten un almacén y una cafetera. El servidor muestra su estado en una GUI Swing y un cliente remoto por Java RMI lo refresca cada segundo y puede pausar o reanudar panaderos."
    },
    stats: [["Threads", { en: "synchronized actors", es: "actores sincronizados" }], ["RMI", { en: "remote client", es: "cliente remoto" }], ["1 s", { en: "live refresh", es: "refresco en vivo" }]],
    stack: ["Java 23", "Maven", "Swing", "Java RMI", "Concurrency"] },

  { repo: "Recetas-paginasweb-frontYBack", hue: 350,
    title: { en: "Recipe Social Network", es: "Red social de recetas" },
    tag: { en: "Full-stack web architecture", es: "Arquitectura web full-stack" },
    desc: {
      en: "A social network for learning to cook and sharing recipes, built for a web architecture course at Universidad de Alcalá. It includes login and registration, user profiles, a recipe timeline, friend search and messaging.",
      es: "Una red social para aprender a cocinar y compartir recetas, desarrollada para la asignatura de arquitectura web en la Universidad de Alcalá. Incluye registro e inicio de sesión, perfiles, un timeline de recetas, búsqueda de amigos y mensajería."
    },
    stats: [["Front + Back", { en: "end to end", es: "de punta a punta" }], ["PostgreSQL", { en: "database", es: "base de datos" }], ["Tomcat", { en: "deployment", es: "despliegue" }]],
    stack: ["HTML5", "CSS3", "JavaScript", "FastAPI", "Java", "Apache Tomcat", "PostgreSQL"] },

  { repo: "Base-de-datos", hue: 215,
    title: { en: "Cinema Relational Database", es: "Base de datos relacional de cine" },
    tag: { en: "Modeling, triggers and roles in PostgreSQL", es: "Modelado, triggers y roles en PostgreSQL" },
    desc: {
      en: "A relational movie database for PostgreSQL: modeling, CSV loading with cleaning of about 8,000 rows, analytical queries, audit triggers that log changes and recompute average ratings, and four roles with different permissions.",
      es: "Una base de datos relacional de cine para PostgreSQL: modelado, carga desde CSV con depuración de unas 8 000 filas, consultas analíticas, triggers de auditoría que registran cambios y recalculan la puntuación media, y cuatro roles con permisos distintos."
    },
    stats: [["~8,000", { en: "rows cleaned", es: "filas depuradas" }], ["Triggers", { en: "audit + avg score", es: "auditoría + media" }], ["4", { en: "permission roles", es: "roles de permisos" }]],
    stack: ["SQL", "PL/pgSQL", "PostgreSQL 12+", "Python", "psycopg2"] },

  { repo: null, hue: 120,
    title: { en: "Post-Quantum Cryptography Demo", es: "Demo de criptografía post-cuántica" },
    tag: { en: "ML-KEM vs RSA-2048", es: "ML-KEM frente a RSA-2048" },
    desc: {
      en: "A small Python project experimenting with Kyber-512 (ML-KEM) key encapsulation and comparing it with RSA-2048.",
      es: "Un pequeño proyecto en Python que experimenta con la encapsulación de claves Kyber-512 (ML-KEM) y la compara con RSA-2048."
    },
    stats: [["Kyber-512", { en: "ML-KEM", es: "ML-KEM" }], ["vs RSA-2048", { en: "compared", es: "comparado" }], ["Apr 2026", { en: "Cryptography, UAH", es: "Criptografía, UAH" }]],
    stack: ["Python", "Kyber", "ML-KEM", "RSA"] },

  { repo: null, hue: 0,
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

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = UI[lang][el.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));

  const open = new Set([...document.querySelectorAll(".proj.open")].map(p => p.dataset.repo));
  $("#projectList").innerHTML = PROJECTS.map((p, i) => `
    <li class="proj ${open.has(String(p.repo || i)) ? "open" : ""}" data-repo="${p.repo || i}" style="--hue:${p.hue}">
      <button class="proj-head" aria-expanded="${open.has(String(p.repo || i))}">
        <span class="proj-n">${String(i + 1).padStart(2, "0")}</span>
        <span class="proj-t">${p.title[lang]}${p.wip ? ` <em class="wip">${UI[lang].wip}</em>` : ""}<small>${p.tag[lang]}</small></span>
        <span class="plus" aria-hidden="true"></span>
      </button>
      <div class="proj-body"><div class="proj-inner"><div class="proj-content">
        <p>${p.desc[lang]}</p>
        <div class="stats">${p.stats.map(s => `<div class="stat"><b>${s[0]}</b><span>${s[1][lang]}</span></div>`).join("")}</div>
        <div class="chips">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>
        ${p.repo ? `<a class="proj-link" href="${BASE}${p.repo}" target="_blank" rel="noopener">${UI[lang].code}</a>` : `<span class="mono">${UI[lang].nocode}</span>`}
      </div></div></div>
    </li>`).join("");

  $("#cvGrid").innerHTML = CV[lang].map(b => `
    <div class="cv-block${b.wide ? " wide" : ""}"><h3>${b.h}</h3>
      ${b.items.map(i => `<div class="cv-item"><b>${i.t}</b><span>${i.s}</span></div>`).join("")}
    </div>`).join("");
  renderNews();
}

/* ---------- NEWS ---------- */
let NEWS = null;
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeUrl = u => (/^https:\/\/github\.com\//.test(u) ? esc(u) : "#");

let FEEDS = null, heroTimer = null;
const FEED_HUE = { curated: 300, cve: 5, ai: 265, cyber: 195, repos: 38, classics: 150 };

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
  ].filter(x => x.items.length);
}

function renderNews() {
  const box = $("#newsBox");
  clearInterval(heroTimer);
  if (!NEWS && !FEEDS) { box.innerHTML = ""; return; }
  const t = UI[lang], feeds = newsFeeds();
  if (!feeds.length) { box.innerHTML = `<p class="mono">${t.feed_empty}</p>`; return; }

  // featured carousel: every curated item + the top item of each automatic feed
  const slides = feeds.flatMap(fd => (fd.key === "curated" ? fd.items : fd.items.slice(0, 1)).map(it => ({ fd, it })));
  const hero = `
    <div class="hs" aria-roledescription="carousel">
      <div class="hs-track">${slides.map(({ fd, it }) => `
        <a class="slide" style="--hue:${FEED_HUE[fd.key]}" href="${it.href}" target="_blank" rel="noopener">
          <span class="mono">${esc(fd.title)} · ${it.tag}</span>
          <h3>${it.title}</h3><p>${it.desc}</p>
          <span class="mono">${it.meta} ↗</span>
        </a>`).join("")}</div>
      <div class="hs-dots">${slides.map((_, k) => `<button class="hs-dot${k ? "" : " on"}" aria-label="${k + 1}"></button>`).join("")}</div>
    </div>`;

  const rails = feeds.filter(fd => fd.key !== "curated").map(fd => `
    <div class="rail-wrap">
      <div class="rail-top">
        <h3 class="mono">${esc(fd.title)}</h3>
        <span class="mono rail-note">${esc(fd.note)}${fd.updated ? ` · ${t.news_updated} ${esc(fd.updated)}` : ""}</span>
        <span class="rail-arrows"><button data-dir="-1" aria-label="Previous">←</button><button data-dir="1" aria-label="Next">→</button></span>
      </div>
      <div class="rail">${fd.items.map(it => `
        <a class="ncard" style="--hue:${FEED_HUE[fd.key]}" href="${it.href}" target="_blank" rel="noopener" draggable="false">
          <span class="mono">${it.tag}</span><b>${it.title}</b><span class="ndesc">${it.desc}</span><span class="mono nmeta">${it.meta}</span>
        </a>`).join("")}</div>
    </div>`).join("");

  box.innerHTML = hero + rails;
  initHero();
}

function initHero() {
  const track = $(".hs-track");
  if (!track) return;
  const n = track.children.length, dots = [...document.querySelectorAll(".hs-dot")], wrap = $(".hs");
  let cur = 0, paused = false;
  const mark = () => dots.forEach((d, k) => d.classList.toggle("on", k === cur));
  const go = k => { cur = (k + n) % n; track.scrollTo({ left: cur * track.clientWidth, behavior: "smooth" }); mark(); };
  track.addEventListener("scroll", () => {
    const k = Math.round(track.scrollLeft / track.clientWidth);
    if (k !== cur) { cur = k; mark(); }
  }, { passive: true });
  dots.forEach((d, k) => { d.onclick = () => go(k); });
  wrap.onmouseenter = wrap.onfocusin = () => { paused = true; };
  wrap.onmouseleave = wrap.onfocusout = () => { paused = false; };
  if (n > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches)
    heroTimer = setInterval(() => { if (!paused && !document.hidden) go(cur + 1); }, 7000);
}

const loadJson = u => fetch(u, { cache: "no-cache" }).then(r => (r.ok ? r.json() : null)).catch(() => null);
loadJson("news.json").then(j => { NEWS = j; renderNews(); });
loadJson("feeds.json").then(j => { FEEDS = j; renderNews(); });

/* rails: drag with the mouse, arrows for everything else (touch/trackpad scroll natively) */
let dragRail = null, dragX = 0, dragL = 0, dragMoved = false;
document.addEventListener("pointerdown", e => {
  const r = e.pointerType === "mouse" && e.target.closest(".rail");
  if (r) { dragRail = r; dragX = e.clientX; dragL = r.scrollLeft; dragMoved = false; }
});
addEventListener("pointermove", e => {
  if (!dragRail) return;
  const dx = e.clientX - dragX;
  if (Math.abs(dx) > 5) { dragMoved = true; dragRail.classList.add("drag"); }
  if (dragMoved) dragRail.scrollLeft = dragL - dx;
});
addEventListener("pointerup", () => { if (dragRail) dragRail.classList.remove("drag"); dragRail = null; });
document.addEventListener("click", e => { if (dragMoved) { e.preventDefault(); e.stopPropagation(); dragMoved = false; } }, true);
document.addEventListener("dragstart", e => { if (e.target.closest && e.target.closest(".rail")) e.preventDefault(); });
document.addEventListener("click", e => {
  const b = e.target.closest(".rail-arrows button");
  if (b) b.closest(".rail-wrap").querySelector(".rail").scrollBy({ left: b.dataset.dir * 330, behavior: "smooth" });
});

document.addEventListener("click", e => {
  const head = e.target.closest(".proj-head");
  if (head) {
    const li = head.parentElement;
    const willOpen = !li.classList.contains("open");
    document.querySelectorAll(".proj.open").forEach(o => { o.classList.remove("open"); o.querySelector(".proj-head").setAttribute("aria-expanded", "false"); });
    li.classList.toggle("open", willOpen);
    head.setAttribute("aria-expanded", willOpen);
    document.documentElement.style.setProperty("--hue", willOpen ? li.style.getPropertyValue("--hue") : 38);
  }
  const lb = e.target.closest(".lang button");
  if (lb) { lang = lb.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); }
});

/* theme toggle (light by default) */
$("#themeBtn").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
});

/* cursor glow follows the mouse */
addEventListener("pointermove", e => {
  const g = $("#glow");
  g.style.setProperty("--x", e.clientX + "px");
  g.style.setProperty("--y", e.clientY + "px");
});

render();
