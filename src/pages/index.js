import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import Button from "@/components/Button";
import SEO from "@/components/SEO";
import { structuredDataSchemas } from "@/components/SEO";
import {
  usePageViewTracking,
  useScrollTracking,
  useTimeOnPageTracking,
} from "@/hooks/useAnalytics";

export default function Home() {
  // Service data
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies. We create scalable, secure, and user-friendly solutions that drive business growth.",
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
      href: "/services",
      showBadge: true,
      badgeText: "Popular",
      showFeatures: true,
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Design",
        "API Integration",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive qualified leads to your business.",
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      href: "/services",
      showFeatures: true,
      features: [
        "SEO Optimization",
        "Social Media",
        "Content Marketing",
        "PPC Campaigns",
      ],
    },
    {
      title: "Consulting Services",
      description:
        "Expert business consulting to help you optimize processes, improve efficiency, and achieve your strategic goals.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      href: "/services",
      showFeatures: true,
      features: [
        "Strategy Planning",
        "Process Optimization",
        "Technology Assessment",
        "Team Training",
      ],
    },
  ];

  // Team data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy. Passionate about helping companies achieve digital transformation.",
      photo: "/images/team/member1.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "mailto:sarah@company.com",
      },
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Technology expert specializing in scalable architecture and emerging technologies. Leads our development team with innovation and precision.",
      photo: "/images/team/member2.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/michael-chen",
        github: "https://github.com/michaelchen",
        email: "mailto:michael@company.com",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      bio: "Creative marketing strategist with expertise in digital campaigns and brand development. Drives growth through innovative marketing solutions.",
      photo: "/images/team/member3.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/emily-rodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        instagram: "https://instagram.com/emilyrodriguez",
      },
    },
    {
      name: "David Thompson",
      position: "Lead Developer",
      bio: "Full-stack developer with deep expertise in modern web technologies. Creates robust, scalable solutions that exceed client expectations.",
      photo: "/images/team/member4.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/david-thompson",
        github: "https://github.com/davidthompson",
        website: "https://davidthompson.dev",
      },
    },
  ];

  return (
    <>
      <SEO
        title="Home - Business Website | Modern Solutions for Your Business"
        description="Discover innovative business solutions with our expert team. We specialize in web development, digital marketing, and business consulting to help your company grow and succeed."
        keywords="business solutions, web development, digital marketing, business consulting, modern technology, responsive design, SEO optimization"
        canonical="https://your-domain.com"
        url="https://your-domain.com"
        ogType="website"
        ogTitle="Home - Business Website | Modern Solutions for Your Business"
        ogDescription="Discover innovative business solutions with our expert team. We specialize in web development, digital marketing, and business consulting to help your company grow and succeed."
        ogImage="https://your-domain.com/images/og/home-og-image.jpg"
        ogImageAlt="Business Website Homepage - Modern Solutions for Your Business"
        twitterTitle="Home - Business Website | Modern Solutions for Your Business"
        twitterDescription="Discover innovative business solutions with our expert team. We specialize in web development, digital marketing, and business consulting."
        twitterImage="https://your-domain.com/images/og/home-twitter-image.jpg"
        twitterImageAlt="Business Website Homepage - Modern Solutions for Your Business"
        structuredData={[
          structuredDataSchemas.organization,
          structuredDataSchemas.website,
          structuredDataSchemas.webpage(
            "Home - Business Website",
            "Discover innovative business solutions with our expert team. We specialize in web development, digital marketing, and business consulting to help your company grow and succeed.",
            "https://your-domain.com",
            "2024-01-01",
            "2024-01-01"
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
      <Layout title="Home - Business Website">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="card hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning-fast loading times and optimized performance for the
                  best user experience.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-grade security and reliability to protect your
                  business data.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
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
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful, responsive design that works perfectly on all
                  devices and screen sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to help your business grow and succeed
                in the digital world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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

            <div className="text-center mt-12">
              <Button
                href="/services"
                variant="outline"
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering exceptional
                results for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  photo={member.photo}
                  socialLinks={member.socialLinks}
                  variant="elevated"
                  hoverEffect="lift"
                  animationDelay={index * 100}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                href="/about"
                variant="outline"
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our
                satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      JD
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      John Davis
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      CEO, TechStart Inc.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "The team delivered an exceptional website that exceeded our
                  expectations. Their attention to detail and professional
                  approach made the entire process smooth and enjoyable."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      SM
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Sarah Miller
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Marketing Director, GrowthCo
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Their digital marketing strategies helped us increase our
                  online presence by 300%. The results speak for themselves -
                  highly recommended!"
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      RW
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Robert Wilson
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Founder, InnovateLab
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "The consulting services provided valuable insights that
                  transformed our business processes. Their expertise and
                  dedication are unmatched."
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
              Join thousands of satisfied customers who trust us with their
              business needs.
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
                Contact Us Today
              </Button>
              <Button
                href="/services"
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                }
                iconPosition="right"
              >
                View Services
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
