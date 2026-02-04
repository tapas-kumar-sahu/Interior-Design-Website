# Image Placement Guide

## 📁 Where to Store Images

**All images go in the `public` folder:**
```
d:\Projects\With AI\Landing Pages\interior-design-landing\public\
```

---

## 🖼️ Required Images & Their Locations

### ✅ Hero Section (DONE)
- **File**: `hero-banner.jpg` ✓ Already placed
- **Location**: `public/hero-banner.jpg`
- **Used in**: `components/sections/Hero.tsx`

### 📸 About Section (2 images needed)
- **Main Image**: `about-image.jpg`
- **Phone Mockup**: `phone-mockup.png` (optional overlay)
- **Location**: `public/about-image.jpg`
- **Used in**: `components/sections/About.tsx`

### 🏠 Projects Section (4 images needed)
Create a projects folder:
```
public/projects/
├── project-1.jpg    (Modern Kitchen)
├── project-2.jpg    (Modern Kitchen)
├── project-3.jpg    (Modern Kitchen)
└── project-4.jpg    (Modern Kitchen)
```
- **Used in**: `components/sections/Projects.tsx`

### 📰 Articles Section (3 images needed)
Create an articles folder:
```
public/articles/
├── article-1.jpg    (Building Construction)
├── article-2.jpg    (Interior Designing)
└── article-3.jpg    (Office Interior)
```
- **Used in**: `components/sections/Articles.tsx`

### 👤 Testimonials Section (3 avatars needed)
Create a testimonials folder:
```
public/testimonials/
├── nattasha.jpg     (Nattasha Mith)
├── raymond.jpg      (Raymond Galario)
└── benny.jpg        (Benny Roll)
```
- **Used in**: `components/sections/Testimonials.tsx`

### 🏢 Brands Section (5 logos needed)
Create a brands folder:
```
public/brands/
├── brand-1.svg (or .png)
├── brand-2.svg
├── brand-3.svg
├── brand-4.svg
└── brand-5.svg
```
- **Used in**: `components/sections/Brands.tsx`

---

## 📝 How to Export from Figma

1. **Select the image/frame** in Figma
2. **Right-click** → Export
3. **Choose format**:
   - Photos: JPG or PNG
   - Logos: SVG or PNG
4. **Export** and save to the appropriate folder above

---

## 🔧 Image Naming Convention

- Use **lowercase** letters
- Use **hyphens** instead of spaces: `hero-banner.jpg` ✓ not `Hero Banner.jpg` ✗
- Be descriptive: `modern-kitchen-1.jpg` ✓ not `img1.jpg` ✗

---

## ✨ After Placing Images

Once you place an image, I'll update the corresponding component to use it. For example:

**Before** (placeholder):
```tsx
<div className="bg-gray-300">Placeholder</div>
```

**After** (real image):
```tsx
<Image
  src="/about-image.jpg"
  alt="Interior design"
  fill
  className="object-cover"
/>
```

---

## 🎯 Priority Order

If you want to add images gradually, here's the recommended order:

1. ✅ **Hero Banner** - DONE!
2. **About Section** - Most visible
3. **Projects** - Showcase your work
4. **Articles** - Blog content
5. **Testimonials** - Avatars
6. **Brands** - Partner logos

---

## 💡 Tips

- **Image Size**: Export at 2x resolution for retina displays
- **Optimization**: Use JPG for photos (smaller file size)
- **Logos**: Use SVG for crisp logos at any size
- **Recommended dimensions**:
  - Hero: 1200x800px minimum
  - Projects: 800x600px
  - Articles: 600x400px
  - Avatars: 200x200px
  - Logos: 200x100px

---

## 🚀 Quick Start

1. **Create the folders** (if they don't exist):
```bash
cd public
mkdir projects articles testimonials brands
```

2. **Export images from Figma** to these folders

3. **Let me know** which images you've added, and I'll update the components!

---

**Current Status:**
- ✅ Hero banner image added and working
- ⏳ Waiting for other images

**Next:** Place the About section image and I'll update that component next!
