# CLAUDE.md — NextGen STEM persistent context

## Product
Marketing and program site for **NextGen STEM**, a nonprofit coaching org for high school STEM competitions: **Science Olympiad, USACO, AMC / AIME / USAMO**. Positioning: elite coaches + proven national rankings at nonprofit rates.

Live site: https://next-gen-stem.vercel.app
Repo: https://github.com/brainlame/NextGenSTEM (owner: `brainlame`; push access: `RCSharm07`)

## Stack (locked)
- **Next.js 16.2.2**, App Router, **RSC-first**. Move all logic server-side; keep the client JS bundle tiny.
- **React 19.2.4**, TypeScript strict.
- **Tailwind v4** (`@tailwindcss/postcss`, CSS-first `@theme inline`) + **shadcn/ui** with Nova preset (Radix primitives + Lucide + Geist). No MUI, no Chakra, no heavy component libraries.
- Fonts: **Inter** (sans) + **Playfair Display** (serif, display italic) via `next/font/google`.
- Deploy: **Vercel** + **Edge Middleware** for zero-latency personalization.
- Aesthetic direction: **editorial / academic luxury**. Palette locked: bg `#0d0f14`, text `#eeeae0`, gold accent `#c9a84c`.

## Obsession
- **Lighthouse ≥98 Performance** mobile, **100** Accessibility / Best Practices / SEO per route.
- Per-route metadata via `generateMetadata`.
- JSON-LD structured data for `EducationalOrganization`, `Course`, `Person`, `WebSite`.

## Open PRs (branch topology)
```
main
 └─ chore/repo-hygiene-and-shadcn   (PR #1)
     ├─ feat/seo-foundation          (PR #3, stacked on #1)
     └─ feat/hero-redesign-and-rankings (PR #4, stacked on #1)
```
Merge #1 first → #3 and #4 auto-retarget to `main`.

## Known flags / deferred work

### [FLAG] PR #4 bundle overrun
- **Reported**: `/` first-load JS ≈ **162 kB gz modern / 197 kB with legacy polyfill**.
- **Budget**: **130 kB gz** on `/`.
- **Agent attribution**: "Next 16 + React 19 framework floor."
- **Actual suspicion**: pre-existing `components/ProgramsSection.tsx`, `components/Contact.tsx`, and/or `components/TeamSection.tsx` likely still carry `"use client"` from the original scaffold and pull Radix into the client graph. Has NOT been audited yet.
- **Follow-up owed**:
  1. Audit every `"use client"` in `components/` — push boundaries down to the smallest interactive leaf (e.g., one form submit button, not the whole section).
  2. Replace any shadcn `Accordion`/`Sheet`/`Dialog` usage that can be done with native `<details>` or CSS-only patterns.
  3. Re-measure with `ANALYZE=true next build` (add `@next/bundle-analyzer` in a later PR).
  4. Re-baseline the budget per-route once Lighthouse CI is wired (deferred, see below).
- **Do not** mark PR #4 "complete" for performance purposes until this is resolved.

## Deferred — intentionally held by user
- **CI/CD pipeline** — specs frozen, not yet implemented. Includes:
  - commitlint + Husky (Conventional Commits)
  - protected `main`, PR-only, 1 required review (admin-bypass as escape hatch)
  - PR checks: lint, `tsc --noEmit`, `next build`, `size-limit` bundle budgets
  - preview deploy per PR, prod deploy on `main` merge
  - Lighthouse CI gating prod promotion (perf ≥98 mobile per-route, adjust per-route in real time)
  - `claude-code-action` auto-review every PR + `@claude` mentions
- **Branch protection + Claude GitHub App install** — `brainlame` needs to run the `gh api` command + install the app. Command was handed over but not yet executed.
- **Claude write vs read-only scope** in `claude-code-action` — still unanswered.

## Developer permissions (this project)
Auto-approved:
- Push to feature branches; open PRs.
- Run local `npm run build`, `npm run dev`, Playwright captures.
- Install dependencies needed for a feature.
- Make code changes without per-file confirmation.

Must ask before:
- Merging PRs (user wants due-diligence review themselves).
- Pushing to `main` directly.
- Any Vercel project setting changes.
- Destructive git (force push, reset --hard, branch -D on shared branches).
