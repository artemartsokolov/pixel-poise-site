# sokolovartem.vercel.app

Portfolio site for Artem Sokolov — design engineer.

Four case studies built as a single-page React app. The case pages are
hand-written components rather than CMS content: most carry custom SVG diagrams,
and the Datox case has a lightbox that plays screen recordings at full size.
Those only work as code, which is rather the point of the site.

## Stack

React 18 · TypeScript · Vite · Tailwind · Framer Motion · React Router.
Media is served from Supabase Storage.

## Running it

```sh
npm install
npm run dev        # http://localhost:8080
```

```sh
npm run build      # production build into dist/
npm run preview    # serve that build locally
npm run lint
```

## Deployment

Pushes to `main` deploy to Vercel. `vercel.json` rewrites every route to `/`
so client-side routing survives a page refresh.

## Layout

```
src/pages/         one component per route, case studies included
src/components/    sections of the home page, plus the shared Lightbox
public/            CV in HTML and PDF, favicons, logos
```

The CV is authored as `public/cv-artem-sokolov.html` and exported with headless
Chrome:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --no-pdf-header-footer \
  --print-to-pdf=public/cv-artem-sokolov.pdf \
  http://localhost:8080/cv-artem-sokolov.html
```

The print stylesheet sets `print-color-adjust: exact` — without it headless
Chrome drops every background and the dark header prints white.
