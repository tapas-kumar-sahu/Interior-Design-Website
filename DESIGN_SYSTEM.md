# Design System Reference

This document provides a quick reference for the design system implemented from the Figma style guide.

## Color Palette

### Primary Colors
| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Primary Gold | `#CDA274` | `--color-primary` | Accents, CTAs, highlights |
| Dark | `#292F36` | `--color-dark` | Primary text, dark backgrounds |
| White | `#FFFFFF` | `--color-white` | Clean backgrounds |
| Light Background | `#F4F0EC` | `--color-light-bg` | Soft section backgrounds |

### Text Colors
| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Text Primary | `#292F36` | `--color-text-primary` | Headings, primary text |
| Text Secondary | `#4D5053` | `--color-text-secondary` | Body text, descriptions |
| Text Light | `#CDA274` | `--color-text-light` | Accented text |

## Typography

### Font Families
- **Display Font**: DM Serif Display (serif)
  - Used for: Headings (h1-h6)
  - Weight: 400 (Regular)
  - Google Fonts: `family=DM+Serif+Display`

- **Body Font**: Jost (sans-serif)
  - Used for: Body text, UI elements, buttons
  - Weights: 100-900 (Variable)
  - Google Fonts: `family=Jost`

### Heading Sizes (Responsive)
```css
h1: clamp(2.5rem, 5vw, 4rem)     /* 40px - 64px */
h2: clamp(2rem, 4vw, 3rem)       /* 32px - 48px */
h3: clamp(1.5rem, 3vw, 2rem)     /* 24px - 32px */
h4: clamp(1.25rem, 2.5vw, 1.5rem) /* 20px - 24px */
```

### Body Text
- Font Size: `1rem` (16px)
- Line Height: `1.8`
- Font Family: Jost

## Spacing System

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | 0.5rem (8px) | Tight spacing |
| `--spacing-sm` | 1rem (16px) | Small gaps |
| `--spacing-md` | 1.5rem (24px) | Medium spacing |
| `--spacing-lg` | 2rem (32px) | Large spacing |
| `--spacing-xl` | 3rem (48px) | Extra large |
| `--spacing-2xl` | 4rem (64px) | Section padding |
| `--spacing-3xl` | 6rem (96px) | Major sections |

## Border Radius

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 0.25rem (4px) | Small elements |
| `--radius-md` | 0.5rem (8px) | Cards, inputs |
| `--radius-lg` | 1rem (16px) | Buttons, cards |
| `--radius-full` | 9999px | Rounded buttons |

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
```

## Button Styles

### Primary Button
```tsx
<button className="btn btn-primary">Click Me</button>
```
- Background: Dark (#292F36)
- Text: White
- Hover: Darker + lift effect

### Secondary Button
```tsx
<button className="btn btn-secondary">Click Me</button>
```
- Background: Primary Gold (#CDA274)
- Text: White
- Hover: Darker gold + lift effect

### Outline Button
```tsx
<button className="btn btn-outline">Click Me</button>
```
- Background: Transparent
- Border: Dark (#292F36)
- Hover: Filled dark background

## Layout Components

### Container
```tsx
<div className="container">
  {/* Max-width: 1200px, centered with padding */}
</div>
```

### Section
```tsx
<section className="section">
  {/* Vertical padding: 6rem (96px) */}
</section>
```

## Utility Classes

### Text Alignment
- `.text-center` - Center align text

### Colors
- `.text-primary` - Primary gold color
- `.text-dark` - Dark text color
- `.bg-light` - Light background color

### Animations
- `.fade-in` - Fade in from bottom animation

## CSS Variables Usage

### In JSX/TSX
```tsx
<div style={{ 
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--spacing-lg)'
}}>
```

### In CSS
```css
.custom-class {
  color: var(--color-text-primary);
  font-family: var(--font-display);
  border-radius: var(--radius-lg);
}
```

## Icons & Graphics

Based on the style guide, the design uses:
- Simple line icons
- Minimalist graphics
- Clean, geometric shapes

### Recommended Icon Libraries
- **Lucide React**: Modern, clean icons
- **Heroicons**: Tailwind's icon set
- **Feather Icons**: Minimal line icons

Install with:
```bash
npm install lucide-react
```

Usage:
```tsx
import { ArrowRight, Home, Mail } from 'lucide-react';

<ArrowRight className="w-5 h-5 text-primary" />
```

## Responsive Breakpoints

Tailwind CSS default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Usage
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## Best Practices

1. **Consistency**: Always use design tokens (CSS variables) instead of hardcoded values
2. **Spacing**: Use the spacing scale for margins and padding
3. **Typography**: Use heading tags (h1-h6) for semantic structure
4. **Colors**: Stick to the defined color palette
5. **Buttons**: Use the predefined button classes
6. **Responsive**: Design mobile-first, then add larger breakpoints

## Example Component

```tsx
export default function FeatureCard() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="text-primary mb-3">Feature Title</h3>
      <p className="text-sm text-secondary mb-4">
        Feature description goes here with proper spacing and typography.
      </p>
      <button className="btn btn-primary">
        Learn More
      </button>
    </div>
  );
}
```

---

**Reference**: See `public/style-guide.png` for the original Figma style guide.
