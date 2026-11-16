# Rachana Ramchandar — Responsive Research Portfolio

A standalone, mobile-responsive academic portfolio built using plain HTML, CSS, and a small amount of JavaScript. Content is based on the attached academic CV, with an added hobbies section, and is visually inspired by the clarity and academic information architecture of https://anganab.github.io/ (not a copy of that site's code).

## Included

- About and research interests
- Four selected publications and preprints, with accurate published/accepted/preprint status distinctions
- Research experience, including *incoming* Microsoft Research India role in January 2027
- Teaching, academic service, and leadership
- Updates, education, skills, and hobbies (art, public speaking, MUNs)
- Linked PDF CV, Google Scholar, GitHub, LinkedIn, and email contact
- Responsive navigation and layout, semantic HTML, keyboard support, reduced-motion respect

## Preview locally

Run from the `public` folder:

```bash
cd public
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser.

## Deploy to Cloudflare Workers (Static Assets)

1. Install / run Wrangler, or use `npx wrangler` in this folder.
2. Sign in to your own Cloudflare account using `npx wrangler login`.
3. The `wrangler.jsonc` specifies `./public` as the directory to upload. Run:

```bash
npx wrangler deploy
```

If Cloudflare reports the worker already exists under another project name or account, update the `name` field in `wrangler.jsonc` or use the existing account/project's settings. **This package has not been pushed to the live URL.** No Cloudflare credentials were available.

Alternatively, upload the contents of `public/` as static assets through your usual deployment workflow.

## Content notes

- Based on `Rachana_Ramchandar_CV.pdf` as supplied on November 16, 2026.
- `Microsoft Research India` is explicitly presented as *incoming* for January 2027.
- Curiosity paper is a *preprint under review*; ISDIA/KPAC are *accepted, forthcoming*; IEEE BIBE is *published*.
- Publication external links are included only where verified by the supplied CV: arXiv curiosity preprint and DOI of the BIBE paper. Other papers have not been assigned made-up URLs.
- The profile avatar and hero visual are original typography/CSS/SVG artwork, not a photo or a claimed reproduction of your physical artwork. You can replace them with your own portrait/artwork later.
- The hobbies section describes the interests you requested but does not invent awards, competitions, or MUN accomplishments.

## Edit

Edit `public/index.html` for content, `public/styles.css` for visual styling, and `public/script.js` for navigation behavior. No dependencies or build step are required.
