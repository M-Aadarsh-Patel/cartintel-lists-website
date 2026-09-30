---
name: awesome-design-md
description: Use when building or restyling UI and you want a proven, real-world design system instead of generic defaults. Vendored collection of 74 DESIGN.md files (Stitch format) extracted from real sites - Linear, Stripe, Vercel, Shopify, Apple, Airbnb and more. Pick one, copy it to the project root as DESIGN.md, and build against its tokens.
---

# awesome-design-md

A vendored copy of the DESIGN.md files from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).
Each file is a plain-text design system in the [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/specification/):
color tokens, typography scale, spacing, radii, shadows, component rules, and the reasoning behind them.

## How to use

1. **Pick a reference.** Choose the site whose visual language fits the product and audience. Read its file under `references/<site>/DESIGN.md` before deciding; the frontmatter `description` summarizes the system in one paragraph.
2. **Adopt it.** Copy the chosen file to the project root as `DESIGN.md` (`cp .claude/skills/awesome-design-md/references/<site>/DESIGN.md DESIGN.md`). Do not adopt more than one; two design systems is no design system.
3. **Adapt, don't clone.** Replace brand colors and typefaces with the project's own where they exist, keep the structure (surface hierarchy, type scale, spacing rhythm, component states). The value is the system, not the brand.
4. **Build against it.** Every UI change reads `DESIGN.md` first. If `/impeccable` or the `design-taste-frontend` skill is installed, they will pick up the root `DESIGN.md` automatically.
5. **Never mix.** If a token isn't in `DESIGN.md`, add it there first, then use it. Ad-hoc hex values and one-off spacing are the drift this skill exists to prevent.

## Picking well

- Data-dense product UI (lists, tables, dashboards): Linear, Sentry, PostHog, Kraken, Supabase, ClickHouse.
- Clean marketing and SaaS: Vercel, Stripe, Notion, Cal.com, Mintlify, Resend.
- Commerce and consumer: Shopify, Airbnb, Nike, Starbucks, Apple, Meta.
- Editorial and content: The Verge, WIRED, Sanity, Runway.

## Index

