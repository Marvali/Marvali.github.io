#!/usr/bin/env python3
"""Refresh the "trending this week" part of news.json from the GitHub Search API.

Only the "auto" list and "updated" are rewritten; the hand-picked "curated" list
is never touched. Run locally or from .github/workflows/news.yml (weekly).
Standard library only. Set GITHUB_TOKEN to get a higher API rate limit.
"""
import datetime as dt
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

# ---- edit these ------------------------------------------------------------
# (label shown on the card, GitHub search qualifiers)
TOPICS = [
    ("Reverse engineering", "topic:reverse-engineering"),
    ("Reverse engineering", "reverse engineering in:name,description"),
    ("Malware analysis", "topic:malware-analysis"),
    ("OSINT", "topic:osint"),
    ("Cybersecurity", "topic:cybersecurity"),
    ("Local LLM", "topic:local-llm"),
    ("RAG", "topic:rag"),
]
# repos whose name/description contains any of these are skipped (this list is
# published unattended on a CV site, so keep abuse tooling out of it)
BLOCKLIST = ["crack", "keygen", "cheat", "bypass", "stealer", "botnet", "ransomware",
             "tiktok", "instagram", "scraper", "spoof", "ddos", "carding", "phishing kit"]
DAYS = 7              # window: repos created in the last N days
PER_TOPIC = 3         # candidates kept per search
MAX_TOTAL = 9         # items shown on the site
MIN_STARS = 20        # ignore brand-new repos with almost no traction
# ---------------------------------------------------------------------------

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWS = os.path.join(ROOT, "news.json")


def search(q, since):
    params = urllib.parse.urlencode({
        "q": f"{q} created:>={since} stars:>={MIN_STARS}",
        "sort": "stars", "order": "desc", "per_page": PER_TOPIC,
    })
    req = urllib.request.Request(
        "https://api.github.com/search/repositories?" + params,
        headers={"Accept": "application/vnd.github+json", "User-Agent": "portfolio-news-bot"},
    )
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        req.add_header("Authorization", "Bearer " + token)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r).get("items", [])


def main():
    since = (dt.date.today() - dt.timedelta(days=DAYS)).isoformat()
    found, ok = {}, 0
    for label, q in TOPICS:
        try:
            try:
                items = search(q, since)
            except urllib.error.HTTPError as e:
                if e.code != 403:
                    raise
                time.sleep(62)  # search rate limit window is 1 minute
                items = search(q, since)
            ok += 1
        except Exception as e:  # keep going; one failed query should not wipe the list
            print(f"warn: '{q}' failed: {e}", file=sys.stderr)
            continue
        for it in items:
            text = (it["full_name"] + " " + (it.get("description") or "")).lower()
            if any(w in text for w in BLOCKLIST):
                continue
            # skip descriptions that are mostly non-Latin text (the site is EN/ES)
            desc = it.get("description") or ""
            if desc and sum(ord(ch) > 0x24F for ch in desc) > len(desc) * 0.2:
                continue
            url = it["html_url"]
            if url not in found or it["stargazers_count"] > found[url]["stars"]:
                found[url] = {
                    "name": it["full_name"],
                    "url": url,
                    "desc": (it.get("description") or "").strip()[:200],
                    "stars": it["stargazers_count"],
                    "lang": it.get("language") or "",
                    "topic": label,
                    "created": it["created_at"][:10],
                }
        time.sleep(2)  # stay well under the unauthenticated search limit

    if ok == 0:
        sys.exit("all searches failed; news.json left unchanged")

    auto = sorted(found.values(), key=lambda x: -x["stars"])[:MAX_TOTAL]
    try:
        with open(NEWS, encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {"curated": []}
    data["updated"] = dt.date.today().isoformat()
    data["auto"] = auto
    with open(NEWS, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"wrote {len(auto)} items to news.json")


if __name__ == "__main__":
    main()
