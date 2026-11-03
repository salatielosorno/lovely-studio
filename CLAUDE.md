# Lovely Studio

Next.js 14 (App Router) site with MUI 6, Tailwind 3 and TypeScript. Source in `src/` (`app/`, `components/v2/`, `data/`, `lib/`).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint (`next lint`)

Node 26.7.0 / npm 11.19.0 (see `engines`). Env vars: copy `.env.example` to `.env.local`.

## Commits

Conventional commits with the file or area as scope, e.g. `feat(terms-and-conditions): add new policy.` / `fix(sitemap): remove unneeded sections for robots.`

## Terms and conditions page

File: `src/app/terms-and-conditions/page.tsx`

- Text is in Spanish (Mexico), formal "usted" tone. New policy text must match.
- Every edit must update the "Última actualización" date in the header line to today, in the format `DD de <mes> de YYYY | Lovely Studio`.
- A new rule that doesn't clearly fit an existing section gets its own `<h2>` section instead of a bullet in another list. Existing sections: "Atención in-situ" (client conduct on premises), "Restricciones en servicios", "Garantía". Example: "Obsequios y propinas" is its own section. Ask about placement if unsure.
