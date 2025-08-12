import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Support", href: "/support" },
      { name: "FAQ", href: "/faq" },
      { name: "Status", href: "/status" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/yourbusiness",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourbusiness",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/yourbusiness",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourbusiness",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z" />
        </svg>
      ),
    },
  ];

  const contactInfo = {
    address: "123 Business Street, Suite 100, City, State 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@yourbusiness.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  };

  return (
    <footer
      className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white" id="footer-heading">
                Business
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional business solutions built with cutting-edge technology.
              We help businesses grow and succeed in the digital age with
              innovative strategies and proven results.
            </p>

            {/* Contact Information */}
            <address className="space-y-3 mb-6 not-italic">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={`Call us at ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={`Email us at ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {contactInfo.hours}
                </span>
              </div>
            </address>

            {/* Social Media Links */}
            <div 
              className="flex space-x-4"
              role="group"
              aria-label="Social media links"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.name} page (opens in new tab)`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <nav aria-labelledby="company-links-heading">
            <h3 
              id="company-links-heading"
              className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
            >
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support & Legal Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <nav aria-labelledby="support-links-heading">
                <h3 
                  id="support-links-heading"
                  className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
                >
                  Support
                </h3>
                <ul className="space-y-3" role="list">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-labelledby="legal-links-heading">
                <h3 
                  id="legal-links-heading"
                  className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4"
                >
                  Legal
                </h3>
                <ul className="space-y-3" role="list">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Business Website. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with Next.js and Tailwind CSS</span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="hidden sm:inline">Made with <span aria-label="love">❤️</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
