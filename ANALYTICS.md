# 📊 Analytics Integration Guide

This document outlines the comprehensive analytics setup for your Next.js business website using Vercel Analytics and custom tracking.

## 🚀 Quick Start

### 1. Installation

The `@vercel/analytics` package has been installed and integrated into your project:

```bash
npm install @vercel/analytics
```

### 2. Basic Integration

The Analytics component is automatically included in your app's layout via `src/pages/_app.js`:

```javascript
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
```

## 📈 Custom Analytics Features

### Custom Analytics Hook (`src/hooks/useAnalytics.js`)

We've created a comprehensive analytics hook that provides enhanced tracking capabilities:

#### Available Tracking Functions:

```javascript
import { useAnalytics } from "@/hooks/useAnalytics";

const {
  trackPageView, // Track page views with custom properties
  trackButtonClick, // Track button interactions
  trackFormSubmission, // Track form submissions
  trackServiceInteraction, // Track service-related actions
  trackThemeChange, // Track theme toggle events
  trackContactAction, // Track contact method usage
  trackSocialClick, // Track social media clicks
  trackScrollDepth, // Track scroll depth
  trackTimeOnPage, // Track time spent on pages
} = useAnalytics();
```

### Automatic Tracking Hooks

#### 1. Page View Tracking

```javascript
import { usePageViewTracking } from "@/hooks/useAnalytics";

export default function MyPage() {
  usePageViewTracking("Page Name");
  // Automatically tracks page view when component mounts
}
```

#### 2. Scroll Depth Tracking

```javascript
import { useScrollTracking } from "@/hooks/useAnalytics";

export default function MyPage() {
  useScrollTracking();
  // Automatically tracks scroll depth at 25%, 50%, 75%, and 90%
}
```

#### 3. Time on Page Tracking

```javascript
import { useTimeOnPageTracking } from "@/hooks/useAnalytics";

export default function MyPage() {
  useTimeOnPageTracking();
  // Automatically tracks time spent on page
}
```

## 🎯 Enhanced Component Tracking

### Button Component Tracking

All Button components now support automatic click tracking:

```javascript
<Button
  href="/contact"
  variant="primary"
  buttonName="contact_cta" // Required for tracking
  trackClick={true} // Enable/disable tracking (default: true)
>
  Contact Us
</Button>
```

### Form Submission Tracking

Contact forms automatically track submissions with detailed analytics:

```javascript
// Automatically tracks:
// - Form submission events
// - Field completion status
// - Success/error states
```

### Theme Change Tracking

Theme toggles are automatically tracked:

```javascript
// Automatically tracks:
// - Theme changes (light/dark)
// - User preferences
```

## 📊 Tracked Events

### Page Views

- **Event**: `page_view`
- **Properties**: `page`, custom properties
- **Usage**: Automatic on page load

### Button Clicks

- **Event**: `button_click`
- **Properties**: `button`, `variant`, `size`, `href`, `external`
- **Usage**: Automatic when `buttonName` is provided

### Form Submissions

- **Event**: `form_submission`
- **Properties**: `form`, field completion status
- **Usage**: Automatic on form submit

### Theme Changes

- **Event**: `theme_change`
- **Properties**: `theme`
- **Usage**: Automatic on theme toggle

### Scroll Depth

- **Event**: `scroll_depth`
- **Properties**: `depth` (25, 50, 75, 90)
- **Usage**: Automatic with `useScrollTracking()`

### Time on Page

- **Event**: `time_on_page`
- **Properties**: `duration` (in seconds)
- **Usage**: Automatic with `useTimeOnPageTracking()`

## 🔧 Implementation Examples

### Adding Tracking to New Pages

```javascript
import {
  usePageViewTracking,
  useScrollTracking,
  useTimeOnPageTracking,
} from "@/hooks/useAnalytics";

export default function NewPage() {
  // Enable all tracking
  usePageViewTracking("New Page");
  useScrollTracking();
  useTimeOnPageTracking();

  return <div>{/* Your page content */}</div>;
}
```

### Adding Button Tracking

```javascript
import Button from "@/components/Button";

<Button
  href="/services"
  variant="primary"
  buttonName="services_cta"
  trackClick={true}
>
  View Services
</Button>;
```

### Custom Event Tracking

```javascript
import { useAnalytics } from "@/hooks/useAnalytics";

export default function MyComponent() {
  const { trackServiceInteraction } = useAnalytics();

  const handleServiceClick = (serviceName) => {
    trackServiceInteraction(serviceName, "view", {
      category: "services",
      position: "featured",
    });
  };

  return (
    <div onClick={() => handleServiceClick("web-development")}>
      Web Development
    </div>
  );
}
```

## 📈 Analytics Dashboard

### Vercel Analytics Dashboard

Access your analytics data at: `https://vercel.com/[your-project]/analytics`

### Key Metrics Available:

- **Page Views**: Track which pages are most popular
- **User Engagement**: Monitor scroll depth and time on page
- **Conversion Tracking**: Track form submissions and button clicks
- **User Behavior**: Understand how users interact with your site
- **Performance**: Monitor page load times and user experience

## 🛠️ Configuration

### Environment Variables

No additional environment variables are required for basic Vercel Analytics. The tracking works automatically when deployed to Vercel.

### Custom Configuration

You can customize tracking behavior by modifying the hooks in `src/hooks/useAnalytics.js`.

## 📋 Best Practices

### 1. Consistent Naming

Use consistent, descriptive names for tracking events:

```javascript
// Good
buttonName = "contact_form_submit";
buttonName = "services_cta";

// Avoid
buttonName = "btn1";
buttonName = "click";
```

### 2. Meaningful Properties

Include relevant properties for better insights:

```javascript
trackButtonClick("contact_cta", {
  variant: "primary",
  location: "hero_section",
  page: "home",
});
```

### 3. Privacy Compliance

All tracking respects user privacy and complies with GDPR. No personally identifiable information is collected.

### 4. Performance

Analytics tracking is optimized for performance and doesn't impact page load times.

## 🔍 Debugging

### Development Mode

In development, analytics events are logged to the console for debugging.

### Production

In production, events are sent to Vercel Analytics dashboard.

### Testing Tracking

You can test tracking by:

1. Opening browser developer tools
2. Going to the Console tab
3. Interacting with tracked elements
4. Verifying events are logged

## 📚 Additional Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Analytics API Reference](https://vercel.com/docs/analytics/analytics-api)
- [Privacy and GDPR Compliance](https://vercel.com/docs/analytics/privacy)

## 🎉 What's Already Implemented

✅ **Basic Analytics**: Vercel Analytics component integrated
✅ **Page View Tracking**: Automatic tracking on all pages
✅ **Button Click Tracking**: Enhanced Button component with tracking
✅ **Form Submission Tracking**: Contact forms automatically tracked
✅ **Theme Change Tracking**: Dark/light mode toggle tracking
✅ **Scroll Depth Tracking**: Automatic scroll depth monitoring
✅ **Time on Page Tracking**: Automatic time tracking
✅ **Custom Analytics Hook**: Comprehensive tracking utilities
✅ **Privacy Compliant**: GDPR-friendly tracking implementation

Your analytics setup is now complete and ready to provide valuable insights into user behavior and website performance! 🚀
