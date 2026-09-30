---
name: CartIntel
description: A newsroom copy desk. White ground, near-black ink, one highlighter, one red pencil, typewritten records.
colors:
  paper: "#fbfbf9"
  paper-2: "#f1f1ed"
  ink: "#16171a"
  ink-2: "#45474c"
  ink-3: "#6f7278"
  rule: "#d6d7d2"
  rule-strong: "#16171a"
  highlighter: "#ffe45c"
  highlighter-soft: "#fff4b8"
  highlighter-ink: "#16171a"
  pencil: "#c2312a"
  pencil-soft: "#f6dcd9"
  graphite: "#5a5d63"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 4.4vw, 3.375rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  lede:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  manuscript:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  figure:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  edge: "2px"
  focus: "1px"
spacing:
  hair: "0.4rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "2.5rem"
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 9vw, 7.5rem)"
  section-tight: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.highlighter-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.edge}"
    padding: "0.9rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary-lg:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.highlighter-ink}"
    rounded: "{rounded.edge}"
    padding: "1.05rem 1.5rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.edge}"
    padding: "0.9rem 1.25rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    padding: "0.25rem 0"
  nav-link-hover:
    textColor: "{colors.ink}"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.manuscript}"
    rounded: "{rounded.edge}"
    padding: "clamp(1.25rem, 2.5vw, 1.75rem)"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.edge}"
    padding: "0.1em 0.45em"
  tag-verified:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.highlighter-ink}"
    rounded: "{rounded.edge}"
    padding: "0.1em 0.45em"
  tag-killed:
    backgroundColor: "transparent"
    textColor: "{colors.pencil}"
    rounded: "{rounded.edge}"
    padding: "0.1em 0.45em"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.edge}"
    padding: "0.8rem 0.9rem"
  input-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  margin-note:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
  zip-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.manuscript}"
    rounded: "{rounded.edge}"
    padding: "0.2em 0.5em"
---

# Design System: CartIntel

## Overview

**Creative North Star: "The Copy Desk"**

The page is sales copy that has been fact-checked in front of the reader. Everything on it behaves the way a checker's desk does: white paper, near-black ink, a single highlighter that marks only what was verified, a red pencil that strikes only what was killed, and graphite notes hanging in the margin. The prose voice is a contemporary grotesk with optical sizing (Bricolage Grotesque); anything that is a record, a figure, a label or a citation is typewritten (Courier Prime). The manuscript sheet is the one object with material presence; everything else is ink on the page, separated by hairline rules and white space rather than boxes.

Density is editorial, not dashboard. Sections are long-measure prose and ledgers, each opened by a hairline rule and a headline, with content held to reading widths (64ch prose, 36ch lede, 20ch headlines). The world refuses the category default (blue hero, three feature cards, a logo strip) and refuses decoration in general: no eyebrows or kickers above headings, no gradients as tone, no cards beyond the sheet, no second accent, no rounded pills, no em dashes in copy.

Under a dark scheme the desk goes dark and the ink goes light, but the manuscript sheet stays white paper: the record is a physical object that keeps its own material regardless of the room it sits in.

**Key Characteristics:**
- White ground and near-black ink; one highlighter yellow; one red pencil; graphite for annotations.
- Two faces with fixed jobs: grotesk for the page voice, typewriter mono for records, figures, labels and citations.
- Hairline rules and white space do the separating; the manuscript sheet is the only bordered, shadowed container.
- Square geometry everywhere (2px radius); 1px rules; a stronger ink rule opens each ledger.
- One motion grammar, the checker's desk: things are typed, highlighted, ticked and struck, once, as they come into view. See Motion.
- Browser chrome carries the world too: selection is highlighter, focus is an ink outline, the scrollbar is square ink-3 on paper-2.

## Colors

A near-monochrome desk with one committed color and one refusal color; the yellow is the only thing on the page that asks to be clicked or believed.

