# Responsive QA Checklist

## Breakpoints

- [ ] 375px (mobile portrait)
- [ ] 768px (tablet)
- [ ] 1280px (desktop)

## Global

- [ ] No horizontal overflow on every page
- [ ] Header navigation is usable at every breakpoint
- [ ] Focus ring is visible for keyboard navigation
- [ ] Typography remains readable (no overlap, no clipped lines)
- [ ] CTA buttons are tappable on touch screens

## Home (`/`)

- [ ] Hero copy and CTA stack correctly on mobile
- [ ] Value strip cards collapse to single column on mobile
- [ ] Latest blog/project sections keep consistent spacing
- [ ] Subscribe card remains readable and CTA is visible

## About (`/about`)

- [ ] Avatar and intro text align correctly on mobile/tablet/desktop
- [ ] Principles list does not overflow
- [ ] Platform link cards wrap cleanly
- [ ] Contact section keeps readable line length

## Blog List (`/blog`)

- [ ] Search input and button stay usable on mobile
- [ ] Category chips are scrollable/wrappable and not clipped
- [ ] Blog cards have no text overlap
- [ ] Pagination works with touch and keyboard

## Blog Detail (`/blog/[slug]`)

- [ ] Header metadata wraps cleanly on mobile
- [ ] Author card layout stays readable on small screens
- [ ] TOC and content sections remain scannable
- [ ] Related posts and Subscribe CTA keep stable spacing

## Projects List (`/projects`)

- [ ] Status chips are accessible on mobile (scroll or wrap)
- [ ] Project cards keep stack tags readable
- [ ] Empty state card remains centered and readable

## Project Detail (`/projects/[slug]`)

- [ ] Hero metadata and tags wrap without clipping
- [ ] Author card remains usable on mobile
- [ ] Two-column content blocks collapse cleanly
- [ ] Links section remains tappable and does not overflow

## Resources (`/resources`)

- [ ] Resource cards keep title/description readable
- [ ] Open/Download and Copy actions are easy to tap on mobile
- [ ] Section headings and card spacing are consistent

## Subscribe (`/subscribe`, `/subscribe/success`)

- [ ] Form fields and labels remain readable on mobile
- [ ] Submit button is visible and tappable
- [ ] Success page action cards stack cleanly on mobile

## Final Checks

- [ ] `pnpm --filter web build` passes
- [ ] `pnpm dlx wrangler@latest deploy --config apps/web/wrangler.toml` passes
- [ ] Spot-check live site after deploy:
  - [ ] https://www.mrpanda.run
  - [ ] https://www.mrpanda.run/blog
  - [ ] https://www.mrpanda.run/projects
  - [ ] https://www.mrpanda.run/resources
