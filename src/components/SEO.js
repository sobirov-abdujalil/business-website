import Head from 'next/head';

export default function SEO({
  // Basic SEO
  title = "Business Website - Modern Solutions for Your Business",
  description = "Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses with cutting-edge technology and proven strategies.",
  keywords = "business, website, next.js, tailwind css, web development, modern design, responsive, dark mode",
  author = "Business Website",
  
  // URL and canonical
  canonical = "https://your-domain.com",
  url = "https://your-domain.com",
  
  // Open Graph
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage = "https://your-domain.com/images/og/og-image.jpg",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  ogImageAlt,
  ogSiteName = "Business Website",
  ogLocale = "en_US",
  
  // Twitter
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = "https://your-domain.com/images/og/twitter-image.jpg",
  twitterImageAlt,
  twitterSite = "@yourbusiness",
  twitterCreator = "@yourbusiness",
  
  // Additional meta
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  noindex = false,
  nofollow = false,
  
  // Structured Data
  structuredData,
  
  // Additional meta tags
  additionalMetaTags = [],
  additionalLinkTags = [],
  
  // Children for custom head content
  children
}) {
  // Handle robots meta tag
  const robotsContent = noindex || nofollow 
    ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
    : robots;

  // Use provided values or fall back to defaults
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgImageAlt = ogImageAlt || title;
  const finalTwitterTitle = twitterTitle || title;
  const finalTwitterDescription = twitterDescription || description;
  const finalTwitterImageAlt = twitterImageAlt || title;

  return (
    <Head>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={finalOgImageAlt} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTwitterTitle} />
      <meta property="twitter:description" content={finalTwitterDescription} />
      <meta property="twitter:image" content={twitterImage} />
      <meta property="twitter:image:alt" content={finalTwitterImageAlt} />
      <meta property="twitter:site" content={twitterSite} />
      <meta property="twitter:creator" content={twitterCreator} />
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      
      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Additional Link Tags */}
      {additionalLinkTags.map((tag, index) => (
        <link key={index} {...tag} />
      ))}
      
      {/* Custom Head Content */}
      {children}
    </Head>
  );
}

// Predefined structured data schemas
export const structuredDataSchemas = {
  // Organization schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Business Website",
    url: "https://your-domain.com",
    logo: "https://your-domain.com/images/logo/logo.png",
    description: "Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@your-domain.com",
      telephone: "+1-555-123-4567"
    },
    sameAs: [
      "https://twitter.com/yourbusiness",
      "https://linkedin.com/company/yourbusiness",
      "https://facebook.com/yourbusiness"
    ]
  },
  
  // WebSite schema
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Business Website",
    url: "https://your-domain.com",
    description: "Professional business website built with Next.js and Tailwind CSS.",
    publisher: {
      "@type": "Organization",
      name: "Business Website"
    }
  },
  
  // WebPage schema
  webpage: (title, description, url, datePublished, dateModified) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    publisher: {
      "@type": "Organization",
      name: "Business Website"
    }
  }),
  
  // Service schema
  service: (name, description, provider, areaServed) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider || "Business Website"
    },
    areaServed: areaServed || "Worldwide"
  }),
  
  // ContactPage schema
  contactPage: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description: "Get in touch with our team for business inquiries and support.",
    url: "https://your-domain.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Business Website",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@your-domain.com",
        telephone: "+1-555-123-4567"
      }
    }
  },
  
  // FAQ schema
  faq: (questions) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  }),
  
  // BreadcrumbList schema
  breadcrumbList: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  })
};