### Primary
- **Highlighter** (`highlighter`): the committed color. It carries every verified passage (`.hi` sweep over the evidence sentence, the Tier A letter, the `Free` price, the Tier A tag) and the one action (the "Request a free sample" button). Nothing else is yellow. Ink on yellow is always `highlighter-ink`.
- **Highlighter Soft** (`highlighter-soft`): the 3px focus ring on text fields only. Never a background fill.

### Secondary
- **Red Pencil** (`pencil`): what was refused. The strike line through killed text and through the refused record's field block, the "not sold" tag, the killed tier letter and X marks, the killed margin note, invalid field borders and error text, and the preview-mode dashed underline. It never marks an action.
- **Pencil Soft** (`pencil-soft`): defined for the pencil family but unused in the shipped page; do not reach for it without a reason.
- **Graphite** (`graphite`): the checker's own hand. Margin notes at rest and superscript source marks.

### Neutral
- **Paper** (`paper`): page ground and the sheet's own ground. Also the light text on ink buttons.
- **Paper 2** (`paper-2`): the preview strip, inline code in the form status, and the scrollbar track. The only tonal step; it is not a card fill.
- **Ink** (`ink`): headlines, body, the default button fill, the strong ledger rule, the focus outline, the caret.
- **Ink 2** (`ink-2`): secondary prose (ledes, tier and price descriptions, FAQ answers, sheet head), nav links at rest.
- **Ink 3** (`ink-3`): tertiary text (sheet field names, help text, hero note, footer legal), input borders, link underline color, scrollbar thumb.
- **Rule** (`rule`): every hairline divider, the sheet border, the dashed evidence rule.
- **Rule Strong** (`rule-strong`): the ink-weight rule that opens a ledger (fields, tiers, prices, checklist, promise, form, howto, first FAQ, footer) and the sheet head's bottom rule.

