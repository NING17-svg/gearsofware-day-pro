# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - Fold shows a positioning line, not a cut-off copy of the Quick Answer

- Task: Stop every page from opening with the Quick Answer twice, stop the break from landing mid-word, and replace the seven callouts that repeated the Quick Answer verbatim.
- Fold changed: All 30 `hero.subtitle` values were the Quick Answer cut at a fixed width, so the first screen showed the same sentence as both the subtitle and the Quick Answer and ended mid-word ("...any pre-order-l…"). Each page now opens with its own one-line positioning statement naming what that page covers -- written from facts the page already states, and decided page by page rather than copied across the site. `/wiki`, `/guides`, `/faq`, `/contact`, `/privacy-policy` and `/terms` previously shared one generic line, "Gears of War: E-Day reference hub."; each now says what it is for.
- Copy changed: Every `summary` was the same mid-word cut, and it feeds RelatedLinks, the search dialog and the JSON-LD description, so the break was public in three places. A summary is now the first complete sentence of that page's Quick Answer, which keeps it grounded in the same facts. The homepage's single Key Fact was the research date, 2026-09-26; it is replaced by four reader facts the homepage already states (release date, platforms, setting, developer).
- Modules changed: `/beta`, `/platforms`, `/preorder`, `/price`, `/release`, `/steam` and the homepage each carried a callout whose body was the Quick Answer verbatim. Each is now a data-table that restates that same page's claims as announced / not announced rows -- 5 to 7 rows each -- so the facts read as a status table instead of a second copy of the answer. No claim was added, removed or reworded; every row traces to a sentence the page's own Quick Answer already made.
- URLs affected: None. No title, H1, canonical, page type, keyword, CTA or internal-link role changed, so `CONTENT_INDEX.md` is not revised.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static export, rendered SEO for 30 pages / 30 sitemap URLs / 30 manifest routes) passes, the render-quality audit reports 0 findings across all 30 pages, and a sweep of the exported HTML finds no unrendered Markdown link, bold marker or mid-word ellipsis.

### 2026-10-01 - Public page render-quality repair

- Task: Repair the homepage and inner pages so the first screen carries a positioning line, key facts and priority entry points, and so authoring-pipeline artifacts never reach a public page.
- Defects found: internal_production_note, duplicated_quick_answer (43 finding(s)) across 30 page(s).
- Files changed: `src/data/pages/*.ts` and `src/data/faq.ts` (fold and module data), `src/components/content/ModuleRenderer.tsx` (prose body now renders Markdown), `src/components/pages/ContentPage.tsx` (Quick Answer renders inline Markdown), `src/lib/markdown.tsx` (new minimal Markdown-to-React renderer, including tables), `src/styles/modules.css` (prose body and table rules), `scripts/validate-render-integrity.ts` (new regression), `package.json` (new `validate:render` step in the `verify` chain).
- URLs affected: None. Titles, H1s, canonicals, CTAs, page types and internal-link roles are unchanged, so `CONTENT_INDEX.md` is not revised.
- SEO/GEO changed: FAQ entries that previously existed only as a Markdown module are now real entries in `src/data/faq.ts` and render through the accessible FAQ block, so FAQPage schema coverage is no longer limited to the pre-existing entries. `hero.subtitle` is now a positioning line and `quickAnswer` is the concise answer, so the fold is a summary rather than a duplicate of the article.
- Copy changed: Reader copy no longer refers to the build-now brief, the game-check brief, the research cut-off date or the source-tier labels. Game facts, URLs, keyword intent, ad units and analytics are unchanged.
- Verification: `npm run verify` (typecheck, lint, template, content, render integrity, IndexNow tests, static export, rendered SEO) passes; a full-text scan of every exported page finds no raw heading markers, raw Markdown links, tables or bold markers, pipeline headings, research metadata or literal question/answer labels; a content-conservation check against the previous commit confirms no reader copy, page identity or SEO field was lost.


## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-07` / Worker `dragonshelter-pro`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
