# CLAUDE.md

## What is this?

Beyond Hate - Positive behavior change through social networks. This repo is the static website at beyondhate.com.

The site explores how behavioral science research can counter harmful behaviors online, starting with two applications: online hate speech and vaccine hesitancy.

## Deploy

After making changes:

```bash
npx wrangler pages deploy . --project-name=beyondhate-site
```

Remind the user to commit and deploy periodically - don't let changes pile up.

The Cloudflare Pages project is `beyondhate-site`. Git Provider is set to "No" - deploys are manual via wrangler, not triggered by push. Edge cache may take 1-2 minutes to update after deploy.

## Structure

```
/
├── index.html              # Homepage
├── about.html              # About/bio page
├── styles.css              # Global styles
├── components/
│   └── header.js           # Shared nav component (injected via script)
├── applications/
│   ├── hate-response.html
│   └── vaccine-hesitancy.html
├── framework/
│   └── index.html
├── papers/
│   └── *.pdf               # Downloadable assets
├── assets/                 # Images
├── static/                 # Other static files
└── worker/                 # Cloudflare Worker for API (separate from Pages)
    ├── wrangler.toml
    └── src/index.js
```

## Style

- Pure static HTML, no build step
- Shared header via vanilla JS injection: `<script src="/components/header.js"></script>`
- Design matches sdoh.org design language (see CSS variables)
- Avoid filler words like "actually", "real", etc.
- Focus on behavior change, not "changing minds"
- Keep prose tight - cut redundancy, avoid jargon unless defined

## Related Projects

- **sdoh.org** - The continuous improvement methodology behind this work (Study, Do, Observe, Hone)
- **seedwork.ai** - Methodology for building with LLMs
