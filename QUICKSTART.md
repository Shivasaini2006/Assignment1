# 🚀 Quick Start Guide - FlowVision

**Get your FlowVision plant store running in 2 minutes!**

## ⚡ Super Fast Setup

### 1️⃣ Install Dependencies (30 seconds)

```bash
cd c:\Users\user\OneDrive\Desktop\Assignment1
npm install
```

### 2️⃣ Start Development Server (10 seconds)

```bash
npm run dev
```

### 3️⃣ Open in Browser

Visit: **http://localhost:3000**

🎉 **Done!** Your website is now running!

---

## 📱 View on Different Devices

**Desktop**: http://localhost:3000  
**Mobile**: Open on your phone using your computer's IP address

To find your IP:

```bash
ipconfig
```

Then visit: `http://YOUR_IP:3000` on your phone

---

## 🚢 Deploy to Internet (5 minutes)

### Easiest Way - Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Follow prompts** (just press Enter for defaults)

4. **Your site is LIVE!** 🎊
   - You'll get a URL like: `https://your-project.vercel.app`

### Alternative - Render

1. Go to [render.com](https://render.com)
2. Connect GitHub (push your code first)
3. Click "New Web Service"
4. Select repository
5. Click "Deploy"

---

## 📋 What You Get

✅ **7 Sections**:

- Navigation Bar with mobile menu
- Hero Section with "Earth's Exhale"
- Trending Plants showcase
- Top Selling Plants grid (6 products)
- Customer Reviews (testimonials)
- Best O₂ Plants featured section
- Footer with newsletter

✅ **12 Reusable Components**:

- Navbar, HeroBanner, Footer
- PlantCard, ProductCard, TestimonialCard
- SectionTitle, Button
- All sections as separate components

✅ **Fully Responsive**:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1440px+

✅ **Production Ready**:

- SEO optimized
- Accessible (ARIA labels)
- Fast performance
- Smooth animations
- Keyboard navigation

---

## 🛠️ Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## 📂 Project Files

```
Assignment1/
├── app/
│   ├── page.js          ← Main homepage
│   ├── layout.js        ← Root layout
│   └── globals.css      ← Global styles
│
├── components/          ← All React components
│   ├── Navbar.js
│   ├── HeroBanner.js
│   ├── Footer.js
│   └── ... (9 more)
│
├── package.json         ← Dependencies
├── tailwind.config.js   ← Styling config
└── next.config.js       ← Next.js config
```

---

## ✏️ Customize Your Site

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a3a2e',    // Change this
  accent: '#4a9d7f',     // And this
}
```

### Change Text

Edit `app/page.js` and component files:

```jsx
<h1>Earth's Exhale</h1>  // Change headings
<p>Your new text</p>      // Change descriptions
```

### Change Images

Replace image URLs in component files:

```jsx
src = "https://images.unsplash.com/...";
```

### Add New Section

1. Create `components/NewSection.js`
2. Import in `app/page.js`
3. Add `<NewSection />` to page

---

## 🆘 Need Help?

### Dev Server Won't Start?

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Styles Not Showing?

```bash
# Restart dev server
# Press Ctrl+C, then:
npm run dev
```

### Build Errors?

```bash
# Check all files are saved
# Run:
npm run build
# Fix any errors shown
```

---

## 📚 Documentation

- **README.md** - Full project overview
- **DEPLOYMENT.md** - Deployment guide
- **TECHNICAL_DOCS.md** - Technical details
- **GIT_SETUP.md** - Version control guide

---

## 🎯 Next Steps

1. ✅ **Customize** content and images
2. ✅ **Test** on mobile devices
3. ✅ **Deploy** to Vercel/Render
4. ✅ **Share** your live URL!

---

## 💡 Pro Tips

- **Hot Reload**: Changes appear instantly in browser
- **Mobile Menu**: Resize browser to test responsive design
- **Components**: Each section is a separate file for easy editing
- **Tailwind**: Use utility classes for quick styling changes

---

## 🌟 Features Highlights

**Navbar**:

- Fixed on scroll
- Mobile hamburger menu
- Search, cart, user icons

**Hero Section**:

- Large heading
- CTA buttons
- Featured plant images
- Animated cards

**Product Grid**:

- 6 plant products
- Hover effects
- Add to cart buttons
- Responsive layout

**Reviews**:

- Customer testimonials
- 5-star ratings
- Avatar images

**Footer**:

- Newsletter signup
- Social media links
- Quick links
- Company info

---

**🚀 Your site is ready to deploy and share!**

**Live Preview**: http://localhost:3000  
**Production Build**: `npm run build && npm start`  
**Deploy**: `vercel` or use Vercel/Render dashboard

---

**Need to make changes?** Just edit the component files and save - changes appear instantly! 🎨

**Ready to deploy?** Run `vercel` and your site goes live in 30 seconds! 🚀
