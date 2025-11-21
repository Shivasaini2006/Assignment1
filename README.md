# FlowVision - Premium Plant Store 🌿

A pixel-perfect, production-ready Next.js e-commerce website for FlowVision plant store. Built with React.js, Next.js 14+, and Tailwind CSS.

![FlowVision Preview](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Pixel-Perfect Design** - Exact replication of Figma design
- **Fully Responsive** - Optimized for all devices (320px - 1440px+)
- **Modern Tech Stack** - Next.js 14+ App Router, React 18+, Tailwind CSS
- **Component-Based Architecture** - Reusable, maintainable components
- **Smooth Animations** - Engaging hover effects and transitions
- **Mobile-First** - Responsive hamburger navigation
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Performance Optimized** - Fast loading, optimized images
- **SEO Ready** - Meta tags and semantic structure

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd Assignment1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Assignment1/
├── app/
│   ├── globals.css          # Global styles & Tailwind directives
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Homepage with all sections
├── components/
│   ├── Navbar.js            # Header with responsive navigation
│   ├── HeroBanner.js        # Hero section with "Earth's Exhale"
│   ├── TrendingPlants.js    # Featured trending plants section
│   ├── TopSellingPlants.js  # Product grid section
│   ├── CustomerReviews.js   # Testimonials section
│   ├── BestO2Section.js     # Featured O₂ plant showcase
│   ├── Footer.js            # Footer with links & newsletter
│   ├── PlantCard.js         # Large plant card component
│   ├── ProductCard.js       # Product grid card component
│   ├── TestimonialCard.js   # Review card component
│   ├── SectionTitle.js      # Reusable section heading
│   └── Button.js            # Custom button component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Components

### Reusable Components

- **`Navbar`** - Fixed header with mobile menu, search, cart, and user icons
- **`HeroBanner`** - Hero section with CTA buttons and featured plant cards
- **`Button`** - Customizable button with variants (primary, secondary, outline)
- **`SectionTitle`** - Consistent section headings with underline accent
- **`PlantCard`** - Large featured plant cards with hover effects
- **`ProductCard`** - Product grid items with quick actions
- **`TestimonialCard`** - Customer review cards with ratings
- **`Footer`** - Complete footer with links, newsletter, and social media

## 🎯 Features Implemented

### Design & Styling

- ✅ Exact color scheme matching Figma (#1a3a2e, #4a9d7f, etc.)
- ✅ Custom typography with Inter font family
- ✅ Consistent spacing and layout
- ✅ Glassmorphism effects with backdrop blur
- ✅ Gradient backgrounds and overlays

### Interactivity

- ✅ Smooth hover transitions on all interactive elements
- ✅ Animated button states (hover, focus, active)
- ✅ Product card hover effects with scale and rotation
- ✅ Mobile hamburger menu with smooth toggle
- ✅ Newsletter form with state management

### Responsiveness

- ✅ Mobile-first approach (320px+)
- ✅ Tablet optimization (768px+)
- ✅ Desktop layouts (1024px+)
- ✅ Large screen support (1440px+)
- ✅ Responsive images and typography
- ✅ Adaptive grid layouts

### Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels for icon buttons
- ✅ Keyboard navigation support
- ✅ Focus indicators with ring styles
- ✅ Alt text for images
- ✅ Proper heading hierarchy

### Performance

- ✅ Next.js Image optimization
- ✅ Code splitting with App Router
- ✅ Optimized bundle size
- ✅ Fast page loads

## 🔧 Configuration

### Tailwind CSS Custom Theme

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a3a2e',
      secondary: '#2d5f4d',
      accent: '#4a9d7f',
      dark: '#0f1e19',
    }
  }
}
```

### Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large**: 1440px+

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Production deployment**
   ```bash
   vercel --prod
   ```

### Deploy to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node

### Environment Variables

No environment variables required for basic deployment.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- ESLint configuration included
- Next.js core web vitals
- Follows React best practices

## 🎨 Design System

### Color Palette

- **Primary Dark**: `#1a3a2e`
- **Secondary Dark**: `#2d5f4d`
- **Accent Green**: `#4a9d7f`
- **Background**: `#0f1e19`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Spacing Scale

Following Tailwind's default spacing scale with custom extensions.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Built with ❤️ using Next.js and Tailwind CSS

---

**Live Demo**: Deploy on Vercel for instant preview
**Tech Stack**: Next.js 14+ • React 18+ • Tailwind CSS 3.4+
