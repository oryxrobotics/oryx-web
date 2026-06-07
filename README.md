# Oryx Robotics — marketing site

Public marketing site for Oryx. Static HTML/CSS/JS, no build step.

- **Content** mirrors the key decisions in the strategy audit (`../strategy`, `../brand/brand-and-messaging.md`) and the gated portal (`../portal`).
- **Assets** (the green ORYX-01 livery, the horns mark) are pulled from `../portal` and `../brand`.
- **Hosting:** Render static site (syedOS team → *Oryx* project), deployed from this repo with publish/root dir = `website/`. The rest of the private repo is never served.
- `robots.txt` + `<meta robots noindex>` keep the temporary `onrender.com` host out of search. Flip both when the production domain (oryx.bot) goes live.

Local preview: open `index.html` in a browser, or `python3 -m http.server` from this directory.
