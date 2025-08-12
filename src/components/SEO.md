# SEO Component Documentation

## Overview

The SEO component provides a comprehensive solution for managing meta tags, Open Graph tags, Twitter Cards, and structured data across your Next.js application. It's designed to be flexible, reusable, and SEO-optimized.

## Basic Usage

```jsx
import SEO from "@/components/SEO";

export default function MyPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description"
        canonical="https://your-domain.com/page"
      />
      {/* Your page content */}
    </>
  );
}
```

## Props

### Basic SEO Props

| Prop          | Type   | Default                                                 | Description      |
| ------------- | ------ | ------------------------------------------------------- | ---------------- |
| `title`       | string | "Business Website - Modern Solutions for Your Business" | Page title       |
| `description` | string | Default description                                     | Meta description |
| `keywords`    | string | Default keywords                                        | Meta keywords    |
| `author`      | string | "Business Website"                                      | Page author      |
| `canonical`   | string | "https://your-domain.com"                               | Canonical URL    |
| `url`         | string | "https://your-domain.com"                               | Page URL         |

### Open Graph Props

| Prop            | Type   | Default            | Description               |
| --------------- | ------ | ------------------ | ------------------------- |
| `ogType`        | string | "website"          | Open Graph type           |
| `ogTitle`       | string | Uses `title`       | Open Graph title          |
| `ogDescription` | string | Uses `description` | Open Graph description    |
| `ogImage`       | string | Default OG image   | Open Graph image URL      |
| `ogImageWidth`  | string | "1200"             | Open Graph image width    |
| `ogImageHeight` | string | "630"              | Open Graph image height   |
| `ogImageAlt`    | string | Uses `title`       | Open Graph image alt text |
| `ogSiteName`    | string | "Business Website" | Open Graph site name      |
| `ogLocale`      | string | "en_US"            | Open Graph locale         |

### Twitter Props

| Prop                 | Type   | Default               | Description            |
| -------------------- | ------ | --------------------- | ---------------------- |
| `twitterCard`        | string | "summary_large_image" | Twitter card type      |
| `twitterTitle`       | string | Uses `title`          | Twitter title          |
| `twitterDescription` | string | Uses `description`    | Twitter description    |
| `twitterImage`       | string | Default Twitter image | Twitter image URL      |
| `twitterImageAlt`    | string | Uses `title`          | Twitter image alt text |
| `twitterSite`        | string | "@yourbusiness"       | Twitter site handle    |
| `twitterCreator`     | string | "@yourbusiness"       | Twitter creator handle |

### Advanced Props

| Prop                 | Type         | Default                                                                        | Description                            |
| -------------------- | ------------ | ------------------------------------------------------------------------------ | -------------------------------------- |
| `robots`             | string       | "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" | Robots meta content                    |
| `noindex`            | boolean      | false                                                                          | Set to true to prevent indexing        |
| `nofollow`           | boolean      | false                                                                          | Set to true to prevent following links |
| `structuredData`     | object/array | null                                                                           | JSON-LD structured data                |
| `additionalMetaTags` | array        | []                                                                             | Additional meta tags                   |
| `additionalLinkTags` | array        | []                                                                             | Additional link tags                   |
| `children`           | ReactNode    | null                                                                           | Custom head content                    |

## Structured Data Schemas

The component includes predefined structured data schemas for common use cases:

### Organization Schema

```jsx
import { structuredDataSchemas } from "@/components/SEO";

<SEO
  structuredData={structuredDataSchemas.organization}
  // ... other props
/>;
```

### WebPage Schema

```jsx
<SEO
  structuredData={structuredDataSchemas.webpage(
    "Page Title",
    "Page description",
    "https://your-domain.com/page",
    "2024-01-01",
    "2024-01-01"
  )}
  // ... other props
/>
```

### Service Schema

```jsx
<SEO
  structuredData={structuredDataSchemas.service(
    "Service Name",
    "Service description",
    "Provider Name",
    "Worldwide"
  )}
  // ... other props
/>
```

### Contact Page Schema

```jsx
<SEO
  structuredData={structuredDataSchemas.contactPage}
  // ... other props
/>
```

### FAQ Schema

```jsx
<SEO
  structuredData={structuredDataSchemas.faq([
    {
      question: "What is your question?",
      answer: "This is the answer.",
    },
  ])}
  // ... other props
/>
```

### Breadcrumb Schema

```jsx
<SEO
  structuredData={structuredDataSchemas.breadcrumbList([
    { name: "Home", url: "https://your-domain.com" },
    { name: "Services", url: "https://your-domain.com/services" },
    {
      name: "Web Development",
      url: "https://your-domain.com/services/web-development",
    },
  ])}
  // ... other props
/>
```

