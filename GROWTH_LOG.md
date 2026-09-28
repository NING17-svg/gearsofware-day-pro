# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-29 - Launch-window multiplayer, co-op, and gameplay cluster added

- Task: Expand /gameplay (movement control scheme + wall-bouncing), /tips (active reload technique + center-screen HUD toggle), /co-op (4-player online + 2-player console split-screen + Xbox Play Anywhere), and /multiplayer (Versus 4v4 Social/Ranked/Boot Camp + Horde Siege four-class / 12-player / Kalona map) using the Open Beta FAQ, the E-Day Wikipedia article, the Eurogamer wall-bouncing coverage, and the Xbox Developer Direct 2026 reveal.
- Files changed: `src/data/pages/fixed-pages.ts` (gameplay-loop, tips, co-op, multiplayer modules), `src/data/faq.ts` (new FAQ entries), `CONTENT_INDEX.md` (internal-link role updates).
- URLs affected: `/gameplay`, `/tips`, `/co-op`, `/multiplayer` (all in-place expansion, no new URLs).
- SEO/GEO changed: Quick answers and source modules on the four pages now cite the Open Beta FAQ and Eurogamer as first-party or launch-window media sources; the active reload cluster cross-links to the new control scheme, and the Versus 4v4 cluster cross-links to the wall-bouncing gameplay module.
- Verification: `npm run verify` runs the shared local validation chain before push.

### 2026-09-28 - Adsterra six-unit integration completed

- Task: Replace empty Adsterra placeholder values in `src/data/ads.ts` with real fixed ad codes for the six configured units (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink).
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL change; only the in-page ad container payloads are now populated.
- Ad baseline: Fixed six Adsterra units are now Active; the page no longer renders empty ad containers.
- Verification: `npm run verify` runs the shared local validation chain before push.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
