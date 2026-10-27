# SHEPHALEE --- Design System & AI Development Guidelines

> **Purpose:** Renovate the existing SHEPHALEE website into a refined,
> image-led Indian luxury fashion experience while preserving the
> brand's actual identity, catalogue, collections, content, and shopping
> functionality.
>
> **This file is the primary design authority.** Read it before changing
> UI, creating components, generating assets, or implementing a page.
> Follow it over generic design habits or personal styling preferences.

------------------------------------------------------------------------

## 1. Design Objective

SHEPHALEE should feel like a contemporary Indian couture label: rooted
in textile heritage, considered in presentation, and confident enough to
use restraint.

The experience should communicate: - Indian craftsmanship and textile
heritage. - Contemporary femininity and understated grandeur. -
Editorial, campaign-led fashion presentation. - A calm, premium shopping
experience that does not obstruct product discovery.

### Core principle

**Let the garments and photography create the drama. Keep the interface
quiet.**

Do not imitate another luxury label directly. Build a distinctive
SHEPHALEE expression using its real products, brand story, collections,
and approved photography.

## 2. Preserve the Existing Brand and Content

Renovate presentation; do not invent a new business or replace the
brand's identity.

Preserve and verify against the live website: - Brand name and existing
logo/wordmark. - Existing product catalogue, product titles, prices,
variants, availability, and product links. - Current categories: Saree,
Lehenga, Nizami Suit, Concept Saree, Long Coat, and Contemporary
Fashion. - Existing collection names, including AURORA, TIME'S FASHION
WEEK, ENORE, BAHAAR, AVYANNA, and Dubai Fashion Show where currently
available. - Brand story and founder attribution to Dr. Itirani
Samanta. - Existing textile and craftsmanship content, including
SHEPHALEE Silk, Tissue Silk, Tussar, and Cotton where those descriptions
are present. - Existing shopping, cart, checkout, bespoke enquiry,
contact, newsletter, social, blog, and policy functionality.

Do not fabricate product claims, artisan origins, sustainability
certifications, customer testimonials, press coverage, awards,
discounts, stock levels, or materials. Do not show expired promotions.
Confirm the current offer before displaying it.

Shorten homepage copy when appropriate, but retain complete and useful
information on its relevant page or within an accessible disclosure.

## 3. Colour System

Use a restrained palette with warm ivory as the main canvas, deep
espresso for contrast, and muted antique bronze as a limited accent.
Burgundy is a supporting campaign colour, not a default UI colour.

  -----------------------------------------------------------------------
  Token                   Hex                     Use
  ----------------------- ----------------------- -----------------------
  `--color-ivory`         `#F5F0E8`               Main page background
                                                  and editorial sections

  `--color-paper`         `#FFFCF7`               Product cards, drawers,
                                                  and clean content
                                                  surfaces

  `--color-espresso`      `#29231F`               Main text, dark
                                                  sections, footer

  `--color-charcoal`      `#403831`               Secondary headings and
                                                  dark UI surfaces

  `--color-muted`         `#756B61`               Secondary text; check
                                                  contrast before use

  `--color-line`          `#DED5C9`               Borders, separators,
                                                  subtle dividers

  `--color-bronze`        `#786044`               Small accents, fine
                                                  rules, understated
                                                  links

  `--color-burgundy`      `#733B3F`               Select campaign moments
                                                  or seasonal accents

  `--color-white`         `#FFFFFF`               Image surroundings or
                                                  surfaces when needed
  -----------------------------------------------------------------------

### Colour rules

-   Ivory and paper should dominate the experience.
-   Use espresso for legible text and selected full-bleed dark sections.
-   Use bronze sparingly; do not turn every button, border, or heading
    gold.
-   Burgundy is optional and should be supported by the actual
    collection photography.
-   Keep backgrounds mostly solid and calm.
-   Do not introduce gradients, gradient text, glow effects,
    glassmorphism, neon colours, or random accent colours.
-   Do not recolour product photography to force it into the palette.
-   Maintain accessible contrast. Never use muted text for essential
    information if contrast is insufficient.
-   These are proposed renovation tokens. Compare them with the existing
    logo and approved photography before locking the final palette.

## 4. Typography

Use no more than two primary type families.

### Display and editorial headings

