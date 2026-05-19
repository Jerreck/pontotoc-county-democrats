# Pontotoc County Democrats — Design System

A visual identity and component library for the **Pontotoc County Oklahoma Democratic Party**, a county‑level political organization based in Ada, Oklahoma.

This is an **original** design system created for the organization. It is not the national Democratic Party's brand and does not borrow proprietary marks; instead it aims to feel local, civic, and rooted in south‑central Oklahoma — prairie blues, red‑clay accents, and warm cream backgrounds.

---

## About the organization

Pontotoc County sits in south‑central Oklahoma. Ada is the county seat. The county is the historic capital of the Chickasaw Nation and home to East Central University. The county Democratic Party is a small, volunteer‑run organization that:

- Recruits and supports candidates for local, state, and federal office
- Hosts monthly meetings, fundraisers, and voter registration drives
- Coordinates door‑knocking, phone banks, and yard signs during campaign season
- Maintains a presence at the county fair, parades, and community events

The audience is overwhelmingly **local**: neighbors, retirees, students at ECU, working families. The brand has to feel like a county fair booth and a precinct meeting at the same time — warm, plain‑spoken, hand‑crafted, never slick.

---

## Visual Foundations

### Color
A grounded palette that reads "Oklahoma" before it reads "Democrat":

- **Prairie Blue** (`--pc-blue-700` / `--pc-blue-500`) — primary. A deep, slightly‑gray blue. Used for backgrounds, the logo, primary buttons, headlines on light bg.
- **Red Earth** (`--pc-clay-500`) — a warm, oxidized red‑orange, like Oklahoma red dirt. Used sparingly for accents (stars, dates, CTA emphasis). It is *not* the national party red.
- **Wheat** (`--pc-wheat-500`) — golden, prairie‑grass accent for highlights and decorative stripes.
- **Bone** (`--pc-bone-50` / `--pc-bone-100`) — warm, off‑white background. Replaces pure white everywhere.
- **Ink** (`--pc-ink-900`) — near‑black with a hint of blue for body text.
- **Sage** (`--pc-sage-500`) — muted prairie green, secondary supportive accent.

Backgrounds are warm‑neutral (Bone), never pure white. Dark sections use Prairie Blue, not black.

### Type
- **Display:** **Newsreader** (Google Fonts) — a warm, contemporary serif with civic gravitas. Used for headlines, the logo wordmark, and pull quotes.
- **UI / Body:** **Public Sans** (the US Web Design System's open sans‑serif) — neutral, government‑adjacent, highly readable. Used for body copy, UI, captions, buttons.
- **Mono:** **JetBrains Mono** — used very sparingly for tabular data (precinct counts, dates).

Headlines are set tight (line-height 1.05–1.1) and large. Body copy is generous (1.55 line height). Never use ALL CAPS except for tiny eyebrow labels with tracking.

### Layout & shape
- Corner radii: small (4px) for inputs/buttons, medium (8px) for cards, large (16px) for hero containers. No pill‑shaped CTAs.
- Borders: 1px solid `--pc-ink-100` on cards. Decorative dividers can be 2px Prairie Blue or a hand‑placed star row.
- Shadows: soft, warm (`0 1px 2px rgba(40,30,20,.06)` and `0 4px 16px rgba(40,30,20,.08)`). Never bluish.
- Stars are a recurring motif — **five‑pointed**, filled, used as bullets, dividers, and accents. Oklahoma's flag and seal both feature stars; the motif is civic and local.
- A subtle horizon‑stripe motif (a thin Wheat band over Prairie Blue) appears in headers and footers — a nod to red‑dirt roads against an Oklahoma sky.

### Imagery
- Real photography only — candidates, volunteers, community events. **No stock photos** of generic "voters." Black‑and‑white treatments are encouraged for archival/serious moments; warm, slightly‑desaturated color for events.
- Hand‑lettered or chalkboard textures may appear on yard signs and flyers, never in UI.

### Motion
- Restrained. Standard fade + 4–8px translate on entry, 180ms, `cubic-bezier(.2, .8, .2, 1)`.
- Buttons darken 4–6% on hover, shift 1px down on press. No bouncy springs.

---

## Content Fundamentals

### Tone
- **Neighborly, plain, direct.** Write like you'd talk to a neighbor across the fence. Short sentences. Real words.
- **First‑person plural** for the organization ("We meet the second Thursday of every month"). **Second person** for the reader ("Your vote matters in Pontotoc County").
- **Specific over generic.** "Coffee at Polly's Café, 7am Saturday" beats "Join us for a community gathering."

### Casing
- **Sentence case** for headlines, buttons, and labels. Title Case is reserved for proper nouns and event names.
- Tiny eyebrows ("UPCOMING EVENT") may use `text-transform: uppercase` with `letter-spacing: 0.12em`.

### Numbers & dates
- Spell out under ten. "We need ten volunteers." / "We had 47 turn out."
- Dates as "Thursday, October 12" — not "10/12/26" in body copy. ISO ok in tables.

### What we don't do
- No emoji in formal communications. Stars (★) and the en‑dash (—) carry the load.
- No exclamation points except on event posters.
- No "folks" — say "neighbors," "voters," "Pontotoc County."
- No partisan attack copy. The brand is for *building*, not punching down.

### Examples

> **Voice (good):** "We meet the second Thursday at the Pontotoc County Agri‑Plex. Coffee at 6:30, business at 7. New faces always welcome."
>
> **Voice (off‑brand):** "Join us for an exciting monthly gathering of likeminded individuals as we energize our movement! 🎉"

---

## Iconography

There is no proprietary icon set. The system uses **Lucide** (`https://unpkg.com/lucide-static`) for UI icons, with the following overrides:

- **Star (★)** — used as a bullet and accent. Drawn as a filled five‑pointed star in CSS / SVG, not Lucide's outline star, when used decoratively.
- **Ballot check (✓)** — used as a "we did it" / endorsement mark.
- **Logo mark** — see `assets/logo-mark.svg`. A star inside a circle, broken at the bottom by a horizon line.

Emoji are not used in product UI.

---

## Files in this system

| Path | Purpose |
|---|---|
| `README.md` | This file — brand overview, voice, foundations. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic helpers. |
| `assets/` | Logos, marks, sample photos, decorative SVGs. |
| `preview/` | Small HTML cards that populate the Design System tab. |
| `ui_kits/website/` | Click‑through campaign‑site UI kit (React + Babel). |
| `materials/` | Sample applications: yard sign, event flyer, social card. |
| `SKILL.md` | Cross‑compatible skill manifest for re‑use. |

---

## Caveats & how to iterate

This system was assembled fresh, without provided photography, logo files, or prior brand materials. Several things would benefit from your input:

1. **The logo mark** is a starting proposal — a five‑point star over a horizon line. Replace `assets/logo-mark.svg` with your own when ready.
2. **Photography** is represented by placeholders. Drop real volunteer / candidate / event photos into `assets/photos/` and the UI kit will use them.
3. **The Chickasaw Nation reference** is intentionally subtle (warm earth tones, stars). If the county party has an existing relationship or visual convention with the Nation, tell me and I'll fold it in respectfully.
4. **Fonts** are Google Fonts (Newsreader + Public Sans). If you have specific local‑print preferences (Caslon, Mercury, etc.) I can swap.

**To make this perfect, please share:** any existing logo, a few real event photos, and a list of recurring event names / venues you'd like the copy to reference.
