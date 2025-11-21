# FlowVision Plant Store - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:

```bash
npm i -g vercel
```

2. Login to your Vercel account:

```bash
vercel login
```

3. Deploy from the project directory:

```bash
cd Assignment1
vercel
```

4. Follow the prompts:

   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **flowvision-plants** (or your choice)
   - Directory? **./** (press Enter)
   - Override settings? **N**

5. For production deployment:

```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: FlowVision plant store"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
6. Click "Deploy"

## 🔧 Deploy to Render

1. Create a new Web Service on [render.com](https://render.com)

2. Connect your GitHub repository

3. Configure the service:

   - **Name**: flowvision-plants
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Auto-Deploy**: Yes

4. Add environment variables (if needed):

   - `NODE_ENV=production`

5. Click "Create Web Service"

## 📋 Pre-Deployment Checklist

- [x] All dependencies installed
- [x] Build runs successfully (`npm run build`)
- [x] No console errors in development
- [x] Responsive design tested
- [x] Images loading correctly
- [x] Navigation working properly
- [x] Forms functioning
- [x] SEO meta tags added

## 🧪 Test Build Locally

Before deploying, test the production build:

```bash
npm run build
npm start
```

Visit http://localhost:3000 to verify everything works.

## 🌐 Custom Domain (Vercel)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for SSL certificate provisioning

## 📊 Performance Optimization

Already implemented:

- Next.js Image optimization
- Code splitting
- Lazy loading components
- Minimized bundle size
- Optimized fonts loading

## 🔐 Environment Variables

This project doesn't require environment variables for basic deployment.

For future API integrations, add in Vercel:

1. Project Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

## 📱 Testing Deployed Site

After deployment, test:

- [ ] All pages load correctly
- [ ] Responsive design on mobile
- [ ] Navigation menu works
- [ ] Images display properly
- [ ] Hover effects functional
- [ ] Performance metrics (Lighthouse)

## 🐛 Troubleshooting

### Build fails on Vercel

- Check Node.js version (use 18+)
- Verify all dependencies in package.json
- Check build logs for specific errors

### Images not loading

- Ensure image domains are configured in next.config.js
- Use Next.js Image component

### Styles not applying

- Verify Tailwind CSS is properly configured
- Check globals.css import in layout.js

## 📈 Monitoring

Vercel provides:

- Analytics
- Web Vitals
- Deployment logs
- Error tracking

Access these in your Vercel dashboard.

## 🔄 Continuous Deployment

With Vercel + GitHub:

- Push to main branch → Auto-deploy to production
- Push to other branches → Auto-deploy preview URLs
- Pull requests → Preview deployments

## 📝 Post-Deployment

1. Test all functionality on live site
2. Run Lighthouse audit
3. Share deployment URL
4. Monitor performance metrics
5. Set up error tracking (optional)

---

**Your site will be live at**: `https://your-project-name.vercel.app`

For custom domain: `https://yourdomain.com`
