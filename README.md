# Lakshay Mittal — Portfolio Website

A fast, single-page personal portfolio and résumé site built with React, TypeScript, and Tailwind CSS. It presents skills, experience, education, and projects with a polished, motion-rich interface and a light/dark theme.

🔗 **Live:** _add your deployment URL here_
---

## Features

- **Light & dark theme** — toggled at runtime, persisted to `localStorage`, and defaulting to the visitor's system preference.
- **Scroll-reveal animations** — sections fade and slide into view as they enter the viewport via `IntersectionObserver`.
- **Interactive hero** — an animated "code terminal" artifact with floating tech badges, parallax orbs, and a 3D tilt that tracks the cursor.
- **Micro-interactions** — cursor-following spotlight cards, magnetic buttons, an aurora background wash, and a scroll-progress indicator.
- **Accessibility-aware** — all motion respects `prefers-reduced-motion`, falling back to static content.
- **Résumé download** — one-click PDF download from the nav bar.
- **Responsive** — tuned layouts from mobile through large desktop.

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 7](https://vite.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Linting | [ESLint](https://eslint.org/) (typescript-eslint) |

## Getting Started

### Prerequisites

- **Node.js** `^20.19` or `>=22.12` (Node 22 LTS recommended)
- **npm** (bundled with Node)

### Installation

```bash
git clone https://github.com/mittallakshayy/<this-repo>.git
cd portfolio-1
npm install
```

### Development

```bash
npm run dev
```

Vite prints a local URL (default http://localhost:5173) with hot module replacement.

### Production build

```bash
npm run build     # type-checks with tsc, then bundles with Vite
npm run preview   # serves the production build locally
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
portfolio-1/
├── public/                 # Static assets (résumé PDF, project images)
├── src/
│   ├── components/
│   │   ├── ResumePage.tsx   # Main page: hero, skills, experience, education, projects
│   │   ├── ThemeContext.tsx # Theme provider + useTheme hook
│   │   ├── ThemeToggle.tsx  # Light/dark switch
│   │   └── Reveal.tsx       # Scroll-triggered reveal wrapper
│   ├── index.css            # Tailwind layers + custom design tokens/animations
│   └── main.tsx             # App entry, router, ThemeProvider
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Customization

Most content lives in [`src/components/ResumePage.tsx`](src/components/ResumePage.tsx) as plain data arrays — edit these to make the site your own:

- `skills` — skill categories and tags
- `experiences` — roles, companies, dates, and bullet points
- `education` — degrees and schools
- `projects` — name, tech tags, description, and GitHub/live links

Replace the résumé file at `public/Lakshay Mittal.pdf` and update the hero contact details and social links to point to your own.

## Deployment

The build outputs a static `dist/` folder, deployable to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages):

```bash
npm run build
# deploy the dist/ directory
```

## License

This project is provided as a personal portfolio. Feel free to use it as inspiration; please replace the personal content with your own.

---

Built with React, TypeScript & Tailwind CSS by [Lakshay Mittal](https://www.linkedin.com/in/mittallakshayy/).
