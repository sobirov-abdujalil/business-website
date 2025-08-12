import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroContent = {
    title: "Transform Your Business",
    subtitle: "Innovative solutions for the digital age",
    description:
      "We help businesses grow and succeed with cutting-edge technology, strategic insights, and proven methodologies. Start your journey to success today.",
    primaryCTA: {
      text: "Get Started",
      href: "/contact",
      variant: "primary",
    },
    secondaryCTA: {
      text: "Learn More",
      href: "/about",
      variant: "secondary",
    },
    stats: [
      { number: "500+", label: "Happy Clients" },
      { number: "50+", label: "Team Members" },
      { number: "99%", label: "Success Rate" },
    ],
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero/hero-banner.svg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in"
            role="status"
            aria-label="Trust indicator"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            <span className="text-sm font-medium">
              Trusted by 500+ businesses worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            id="hero-title"
            className="text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200"
          >
            {heroContent.title.split(" ").map((word, index) => (
              <span key={index} className="inline-block">
                {word}
                {index < heroContent.title.split(" ").length - 1 && " "}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-responsive-xl md:text-responsive-2xl font-medium text-gray-200 mb-4 animate-fade-in animation-delay-400"
            id="hero-subtitle"
          >
            {heroContent.subtitle}
          </p>

          {/* Description */}
          <p 
            id="hero-description"
            className="text-responsive-lg md:text-responsive-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in animation-delay-600"
          >
            {heroContent.description}
          </p>

          {/* Call-to-Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-800"
            role="group"
            aria-label="Call to action buttons"
          >
            <Link
              href={heroContent.primaryCTA.href}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-responsive-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-500/50 focus:ring-offset-2"
              aria-describedby="hero-description"
            >
              <span className="relative z-10">
                {heroContent.primaryCTA.text}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href={heroContent.secondaryCTA.href}
              className="group inline-flex items-center justify-center px-8 py-4 text-responsive-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-offset-2"
              aria-describedby="hero-description"
            >
              <span>{heroContent.secondaryCTA.text}</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Stats Section */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in animation-delay-1000"
            role="group"
            aria-label="Company statistics"
          >
            {heroContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-responsive-2xl md:text-responsive-3xl font-bold text-white mb-2"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  {stat.number}
                </div>
                <div className="text-responsive-sm md:text-responsive-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore more content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            // Scroll to next section
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating Circle 1 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>

        {/* Floating Circle 2 */}
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>

        {/* Floating Circle 3 */}
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
}
