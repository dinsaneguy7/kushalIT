# Kushal IT Brand Kit

This brand kit provides all the essential design elements for Kushal IT's visual identity. Use these guidelines for website updates, social media posts, graphics, and any brand-related content creation.

## Brand Colors

### Primary Colors
- **Primary Background**: `#050505` (Dark charcoal black)  
  Used for main backgrounds, overlays, and dark sections.
- **Primary Text**: `#f0f0f0` (Off-white)  
  Primary text color for headings, body copy, and UI elements.

### Secondary Colors
- **Accent Color**: `#00f2ff` (Bright cyan)  
  Used for highlights, buttons, links, and interactive elements.
- **Grid Lines**: `rgba(255, 255, 255, 0.08)` (Subtle white overlay)  
  For borders, dividers, and grid lines.

### Color Usage Examples
- Backgrounds: Use `#050505` for hero sections, footers, and dark themes.
- Text: `#f0f0f0` for readability on dark backgrounds.
- Accents: `#00f2ff` for CTAs, hover states, and brand highlights.
- Subtle elements: `rgba(255, 255, 255, 0.08)` for borders and separators.

### Color Palette Swatches
- ![#050505](https://via.placeholder.com/50x50/050505/ffffff?text=+) `#050505`
- ![#f0f0f0](https://via.placeholder.com/50x50/f0f0f0/000000?text=+) `#f0f0f0`
- ![#00f2ff](https://via.placeholder.com/50x50/00f2ff/000000?text=+) `#00f2ff`
- ![rgba(255,255,255,0.08)](https://via.placeholder.com/50x50/ffffff/000000?text=0.08) `rgba(255, 255, 255, 0.08)`

## Typography

### Font Families
- **Display Font**: Inter (Weights: 400, 500, 900)  
  Primary font for headings, titles, and display text. Clean, modern, and highly readable.
- **Mono Font**: JetBrains Mono (Weights: 400, 500)  
  Used for code snippets, metadata, and technical elements.

### Font Loading
Load fonts via Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Font Colors
- **Primary Text**: `#f0f0f0` on `#050505` backgrounds.
- **Accent Text**: `#00f2ff` for highlights and links.
- **Secondary Text**: `rgba(240, 240, 240, 0.5)` for subtitles and meta info.

### Typography Scale (Approximate Sizes)
- H1: 13.5vw (or 72px+ on desktop) - Bold, uppercase.
- H2: 3rem (48px) - Medium weight.
- H3: 2.5rem (40px) - Bold.
- Body: 1.1rem (18px) - Regular.
- Mono: 0.75rem (12px) - Uppercase, letter-spacing 0.05em.

## Backgrounds & Layout
- **Main Background**: `#050505` solid.
- **Grid System**: 12-column responsive grid with 4vw gutters.
- **Grid Lines**: `rgba(255, 255, 255, 0.08)` for subtle structure.
- **Overlays**: Use `rgba(0, 0, 0, 0.5)` with `backdrop-filter: blur(5px)` for glass effects.

## Accent & Interactive Elements
- **Buttons**: Border `1px solid rgba(255,255,255,0.2)`, hover to `#00f2ff`.
- **Links**: `#f0f0f0`, hover to `#00f2ff`.
- **Magnetic Effects**: Subtle translate on hover (e.g., 0.3px).
- **Cursor**: Custom dot and outline for premium feel.

## Logo Usage
- **Primary Logo**: `Images/kushalit.png`  
  Use in header (44px height) and footer (36px height).
- **Favicon**: `Images/favicon_io/android-chrome-192x192.png` and `512x512.png`.
- **Logo Guidelines**: Always on dark backgrounds, maintain aspect ratio, minimum clear space 1x logo height.

## Social Media & Graphics
- **Instagram/LinkedIn Posts**: Use `#050505` bg with `#f0f0f0` text and `#00f2ff` accents.
- **Reels/Ads**: Bright cyan accents for CTAs.
- **Image Overlays**: Text in Inter Bold over dark images.
- **Icons**: Inline SVGs for social links (Instagram, LinkedIn, Email).

## CSS Variables (for Developers)
```css
:root {
  --bg-color: #050505;
  --text-color: #f0f0f0;
  --accent-color: #00f2ff;
  --grid-line: rgba(255, 255, 255, 0.08);
  --font-display: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Usage Guidelines
- **Consistency**: Stick to these colors and fonts across all platforms.
- **Accessibility**: Ensure contrast (text on bg: 12:1+).
- **Responsive**: Scale fonts with vw for large screens, px for mobile.
- **Animations**: Use `--easing` for smooth transitions.
- **Do Not**: Alter colors without approval; avoid clashing fonts.

## Assets
- Logo: `Images/kushalit.png`
- Favicons: `Images/favicon_io/`
- Social Icons: Inline SVGs in `index.html`

For questions or updates, contact the design team.

---

© Kushal IT 2025. All rights reserved.
