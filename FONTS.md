# Roobert Font Setup

## Font Organization

The Roobert font family has been properly organized and integrated into the TerraForge website.

### File Structure

```
public/fonts/roobert/
├── roobert-light.otf           (300 weight)
├── roobert-lightitalic.otf     (300 weight, italic)
├── roobert-regular.otf         (400 weight)
├── roobert-regularitalic.otf   (400 weight, italic)
├── roobert-medium.otf          (500 weight)
├── roobert-mediumitalic.otf    (500 weight, italic)
├── roobert-semibold.otf        (600 weight)
├── roobert-semibolditalic.otf  (600 weight, italic)
├── roobert-bold.otf            (700 weight)
├── roobert-bolditalic.otf      (700 weight, italic)
├── roobert-heavy.otf           (800 weight)
└── roobert-heavyitalic.otf     (800 weight, italic)
```

### Font Weights

| Weight Name | CSS Weight | Usage                               |
| ----------- | ---------- | ----------------------------------- |
| Light       | 300        | Subtle text, captions               |
| Regular     | 400        | Body text, paragraphs               |
| **Medium**  | **500**    | **Primary body text (recommended)** |
| SemiBold    | 600        | Subheadings, emphasis               |
| **Bold**    | **700**    | **Headings (recommended)**          |
| Heavy       | 800        | Large display text, hero titles     |

## Implementation

### 1. Font Files Location

- **Location**: `/public/fonts/roobert/`
- **Format**: OpenType (.otf)
- **Naming**: All lowercase, kebab-case

### 2. CSS Declaration

Font faces are declared in `app/styles/fonts.css` with:

- `font-display: swap` for better loading performance
- Proper weight mappings (300-800)
- Support for italic variants

### 3. Global Application

In `app/app.css`:

```css
@import "./styles/fonts.css";

@theme {
  --font-sans: "Roobert", "Inter", ui-sans-serif, system-ui, sans-serif;
}

html,
body {
  font-family: "Roobert", "Inter", sans-serif;
}
```

### 4. Fallback Strategy

```
Roobert → Inter (Google Fonts) → System Sans-Serif
```

## Usage in Components

### Using Default (applies Roobert automatically)

```tsx
<p className="text-base">This uses Roobert Regular (400)</p>
<h1 className="font-bold">This uses Roobert Bold (700)</h1>
```

### Specific Weights

```tsx
<p className="font-light">Roobert Light (300)</p>
<p className="font-normal">Roobert Regular (400)</p>
<p className="font-medium">Roobert Medium (500)</p>
<p className="font-semibold">Roobert SemiBold (600)</p>
<p className="font-bold">Roobert Bold (700)</p>
<p className="font-extrabold">Roobert Heavy (800)</p>
```

### With Italics

```tsx
<p className="italic">Italic variants automatically used</p>
<p className="font-bold italic">Bold Italic</p>
```

## Brand Guidelines Compliance

As per TerraForge brand guidelines:

- **Primary Font**: Roobert Family ✅
- **Weights Used**: Regular / Medium / Bold ✅
- **Fallback**: Inter ✅

## Performance Optimization

1. **Font Display**: `swap` prevents invisible text during load
2. **Local Hosting**: Fonts served from your domain (no external requests)
3. **Format**: OpenType (.otf) with broad browser support
4. **No External Dependencies**: No Google Fonts API calls

## Browser Support

Roobert fonts are loaded as OpenType (.otf) which is supported by:

- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Opera (all versions)
- ✅ Mobile browsers (iOS/Android)

## Cleanup Performed

1. ✅ Removed duplicate files (files with " 2" suffix)
2. ✅ Moved from `/app/assets/fonts/` to `/public/fonts/`
3. ✅ Renamed all files to lowercase
4. ✅ Standardized naming convention
5. ✅ Created proper @font-face declarations
6. ✅ Integrated into global CSS
7. ✅ Removed Google Fonts Inter import

## Verification

To verify Roobert is loading correctly:

1. **Open DevTools** → Network tab
2. **Filter** by "Font"
3. **Refresh** the page
4. You should see: `roobert-regular.otf`, `roobert-medium.otf`, `roobert-bold.otf`, etc.

Or in Console:

```javascript
document.fonts.check("1em Roobert");
// Should return: true
```

## Typography Scale

Recommended usage for TerraForge:

```tsx
// Hero Headlines
<h1 className="text-8xl font-bold">Bold (700)</h1>

// Section Headers
<h2 className="text-6xl font-bold">Bold (700)</h2>

// Subheadings
<h3 className="text-3xl font-semibold">SemiBold (600)</h3>

// Body Text
<p className="text-base font-medium">Medium (500)</p>

// Captions
<small className="text-sm font-normal">Regular (400)</small>

// Labels
<span className="text-xs font-semibold uppercase">SemiBold (600)</span>
```

---

**Status**: ✅ Fully Implemented & Ready to Use
