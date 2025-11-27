# TerraForge Landing Page

A bold, modern landing page for TerraForge - an industrial architectural surfaces brand and subsidiary of AluBond (Est. 1999).

## 🎨 Design System

### Color Palette

| Color          | Hex Code  | Usage                                 |
| -------------- | --------- | ------------------------------------- |
| **Neon Green** | `#E6FF0A` | Primary highlight, CTAs, hover states |
| **Orange**     | `#FF6700` | Secondary accent                      |
| **Black**      | `#000000` | Primary background, text              |
| **Gray 1**     | `#606060` | Supporting text                       |
| **Gray 2**     | `#999999` | Muted text                            |
| **Light Gray** | `#E9E9E9` | Section backgrounds                   |

### Typography

- **Primary Font**: Inter (fallback for Roobert)
- **Weights**: Regular (400), Medium (500), Bold (700)
- Font loaded from Google Fonts

## 📐 Page Structure

### 1. Hero Section

- **Full-screen hero** with black marble texture background
- **Headline**: "Forging the Future of Architectural Surfaces"
- **CTAs**:
  - Primary: "Explore Products" (neon green)
  - Secondary: "Learn More" (outlined)
- Animated scroll indicator

### 2. Products Section

- **3-column grid** (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- **6 Product Cards** with:
  - Hover effects (scale + overlay reveal)
  - Category badge
  - Description on hover
  - Dual CTAs: "Request Quote" + "Learn More"
- High-quality placeholder images from Unsplash

### 3. Heritage/About Section

- **2-column layout** (text + image)
- "Since 1999" badge
- AluBond heritage story
- CTA: "Read Full Story"
- Filtered architectural image with gradient overlay

### 4. Featured Projects

- **2-column grid** with 4 projects
- **Hover overlay** reveals:
  - Project name (neon green)
  - Location
  - "View Project Details" button
- CTA: "View All Projects"

### 5. Call-to-Action Section

- Black background with subtle line pattern
- Headline: "Let's Build Something Remarkable Together"
- Bold "Contact Us" button (hover: orange accent)

### 6. Footer

- **4-column grid**:
  - Logo + tagline (2 cols)
  - Quick Links
  - Contact info + social links
- Neon green "TERRAFORGE" logo
- Copyright notice

## 🎭 Interactive Elements

### Hover States

- **Buttons**: Background/color inversion with neon outline
- **Product Cards**: Scale image, reveal details with staggered fade-in
- **Project Cards**: Full black overlay with centered content
- **Footer Links**: Color change to neon green

### Animations

- Smooth transitions (300-700ms)
- Scale effects on buttons (hover: 1.05x)
- Bounce animation on scroll indicator
- Fade-in animations on content

## 🖼️ Images Used

All images are high-quality placeholders from Unsplash:

**Hero Background**: Black marble texture  
**Products**: Architecture, materials, industrial surfaces  
**About**: Modern cityscape  
**Projects**: Iconic buildings worldwide

## 📱 Responsive Design

- **Mobile**: Single column, stacked layouts
- **Tablet (md)**: 2-column grids
- **Desktop (lg)**: 3-column grids, full-width hero
- Consistent 24px padding on sections (80px recommended in spec)

## 🚀 React Router v7 Integration

### Route Structure

```typescript
// app/routes.ts
export default [index("routes/home.tsx")] satisfies RouteConfig;
```

### Page Component

```typescript
// app/routes/home.tsx
export default function Home() {
  return <HomePage />;
}
```

### Main Component

```typescript
// app/pages/Home.tsx
export default function HomePage() {
  // Full landing page implementation
}
```

## 🔧 Technical Details

### Component Architecture

- **Main Page**: `HomePage` (default export)
- **Sub-components**:
  - `ProductCard` - Product grid items
  - `ProjectCard` - Project showcases
  - `Footer` - Site footer

### Data Structure

```typescript
interface Product {
  name: string;
  category: string;
  image: string;
  description: string;
}

interface Project {
  name: string;
  location: string;
  image: string;
}
```

### Styling Approach

- **Tailwind CSS** for utility classes
- **Inline styles** for brand colors (using colors object)
- **Event handlers** for hover effects
- No CSS-in-JS library required

## 📋 CTAs by Section

| Section  | Primary CTA       | Secondary CTA        |
| -------- | ----------------- | -------------------- |
| Hero     | Explore Products  | Learn More           |
| Products | Request Quote     | Learn More           |
| About    | Read Full Story   | -                    |
| Projects | View All Projects | View Project Details |
| Contact  | Contact Us        | -                    |

## 🎯 Next Steps

To fully implement the TerraForge website:

1. **Add Routes**:
   - `/products` - Full product catalog
   - `/projects` - Complete project gallery
   - `/about` - Heritage timeline + team
   - `/contact` - Contact form

2. **Custom Fonts**:
   - Download Roobert from provided Google Drive
   - Add to `/public/fonts/`
   - Update `root.tsx` with @font-face

3. **Backend Integration**:
   - Add `loader` functions for dynamic content
   - Connect form submissions to API
   - Implement search/filter for products

4. **Enhancements**:
   - Add lightbox for project images
   - Implement testimonials section
   - Add blog/news section
   - SEO optimization per page

## 🎨 Design Notes

- **Consistent spacing**: 80px top/bottom per section (currently 24px/py-24)
- **Smooth animations**: All transitions use duration-300 to duration-700
- **Web-optimized images**: Using Unsplash with `?q=80&w=2400` params
- **Accessibility**: Alt tags, semantic HTML, keyboard navigation ready

---

**Built with React Router v7 + Vite + Tailwind CSS v4**
