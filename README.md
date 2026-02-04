# Interior Design Landing Page

A modern, responsive landing page built with Next.js 16 and Tailwind CSS v4, based on a Figma design system.

## 🎨 Design System

This project implements a complete design system based on the provided Figma style guide:

### Colors
- **Primary Gold**: `#CDA274` - Used for accents, highlights, and CTAs
- **Dark**: `#292F36` - Primary text and dark backgrounds
- **Light Background**: `#F4F0EC` - Soft background color
- **White**: `#FFFFFF` - Clean backgrounds
- **Text Secondary**: `#4D5053` - Secondary text color

### Typography
- **Display Font**: DM Serif Display - Used for headings
- **Body Font**: Jost - Used for body text and UI elements

### Components
Pre-built components include:
- **Buttons**: Primary, Secondary, and Outline variants
- **Container**: Max-width 1200px with responsive padding
- **Sections**: Consistent spacing with `section` class
- **Animations**: Fade-in animations ready to use

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd interior-design-landing
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
interior-design-landing/
├── app/
│   ├── globals.css          # Global styles & design system
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎯 Design System Usage

### Using Custom Colors

In your components, use the CSS variables or Tailwind classes:

```tsx
// Using CSS variables
<div style={{ backgroundColor: 'var(--color-primary)' }}>

// Using utility classes
<div className="bg-light text-dark">
```

### Using Buttons

```tsx
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="btn btn-outline">Outline Button</button>
```

### Typography

```tsx
<h1>Display Heading (DM Serif Display)</h1>
<p>Body text (Jost font)</p>
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **Framework**: Next.js 16.1.6
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **React**: 19.2.3

## 🎨 Customization

### Adding New Colors

Edit `app/globals.css` and add your color to the `:root` section:

```css
:root {
  --color-custom: #yourcolor;
}
```

### Adding New Components

Create reusable components in a `components/` directory and import them in your pages.

### Modifying Typography

Update the Google Fonts import in `globals.css` or modify the font variables:

```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

## 📝 Next Steps

1. **Add Components**: Create reusable components (Header, Footer, Hero, etc.)
2. **Add Pages**: Create additional pages in the `app/` directory
3. **Add Images**: Place images in the `public/` directory
4. **Implement Sections**: Build out sections based on your Figma design
5. **Add Animations**: Use the built-in fade-in class or add custom animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Next.js and Tailwind CSS**
