#!/usr/bin/env python3
"""Weekly feeds for the site: CVEs, AI papers, cybersecurity papers, classics.

Sources (all public, no keys needed):
  - CISA Known Exploited Vulnerabilities catalog -> "CVE of the week"
  - Hugging Face Daily Papers (community upvotes) -> "AI papers of the week"
  - arXiv cs.CR, ranked by relevance to the KEYWORDS below -> "Cybersecurity papers"
  - A hand-picked list of landmark papers, rotated one per week -> "Classics"

Writes feeds.json. A source that fails keeps its previous data. Standard library only.
"""
import datetime as dt
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

# ---- edit these ------------------------------------------------------------
DAYS = 7
MAX_CVE = 8
MAX_AI = 6
MAX_CYBER = 6
KEYWORDS = [  # arXiv cs.CR papers matching more of these rank higher
    "prompt injection", "jailbreak", "llm", "language model", "malware", "reverse engineering",
    "vulnerability", "fuzzing", "post-quantum", "ransomware", "osint", "side-channel",
    "backdoor", "supply chain", "threat intelligence", "binary analysis", "decompil",
    "agent", "privacy", "adversarial", "retrieval-augmented", "rag",
]
# landmark papers (arXiv ids). One of each domain is shown per week, rotating.
CLASSICS = {
    "cyber": [
        ("1801.01203", "Speculative execution turned into a practical way to read memory across security boundaries.",
         "La ejecución especulativa convertida en una forma práctica de leer memoria saltándose los límites de seguridad."),
        ("1801.01207", "The companion attack that let user programs read kernel memory.",
         "El ataque gemelo que permitía a programas de usuario leer memoria del kernel."),
        ("2012.07805", "Showing that large language models can leak verbatim training data.",
         "Demuestra que los grandes modelos de lenguaje pueden filtrar datos de entrenamiento literales."),
        ("2302.12173", "The paper that introduced indirect prompt injection against LLM-integrated apps.",
         "El artículo que presentó la inyección indirecta de prompts contra aplicaciones con LLM."),
        ("2307.15043", "Automatically generated suffixes that jailbreak aligned language models.",
         "Sufijos generados automáticamente que hacen jailbreak a modelos de lenguaje alineados."),
        ("1609.02943", "Stealing a model by querying its prediction API.",
         "Robar un modelo consultando su API de predicción."),
        ("1708.06733", "BadNets: planting backdoors in neural networks through training.",
         "BadNets: implantar puertas traseras en redes neuronales durante el entrenamiento."),
        ("2302.10149", "Poisoning web-scale training datasets is practical, not just theoretical.",
         "Envenenar datasets de entrenamiento a escala web es práctico, no solo teórico."),
    ],
    "ai": [
        ("1706.03762", "The Transformer: the architecture behind today's language models.",
         "El Transformer: la arquitectura detrás de los modelos de lenguaje actuales."),
        ("2005.11401", "The original RAG paper, directly behind my thesis work.",
         "El artículo original de RAG, directamente relacionado con mi TFG."),
        ("2004.04906", "Dense Passage Retrieval: dense vectors beat keyword search for open-domain QA.",
         "Dense Passage Retrieval: los vectores densos superan a la búsqueda por palabras en preguntas abiertas."),
        ("2005.14165", "GPT-3 and few-shot in-context learning.",
         "GPT-3 y el aprendizaje en contexto con pocos ejemplos."),
        ("2203.02155", "InstructGPT: training models to follow instructions with human feedback.",
         "InstructGPT: entrenar modelos para seguir instrucciones con feedback humano."),
        ("2210.03629", "ReAct: interleaving reasoning and tool use, the basis of many agents.",
         "ReAct: combinar razonamiento y uso de herramientas, base de muchos agentes."),
        ("2106.09685", "LoRA: cheap fine-tuning of large models with low-rank adapters.",
         "LoRA: ajuste fino barato de modelos grandes con adaptadores de bajo rango."),
        ("2004.10934", "YOLOv4, the detector used in my computer-vision project.",
         "YOLOv4, el detector usado en mi proyecto de visión artificial."),
    ],
}
# ---------------------------------------------------------------------------

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "feeds.json")
UA = {"User-Agent": "portfolio-feeds-bot (github.com/Marvali)"}


def get(url, accept="application/json"):
    req = urllib.request.Request(url, headers={**UA, "Accept": accept})
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read()


def clip(t, n):
    t = re.sub(r"\s+", " ", t or "").strip()
    return t if len(t) <= n else t[: n - 1].rsplit(" ", 1)[0] + "…"


