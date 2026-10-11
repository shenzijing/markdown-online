# Markdown Online

Source of production truth: https://github.com/shenzijing/markdown-online (main). Original upstream: Jack230406/markdown-online. Preserve existing editor behavior, exports, local browser storage, three languages, analytics and SEO.

- Install with `npm ci`; build with `npm run build` (Next.js static export to `out`).
- The English root pages are copies of `/en/`; preserve both URL families and the canonical/hreflang metadata.
- Sitemap generation writes into `out` after build, not the tracked public source.
- `npm run deploy` builds then deploys two assets-only resources: `markdown-online` for the apex and `markdown-online-www` for 301 redirects. No proxy Worker code, database bindings or runtime secrets are needed.
- Before production, validate the static build and browser editor preview, export actions and language navigation; check SEO metadata, sitemap, robots, 404 and www redirect. Commit and push the clean revision to GitHub first, then deploy that exact revision and verify live.
- Cloudflare's previous upstream `markdown-online-9cq.pages.dev` is outside this account and is not changed by this deployment.
