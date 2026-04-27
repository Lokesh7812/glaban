# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### `artifacts/g-laban` — G Läbän website
Premium multi-page marketing site for G Läbän, an Arabian dessert shop in Navalur, Chennai.
- Stack: React + Vite, Tailwind v4, wouter (router), framer-motion, lucide-react, react-icons.
- Theme: royal blue (`--primary` 224 72% 28%) + gold accent (41 65% 52%), Cormorant Garamond serif.
- Pages: Home (`/`), About (`/about`), Menu (`/menu` with category filter), Contact (`/contact`), 404.
- Global features: sticky header that goes transparent over hero bands, floating WhatsApp button, scroll-to-top button, Google Maps embed, per-page SEO via `lib/seo.ts`, social links in footer.
- Brand info lives in `src/lib/site.ts`; menu items in `src/lib/menu.ts`. Logo at `public/logo.png`.
- Images are decorative arabesque SVGs (no real dessert photos yet).
