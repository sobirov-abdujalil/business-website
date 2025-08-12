# Deployment Guide - Next.js Business Website

This guide provides comprehensive instructions for deploying your Next.js + Tailwind CSS business website to Netlify.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Deployment Methods](#deployment-methods)
3. [GitHub Integration](#github-integration)
4. [Manual Deployment](#manual-deployment)
5. [Environment Variables](#environment-variables)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Post-Deployment Configuration](#post-deployment-configuration)
8. [Troubleshooting](#troubleshooting)
9. [Performance Optimization](#performance-optimization)
10. [Monitoring and Analytics](#monitoring-and-analytics)

## Prerequisites

Before deploying, ensure you have:

- ✅ A GitHub account with your project repository
- ✅ A Netlify account (free tier available)
- ✅ Node.js 18+ installed locally (for testing)
- ✅ All project dependencies installed (`npm install`)

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

This is the easiest and most maintainable approach.

#### Step 1: Prepare Your Repository

1. **Push to GitHub**: Ensure your project is pushed to a GitHub repository
   ```bash
   git add .
   git commit -m "Initial commit - ready for deployment"
   git push origin main
   ```

2. **Verify Repository Structure**: Your repository should contain:
   ```
   business-website/
   ├── src/
   ├── public/
   ├── package.json
   ├── next.config.js
   ├── tailwind.config.js
   ├── netlify.toml
   └── README.md
   ```

#### Step 2: Connect to Netlify

1. **Sign in to Netlify**: Go to [netlify.com](https://netlify.com) and sign in
2. **New Site from Git**: Click "New site from Git"
3. **Choose GitHub**: Select GitHub as your Git provider
4. **Authorize Netlify**: Grant Netlify access to your GitHub account
5. **Select Repository**: Choose your business website repository
6. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18` (or latest LTS)

#### Step 3: Configure Environment Variables

In the Netlify dashboard, go to **Site settings > Environment variables** and add:

```bash
# Required for Next.js
NODE_VERSION=18
NEXT_TELEMETRY_DISABLED=1

# Optional: Analytics (if using)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id

# Optional: Contact form (if using external service)
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

#### Step 4: Deploy

1. **Trigger Deployment**: Click "Deploy site"
2. **Monitor Build**: Watch the build logs for any errors
3. **Verify Deployment**: Once complete, your site will be live at `https://your-site-name.netlify.app`

### Method 2: Manual Deployment

For one-time deployments or testing.

#### Step 1: Build Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm start
```

#### Step 2: Deploy to Netlify

1. **Drag and Drop**: Go to [netlify.com](https://netlify.com) and drag your `.next` folder to the deploy area
2. **Or use Netlify CLI**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy
   netlify deploy --prod --dir=.next
   ```

## Environment Variables

### Required Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_VERSION` | `18` | Node.js version for build |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js telemetry |

### Optional Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics ID |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | Google Tag Manager ID |
| `CONTACT_FORM_ENDPOINT` | `https://...` | Contact form submission URL |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Your site URL for SEO |

### Setting Environment Variables

1. **Netlify Dashboard**: Go to Site settings > Environment variables
2. **Add Variables**: Click "Add variable" for each required variable
3. **Redeploy**: Trigger a new deployment to apply changes

## Custom Domain Setup

### Step 1: Add Custom Domain

1. **Domain Settings**: Go to Site settings > Domain management
2. **Add Custom Domain**: Enter your domain name
3. **DNS Configuration**: Follow Netlify's DNS instructions

### Step 2: Update SEO Configuration

Update your `src/pages/_document.js` and `src/components/SEO.js` files:

```javascript
// Replace placeholder URLs with your actual domain
const SITE_URL = "https://yourdomain.com";
const SITE_NAME = "Your Business Name";
```

### Step 3: SSL Certificate

Netlify automatically provides SSL certificates for custom domains.

## Post-Deployment Configuration

### 1. Update SEO Meta Tags

Update the following files with your actual business information:

- `src/pages/_document.js` - Global meta tags
- `src/components/SEO.js` - SEO component defaults
- `public/sitemap.xml` - Your actual pages
- `public/robots.txt` - Crawl rules

### 2. Configure Analytics

If using Google Analytics or Tag Manager:

1. **Add to `_document.js`**:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Set Environment Variable**: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### 3. Contact Form Setup

If using a contact form service (Formspree, Netlify Forms, etc.):

1. **Update `ContactForm.js`** with your endpoint
2. **Set Environment Variable**: `CONTACT_FORM_ENDPOINT=https://...`

### 4. Image Optimization

1. **Replace Placeholder Images**: Update images in `public/images/`
2. **Optimize Images**: Use tools like TinyPNG or ImageOptim
3. **Update Image Paths**: Ensure all image references are correct

## Troubleshooting

### Common Issues

#### Build Failures

**Error**: `Module not found`
- **Solution**: Ensure all dependencies are in `package.json`
- **Check**: Run `npm install` locally

**Error**: `Tailwind CSS not working`
- **Solution**: Verify `tailwind.config.js` and `postcss.config.js`
- **Check**: Ensure `globals.css` imports Tailwind

#### Runtime Errors

**Error**: `404 on refresh`
- **Solution**: Verify `netlify.toml` redirects are correct
- **Check**: Ensure `/*` redirects to `/index.html`

**Error**: `Images not loading`
- **Solution**: Check image paths in `public/` directory
- **Check**: Verify `next.config.js` image configuration

#### Performance Issues

**Slow Loading**: 
- **Solution**: Enable image optimization in `next.config.js`
- **Check**: Use Next.js Image component for all images

**Large Bundle Size**:
- **Solution**: Analyze with `npm run build` and check bundle analyzer
- **Check**: Remove unused dependencies

### Debug Commands

```bash
# Test build locally
npm run build

# Test production build
npm start

# Check for linting errors
npm run lint

# Analyze bundle size
npm run build && npx @next/bundle-analyzer
```

## Performance Optimization

### 1. Image Optimization

- Use Next.js `Image` component for all images
- Optimize image formats (WebP, AVIF)
- Implement lazy loading for below-the-fold images

### 2. Code Splitting

- Use dynamic imports for heavy components
- Implement route-based code splitting
- Optimize third-party libraries

### 3. Caching Strategy

The `netlify.toml` file includes optimal caching headers:
- Static assets: 1 year
- Images: 1 year
- Favicon: 1 day

### 4. Core Web Vitals

Monitor and optimize:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Monitoring and Analytics

### 1. Netlify Analytics

- **Enable**: Go to Site settings > Analytics
- **Monitor**: Page views, unique visitors, bandwidth
- **Alerts**: Set up notifications for build failures

### 2. Google Analytics

- **Setup**: Add GA4 tracking code
- **Monitor**: User behavior, conversion tracking
- **Reports**: Page performance, user demographics

### 3. Performance Monitoring

- **Lighthouse**: Run regular audits
- **WebPageTest**: Monitor from different locations
- **Core Web Vitals**: Track in Google Search Console

### 4. Error Monitoring

- **Netlify Functions**: Monitor serverless function errors
- **Client-side**: Implement error boundary components
- **Logs**: Check Netlify function logs for issues

## Continuous Deployment

### Automatic Deployments

With GitHub integration, your site automatically deploys when you:
- Push to the `main` branch
- Create a pull request
- Merge pull requests

### Branch Deploys

- **Preview Deployments**: Automatically created for pull requests
- **Branch Deployments**: Deploy from any branch for testing
- **Manual Deploys**: Trigger deployments from Netlify dashboard

### Deployment Notifications

Set up notifications for:
- Successful deployments
- Failed builds
- Form submissions
- Function errors

## Security Considerations

### 1. Environment Variables

- Never commit sensitive data to Git
- Use Netlify's environment variable system
- Rotate API keys regularly

### 2. Content Security Policy

The `netlify.toml` includes security headers:
- X-Frame-Options: Prevent clickjacking
- X-XSS-Protection: Prevent XSS attacks
- X-Content-Type-Options: Prevent MIME sniffing

### 3. HTTPS

- Netlify automatically provides SSL certificates
- Force HTTPS redirects
- Use secure cookies and headers

## Support and Resources

### Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Community

- [Next.js Discord](https://discord.gg/nextjs)
- [Netlify Community](https://community.netlify.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

### Tools

- [Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Next.js Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## Quick Deploy Checklist

Before deploying, ensure you have:

- [ ] All code committed to GitHub
- [ ] `package.json` has correct scripts
- [ ] `netlify.toml` is in root directory
- [ ] Environment variables configured
- [ ] Images optimized and in correct locations
- [ ] SEO meta tags updated with your business info
- [ ] Contact form endpoint configured
- [ ] Analytics tracking code added
- [ ] Custom domain DNS configured (if applicable)
- [ ] SSL certificate active (automatic with Netlify)

After deployment:

- [ ] Test all pages and functionality
- [ ] Verify images and assets load correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form submission
- [ ] Verify analytics tracking
- [ ] Run Lighthouse audit
- [ ] Set up monitoring and alerts
- [ ] Configure backup and recovery procedures

Your Next.js business website is now ready for production! 🚀
