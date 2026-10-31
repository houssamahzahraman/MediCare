---
name: MediCare Precision Clinical
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3e4947'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#005e40'
  on-tertiary: '#ffffff'
  tertiary-container: '#007954'
  on-tertiary-container: '#99ffce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a clinical environment that feels precise, serene, and deeply trustworthy. Designed for clinical directors, administrative staff, healthcare practitioners, and patients, the interface balances dense medical operations with calming, error-reducing visual ergonomics.

### Design Aesthetic
The aesthetic balances **Modern Corporate Precision** and **Clinical Minimalism**:
- **Clarity over ornament:** Visual elements prioritize legibility, rapid data scanning, and high diagnostic contrast.
- **Calming atmosphere:** Subtle teal-tinted neutrals and crisp surfaces reduce visual fatigue during extended administrative shifts.
- **Structured density:** Generous macro-whitespace prevents cognitive overload, while micro-spacing preserves high-density tables, schedules, and patient charts.

## Colors
The color palette communicates medical authority, cleanliness, and rapid situational awareness.

### Palette Architecture
- **Primary Teal (`#0F766E`):** Represents clinical competence and trust. Used for primary calls-to-action, key state indicators, selected navigation items, and high-priority medical identifiers.
- **Secondary Sky (`#0284C7`):** Used for non-urgent informative callouts, patient portal links, and secondary interactive items.
- **Tertiary Mint/Emerald (`#059669`):** Reserved for confirmed appointments, vitals within normal range, successful records updates, and stable medical metrics.
- **Neutral Dark (`#1F2937`):** Base text color providing optimal contrast against white and tinted backgrounds without the harshness of pure black.

### Supporting Tone Hierarchy
- **Secondary Text:** `#4B5563` for secondary labels, table subtext, and timestamps.
- **Muted Text / Placeholders:** `#9CA3AF` for placeholder copy, disabled states, and metadata legends.
- **Structural Borders:** `#E5E7EB` for cards, dividers, and table boundaries; `#F3F4F6` for subtle internal row separators.
- **Surfaces & Canvases:** `#FFFFFF` for content cards and modal dialogues; `#F8FAFC` (Slate Tint) for root dashboard backgrounds; `#F0FDFA` (Teal Tint) for highlighted patient rows, active appointments, and contextual status badges.
- **Functional Semantics:**
  - Destructive / Urgent: `#DC2626`
  - Warning / Triage Medium: `#D97706`
  - Critical Highlight Surface: `#FEF2F2`

## Typography
The system utilizes Inter across all roles to achieve uniformity, legibility, and tall x-height clarity crucial for numeric health values, medication dosages, and EHR records.

### Usage Standards
- Enable tabular figures (`font-variant-numeric: tabular-nums`) across all data tables, medical measurement widgets, timestamps, and patient ID codes.
- Use `headline-lg` and `headline-md` for high-level management overviews and patient detail headers.
- Restrict `label-sm` to medical status tags, table column headers (rendered uppercase via styling), and badge metadata.
- Body line heights are tuned to prevent line-jumping errors during rapid chart review.

## Layout & Spacing
The layout uses a fluid responsive grid built on an 8px spatial system, adapting from administrative multi-monitor stations down to clinical mobile tablets.

### Grid & Form Factors
- **Desktop (1280px and above):** 12-column layout with `2rem` margins and `1.5rem` gutters. Accommodates side navigation, persistent patient summaries, and primary clinical work queues.
- **Tablet (768px – 1279px):** 8-column layout with `1.5rem` margins and `1rem` gutters. Collapses persistent sidebars into an off-canvas drawer to maximize chart space.
- **Mobile (< 768px):** 4-column layout with `1rem` margins and `1rem` gutters. Stacks tables into summary cards; pins primary action bars to the bottom of the viewport.

### Spatial Rhythm
- Apply `space-md` for standard card padding and form field vertical stacks.
- Apply `space-lg` to separate distinct record groups within patient profiles.
- Apply `space-xl` strictly for canvas section divisions and dashboard widget grids.

## Elevation & Depth
Depth in this system is low-contrast and soft, designed to mimic clean physical paper records on glass desks rather than dramatic dimensional drops.

