# mrpanda.run

Personal brand website for **Mr Panda**, built with Astro, Tailwind CSS, and Astro Content Collections, and deployed to Cloudflare Workers.

## Tech Stack

- Astro 5 (`@astrojs/cloudflare`, `@astrojs/mdx`, `@astrojs/tailwind`)
- TypeScript (strict config)
- Tailwind CSS
- pnpm workspace
- Cloudflare Workers + KV

## Project Structure

```text
.
├─ apps/
│  └─ web/
│     ├─ src/
│     │  ├─ pages/        # Routes (Astro pages)
│     │  ├─ components/   # Reusable UI components
│     │  ├─ layouts/      # Shared layouts
│     │  ├─ content/      # Blog / projects / resources content
│     │  ├─ data/         # Site metadata and nav config
│     │  └─ lib/          # Utility functions
│     ├─ public/          # Static files and downloads
│     └─ wrangler.toml    # Cloudflare deployment config
├─ package.json           # Workspace-level scripts
└─ pnpm-workspace.yaml
```

## Getting Started

```bash
pnpm install
pnpm dev
```

The site runs locally through the workspace script (`apps/web` under the hood).

## Scripts

Run from repository root:

- `pnpm dev` - Start local dev server
- `pnpm build` - Build production assets
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run Astro content/type checks
- `pnpm typecheck` - Alias for Astro checks

## Content Workflow

- Add posts/resources/projects in `apps/web/src/content/`
- Update schemas in `apps/web/src/content.config.ts` when content shape changes
- Use route files in `apps/web/src/pages/` for new pages

## Deployment

```bash
pnpm build
pnpm dlx wrangler@latest deploy --config apps/web/wrangler.toml
```

Before deploy, run responsive checks using `apps/web/RESPONSIVE_QA_CHECKLIST.md`.

## Notes

- Keep secrets in `.env` files (ignored by git)
- Do not commit generated folders such as `apps/web/dist` and `apps/web/.astro`