### Dark scheme
The dark desk swaps every neutral and shifts the two colors slightly warmer and lighter so they keep contrast on the dark ground (values in the sidecar's `colorMeta.*.darkScheme`). The `.sheet` component re-scopes the full light token set under the dark scheme, so records, tags and highlights inside a sheet always render as light paper. Selected via `prefers-color-scheme: dark` unless `html[data-theme="light"]`, or forced with `html[data-theme="dark"]`.

### Named Rules
**The One Highlighter Rule.** Yellow appears only on a verified passage or on the single call to action. If a new element wants yellow, it must be one of those two things; otherwise it is ink.

**The Red Pencil Rule.** Red is never decorative and never an action. It marks something killed, refused, invalid or pending a decision, and it always sits with the thing it marks (a strike, a tag, an X, a border, an underline).

**The White Paper Rule.** The manuscript sheet is white paper in both schemes. Do not theme the sheet dark.

## Typography

**Display Font:** Bricolage Grotesque, variable 300 to 800, optical sizing on (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Bricolage Grotesque
**Label/Mono Font:** Courier Prime 400, 400 italic, 700 (with Courier New, Courier, monospace)

**Character:** The grotesk speaks in the seller's voice: tight, slightly negative tracking, 600 weight for headings and 500 for emphasis, never heavier than 700 (the wordmark). The typewriter face is for anything that is a record of fact: sheet fields, evidence, citations, tags, tier letters, prices, ZIPs, dates, email addresses, margin notes and the preview strip. Mono always sets tabular numerals.

### Hierarchy
- **Display** (600, `clamp(2.375rem, 4.4vw, 3.375rem)`, 1.05, -0.02em): the page headline only, balanced, held to 20ch. Legal pages use a smaller display (`clamp(2rem, 4vw, 2.75rem)`).
- **Headline** (600, `clamp(1.75rem, 3.2vw, 2.5rem)`, 1.05, -0.018em): section openers, held to 22ch, with `clamp(1.75rem, 4vw, 3rem)` below.
- **Title** (600, 1.25rem, 1.3, -0.01em): tier names, process moves, form title, promise column heads. Price titles step down to 1.125rem; footer and ZIP group titles to 0.9375rem and 1rem.
- **Statement** (500, `clamp(1.375rem, 2.4vw, 1.875rem)`, 1.3, -0.012em): the problem statement at 30ch. The checklist question uses the same weight and tracking at `clamp(1.25rem, 2vw, 1.5rem)`.
- **Lede** (400, `clamp(1.125rem, 1.4vw, 1.3125rem)`, 1.45): the hero and closing subtext in Ink 2 at 36ch.
- **Body** (400, 1.0625rem, 1.55): prose at 64ch, `text-wrap: pretty`; secondary paragraphs in Ink 2 at 40 to 60ch. Small body is 0.9375rem (hero note, delivery, footer); help and legal text 0.875rem.
- **Manuscript** (Courier Prime 400, 0.9375rem, 1.5): the sheet body, tier examples, textarea, and inline `.mono` values inside prose.
- **Label** (Courier Prime 400, 0.8125rem, 1.45): sheet head and foot, sheet field names, citations, margin notes, wordmark descriptor, preview strip; tags at 0.75rem. Never uppercase, never letter-spaced.
- **Figure** (Courier Prime 700, `clamp(1.75rem, 3vw, 2.25rem)`, 1, -0.02em): prices. Tier letters use the same setting at `clamp(2rem, 4vw, 2.75rem)`.
- **Source mark** (Courier Prime, 0.72em superscript, graphite): the citation number after a quoted sentence, the way a checker cites.

### Named Rules
**The Two Hands Rule.** If it is the seller talking, it is the grotesk. If it is a record, a number, a label or a citation, it is the typewriter. Never set a heading in mono; never set a record field in the grotesk.

**The No Eyebrow Rule.** Headings stand alone. No small caps, no uppercase kicker, no tracked label above an h1 or h2. The only small mono text near a heading is a sheet head inside a sheet, which is a document header, not an eyebrow.

## Layout

A single 1180px column (`--max`) with a fluid gutter (`clamp(1rem, 4vw, 2.5rem)`), centered. Sections stack with `clamp(4rem, 9vw, 7.5rem)` block padding and open with a 1px `rule` border-top; the hero has no top rule and uses `clamp(2.5rem, 6vw, 5rem)` above and `clamp(3rem, 7vw, 6rem)` below. The sticky nav is 64px with a bottom rule, paper at 92% over a 10px blur.

Two-column layouts engage at 900px: the hero and refused section are 7fr/5fr, the process 5fr/7fr, the person 5fr/7fr, promise and FAQ 1fr/1fr, prices and delivery three equal columns, the footer 1.2fr/1fr/1fr. Ledgers are single-column grids below that: fields collapse their 11rem/1fr label grid at 600px, the form row pairs at 640px, ZIP groups go two-up at 720px and three-up at 1000px. The nav's anchor links and the wordmark descriptor hide at 760px, leaving wordmark plus CTA. At 1440px the sheet's margin note leaves the flow and hangs in the right gutter (`left: calc(100% + 0.9rem)`, `top: 4.25rem`, up to 11rem wide).

Vertical rhythm inside ledgers is a row per fact: 1.1 to 1.5rem of block padding, a 1px `rule` between rows, `rule-strong` above the first. Grid gaps are `clamp(1.5rem, 4vw, 3.5rem)` for page sections and 1 to 1.5rem inside components. There is no spacing scale token; the reused steps are recorded in the frontmatter.

## Elevation & Depth

Flat by default. The page is ink on paper; depth is conveyed by rules (hairline vs ink-weight), by the tonal step from `paper` to `paper-2`, and by weight of type, not by shadow. Exactly one thing casts a shadow: the manuscript sheet, which reads as a physical page lying on the desk. The nav floats with translucency and blur rather than a shadow.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 0 rgb(22 23 26 / 0.08), 0 8px 18px -12px rgb(22 23 26 / 0.28)`): a contact line and a soft, short drop. Light scheme only.
- **Sheet on dark desk** (`box-shadow: 0 1px 0 rgb(0 0 0 / 0.6), 0 10px 24px -12px rgb(0 0 0 / 0.9)`): the same object under the dark scheme, where the white sheet needs a deeper drop to sit on the desk.
- **Field focus** (`box-shadow: 0 0 0 3px var(--hi-soft)`): a flat ring, not a shadow, paired with the border turning to ink.

### Named Rules
**The One Object Rule.** Only the manuscript sheet has a shadow. New containers get a rule or nothing.

## Shapes

Square. Every corner in the system is 2px: buttons, the sheet, tags, inputs, the checklist box, the form status. The focus outline is 1px. The scrollbar thumb is 0. Borders are 1px in `rule` (dividers, sheet, chips, form status uses `rule-strong`), 1px in `ink` (buttons, tags), 1px in `ink-3` (inputs), 1.5px in `ink` (checklist box). Rules are horizontal and full-width; the evidence rule inside a sheet is dashed. The only diagonals are the pencil strikes: a 2px line rotated -1.2deg through a killed span, and -4deg through a refused record's whole field block, both drawn from the left.

Icons are inline SVG from a sprite (check, x, arrow-right, arrow-up-right, caret-down, minus), 1em and filled with currentColor; they sit beside text, never alone as a button.

## Components

### Buttons
- **Shape:** square (2px), 1px border in the fill color, `line-height: 1`, `white-space: nowrap`, inline-flex with a 0.6rem gap for the trailing arrow.
- **Primary:** highlighter fill, ink text, 600 weight, `0.9rem 1.25rem`; the large size (`btn-lg`) is `1.05rem 1.5rem` at 1.0625rem; in the nav it tightens to `0.7rem 1rem` (and `0.65rem 0.85rem` at 0.9375rem under 760px). One label everywhere: "Request a free sample".
- **Hover / Focus / Active:** hover inverts to ink fill with paper text; the trailing arrow icon nudges 3px right; active drops the button 1px. Transitions 180ms `cubic-bezier(0.16, 1, 0.3, 1)`. Focus is the global ring (2px ink, 3px offset).
- **Ink (default `.btn`):** ink fill, paper text; used for the skip link's material. There is no ghost or outline button.
- **Arrow link:** a text link at 500 weight with a 0.4rem gap and a 1em caret or arrow; hover nudges the icon 2px down. This is the secondary action, not a button.

### Manuscript Sheet (signature)
The record as a physical object: a typewritten page with a 1px `rule` border, 2px corners, the sheet shadow, `clamp(1.25rem, 2.5vw, 1.75rem)` padding, Courier Prime at 0.9375rem/1.5.
- **Head:** a flex row at 0.8125rem in Ink 2 with the record type in 700 ink (`Record`, or `Refused` in pencil) and the checker's name; closed by a 1px `rule-strong` line.
- **Fields:** a `max-content 1fr` definition grid, 1.25rem column gap, 0.55rem row gap; field names in Ink 3 at 0.8125rem; values wrap anywhere.
- **Evidence:** opened by a dashed `rule`, a faint label, then the quoted sentence at 1.6 line-height with the verified clause under the highlighter and a superscript source mark; citations follow at 0.8125rem in Ink 2 with ink links.
- **Foot:** a 1px `rule`, 0.8125rem Ink 3, space-between.
- **Refused variant:** head word in pencil, fields dimmed to Ink 2, a 2px pencil line rotated -4deg through the whole field block.
- **Dark scheme:** the sheet re-scopes the light tokens inside itself and deepens its shadow. It is always white paper.

### Margin Note
The checker's annotation: Courier Prime 0.8125rem/1.45 in graphite, a 1rem icon then text, 1.1rem below the sheet. `confirmed` colors the check mark ink; `killed` turns the whole note and its X pencil. At 1440px and above it hangs in the right gutter beside the sheet.

### Highlight and Pencil Strike (inline devices)
- **Highlight (`.hi`):** a flat single-color `background-image` of highlighter, `box-decoration-break: clone`, `0.05em 0.15em` padding with negative horizontal margin so the mark overhangs the text; text in highlighter-ink. Inside a `.sweep` container it starts at 0% width and sweeps to 100% over 900ms with a 120ms delay when `.in-view` lands.
- **Strike (`.kill`):** text dims to Ink 2; a 2px pencil line at 52% height, rotated -1.2deg from the left, overhanging 0.1em each side. Inside `.sweep` it scales from 0 to 1 over 900ms with a 200ms delay.
- Both devices draw once when their `.sweep` container enters view (the Free price and the never-sold row use the same mechanism). Under `prefers-reduced-motion: reduce` the JS marks everything in-view immediately and CSS collapses all transitions to 0.01ms; the highlight and strike are simply present.

### Tags
Inline mono at 0.75rem, `0.1em 0.45em`, 1px ink border, 2px corners. `tag-a` (verified tier) fills highlighter; `tag-kill` borders and colors in pencil with no fill. Tags name tiers and refusals only; they are not category chips.

### Tier Ledger
Opened by a `rule-strong`, each tier a row on a `rule`: a 4.5rem column holding the tier letter (Courier Prime 700 at `clamp(2rem, 4vw, 2.75rem)`; Tier A wears the highlighter, the never-sold row is a pencil X), then title and Ink 2 description at 56ch, then a mono example line with a faint provenance note. At 900px the example takes its own third column (`4.5rem 1.15fr 1fr`).

### Price Sheet
Three entries, `rule-strong` above, a `rule` below each, no boxes. Title at 1.125rem, a mono Ink 2 count, the amount in Courier Prime 700 at `clamp(1.75rem, 3vw, 2.25rem)`; the free sample's amount is highlighted. Three columns at 900px with 2.5rem gaps. Delivery notes follow as three short Ink 2 paragraphs with bold ink leads.

### Promise Lists
Two columns (Promised / Not promised) with titled `rule-strong` heads; each item a `1.5rem 1fr` row on a `rule`, Ink 2 with a 600 ink lead. The icon column is a check in ink for promises and an X in pencil for refusals.

### Definition Grid, Checklist, How-to
Field definitions run `11rem 1fr` rows with mono ink field names (two columns at 900px). The checklist is a 1.5rem square box with a 1.5px ink border and a check, beside a 500-weight question and an Ink 2 answer at 48ch. The how-to list numbers itself in mono Ink 3 with a bold lead and Ink 2 detail.

### Inputs / Fields
- **Style:** full width, `0.8rem 0.9rem`, paper fill, 1px Ink 3 border, 2px corners, body type; the textarea is Courier Prime at 0.9375rem with a 5.5rem minimum and vertical resize. Labels at 500 weight above, help at 0.875rem Ink 3 below, placeholder in Ink 3.
- **Focus:** outline removed; border to ink plus a 3px highlighter-soft ring, 180ms.
- **Error:** the field's border goes pencil and a 0.875rem pencil error line appears (`aria-invalid` is set by the script). No success state beyond the form status box: a `rule-strong` bordered note with inline `paper-2` code.

### Navigation
Sticky, 64px, paper at 92% with a 10px backdrop blur, bottom `rule`. Wordmark at 700 and -0.03em with a mono Ink 3 descriptor; section links at 500 in Ink 2 with a transparent bottom border that turns ink on hover (no underline); the primary button at the right. Under 760px the links and descriptor disappear, leaving wordmark plus CTA. Section anchors scroll smoothly with a 5rem scroll-padding.

### FAQ
Native `details`, each on a `rule` (the first on `rule-strong`), summary at 500 with a caret that rotates 180deg when open; answers in Ink 2 at 56ch. Two columns at 900px.

### Preview Mode
`body[data-preview="true"]` reveals the mono preview strip on `paper-2` and gives every `.todo` element a dashed pencil underline with a help cursor and a `title`; each `.todo` also carries a `data-decision` key naming the owner decision. `.synthetic-label` (mono 0.75rem pencil) appears in sheet feet to mark illustrative records. Setting `data-preview="false"` removes all of it without touching layout.

## Motion

One grammar, the checker's desk. Nothing loops, nothing follows the pointer, nothing animates layout. Every effect is one-shot, triggered by an IntersectionObserver, and uses transform, opacity, background-size, or stroke-dashoffset. Easing is `cubic-bezier(0.16, 1, 0.3, 1)` throughout; state feedback is 180ms, arrivals 600 to 900ms.

**Focal sequence (hero, on load).** Headline, lede, actions and note rise 14px in order at 110ms steps. The sheet settles from 0.985 scale. Once the sheet is 35% in view (700ms grace), its field values are typed at 14ms per character behind a blinking ink-block caret, one field after another, with each `dd`'s final height reserved so the sheet never jumps. When typing ends the evidence block and footer fade in, the highlighter sweeps the evidence sentence (380ms after), and the margin note slides in with its check mark drawing itself (`stroke-dashoffset` 26 to 0). A 6s fallback completes the record if the reader never looks; with JS off the record is simply there.

**Supporting motion, same grammar.** `svg.draw` check marks (margin note, checklist boxes, promise list, ask list, submit acknowledgment) draw at 520ms with a per-row delay of 260ms. Ledger rows, prices, fields, FAQ items, moves and how-to steps arrive with a 70ms stagger capped at six. Section headings and the statement rise 14px into place, the same move as the hero copy. The refused record's strike, the never-sold strike and the Free highlight draw once when their `.sweep` container is in view. Primary buttons fill with ink from the left over 320ms on hover and focus. The nav condenses from 64px to 54px, and its button by a step, once a 12px sentinel leaves the viewport (no scroll listener); it never gains a shadow. FAQ answers unfold over 300ms on open. On submit the button swaps its arrow for a drawn check for four seconds and the status box unfolds.

**Reduced motion.** `prefers-reduced-motion: reduce` sets every transition to 0.01ms, shows all reveal targets immediately, renders check marks and strikes complete, skips the typewriter, and keeps color and state feedback (button fill, invalid field ring, status box) intact.

## Do's and Don'ts

### Do:
- **Do** confine yellow to verified passages and the single "Request a free sample" action; everything else is ink.
- **Do** set every record, figure, label, tag, citation and date in Courier Prime with tabular numerals, and every heading and sentence of prose in Bricolage Grotesque.
- **Do** separate sections and rows with 1px `rule` lines and open each ledger with a `rule-strong` line; use white space, not boxes.
- **Do** keep every corner at 2px and every border at 1px (1.5px only for the checklist box).
- **Do** hold prose to 64ch, ledes to 36ch, headlines to 20 to 22ch, and secondary paragraphs to 40 to 60ch.
- **Do** keep the manuscript sheet white paper under the dark scheme by re-scoping the light tokens inside `.sheet`.
- **Do** mark anything killed, refused, invalid or undecided with the red pencil sitting on the thing itself (strike, tag, X, border, dashed underline).
- **Do** honor reduced motion by rendering highlights and strikes at their final state with no sweep.

### Don't:
- **Don't** add a kicker, eyebrow, small-caps or uppercase tracked label above any heading.
- **Don't** create cards. The sheet is the only bordered, shadowed container; new content goes in ledger rows on rules.
- **Don't** use gradients as tone or decoration; the only `linear-gradient`s in the system are flat single-color fills whose size animates: the highlighter over text and the ink that fills a primary button from the left on hover, which exists so the mark can sweep.
- **Don't** introduce a second accent, a blue link color, or a green success color; confirmation is an ink check mark.
- **Don't** round anything past 2px or draw pills.
- **Don't** use em dashes in copy; the voice uses periods, commas and colons.
- **Don't** put a shadow on the nav, buttons, inputs or any new element.
- **Don't** use icon-only buttons or glyph fonts; icons are inline SVG beside text.
- **Don't** letter-space or uppercase the mono face; it is a typewriter, not a label system.