**Cormorant Garamond** - Use for hero headlines, editorial section
titles, collection titles, and selected campaign statements. - Prefer
regular or medium weights. - Use sentence case for headlines; avoid
making every heading uppercase. - Keep line lengths short and allow the
type to breathe. - Do not use it for dense product specifications or
small interface controls.

### Body and interface

**Manrope** - Use for body copy, navigation, product names, prices,
buttons, forms, labels, and utility text. - Prefer regular and medium
weights; use semibold only when hierarchy requires it. - Keep body copy
readable and line height comfortable. - Avoid overly bold navigation or
excessive letter spacing.

### Type scale guidance

  --------------------------------------------------------------------------------------
  Role                                 Desktop guidance                  Mobile guidance
  ------------------- --------------------------------- --------------------------------
  Hero title              `clamp(2.75rem, 5.5vw, 6rem)`   `clamp(2.35rem, 10vw, 3.5rem)`

  Major section title   `clamp(2.1rem, 3.5vw, 3.75rem)`     `clamp(1.9rem, 7vw, 2.8rem)`

  Subheading                             `1.35–1.75rem`                     `1.2–1.5rem`

  Body                                  `1rem–1.125rem`                 `0.9375rem–1rem`

  Product metadata                `0.8125rem–0.9375rem`             `0.8125rem–0.875rem`

  Small labels                      `0.6875rem–0.75rem`              `0.6875rem–0.75rem`
  --------------------------------------------------------------------------------------

Use `clamp()` for responsive typography rather than maintaining many
arbitrary breakpoint overrides. These values are starting points; test
real content and devices.

### Typography restrictions

-   No decorative script fonts.
-   No more than two primary font families without approval.
-   No excessive uppercase text or tracking.
-   Do not use bold weight as a substitute for hierarchy.
-   Load font files efficiently and provide sensible system fallbacks.

## 5. Visual Direction

### Desired

-   Fashion-editorial art direction.
-   Large, high-quality images with deliberate crops and focal points.
-   Generous but purposeful whitespace.
-   Asymmetrical layouts where they support the story.
-   Quiet borders, restrained dividers, and clear alignment.
-   Product photography that accurately represents the garment.
-   Slow, subtle transitions only where they improve the experience.
-   Consistent image ratios within the same component type.

### Avoid

-   Generic AI-generated luxury imagery used as if it were real
    SHEPHALEE product photography.
-   Unrelated stock images mixed into a single campaign.
-   Repeated rounded cards for every section.
-   Excessive pill buttons, floating widgets, badges, labels, or
    decorative shapes.
-   Arbitrary shadows, heavy borders, excessive corner radii, and nested
    cards.
-   Oversized paragraphs over busy imagery.
-   Fake reviews, invented customer content, fabricated social posts, or
    unsupported claims.
-   Repeating the same section layout all the way down the page.
-   Unnecessary animations, scroll hijacking, cursor effects, and
    autoplay audio.
-   Visual clutter added merely to make the page appear more "designed."

## 6. Homepage Structure

Build on the current website's real content. Do not add unrelated
sections just because luxury websites commonly use them.

### 01 --- Announcement bar

-   Retain only a currently valid promotion or useful service message.
-   Keep it small, text-led, and visually secondary.
-   Do not use a flashing or rapidly rotating offer carousel.
-   Do not invent urgency, countdowns, or scarcity.

### 02 --- Header

-   Keep the existing SHEPHALEE wordmark/logo as the identity anchor.
-   Use a clean header with restrained navigation and essential search,
    account, and bag controls.
-   Avoid oversized navigation, heavy shadows, and decorative icon
    collections.
-   The header may adapt on scroll only if the behavior is smooth and
    useful.
-   Mobile navigation must be simple, touch-friendly, and accessible.

### 03 --- Hero campaign

-   Lead with one strong, approved SHEPHALEE campaign image or a
    carefully selected existing slideshow.
-   Use a full-width editorial composition; target a
    near-viewport-height presentation on desktop when the source image
    supports it.
-   Keep copy minimal: at most one short headline and one clear
    collection link.
-   Do not force text onto the image if contrast or composition is poor.
-   Do not add a gradient overlay as a shortcut for readability. Adjust
    crop, focal point, image selection, or use a solid text area
    instead.
-   Provide a separate mobile crop or responsive focal point.

