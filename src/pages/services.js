import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import SEO from "@/components/SEO";
import { structuredDataSchemas } from "@/components/SEO";

export default function Services() {
  // Web Development Services
  const webDevelopmentServices = [
    {
      title: "Custom Web Applications",
      description:
        "Tailored web applications built with modern technologies like React, Next.js, and Node.js. We create scalable, secure, and user-friendly solutions that drive business growth.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      href: "/contact",
      showBadge: true,
      badgeText: "Popular",
      showFeatures: true,
      features: [
        "React & Next.js Development",
        "Node.js Backend Services",
        "Database Design & Optimization",
        "API Development & Integration",
        "Performance Optimization",
        "Security Implementation",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms that help businesses sell online. From simple stores to complex marketplaces with advanced features and integrations.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Accounts",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Progressive Web Apps",
      description:
        "Modern PWA solutions that combine the best of web and mobile apps. Fast, reliable, and engaging experiences that work offline and feel native.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience",
        "Fast Loading Times",
        "Cross-platform Compatibility",
        "Easy Installation",
      ],
    },
  ];

  // Digital Marketing Services
  const digitalMarketingServices = [
    {
      title: "Search Engine Optimization",
      description:
        "Comprehensive SEO strategies to improve your website's visibility in search engines. Drive organic traffic and increase your online presence.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      href: "/contact",
      showBadge: true,
      badgeText: "High ROI",
      showFeatures: true,
      features: [
        "Keyword Research & Strategy",
        "On-page SEO Optimization",
        "Technical SEO Audits",
        "Content Optimization",
        "Link Building",
        "Performance Monitoring",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions across all major platforms.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Platform Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Advertising",
        "Influencer Partnerships",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Engaging content strategies that attract, inform, and convert your target audience. From blog posts to video content and everything in between.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Production",
        "Infographics",
        "Email Marketing",
        "Content Distribution",
      ],
    },
  ];

  // Consulting Services
  const consultingServices = [
    {
      title: "Digital Strategy Consulting",
      description:
        "Expert guidance to help you develop and implement effective digital strategies that align with your business goals and drive growth.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      href: "/contact",
      showBadge: true,
      badgeText: "Strategic",
      showFeatures: true,
      features: [
        "Digital Transformation",
        "Technology Assessment",
        "Process Optimization",
        "Competitive Analysis",
        "ROI Optimization",
        "Implementation Planning",
      ],
    },
    {
      title: "Technology Consulting",
      description:
        "Comprehensive technology consulting to help you choose the right tools, platforms, and solutions for your business needs.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Technology Stack Selection",
        "Architecture Design",
        "Security Assessment",
        "Scalability Planning",
        "Integration Strategy",
        "Performance Optimization",
      ],
    },
    {
      title: "Business Process Optimization",
      description:
        "Streamline your business operations with data-driven process optimization that improves efficiency, reduces costs, and enhances productivity.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "Process Analysis",
        "Workflow Automation",
        "Efficiency Metrics",
        "Cost Reduction",
        "Quality Improvement",
        "Change Management",
      ],
    },
  ];

  // Support & Maintenance Services
  const supportServices = [
    {
      title: "Website Maintenance",
      description:
        "Ongoing website maintenance and support to keep your site secure, updated, and performing at its best. Regular backups, updates, and monitoring.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      href: "/contact",
      showBadge: true,
      badgeText: "Reliable",
      showFeatures: true,
      features: [
        "Security Updates",
        "Performance Monitoring",
        "Regular Backups",
        "Content Updates",
        "Bug Fixes",
        "24/7 Support",
      ],
    },
    {
      title: "Technical Support",
      description:
        "Comprehensive technical support for all your digital solutions. Fast response times and expert assistance when you need it most.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
          />
        </svg>
      ),
      href: "/contact",
      showFeatures: true,
      features: [
        "24/7 Help Desk",
        "Remote Support",
        "Issue Resolution",
        "Training & Documentation",
        "System Monitoring",
        "Emergency Response",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Our Services - Business Website | Web Development, Digital Marketing & Consulting"
        description="Comprehensive digital solutions including web development, digital marketing, business consulting, and support services. Expert solutions tailored to your business needs."
        keywords="web development, digital marketing, business consulting, e-commerce, progressive web apps, SEO, social media marketing, content marketing, technology consulting"
        canonical="https://your-domain.com/services"
        url="https://your-domain.com/services"
        ogType="website"
        ogTitle="Our Services - Business Website | Web Development, Digital Marketing & Consulting"
        ogDescription="Comprehensive digital solutions including web development, digital marketing, business consulting, and support services. Expert solutions tailored to your business needs."
        ogImage="https://your-domain.com/images/og/services-og-image.jpg"
        ogImageAlt="Business Website Services - Web Development, Digital Marketing & Consulting"
        twitterTitle="Our Services - Business Website | Web Development, Digital Marketing & Consulting"
        twitterDescription="Comprehensive digital solutions including web development, digital marketing, business consulting, and support services."
        twitterImage="https://your-domain.com/images/og/services-twitter-image.jpg"
        twitterImageAlt="Business Website Services - Web Development, Digital Marketing & Consulting"
        structuredData={[
          structuredDataSchemas.organization,
          structuredDataSchemas.webpage(
            "Our Services - Business Website",
            "Comprehensive digital solutions including web development, digital marketing, business consulting, and support services. Expert solutions tailored to your business needs.",
            "https://your-domain.com/services",
            "2024-01-01",
            "2024-01-01"
          ),
          // Service schemas for each service category
          structuredDataSchemas.service(
            "Web Development Services",
            "Custom web applications, e-commerce solutions, and progressive web apps built with modern technologies.",
            "Business Website"
          ),
          structuredDataSchemas.service(
            "Digital Marketing Services",
            "Comprehensive digital marketing strategies including SEO, social media marketing, and content marketing.",
            "Business Website"
          ),
          structuredDataSchemas.service(
            "Business Consulting Services",
            "Expert business consulting for digital strategy, technology assessment, and process optimization.",
            "Business Website"
          ),
          structuredDataSchemas.service(
            "Support & Maintenance Services",
            "Ongoing website maintenance, technical support, and 24/7 assistance for your digital solutions.",
            "Business Website"
          )
        ]}
        additionalMetaTags={[
          { name: "article:published_time", content: "2024-01-01T00:00:00.000Z" },
          { name: "article:modified_time", content: "2024-01-01T00:00:00.000Z" }
        ]}
      />
      <Layout title="Our Services - Business Website">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and
            succeed in the modern world. From web development to digital
            marketing and strategic consulting.
          </p>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Web Development
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern, scalable web applications built with cutting-edge
              technologies to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopmentServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                showBadge={service.showBadge}
                badgeText={service.badgeText}
                showFeatures={service.showFeatures}
                features={service.features}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Digital Marketing
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Strategic digital marketing solutions to boost your online
              presence, attract qualified leads, and drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                showBadge={service.showBadge}
                badgeText={service.badgeText}
                showFeatures={service.showFeatures}
                features={service.features}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Business Consulting
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert consulting services to help you optimize processes,
              implement the right technologies, and achieve your strategic goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                showBadge={service.showBadge}
                badgeText={service.badgeText}
                showFeatures={service.showFeatures}
                features={service.features}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support & Maintenance Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Support & Maintenance
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ongoing support and maintenance services to keep your digital
              solutions running smoothly and securely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                showBadge={service.showBadge}
                badgeText={service.badgeText}
                showFeatures={service.showFeatures}
                features={service.features}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and
              exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Discovery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We start by understanding your business goals, target audience,
                and requirements to create a tailored strategy.
              </p>
            </div>

            {/* Planning */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed project planning, timeline creation, and resource
                allocation to ensure smooth execution.
              </p>
            </div>

            {/* Development */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Agile development process with regular updates, testing, and
                quality assurance at every stage.
              </p>
            </div>

            {/* Launch & Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  4
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Launch & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smooth deployment, training, and ongoing support to ensure your
                success long after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through expertise, innovation, and
              unwavering commitment to client success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experienced professionals with deep expertise in modern
                technologies and industry best practices.
              </p>
            </div>

            {/* Quality */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rigorous testing and quality control processes ensure reliable,
                secure, and high-performance solutions.
              </p>
            </div>

            {/* Support */}
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Round-the-clock support and maintenance to keep your solutions
                running smoothly and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-responsive-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-responsive-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution
            that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="large"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              }
            >
              Get a Free Quote
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              }
              iconPosition="right"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
