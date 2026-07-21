# CBA — Confidence Building Academy

**Hope of Dushkhel.**

A React + Vite marketing site for CBA. Modern design, scroll animations, mobile responsive, zero color gradients (all flat solids and hairline rules).

## Getting started

```bash
npm install
npm run dev
```

Opens on [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Built site goes to `dist/` and can be deployed to Vercel, Netlify, Cloudflare Pages, or any static host.

## Stack

* **Vite** for the dev server and build
* **React 18** for components
* **Framer Motion** for animations
* **Lucide React** for icons (MIT licensed)
* **Google Fonts**: Fraunces (display), Inter (body), JetBrains Mono (labels)

## Project structure

```
src/
  main.jsx          React entry
  App.jsx           Root component
  index.css         All styles and design tokens
  components/
    Nav.jsx         Sticky nav with scroll state and mobile menu
    Hero.jsx        Dark hero with animated headline, seal decoration, and slogan
    Categories.jsx  Section intro plus six category blocks
    CTA.jsx         Signup call to action
    Footer.jsx      Footer with contact, columns, and social links
  data/
    features.js     All 32 features grouped into 6 categories
```

## Replacing the placeholder logo

The logo mark appears in the nav and footer. In `Nav.jsx` and `Footer.jsx`:

```jsx
<span className="brand-mark">C</span>
```

Replace with your logo image:

```jsx
<img src="/cba-logo.svg" alt="CBA" style={{ height: 34 }} />
```

Drop your logo file into a `public/` folder inside the project and Vite will serve it at the root.

## Changing brand colors

Every color is a CSS custom property at the top of `src/index.css`. Change these and the whole system updates:

```css
--paper: #FAFAF6;   /* background */
--ink: #141414;     /* body text */
--crest: #7A1F2B;   /* signature accent (buttons, hover) */
--deep: #0D1B2A;    /* hero and footer dark tone */
--brass: #B08D3F;   /* seal rings and highlights */
--rule: #E4DFD0;    /* hairline dividers */
```

## Editing content

All feature copy lives in `src/data/features.js`. The slogan "Hope of Dushkhel" appears in `Hero.jsx` and `Footer.jsx`. Nav and footer brand text lives in those two component files.

To swap icons, import a different one from `lucide-react`. Browse [lucide.dev/icons](https://lucide.dev/icons).

## Design notes

* No color gradients anywhere. All decoration is solid fills, hairline rules, and typography.
* The hero and CTA use a slowly rotating concentric ring seal as the signature visual, evoking a school crest.
* Feature cards use a solid accent bar that grows across the top on hover.

## Deploy

Any static host works. Vercel and Netlify auto-detect Vite:

```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy --prod --dir=dist
```

## License

Code in this project belongs to Confidence Building Academy. Fonts are loaded from Google Fonts under the SIL Open Font License. Icons come from Lucide under the ISC license.