### Elevation Levels
- **Level 0 (Flat Base):** Background canvas (`#F8FAFC`) with no shadow.
- **Level 1 (Card & Panel Surface):** `#FFFFFF` surface enclosed by a `1px solid #E5E7EB` border and supported by an ambient shadow: `0 1px 3px 0 rgba(15, 118, 110, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.05)`.
- **Level 2 (Hovered Cards & Dropdowns):** Subtle elevation with `0 4px 6px -1px rgba(15, 118, 110, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`, preserving the light teal tint in the ambient dispersion.
- **Level 3 (Modals & Prescription Overlays):** Focused depth with `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`, paired with a tinted backdrop overlay of `#0F172A` at 40% opacity.

## Shapes
The design system applies a balanced shape geometry: soft enough to feel approachable to patients, yet structured enough to preserve organizational rigor.

### Geometry Rules
- Base structural elements (cards, containers, dialogs) standardise on `rounded-xl` (12px / `0.75rem`), balancing modern aesthetics with screen space preservation.
- Interactive controls (buttons, input fields, dropdown menus) use standard rounding (`0.25rem` to `0.375rem`) to maintain clean alignment against table cells and tabular forms.
- Badges, status pills, and patient avatar frames use fully rounded pill geometry (`rounded-full`) to immediately distinguish classification tags from interactive buttons.

## Components

### Buttons
- **Primary:** Filled `#0F766E` background, `#FFFFFF` text, `0.375rem` radius, 40px height for desktop. Hover: `#115E59`. Active: `#134E48`. Focus ring: 2px offset with `#0F766E` at 50% opacity.
- **Secondary:** `#FFFFFF` background, `1px solid #E5E7EB`, `#1F2937` text. Hover: `#F8FAFC` background with `#0F766E` border.
- **Ghost / Tertiary:** Transparent background, `#0F766E` text. Hover: `#F0FDFA`.
- **Destructive:** `#DC2626` filled or `#FEF2F2` background with `#DC2626` text for clinical override actions.

### Cards & Panels
- White `#FFFFFF` background, bounded by a continuous `1px solid #E5E7EB` stroke, `12px` border radius, and Level 1 elevation.
- Internal padding is set to `1.5rem` (`space-lg`) for charts and metrics, and `1rem` (`space-md`) for compact record lists.
- Headers within cards feature a bottom border `1px solid #F3F4F6` separating summary data from row items.

### Form Inputs & Selects
- Height: 40px; Border: `1px solid #E5E7EB`; Radius: `0.375rem`; Background: `#FFFFFF`.
- Placeholder text in `#9CA3AF`; value text in `#1F2937`.
- Focus state: Border changes to `#0F766E` accompanied by a `0 0 0 3px rgba(15, 118, 110, 0.15)` ring.
- Error state: Border changes to `#DC2626` with error helper text in `#DC2626` using `body-sm`.

### Checkboxes & Radio Buttons
- Checkbox size: 18x18px, radius `4px`.
- Radio size: 18x18px, circular.
- Unchecked: `1.5px solid #D1D5DB` with `#FFFFFF` background.
- Checked: `#0F766E` fill with pure white outline checkmark or center pip. Focus ring matching input specifications.

### Chips & Status Badges
- Height: 24px; Padding: `0 8px`; Radius: full pill.
- **Active / Admitted:** Background `#F0FDFA`, text `#0F766E`, border `1px solid #CCFBF1`.
- **Stable / Completed:** Background `#ECFDF5`, text `#059669`, border `1px solid #A7F3D0`.
- **Scheduled / Pending:** Background `#F0F9FF`, text `#0284C7`, border `1px solid #BAE6FD`.
- **Triage Alert / Critical:** Background `#FEF2F2`, text `#DC2626`, border `1px solid #FECACA`.

### Data Tables & Patient Lists
- Header: `#F8FAFC` background, text in `label-sm` (`#4B5563`), uppercase, bottom border `1px solid #E5E7EB`.
- Row height: 48px standard, 40px compact.
- Cell border: `1px solid #F3F4F6`.
- Row hover: `#F0FDFA` transition to provide immediate line tracking across wide patient records.

### Iconography Style
- Exclusively 20px and 16px geometric outline icons with a consistent 1.5px stroke width.
- Colors follow text semantics (`#4B5563` default, `#0F766E` for active navigations and action triggers).