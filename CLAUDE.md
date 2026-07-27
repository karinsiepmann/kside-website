@AGENTS.md

# kside Website – Kontext für Claude

## Projekt
- Website: https://kside.de
- GitHub: https://github.com/karinsiepmann/kside-website (public)
- Framework: Next.js (App Router), Tailwind CSS
- Deployment: GitHub Pages, Branch `master`

## Git
- Remote: `git@github-kside:karinsiepmann/kside-website.git`
- SSH-Host `github-kside` → Key `~/.ssh/github-kside-second-brain-2`
- Git user: `Karin Siepmann` / `kontakt@kside.de`
- Nach Änderungen: `git add -A && git commit -m "..." && git push origin master`

## Seiten-Struktur (src/app/)
| Route | Datei | Zweck |
|---|---|---|
| `/` | `page.tsx` | Hauptseite (Komponenten in `src/components/`) |
| `/termine` | `termine/page.tsx` | AI Open Learning Lab Termine (Zukunftswerk Wiesbaden) |
| `/skala-campus` | `skala-campus/page.tsx` | SKalaCAMPUS Morgenimpulse (Online, Aug–Okt 2026) |
| `/femailab-dashboard` | `femailab-dashboard/` | Community-Dashboard (nicht öffentlich verlinkt) |
| `/impressum` | `impressum/` | Impressum |
| `/datenschutz` | `datenschutz/` | Datenschutz |

## Wichtige URLs
- Anmeldung AI Open Learning Lab: https://anny.eu/book/lab-for-women
- Anmeldung Usability Testessen: https://anny.eu/book/usability-testessen
- SKalaCAMPUS Plattform: https://www.skala-campus.org/

## Design-Konventionen
- Terminseiten: rose/orange (Zukunftswerk), blau/indigo (SKalaCAMPUS)
- Logos im `public/` Ordner (logo-kside.png, logo-box.png etc.)