### AI & LLM Platforms
- **Claude** — `references/claude/DESIGN.md` — Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
- **Cohere** — `references/cohere/DESIGN.md` — Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
- **ElevenLabs** — `references/elevenlabs/DESIGN.md` — AI voice platform. Dark cinematic UI, audio-waveform aesthetics
- **Minimax** — `references/minimax/DESIGN.md` — AI model provider. Bold dark interface with neon accents
- **Mistral AI** — `references/mistral.ai/DESIGN.md` — Open-weight LLM provider. French-engineered minimalism, purple-toned
- **Ollama** — `references/ollama/DESIGN.md` — Run LLMs locally. Terminal-first, monochrome simplicity
- **OpenCode AI** — `references/opencode.ai/DESIGN.md` — AI coding platform. Developer-centric dark theme
- **Replicate** — `references/replicate/DESIGN.md` — Run ML models via API. Clean white canvas, code-forward
- **Runway** — `references/runwayml/DESIGN.md` — AI creative-tools platform with an editorial film-festival aesthetic — cinematic dark heroes, paper-white reading bands, single proprietary sans, and pure black pill CTAs.
- **Together AI** — `references/together.ai/DESIGN.md` — Open-source AI infrastructure. Technical, blueprint-style design
- **VoltAgent** — `references/voltagent/DESIGN.md` — AI agent framework. Void-black canvas, emerald accent, terminal-native
- **xAI** — `references/x.ai/DESIGN.md` — Elon Musk's AI lab. Stark monochrome, futuristic minimalism
### Developer Tools & IDEs
- **Cursor** — `references/cursor/DESIGN.md` — AI-first code editor. Sleek dark interface, gradient accents
- **Expo** — `references/expo/DESIGN.md` — React Native platform. Dark theme, tight letter-spacing, code-centric
- **Lovable** — `references/lovable/DESIGN.md` — AI full-stack builder. Playful gradients, friendly dev aesthetic
- **Raycast** — `references/raycast/DESIGN.md` — Productivity launcher. Sleek dark chrome, vibrant gradient accents
- **Superhuman** — `references/superhuman/DESIGN.md` — Fast email client. Premium dark UI, keyboard-first, purple glow
- **Vercel** — `references/vercel/DESIGN.md` — Frontend deployment platform. Black and white precision, Geist font
- **Warp** — `references/warp/DESIGN.md` — Modern terminal. Dark IDE-like interface, block-based command UI
### Backend, Database & DevOps
- **ClickHouse** — `references/clickhouse/DESIGN.md` — Fast analytics database. Yellow-accented, technical documentation style
- **Composio** — `references/composio/DESIGN.md` — Tool integration platform. Modern dark with colorful integration icons
- **HashiCorp** — `references/hashicorp/DESIGN.md` — Infrastructure automation. Enterprise-clean, black and white
- **MongoDB** — `references/mongodb/DESIGN.md` — Document database. Green leaf branding, developer documentation focus
- **PostHog** — `references/posthog/DESIGN.md` — Product analytics. Playful hedgehog branding, developer-friendly dark UI
- **Sanity** — `references/sanity/DESIGN.md` — Headless content platform with a dark-first editorial marketing surface — 112px display type, IBM Plex Mono technical eyebrows, and a single coral-red accent reserved for the highest-priority CTA.
- **Sentry** — `references/sentry/DESIGN.md` — Error monitoring. Dark dashboard, data-dense, pink-purple accent
- **Supabase** — `references/supabase/DESIGN.md` — Open-source Firebase alternative. Dark emerald theme, code-first
### Productivity & SaaS
- **Cal.com** — `references/cal/DESIGN.md` — Open-source scheduling. Clean neutral UI, developer-oriented simplicity
- **Intercom** — `references/intercom/DESIGN.md` — Customer messaging. Friendly blue palette, conversational UI patterns
- **Linear** — `references/linear.app/DESIGN.md` — Project management for engineers. Ultra-minimal, precise, purple accent
- **Mintlify** — `references/mintlify/DESIGN.md` — Documentation platform. Clean, green-accented, reading-optimized
- **Notion** — `references/notion/DESIGN.md` — All-in-one workspace. Warm minimalism, serif headings, soft surfaces
- **Resend** — `references/resend/DESIGN.md` — Email API for developers. Minimal dark theme, monospace accents
- **Slack** — `references/slack/DESIGN.md` — Team messaging. Aubergine brand purple, friendly rounded UI, multi-color accent system
- **Zapier** — `references/zapier/DESIGN.md` — Automation platform. Warm orange, friendly illustration-driven
### Design & Creative Tools
- **Airtable** — `references/airtable/DESIGN.md` — Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic
- **Clay** — `references/clay/DESIGN.md` — Creative agency. Organic shapes, soft gradients, art-directed layout
- **Figma** — `references/figma/DESIGN.md` — Collaborative design tool. Vibrant multi-color, playful yet professional
- **Framer** — `references/framer/DESIGN.md` — Website builder. Bold black and blue, motion-first, design-forward
- **Miro** — `references/miro/DESIGN.md` — Visual collaboration. Bright yellow accent, infinite canvas aesthetic
- **Webflow** — `references/webflow/DESIGN.md` — Visual web builder. Blue-accented, polished marketing site aesthetic
### Fintech & Crypto
- **Binance** — `references/binance/DESIGN.md` — Crypto exchange. Bold Binance Yellow on monochrome, trading-floor urgency
- **Coinbase** — `references/coinbase/DESIGN.md` — Crypto exchange. Clean blue identity, trust-focused, institutional feel
- **Kraken** — `references/kraken/DESIGN.md` — Crypto trading platform. Purple-accented dark UI, data-dense dashboards
- **Mastercard** — `references/mastercard/DESIGN.md` — Global payments network. Warm cream canvas, orbital pill shapes, editorial warmth
- **Revolut** — `references/revolut/DESIGN.md` — Digital banking. Sleek dark interface, gradient cards, fintech precision
- **Stripe** — `references/stripe/DESIGN.md` — Payment infrastructure. Signature purple gradients, weight-300 elegance
- **Wise** — `references/wise/DESIGN.md` — International money transfer. Bright green accent, friendly and clear
### E-commerce & Retail
- **Airbnb** — `references/airbnb/DESIGN.md` — Travel marketplace. Warm coral accent, photography-driven, rounded UI
- **Meta** — `references/meta/DESIGN.md` — Tech retail store. Photography-first, binary light/dark surfaces, Meta Blue CTAs
- **Nike** — `references/nike/DESIGN.md` — Athletic retail. Monochrome UI, massive uppercase Futura, full-bleed photography
- **Shopify** — `references/shopify/DESIGN.md` — E-commerce platform. Dark-first cinematic, neon green accent, ultra-light display type
- **Starbucks** — `references/starbucks/DESIGN.md` — Coffee retail flagship. Four-tier earth-green system, warm cream canvas, proprietary SoDoSans typography
### Media & Consumer Tech
- **Apple** — `references/apple/DESIGN.md` — Consumer electronics. Premium white space, SF Pro, cinematic imagery
- **HP** — `references/hp/DESIGN.md` — PC and printer maker. Pure white canvas, HP Electric Blue signal CTA, geometric Forma DJR Micro, blue chevron decorations
- **IBM** — `references/ibm/DESIGN.md` — Enterprise technology. Carbon design system, structured blue palette
- **NVIDIA** — `references/nvidia/DESIGN.md` — GPU computing. Green-black energy, technical power aesthetic
- **Pinterest** — `references/pinterest/DESIGN.md` — Visual discovery platform. Red accent, masonry grid, image-first
- **PlayStation** — `references/playstation/DESIGN.md` — Gaming console retail. Three-surface channel layout, cyan hover-scale interaction
- **SpaceX** — `references/spacex/DESIGN.md` — Space technology. Stark black and white, full-bleed imagery, futuristic
- **Spotify** — `references/spotify/DESIGN.md` — Music streaming. Vibrant green on dark, bold type, album-art-driven
- **The Verge** — `references/theverge/DESIGN.md` — Tech editorial media. Acid-mint and ultraviolet accents, Manuka display type
- **Uber** — `references/uber/DESIGN.md` — Mobility platform. Bold black and white, tight type, urban energy
- **Vodafone** — `references/vodafone/DESIGN.md` — Global telecom brand. Monumental uppercase display, Vodafone Red chapter bands
- **WIRED** — `references/wired/DESIGN.md` — Tech magazine. Paper-white broadsheet density, custom serif, ink-blue links
### Automotive
- **BMW** — `references/bmw/DESIGN.md` — Luxury automotive. Dark premium surfaces, precise German engineering aesthetic
- **BMW M** — `references/bmw-m/DESIGN.md` — Performance automotive. Motorsport-inspired contrast, M color accents, precision-driven layout
- **Bugatti** — `references/bugatti/DESIGN.md` — Luxury hypercar. Cinema-black canvas, monochrome austerity, monumental display type
- **Ferrari** — `references/ferrari/DESIGN.md` — Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness
- **Lamborghini** — `references/lamborghini/DESIGN.md` — Luxury automotive. True black cathedral, gold accent, LamboType custom Neo-Grotesk
- **Renault** — `references/renault/DESIGN.md` — French automotive. Vivid aurora gradients, NouvelR proprietary typeface, zero-radius buttons
- **Tesla** — `references/tesla/DESIGN.md` — Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans
### Retro Web · DESIGN.md Nostalgia
- **Dell (1996)** — `references/dell-1996/DESIGN.md` — Catalog-era enterprise web. Literal black page frame, flat color-block "ribbon cards", chunky Helvetica-Black titles over Times Roman body, and hand-cut GIF stickers (NEW! bursts, award seals, beveled product photos).
- **Nintendo.com (2001)** — `references/nintendo-2001/DESIGN.md` — Y2K "console chrome" web. Brushed-periwinkle beveled metal panels, a halftone-dotted carbon nav glowing amber, outlined Arial-Black box-art wordmarks over circuit-board hero fields, and a pixel Mario welcome bubble.

## Updating

Re-clone the upstream repo and re-copy `design-md/*/DESIGN.md` into `references/`. Only the DESIGN.md files are vendored; the upstream `preview.html` catalogs are omitted to keep the repo small.

License: upstream files are MIT licensed, see `LICENSE` in this folder.
