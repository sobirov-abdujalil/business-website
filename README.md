# Business Website - Next.js + Tailwind CSS

A modern, responsive business website template built with Next.js and Tailwind CSS. Features dark mode, SEO optimization, accessibility compliance, and comprehensive deployment setup.

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🚀 Next.js 14** - Latest React framework with App Router
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🌙 Dark Mode** - Automatic theme switching with system preference detection
- **📱 Responsive Design** - Mobile-first approach with custom breakpoints
- **♿ Accessibility** - WCAG 2.1 AA compliant with ARIA attributes
- **🔍 SEO Optimized** - Meta tags, structured data, and performance optimization
- **⚡ Performance** - Optimized images, code splitting, and Core Web Vitals
- **🛡️ Security** - Security headers and best practices
- **📊 Analytics Ready** - Google Analytics and Tag Manager integration
- **🚀 Deployment Ready** - Netlify configuration and deployment scripts

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Features & Components](#features--components)
4. [Customization](#customization)
5. [Deployment](#deployment)
6. [Performance](#performance)
7. [Accessibility](#accessibility)
8. [SEO](#seo)
9. [Contributing](#contributing)
10. [License](#license)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+ or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/business-website.git
   cd business-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Analyze bundle size
npm run analyze
```

## 📁 Project Structure

```
business-website/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── favicon.ico        # Favicon
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
│   └── site.webmanifest   # PWA manifest
├── src/
│   ├── components/        # Reusable components
│   │   ├── Button.js      # Button component
│   │   ├── ContactForm.js # Contact form
│   │   ├── Footer.js      # Footer component
│   │   ├── Header.js      # Header with navigation
│   │   ├── HeroSection.js # Hero banner
│   │   ├── ServiceCard.js # Service display card
│   │   ├── TeamMember.js  # Team member card
│   │   ├── SEO.js         # SEO component
│   │   └── Layout.js      # Page layout wrapper
│   ├── pages/             # Next.js pages
│   │   ├── _app.js        # App wrapper
│   │   ├── _document.js   # Document wrapper
│   │   ├── index.js       # Homepage
│   │   ├── about.js       # About page
│   │   ├── services.js    # Services page
│   │   ├── contact.js     # Contact page
│   │   └── 404.js         # Custom 404 page
│   ├── styles/            # Global styles
│   │   └── globals.css    # Tailwind imports & custom styles
│   └── utils/             # Utility functions
├── scripts/               # Build and deployment scripts
│   ├── deploy.sh          # Linux/Mac deployment script
│   ├── deploy.bat         # Windows deployment script
│   └── optimize-images.js # Image optimization script
├── netlify.toml           # Netlify configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎯 Features & Components

### Core Components

- **Header** - Responsive navigation with mobile menu and theme toggle
- **Hero Section** - Eye-catching banner with call-to-action
- **Service Cards** - Customizable service display components
- **Team Member Cards** - Professional team member profiles
- **Contact Form** - Accessible contact form with validation
- **Footer** - Comprehensive footer with links and social media
- **SEO Component** - Reusable SEO meta tags and structured data

### Pages

- **Homepage** - Landing page with hero, services, and team sections
- **About** - Company information and team introduction
- **Services** - Detailed service offerings with categories
- **Contact** - Contact form and location information
- **404** - Custom error page with helpful navigation

### Advanced Features

- **Dark Mode** - Automatic theme switching with localStorage persistence
- **Responsive Design** - Mobile-first approach with custom breakpoints
- **Accessibility** - ARIA attributes, keyboard navigation, screen reader support
- **SEO Optimization** - Meta tags, structured data, and performance optimization
- **Performance** - Image optimization, code splitting, and caching strategies

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
        },
      },
    },
  },
}
```

### Content Updates

1. **Business Information** - Update `src/pages/_document.js` and `src/components/SEO.js`
2. **Images** - Replace placeholder images in `public/images/`
3. **Services** - Modify service data in `src/pages/index.js` and `src/pages/services.js`
4. **Team Members** - Update team information in `src/pages/index.js` and `src/pages/about.js`
5. **Contact Information** - Update contact details in `src/components/Footer.js`

### Styling

- **Global Styles** - Modify `src/styles/globals.css`
- **Component Styles** - Update individual component files
- **Tailwind Configuration** - Extend `tailwind.config.js` for custom utilities

## 🚀 Deployment

### Quick Deployment to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Script**
   ```bash
   # Linux/Mac
   npm run deploy
   
   # Windows
   npm run deploy:win
   ```

3. **Manual Deployment**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Environment Variables

Set these in your Netlify dashboard:

```bash
# Required
NODE_VERSION=18
NEXT_TELEMETRY_DISABLED=1

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
CONTACT_FORM_ENDPOINT=https://your-form-endpoint.com
```

### Custom Domain

1. Add custom domain in Netlify dashboard
2. Update DNS settings as instructed
3. Update SEO configuration with your domain
4. SSL certificate is automatically provided

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## ⚡ Performance

### Optimization Features

- **Image Optimization** - Next.js Image component with WebP/AVIF support
- **Code Splitting** - Automatic route-based code splitting
- **Bundle Analysis** - Run `npm run analyze` to analyze bundle size
- **Caching Strategy** - Optimized caching headers in `netlify.toml`
- **Core Web Vitals** - Optimized for LCP, FID, and CLS

### Performance Monitoring

- **Lighthouse** - Regular performance audits
- **Core Web Vitals** - Monitor in Google Search Console
- **Bundle Analyzer** - Analyze JavaScript bundle size
- **Netlify Analytics** - Monitor site performance

### Best Practices

- Use Next.js Image component for all images
- Implement lazy loading for below-the-fold content
- Optimize third-party scripts and libraries
- Monitor and optimize Core Web Vitals
- Use appropriate caching strategies

## ♿ Accessibility

### Compliance

This project follows WCAG 2.1 AA guidelines and includes:

- **ARIA Attributes** - Proper labeling and descriptions
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Semantic HTML and ARIA roles
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG AA compliant color ratios
- **Semantic HTML** - Proper heading hierarchy and landmarks

### Testing

- **Manual Testing** - Keyboard navigation and screen reader testing
- **Automated Testing** - ESLint accessibility rules
- **Browser Testing** - Cross-browser accessibility testing
- **Tools** - Lighthouse accessibility audits

For detailed accessibility information, see [ACCESSIBILITY_IMPROVEMENTS.md](./ACCESSIBILITY_IMPROVEMENTS.md).

## 🔍 SEO

### Optimization Features

- **Meta Tags** - Comprehensive meta tag management
- **Structured Data** - JSON-LD schemas for rich snippets
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter-specific meta tags
- **Sitemap** - XML sitemap for search engines
- **Robots.txt** - Search engine crawling instructions

### SEO Component

The `SEO` component provides easy meta tag management:

```javascript
import SEO from '@/components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home - Business Website"
        description="Professional business solutions"
        keywords="business, solutions, web development"
        canonical="https://yourdomain.com"
        ogImage="https://yourdomain.com/og-image.jpg"
      />
      {/* Page content */}
    </>
  );
}
```

### Structured Data

Predefined schemas for common content types:

- Organization schema
- Website schema
- WebPage schema
- Service schema
- ContactPage schema
- FAQ schema
- BreadcrumbList schema

For detailed SEO information, see [src/components/SEO.md](./src/components/SEO.md).

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Full deployment process (Linux/Mac)
npm run deploy:win   # Full deployment process (Windows)
npm run deploy:build # Build only
npm run deploy:test  # Build and test locally

# Analysis
npm run analyze      # Bundle analysis
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Images
npm run images:setup    # Setup image directories
npm run images:favicons # Generate favicons
npm run images:optimize # Optimize images
```

### Code Quality

- **ESLint** - JavaScript/React linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking (optional)
- **Husky** - Git hooks for code quality

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Netlify](https://netlify.com/) - Hosting platform
- [React](https://reactjs.org/) - JavaScript library
- [Vercel](https://vercel.com/) - Next.js creators

## 📞 Support

- **Documentation** - Check the docs in this repository
- **Issues** - Report bugs on [GitHub Issues](https://github.com/yourusername/business-website/issues)
- **Discussions** - Ask questions on [GitHub Discussions](https://github.com/yourusername/business-website/discussions)
- **Email** - Contact at hello@yourdomain.com

---

**Made with ❤️ by [Your Name]**

If this project helps you, please consider giving it a ⭐️ on GitHub!
