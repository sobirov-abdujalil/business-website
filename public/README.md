# Public Folder - Image Assets Guide

This folder contains all static assets for the business website, including images, favicons, and other media files.

## 📁 Folder Structure

```
public/
├── favicon.ico                    # Main favicon (32x32)
├── favicon-16x16.png             # Small favicon
├── favicon-32x32.png             # Standard favicon
├── apple-touch-icon.png          # iOS app icon (180x180)
├── android-chrome-192x192.png    # Android app icon
├── android-chrome-512x512.png    # Android app icon (large)
├── mstile-150x150.png            # Windows tile icon
├── maskable-icon.png             # PWA maskable icon
├── images/
│   ├── logo/
│   │   ├── logo.svg              # Vector logo (primary)
│   │   ├── logo.png              # PNG logo (256x64)
│   │   ├── logo-white.png        # White version for dark backgrounds
│   │   ├── logo-dark.png         # Dark version for light backgrounds
│   │   └── logo-favicon.png      # Square logo for favicon (32x32)
│   ├── hero/
│   │   ├── hero-banner.jpg       # Main hero image (1920x1080)
│   │   ├── hero-banner-mobile.jpg # Mobile hero (768x1024)
│   │   └── hero-pattern.svg      # Background pattern
│   ├── team/
│   │   ├── member1.jpg           # Team member 1 (400x400)
│   │   ├── member2.jpg           # Team member 2 (400x400)
│   │   ├── member3.jpg           # Team member 3 (400x400)
│   │   └── team-group.jpg        # Group photo (1200x800)
│   ├── services/
│   │   ├── service1.jpg          # Service 1 icon (300x200)
│   │   ├── service2.jpg          # Service 2 icon (300x200)
│   │   └── service3.jpg          # Service 3 icon (300x200)
│   ├── about/
│   │   ├── office.jpg            # Office photo (800x600)
│   │   ├── meeting.jpg           # Meeting photo (800x600)
│   │   └── values.jpg            # Values illustration (600x400)
│   ├── blog/
│   │   ├── blog1.jpg             # Blog post 1 (800x400)
│   │   ├── blog2.jpg             # Blog post 2 (800x400)
│   │   └── blog3.jpg             # Blog post 3 (800x400)
│   └── misc/
│       ├── placeholder.jpg       # Generic placeholder (400x300)
│       ├── loading.gif           # Loading animation
│       └── error-404.jpg         # 404 page image (600x400)
└── fonts/                        # Custom fonts (if any)
    └── inter-var.woff2           # Inter font variable
```

## 🎨 Image Specifications

### Favicon Files
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `favicon.ico` | 32x32 | ICO | Browser tab icon |
| `favicon-16x16.png` | 16x16 | PNG | Small favicon |
| `favicon-32x32.png` | 32x32 | PNG | Standard favicon |
| `apple-touch-icon.png` | 180x180 | PNG | iOS home screen |
| `android-chrome-192x192.png` | 192x192 | PNG | Android app icon |
| `android-chrome-512x512.png` | 512x512 | PNG | Android app icon (large) |
| `mstile-150x150.png` | 150x150 | PNG | Windows tile |
| `maskable-icon.png` | 512x512 | PNG | PWA maskable icon |

### Logo Files
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `logo.svg` | Vector | SVG | Primary logo (scalable) |
| `logo.png` | 256x64 | PNG | Standard logo |
| `logo-white.png` | 256x64 | PNG | White version |
| `logo-dark.png` | 256x64 | PNG | Dark version |
| `logo-favicon.png` | 32x32 | PNG | Favicon version |

### Hero Images
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `hero-banner.jpg` | 1920x1080 | JPG | Desktop hero |
| `hero-banner-mobile.jpg` | 768x1024 | JPG | Mobile hero |
| `hero-pattern.svg` | Vector | SVG | Background pattern |

### Team Photos
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `member1.jpg` | 400x400 | JPG | Team member 1 |
| `member2.jpg` | 400x400 | JPG | Team member 2 |
| `member3.jpg` | 400x400 | JPG | Team member 3 |
| `team-group.jpg` | 1200x800 | JPG | Group photo |

### Service Icons
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `service1.jpg` | 300x200 | JPG | Service 1 |
| `service2.jpg` | 300x200 | JPG | Service 2 |
| `service3.jpg` | 300x200 | JPG | Service 3 |

### About Section
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `office.jpg` | 800x600 | JPG | Office photo |
| `meeting.jpg` | 800x600 | JPG | Meeting photo |
| `values.jpg` | 600x400 | JPG | Values illustration |

### Blog Images
| Filename | Dimensions | Format | Purpose |
|----------|------------|--------|---------|
| `blog1.jpg` | 800x400 | JPG | Blog post 1 |
| `blog2.jpg` | 800x400 | JPG | Blog post 2 |
| `blog3.jpg` | 800x400 | JPG | Blog post 3 |

## 📋 Image Guidelines

### Quality Standards
- **Hero Images**: High quality, professional photos (minimum 1920x1080)
- **Team Photos**: Professional headshots with consistent lighting
- **Logos**: Vector format preferred for scalability
- **Icons**: Clean, simple designs that work at small sizes

### File Formats
- **Photos**: JPG for photos, PNG for graphics with transparency
- **Logos**: SVG for scalability, PNG for fallback
- **Icons**: PNG for crisp edges, SVG for scalability
- **Animations**: GIF for simple animations, WebP for better compression

### Optimization
- Compress all images for web use
- Use WebP format when possible for better performance
- Implement lazy loading for images below the fold
- Provide multiple sizes for responsive design

### Accessibility
- Include alt text for all images
- Ensure sufficient color contrast
- Use descriptive filenames
- Provide text alternatives for decorative images

## 🚀 Performance Tips

1. **Optimize file sizes** - Use tools like TinyPNG or ImageOptim
2. **Use appropriate formats** - JPG for photos, PNG for graphics
3. **Implement lazy loading** - Load images as needed
4. **Provide multiple sizes** - Use srcset for responsive images
5. **Cache aggressively** - Set proper cache headers
6. **Use CDN** - Serve images from a content delivery network

## 📱 Responsive Images

For responsive design, provide multiple image sizes:

```html
<img 
  src="/images/hero/hero-banner.jpg"
  srcset="/images/hero/hero-banner-mobile.jpg 768w,
          /images/hero/hero-banner.jpg 1920w"
  sizes="(max-width: 768px) 768px, 1920px"
  alt="Hero banner"
/>
```

## 🔧 Next.js Image Component

Use Next.js Image component for automatic optimization:

```jsx
import Image from 'next/image'

<Image
  src="/images/logo/logo.png"
  alt="Company Logo"
  width={256}
  height={64}
  priority
/>
```
