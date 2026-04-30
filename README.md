# Asset Manager — G Läbän Website

A premium multi-page marketing website for **G Läbän**, an Arabian dessert shop in Navalur, Chennai.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 |
| Routing | Wouter |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Package Manager | **pnpm** (required) |
| Language | TypeScript 5.9 |

---

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **pnpm** v8 or higher — Install via:
  ```bash
  npm install -g pnpm
  ```

> ⚠️ This project **requires pnpm**. Running `npm install` or `yarn install` will fail by design.

---

## How to Run the Project (Windows)

### 1. Clone / Navigate to the project folder

```bash
cd "Asset-Manager"
```

### 2. Install dependencies

```bash
pnpm install
```

This installs all packages for the entire monorepo workspace (~490 packages). This may take a few minutes on first run.

### 3. Start the frontend dev server

```bash
pnpm --filter @workspace/g-laban run dev
```

### 4. Open in browser

The site will be live at:

```
http://localhost:5173
```

---

## Project Structure

```
Asset-Manager/
├── artifacts/
│   ├── g-laban/          ← Frontend website (React + Vite)
│   │   ├── src/
│   │   │   ├── pages/    ← Home, About, Menu, Contact, 404
│   │   │   ├── components/
│   │   │   ├── lib/      ← site.ts (brand info), menu.ts, seo.ts
│   │   │   └── App.tsx
│   │   └── vite.config.ts
│   ├── api-server/       ← Express 5 API server
│   └── mockup-sandbox/   ← UI mockup playground
├── lib/
│   ├── api-spec/         ← OpenAPI specification
│   ├── api-zod/          ← Zod validation schemas
│   ├── api-client-react/ ← Auto-generated React Query hooks
│   └── db/               ← PostgreSQL + Drizzle ORM schema
├── pnpm-workspace.yaml
└── package.json
```

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm install` | Install all workspace dependencies |
| `pnpm --filter @workspace/g-laban run dev` | Start the frontend website (port 5173) |
| `pnpm --filter @workspace/g-laban run build` | Build frontend for production |
| `pnpm --filter @workspace/g-laban run serve` | Preview production build |
| `pnpm run typecheck` | TypeScript type-check all packages |
| `pnpm run build` | Full typecheck + build all packages |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, highlights, featured items |
| `/about` | About — brand story and values |
| `/menu` | Menu — full item list with category filter |
| `/contact` | Contact — form, map embed, social links |
| `*` | 404 — not found fallback page |

---

## Notes

- The project was originally built for **Replit** (Linux). The `pnpm-workspace.yaml` and `vite.config.ts` have been adapted for **Windows** development.
- The `PORT` environment variable is optional on Windows — defaults to `5173`.
- Brand info lives in `artifacts/g-laban/src/lib/site.ts`.
- Menu items are defined in `artifacts/g-laban/src/lib/menu.ts`.
