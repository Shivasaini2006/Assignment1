# FlowVision - Technical Documentation

## 🏗️ Architecture Overview

### Technology Stack

- **Framework**: Next.js 14.2+ (App Router)
- **UI Library**: React 18.3+
- **Styling**: Tailwind CSS 3.4+
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Deployment**: Vercel / Render

### Project Structure

```
Assignment1/
│
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.js            # Root layout
│   └── page.js              # Homepage
│
├── components/              # React Components
│   ├── Navbar.js           # Navigation header
│   ├── HeroBanner.js       # Hero section
│   ├── TrendingPlants.js   # Featured plants
│   ├── TopSellingPlants.js # Product grid
│   ├── CustomerReviews.js  # Testimonials
│   ├── BestO2Section.js    # Featured showcase
│   ├── Footer.js           # Footer
│   ├── PlantCard.js        # Large card component
│   ├── ProductCard.js      # Grid card component
│   ├── TestimonialCard.js  # Review component
│   ├── SectionTitle.js     # Heading component
│   └── Button.js           # Button component
│
├── public/                 # Static assets
├── .vscode/               # VS Code settings
├── tailwind.config.js     # Tailwind config
├── next.config.js         # Next.js config
├── postcss.config.js      # PostCSS config
└── package.json           # Dependencies
```

## 🎨 Design System

### Color Palette

```css
--primary: #1a3a2e; /* Dark Green - Primary backgrounds */
--secondary: #2d5f4d; /* Medium Green - Secondary elements */
--accent: #4a9d7f; /* Bright Green - CTAs and accents */
--dark: #0f1e19; /* Very Dark Green - Main background */
```

### Typography

```css
Font Family: 'Inter', system-ui, sans-serif
Font Weights: 300, 400, 500, 600, 700, 800

Headings:
- H1: 4rem (64px) / 3.5rem mobile
- H2: 3rem (48px) / 2.5rem mobile
- H3: 2rem (32px) / 1.5rem mobile
- Body: 1rem (16px)
- Small: 0.875rem (14px)
```

### Spacing Scale

Following Tailwind's default spacing:

- 4px (1), 8px (2), 12px (3), 16px (4), 20px (5), 24px (6)
- 32px (8), 48px (12), 64px (16), 80px (20)

### Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## 🧩 Component Documentation

### Navbar Component

**Location**: `components/Navbar.js`

**Features**:

- Fixed position header
- Responsive mobile menu
- Search, cart, user icons
- Smooth animations

**Props**: None (self-contained)

**State**:

- `isMobileMenuOpen`: Boolean for mobile menu toggle

```jsx
<Navbar />
```

### Button Component

**Location**: `components/Button.js`

**Variants**:

- `primary`: Green background (CTA)
- `secondary`: Translucent background
- `outline`: Border only

**Sizes**:

- `sm`: Small (padding: 4px 16px)
- `md`: Medium (padding: 6px 24px)
- `lg`: Large (padding: 8px 32px)

**Props**:

```jsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'outline'
  size="md" // 'sm' | 'md' | 'lg'
  onClick={handler}
  className="custom-class"
>
  Button Text
</Button>
```

### PlantCard Component

**Location**: `components/PlantCard.js`

**Purpose**: Large featured plant cards

**Props**:

```jsx
<PlantCard
  plant={{
    id: 1,
    name: "Plant Name",
    description: "Description text",
    price: 509,
    image: "image-url",
    featured: true,
  }}
  large={true} // Optional: larger variant
/>
```

**Features**:

- Hover scale effect
- Price display
- Add to cart button
- Explore CTA

### ProductCard Component

**Location**: `components/ProductCard.js`

**Purpose**: Product grid items

**Props**:

```jsx
<ProductCard
  plant={{
    id: 1,
    name: "Plant Name",
    description: "Description",
    price: 450,
    image: "image-url",
  }}
/>
```

**Features**:

- Hover lift effect
- Quick view button
- Add to cart action
- Price display

### SectionTitle Component

**Location**: `components/SectionTitle.js`

**Props**:

```jsx
<SectionTitle centered={true}>Section Heading</SectionTitle>
```

**Features**:

- Underline accent
- Responsive sizing
- Optional centering

## 🎯 Features Implementation

### Responsive Design

**Mobile (320px - 767px)**:

- Single column layouts
- Hamburger menu
- Stacked cards
- Reduced padding
- Smaller typography

**Tablet (768px - 1023px)**:

- 2-column grids
- Expanded navigation
- Medium spacing
- Balanced typography

**Desktop (1024px+)**:

- 3-column grids
- Full navigation
- Maximum spacing
- Large typography

