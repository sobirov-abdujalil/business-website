import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Business Website - Modern Solutions for Your Business"
        />
        <meta
          name="description"
          content="Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses with cutting-edge technology and proven strategies."
        />
        <meta
          name="keywords"
          content="business, website, next.js, tailwind css, web development, modern design, responsive, dark mode, digital solutions, business consulting, web applications, digital marketing"
        />
        <meta name="author" content="Business Website" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, email=no, address=no"
        />
        <meta
          name="theme-color"
          content="#3b82f6"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1e40af"
          media="(prefers-color-scheme: dark)"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta
          property="og:title"
          content="Business Website - Modern Solutions for Your Business"
        />
        <meta
          property="og:description"
          content="Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses with cutting-edge technology and proven strategies."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/og/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Business Website - Modern Solutions for Your Business"
        />
        <meta property="og:site_name" content="Business Website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="fr_FR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com/" />
        <meta
          property="twitter:title"
          content="Business Website - Modern Solutions for Your Business"
        />
        <meta
          property="twitter:description"
          content="Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses with cutting-edge technology and proven strategies."
        />
        <meta
          property="twitter:image"
          content="https://your-domain.com/images/og/twitter-image.jpg"
        />
        <meta
          property="twitter:image:alt"
          content="Business Website - Modern Solutions for Your Business"
        />
        <meta property="twitter:site" content="@yourbusiness" />
        <meta property="twitter:creator" content="@yourbusiness" />

        {/* Additional SEO Meta Tags */}
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="application-name" content="Business Website" />
        <meta name="apple-mobile-web-app-title" content="Business Website" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://your-domain.com/" />

        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/images/hero/hero-banner.jpg" as="image" />

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Business Website",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/logo.png",
              description:
                "Professional business website built with Next.js and Tailwind CSS. We provide innovative solutions for modern businesses.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@your-domain.com",
              },
              sameAs: [
                "https://twitter.com/yourbusiness",
                "https://linkedin.com/company/yourbusiness",
                "https://facebook.com/yourbusiness",
              ],
            }),
          }}
        />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Performance Optimizations */}
        <meta name="format-detection" content="telephone=no" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        {/* No-JS Fallback */}
        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <h1>JavaScript Required</h1>
              <p>
                This website requires JavaScript to function properly. Please
                enable JavaScript in your browser settings.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </Html>
  );
}
