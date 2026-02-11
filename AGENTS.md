# Repository Guidelines

## Project Structure & Module Organization
This repository is a pnpm workspace. The active app is `apps/web` (Astro + Tailwind + Cloudflare adapter); root scripts proxy into that package.

- `apps/web/src/pages`: route files (including dynamic routes like `blog/[slug].astro`)
- `apps/web/src/components`: reusable UI components
- `apps/web/src/layouts`: shared page layouts
- `apps/web/src/content`: content collections (`blog`, `projects`, `resources`)
- `apps/web/src/lib` and `apps/web/src/data`: helpers and site data
- `apps/web/public`: static assets and downloadable files

Generated output (`apps/web/dist`, `apps/web/.astro`, `apps/web/.wrangler`) should not be committed.

## Build, Test, and Development Commands
Run commands from the repo root unless noted.

- `pnpm install`: install workspace dependencies
- `pnpm dev`: start Astro dev server for `apps/web`
- `pnpm build`: build production output
- `pnpm preview`: preview the built site locally
- `pnpm check`: run Astro content/type checks
- `pnpm typecheck`: alias of Astro checks
- `pnpm dlx wrangler@latest deploy --config apps/web/wrangler.toml`: deploy to Cloudflare

## Coding Style & Naming Conventions
TypeScript uses strict settings (`apps/web/tsconfig.json` extends `astro/tsconfigs/strict`).

- Use 2-space indentation in `.astro`, `.ts`, and config files
- Follow existing style: semicolons and double quotes in TS/JS
- Name components/layouts with PascalCase (for example, `SiteHeader.astro`)
- Keep route/content filenames lowercase kebab-case; use bracket syntax for dynamic params
- Prefer `@/` import aliases for files under `apps/web/src`

## Testing Guidelines
There is currently no dedicated unit/e2e test framework in this repo. Minimum quality gate before opening a PR:

1. `pnpm check`
2. `pnpm build`
3. Manual responsive verification using `apps/web/RESPONSIVE_QA_CHECKLIST.md`

For logic-heavy additions in `src/lib`, add adjacent `*.test.ts` files when introducing a test runner.

## Commit & Pull Request Guidelines
History currently follows Conventional Commit style (example: `feat: ...`).

- Use `type: short imperative summary` (`feat:`, `fix:`, `chore:`)
- Keep commits focused and atomic
- PRs should include a concise summary, linked issue (if any), and screenshots for UI changes
- Include validation notes for `pnpm check`, `pnpm build`, and responsive QA coverage

## Security & Configuration Tips
Keep secrets in `.env` files only (`.env*` is ignored). Review `apps/web/wrangler.toml` carefully when editing domains, routes, or KV bindings.