## Complete Example

```jsx
import SEO from "@/components/SEO";
import { structuredDataSchemas } from "@/components/SEO";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services - Business Website | Web Development & Digital Marketing"
        description="Comprehensive digital solutions including web development, digital marketing, and business consulting. Expert solutions tailored to your business needs."
        keywords="web development, digital marketing, business consulting, SEO, social media"
        canonical="https://your-domain.com/services"
        url="https://your-domain.com/services"
        ogType="website"
        ogTitle="Our Services - Business Website | Web Development & Digital Marketing"
        ogDescription="Comprehensive digital solutions including web development, digital marketing, and business consulting."
        ogImage="https://your-domain.com/images/og/services-og-image.jpg"
        ogImageAlt="Business Website Services - Web Development & Digital Marketing"
        twitterTitle="Our Services - Business Website | Web Development & Digital Marketing"
        twitterDescription="Comprehensive digital solutions including web development, digital marketing, and business consulting."
        twitterImage="https://your-domain.com/images/og/services-twitter-image.jpg"
        twitterImageAlt="Business Website Services - Web Development & Digital Marketing"
        structuredData={[
          structuredDataSchemas.organization,
          structuredDataSchemas.webpage(
            "Our Services - Business Website",
            "Comprehensive digital solutions including web development, digital marketing, and business consulting.",
            "https://your-domain.com/services",
            "2024-01-01",
            "2024-01-01"
          ),
          structuredDataSchemas.service(
            "Web Development Services",
            "Custom web applications and e-commerce solutions built with modern technologies.",
            "Business Website"
          ),
        ]}
        additionalMetaTags={[
          {
            name: "article:published_time",
            content: "2024-01-01T00:00:00.000Z",
          },
          {
            name: "article:modified_time",
            content: "2024-01-01T00:00:00.000Z",
          },
        ]}
      />
      {/* Your page content */}
    </>
  );
}
```

## Best Practices

### 1. Unique Titles and Descriptions

- Each page should have a unique, descriptive title (50-60 characters)
- Meta descriptions should be compelling and under 160 characters
- Include primary keywords naturally in titles and descriptions

### 2. Open Graph Images

- Use high-quality images (1200x630px recommended)
- Include descriptive alt text for accessibility
- Ensure images are optimized for web

### 3. Structured Data

- Use appropriate schema types for your content
- Include all required fields for each schema
- Test structured data with Google's Rich Results Test

### 4. Canonical URLs

- Always include canonical URLs to prevent duplicate content issues
- Use absolute URLs for canonical links

### 5. Robots Meta

- Use `noindex` for pages that shouldn't be indexed (404, admin pages)
- Use `nofollow` for user-generated content or paid links

### 6. Performance

- Keep meta descriptions concise and relevant
- Avoid keyword stuffing
- Use semantic HTML alongside meta tags

## Image Guidelines

### Open Graph Images

- **Size**: 1200x630 pixels (1.91:1 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 1MB
- **Content**: Include your logo, brand colors, and clear messaging

### Twitter Images

- **Size**: 1200x600 pixels (2:1 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 1MB
- **Content**: Similar to OG images but optimized for Twitter

## Testing

### Google Rich Results Test

Test your structured data: https://search.google.com/test/rich-results

### Facebook Sharing Debugger

Test Open Graph tags: https://developers.facebook.com/tools/debug/

### Twitter Card Validator

Test Twitter Cards: https://cards-dev.twitter.com/validator

### Google Search Console

Monitor your site's search performance and indexing status.

## Common Issues

### 1. Duplicate Meta Tags

- Ensure each page has unique titles and descriptions
- Use canonical URLs to prevent duplicate content

### 2. Missing Images

- Always provide fallback images for social sharing
- Use absolute URLs for image paths

### 3. Invalid Structured Data

- Validate JSON-LD with Google's Rich Results Test
- Ensure all required fields are present

### 4. Slow Loading

- Optimize images for web
- Use appropriate image formats and sizes
- Implement lazy loading where appropriate

## Migration from Manual Meta Tags

If you're migrating from manual meta tags, replace:

```jsx
// Old way
<Head>
  <title>Page Title</title>
  <meta name="description" content="Description" />
  <meta property="og:title" content="OG Title" />
  {/* ... more meta tags */}
</Head>

// New way
<SEO
  title="Page Title"
  description="Description"
  ogTitle="OG Title"
  // ... other props
/>
```

This approach provides better maintainability, consistency, and SEO optimization across your application.