### 04 --- Category discovery

-   Preserve all existing categories: Saree, Lehenga, Nizami Suit,
    Concept Saree, Long Coat, Contemporary Fashion.
-   Use large, image-led category panels with short labels.
-   Avoid generic icon tiles or crowded category grids.
-   Make the full category panel clickable only when the interaction is
    clear and accessible.

### 05 --- Signature collections

-   Use the actual available collections and their real assets.
-   Prioritise strong campaign imagery over long descriptions.
-   Preserve collection names and link each panel to the correct
    existing collection page.
-   Do not invent new collection names or represent an event as a
    product collection unless that is how the live site uses it.

### 06 --- Craftsmanship / brand story

-   Retain the existing message about timeless traditions and
    craftsmanship.
-   Use authentic approved textile, garment, design, or artisan imagery.
-   Present one concise statement and a clear link to the existing
    Fashion Statement or Our Story page.
-   Keep the complete story accessible outside the homepage.

### 07 --- Curated products / Newly Added

-   Reuse actual products and product data.
-   Keep product imagery, title, price, availability, and selection
    controls accurate.
-   Use a clean grid with adequate space around each garment.
-   Do not hide price or essential buying information in the name of
    minimalism.
-   Quick view is optional; implement only if it is genuinely usable and
    does not duplicate a poor product detail experience.

### 08 --- Community / `#shephaleetribe`

-   Retain the section only with authentic, approved brand or customer
    content.
-   Use a restrained editorial gallery.
-   Do not fabricate social posts or testimonials.
-   Provide appropriate consent and linking for customer images.

### 09 --- Brand close and footer

-   Use a short brand statement if it adds value.
-   Preserve newsletter, social links, Bespoke, Blog, Contact Us,
    shipping/returns, privacy, terms, and other existing useful links.
-   Keep customer assistance easy to find.
-   Do not bury policies or purchase support behind decorative
    navigation.

## 7. Product and Content Behaviour

-   Product title, price, variant, stock state, and image must come from
    the actual product source.
-   Product images must not be distorted or stretched.
-   Show the correct selected variant and update the displayed
    image/price where the existing commerce data supports it.
-   Keep product details such as fabric, care, fit, delivery, and
    returns available where the source content exists.
-   Use accordions for secondary information only when the labels
    clearly explain what is inside.
-   Keep essential purchasing information visible and accessible.
-   Do not use fake sale prices, review scores, "bestseller" labels, or
    low-stock messages.
-   Keep existing URLs and commerce flows intact unless a change is
    explicitly approved.
-   All interactive elements need visible focus states, keyboard access,
    and clear labels.

## 8. Iconography --- Strict Rule

**Do not use Lucide icons, icon libraries, emoji, or random decorative
symbols.**

-   Prefer text labels and simple CSS-built interface affordances where
    possible.
-   Use the existing brand's approved icon assets if they already exist.
-   If a visual icon is truly essential and no approved asset exists,
    ask for approval before introducing a new icon set.
-   Do not use icons merely to fill empty space.
-   Never replace a clear text label with an unfamiliar icon.
-   Search, account, menu, and shopping-bag controls must remain
    understandable and accessible. If no approved icons exist, use
    simple, consistent text/typographic controls or obtain approved
    assets.

## 9. Layout, Spacing, and Shape

Use a consistent spacing scale:
`4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px`.

-   Use consistent page gutters and align content to a shared grid.
-   Desktop page gutters: start around `4vw–6vw`, adjusted to the real
    content and viewport.
-   Mobile gutters: start around `20px–24px`; reduce only when the
    design genuinely needs it.
-   Use generous section spacing, but avoid oversized blank areas that
    make product discovery tedious.
-   Use mostly square or subtly rounded image corners. Avoid rounding
    every image into a card.
-   Prefer thin separators over shadows for structural separation.
-   Set sensible maximum widths for text blocks.
-   Avoid horizontal overflow at all breakpoints.
-   Do not hardcode a single viewport height in a way that clips content
    on small screens.

## 10. Motion and Interaction

-   Motion should be subtle, purposeful, and secondary to the fashion
    imagery.
-   Use short fades or restrained transforms for editorial entrances and
    hover states.
-   Avoid scroll hijacking, excessive parallax, spinning elements,
    cursor-follow effects, and elaborate loading screens.