### Animations & Transitions

**Hover Effects**:

```css
/* Card hover */
transform: translateY(-8px) scale(1.02);
transition: all 0.5s ease;

/* Button hover */
transform: scale(1.05);
transition: all 0.3s ease;

/* Image zoom */
transform: scale(1.1);
transition: transform 0.7s ease;
```

**Interactive States**:

- Hover: Color change, scale, translate
- Focus: Ring outline for accessibility
- Active: Scale down effect
- Disabled: Reduced opacity

### Accessibility Features

**Semantic HTML**:

```html
<nav>
  ,
  <main>
    ,
    <section>
      ,
      <article>
        ,
        <footer>
          <button>
            ,
            <a
              >,
              <form>
                , <input />
                <h1>
                  ,
                  <h2>
                    ,
                    <h3>
                      ,
                      <p></p>
                    </h3>
                  </h2>
                </h1></form
            ></a>
          </button>
        </footer>
      </article>
    </section>
  </main>
</nav>
```

**ARIA Labels**:

```jsx
<button aria-label="Search">
<button aria-label="Shopping Cart">
<button aria-label="Toggle Menu">
<img alt="Descriptive text">
```

**Keyboard Navigation**:

- Tab order follows visual flow
- Focus indicators visible
- Enter/Space activate buttons
- Escape closes modals

**Focus Management**:

```css
focus:ring-2 focus:ring-[#4a9d7f]
focus:ring-offset-2
focus:outline-none
```

## ⚡ Performance Optimizations

### Next.js Optimizations

1. **Automatic Code Splitting**

   - Each route loads only necessary code
   - Components lazy-loaded

2. **Image Optimization**

   - Next.js Image component (when using next/image)
   - Automatic WebP conversion
   - Lazy loading
   - Responsive sizes

3. **Font Optimization**

   - Google Fonts preconnect
   - Font display: swap

4. **Build Optimizations**
   - Minification
   - Tree shaking
   - Compression

### Loading Performance

**Metrics Target**:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Bundle Size

- Initial load: ~200KB (gzipped)
- Runtime JS: ~150KB
- CSS: ~20KB

## 🔧 Configuration Details

### Tailwind CSS Config

```javascript
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a3a2e",
        secondary: "#2d5f4d",
        accent: "#4a9d7f",
        dark: "#0f1e19",
      },
    },
  },
};
```

### Next.js Config

```javascript
module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
```

## 🧪 Testing Checklist

### Functionality Testing

- [ ] All links navigate correctly
- [ ] Buttons trigger actions
- [ ] Forms submit properly
- [ ] Mobile menu toggles
- [ ] Hover effects work
- [ ] Newsletter subscription works

### Responsive Testing

- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12)
- [ ] 768px (iPad)
- [ ] 1024px (Desktop)
- [ ] 1440px (Large Desktop)

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Mobile Chrome

### Accessibility Testing

- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] ARIA labels present

### Performance Testing

- [ ] Lighthouse score > 90
- [ ] Fast 3G load time < 5s
- [ ] No layout shifts
- [ ] Images optimized

## 🐛 Common Issues & Solutions

### Issue: Tailwind classes not working

**Solution**: Verify paths in `tailwind.config.js` and restart dev server

### Issue: Images not loading

**Solution**: Add domain to `next.config.js` images.domains array

### Issue: Mobile menu not toggling

**Solution**: Check useState import and client component directive

### Issue: Build fails

**Solution**: Run `npm install` and check for missing dependencies

## 📊 Analytics Integration (Optional)

### Google Analytics

1. Create GA4 property
2. Add tracking script to `app/layout.js`
3. Track page views and events

### Vercel Analytics

Automatically available in Vercel deployment:

- Web Vitals
- Page views
- Visitor analytics

## 🔐 Security Best Practices

- ✅ No sensitive data in client code
- ✅ Environment variables for API keys
- ✅ HTTPS enforced (Vercel default)
- ✅ CSP headers (configure if needed)
- ✅ XSS protection via React
- ✅ CSRF tokens for forms

## 📈 Future Enhancements

**Phase 2 Features**:

- [ ] Shopping cart functionality
- [ ] Product search
- [ ] Filtering and sorting
- [ ] User authentication
- [ ] Checkout process
- [ ] Payment integration
- [ ] Order tracking
- [ ] Admin dashboard

**Technical Improvements**:

- [ ] Add unit tests (Jest)
- [ ] E2E testing (Playwright)
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] A/B testing
- [ ] PWA capabilities

---

**Documentation Version**: 1.0.0  
**Last Updated**: November 2025  
**Maintained By**: Development Team
