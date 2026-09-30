# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML, CSS and vanilla JS with self-hosted fonts and no build step. Chosen because the site is one page plus two legal pages, must load fast for a single skeptical visitor, and must be trivially deployable (GitHub Pages, Netlify, Vercel, any static host). Inferred from the brief; the owner did not choose a stack.

## Users

The owner of a small, owner-run US marketing agency that serves med spas and does not run its own data tooling. They arrive from a cold email (clicked the link or searched the sender's name), decide alone and quickly, and are checking three things: is this a real person, is the data actually better than cheap lists, and what exactly do I get, what does it cost, and what happens if a row is wrong. Where the agency sits does not matter; what matters is the territory it sells into.

## Product Purpose

Hand-checked owner contacts for med spas, where every record carries the evidence showing why it is right. The page has one job: turn a cold-email recipient into someone who requests the free 10-row sample for their territory. Buying happens after the sample, by email, not on the page. Success is a sample request that includes name, agency, email, and the ZIPs or area they sell into.

## Positioning

Software finds the candidates, a person judges them, and the judgment plus the evidence is the product. Each record names the owner, states how the seller knows they own it, links to the source, and labels exactly what kind of email it is, so the buyer can check any row in under a minute. Cheap sources are weak on small-business owners and never say which rows are right; this product sells knowing which rows are right, not volume.

## Operating Context

- Territory: Miami, Florida med spas, defined as a list of ZIP codes. Nothing beyond Miami is served yet.
- Sources: public only. The business's own website, Google Maps listings, Florida's public company and fictitious-name records (Sunbiz).
- Process: software gathers the business, website, Florida filings, candidate owners and candidate emails, and verifies the emails. A person then answers three questions per record: is this a real med spa in the territory, does the evidence show this person owns it, is this email really theirs. 10% of every order is re-checked before delivery. Researched businesses are never contacted to test an email.
- Email tiers: Tier A, email published next to the owner's name. Tier B, email built from the owner's name and domain that passed verification, included only with the buyer's agreement. Tier C, a business inbox such as info@. Never sold: catch-all addresses, and any business where the owner could not be identified.
- Commercial: Sample 10 records free; Introductory 50 records $99; Standard 150 records $299. Non-exclusive. 14-day correction window: any wrong row is replaced or refunded. Payment through Skydo. Delivery by email.

## Capabilities and Constraints

Confirmed:
- The page must show a real, reachable person (real name, postal address, contact email on the seller's own domain), a privacy notice, a data-removal path for listed owners with a maintained suppression list, simple terms of sale, and opt-out wording that matches outreach emails.
- The page must never promise replies, meetings, booked calls or revenue; publish invented or unmeasured statistics; show fake testimonials, client logos or "trusted by" lines; claim coverage beyond Miami; brag about volume; name competitors or their prices; hide the tier mix; or use the word "exclusive".
- Testimonials are omitted entirely until a paying customer gives one.

Open decisions the owner must settle before launch (working assumptions used on the page are labeled in the source and must be confirmed or changed):
- Brand name and domain. Working name: CartIntel (inferred from the repository name).
- Tier C counting. Working assumption: a business inbox is sold only when the owner is named and proven, and counts as a full record.
- Tier B default. Working assumption: opt-in per order.
- Tier mix disclosure. No measured yield exists yet; the page states that the mix is reported per order and publishes no percentage.
- Definition of a wrong row. Working assumption: hard bounce, wrong owner, not a med spa, or outside the territory; the buyer sends the bounce message or the contradicting evidence.
- Freshness. Working assumption: every record checked within 30 days before delivery.
- Delivery. Working assumption: CSV by email; sample within 2 business days, paid orders within 5 business days.
- Payment flow. Working assumption: a Skydo payment link by email, paid by card or bank transfer; files sent after payment clears.
- Removal process. Working assumption: an email address on the seller's domain; the seller maintains the suppression list.
- Postal address: not yet supplied (footer placeholder).
- Exact Miami ZIP list: not published on the page by the owner's decision (Sep 30 2026); the sample request asks for the buyer's ZIPs instead. Still to be settled for delivery.
- Optional extras (territory exclusivity option, monthly new-filings feed): kept off the page.

## Brand Commitments

- Seller's real name: Aadarsh Patel, who researches and checks every record personally.
- Voice: plain, factual, first person singular where the seller speaks. States what is promised and what is not. No hype verbs.
- No pinned visual identity, logo, colors or type exist yet.

## Evidence on Hand

- The written content brief (Website Content Brief, Sep 30 2026) is the only source material.
- No real checked record has been supplied yet. The page's worked sample record, the three tier examples and the rejected record are illustrative and masked, labeled as such in the source, and must be replaced with real masked rows before launch.
- No measured statistics, no testimonials, no customer names exist. Future work must not fabricate any of these.
- No portrait photo of the seller has been supplied. The "who checks the records" block was removed from the page by the owner's decision (Sep 30 2026); the seller's name remains in the footer, the record sheets and the FAQ.

## Product Principles

1. Proof over persuasion: the strongest element on any surface is a record the visitor can check themselves.
2. Label everything: every email carries its tier, every claim its source, every assumption its status.
3. Say what is not promised as plainly as what is.
4. One action: every section leads back to requesting a free sample.
5. Never publish a number that was not measured.

## Accessibility & Inclusion

No product-specific standard was established. Target WCAG 2.2 AA as the floor for a public commercial page.