-   Do not autoplay audio.
-   Ensure carousels have usable controls, pause behaviour where
    appropriate, and do not move too quickly.
-   Respect `prefers-reduced-motion`.
-   Do not make an animation necessary to read or access content.
-   Prefer CSS transitions for simple interactions; use an animation
    library only when it already exists in the project and is justified.

## 11. Responsive and Accessible Design

-   Design and test mobile first, then refine tablet and desktop
    layouts.
-   Use responsive image sources and device-appropriate crops.
-   Optimise images and avoid loading all below-the-fold media
    immediately.
-   Maintain readable text contrast, meaningful alt text, keyboard
    navigation, focus visibility, and accessible form labels.
-   Give controls comfortable touch targets; aim for approximately
    `44 × 44px` where practical.
-   Do not communicate status using colour alone.
-   Test long product names, empty states, unavailable variants, errors,
    and slow-loading images.
-   Avoid sticky UI that covers content or obstructs checkout.
-   Keep shopping actions usable on narrow and folding-phone screens.

## 12. Image and Asset Rules

-   First inspect existing project assets and current website media
    before requesting or generating replacements.
-   Prefer approved SHEPHALEE photography and actual product images.
-   Do not substitute generated editorial images for real product
    imagery.
-   If a temporary placeholder is unavoidable, clearly identify it as a
    placeholder and do not ship it as final brand content.
-   Preserve image aspect ratios; choose `object-fit` and focal points
    deliberately.
-   Provide appropriate alt text for meaningful images; use empty alt
    text for purely decorative imagery.
-   Optimise formats and sizes without visible loss of garment detail.
-   Do not add overlays, colour treatments, or filters that misrepresent
    product colours.
-   Keep image file names and asset references understandable and
    consistent with the existing project conventions.

## 13. Development Rules for AI Coding Tools

Before making changes: 1. Inspect the existing repository, framework,
routes, reusable components, styles, asset folders, and commerce
integrations. 2. Read this `design.md` and any existing project-specific
design documentation. 3. Reuse existing architecture and established
patterns. Do not restructure the project without explicit approval. 4.
Identify the current page and the smallest coherent set of components
that needs changing. 5. Confirm that proposed copy, products, images,
and links exist in the current source.

While implementing: - Make focused, production-quality changes rather
than rewriting unrelated files. - Reuse existing components and tokens;
do not create duplicate design systems. - Do not add dependencies for
styling, icons, animation, or utilities without a clear need and
approval. - Do not install Bootstrap, Material UI, jQuery, or other UI
frameworks to solve isolated styling needs. - Do not use gradients,
Lucide icons, decorative emoji, glassmorphism, or AI-generated filler
UI. - Do not create fake data to make the design look complete. - Do not
remove working commerce behaviour to simplify the interface. - Keep
components semantic, responsive, maintainable, and consistent with the
existing codebase. - Avoid excessive abstraction for a one-off section;
extract reusable components when repetition is real. - Never silently
change brand copy, product data, URLs, analytics, or checkout behaviour.

Before declaring completion: 1. Run the project's existing lint,
type-check, and build commands where available. 2. Test the homepage at
mobile, tablet, and desktop widths. 3. Check navigation, category links,
collection links, product links, forms, cart, and checkout entry points.
4. Check image loading, crop, text contrast, overflow, keyboard focus,
and reduced-motion behaviour. 5. Report what changed, what was tested,
any known limitations, and any placeholder assets still present.

## 14. Definition of Done

The renovation is ready for review only when: - The result clearly feels
like SHEPHALEE, not a generic AI-generated fashion template. - The
existing categories, collections, product catalogue, and essential
content are preserved. - The homepage is image-led, editorial,
restrained, and easy to navigate. - Colours and typography follow this
file consistently. - No unapproved icon library, gradients, decorative
effects, fake content, or unnecessary dependencies have been
introduced. - Mobile layouts work without clipping or horizontal
overflow. - Product information and shopping actions remain accurate and
functional. - Accessibility, performance, and the existing application
architecture have been respected.

------------------------------------------------------------------------

**Decision rule:** When unsure, do less. Use the real brand assets,
simplify the composition, preserve the content, and ask before inventing
a new visual element or changing established behaviour.