def cves(today):
    data = json.loads(get("https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"))
    vulns = sorted(data["vulnerabilities"], key=lambda v: v["dateAdded"], reverse=True)
    since = (today - dt.timedelta(days=DAYS)).isoformat()
    recent = [v for v in vulns if v["dateAdded"] >= since]
    chosen = (recent or vulns)[:MAX_CVE]  # quiet week: fall back to the latest ones
    return [{
        "id": v["cveID"], "vendor": v["vendorProject"], "product": v["product"],
        "name": v["vulnerabilityName"], "desc": clip(v["shortDescription"], 220),
        "added": v["dateAdded"], "ransom": v.get("knownRansomwareCampaignUse") == "Known",
    } for v in chosen if re.fullmatch(r"CVE-\d{4}-\d{4,}", v["cveID"])]


def ai_papers(today):
    found = {}
    for i in range(DAYS + 1):
        day = (today - dt.timedelta(days=i)).isoformat()
        try:
            items = json.loads(get(f"https://huggingface.co/api/daily_papers?date={day}"))
        except Exception as e:
            print(f"warn: hf {day}: {e}", file=sys.stderr)
            continue
        for it in items:
            p = it.get("paper", {})
            pid = p.get("id", "")
            if re.fullmatch(r"\d{4}\.\d{4,5}", pid):
                found[pid] = {"id": pid, "title": clip(p.get("title"), 160), "upvotes": p.get("upvotes", 0),
                              "summary": clip(p.get("summary"), 230), "date": day}
        time.sleep(0.5)
    if not found:
        raise RuntimeError("no HF papers")
    return sorted(found.values(), key=lambda x: -x["upvotes"])[:MAX_AI]


NS = {"a": "http://www.w3.org/2005/Atom"}


def parse_arxiv(xml_bytes):
    out = []
    for e in ET.fromstring(xml_bytes).findall("a:entry", NS):
        aid = e.findtext("a:id", "", NS).rsplit("/abs/", 1)[-1]
        aid = re.sub(r"v\d+$", "", aid)
        if not re.fullmatch(r"\d{4}\.\d{4,5}", aid):
            continue
        authors = [a.findtext("a:name", "", NS) for a in e.findall("a:author", NS)]
        out.append({
            "id": aid, "title": clip(e.findtext("a:title", "", NS), 160),
            "authors": ", ".join(authors[:3]) + (" et al." if len(authors) > 3 else ""),
            "published": e.findtext("a:published", "", NS)[:10],
            "summary": clip(e.findtext("a:summary", "", NS), 230),
        })
    return out


def cyber_papers(today):
    start = (today - dt.timedelta(days=DAYS)).strftime("%Y%m%d0000")
    end = today.strftime("%Y%m%d2359")
    q = urllib.parse.urlencode({
        "search_query": f"cat:cs.CR AND submittedDate:[{start} TO {end}]",
        "sortBy": "submittedDate", "sortOrder": "descending", "max_results": 150,
    })
    papers = parse_arxiv(get("https://export.arxiv.org/api/query?" + q, "application/atom+xml"))
    if not papers:
        raise RuntimeError("no arXiv papers")

    def score(p):
        text = (p["title"] + " " + p["summary"]).lower()
        return sum(2 if k in p["title"].lower() else 1 for k in KEYWORDS if k in text)

    papers.sort(key=lambda p: p["published"], reverse=True)  # newest first on ties
    ranked = sorted(papers, key=lambda p: -score(p))
    return [p for p in ranked if score(p) > 0][:MAX_CYBER] or ranked[:MAX_CYBER]


def classics(today):
    week = today.isocalendar()[1]
    picks = []
    for domain, items in CLASSICS.items():
        aid, why_en, why_es = items[week % len(items)]
        time.sleep(3)  # arXiv asks for ~3 s between calls
        meta = parse_arxiv(get("https://export.arxiv.org/api/query?id_list=" + aid, "application/atom+xml"))
        if not meta:
            continue
        m = meta[0]
        m.update({"domain": domain, "year": m["published"][:4], "why": {"en": why_en, "es": why_es}})
        picks.append(m)
    if not picks:
        raise RuntimeError("no classics")
    return picks


def main():
    today = dt.date.today()
    try:
        with open(OUT, encoding="utf-8") as f:
            data = json.load(f)
    except (FileNotFoundError, ValueError):
        data = {}
    ok = 0
    for key, fn in (("cves", cves), ("ai", ai_papers), ("cyber", cyber_papers), ("classics", classics)):
        try:
            data[key] = fn(today)
            ok += 1
            print(f"{key}: {len(data[key])} items")
        except Exception as e:
            print(f"warn: {key} failed ({e}); keeping previous data", file=sys.stderr)
        time.sleep(3)
    if ok == 0:
        sys.exit("all sources failed; feeds.json left unchanged")
    data["updated"] = today.isoformat()
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


if __name__ == "__main__":
    main()
