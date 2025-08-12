import { useState } from "react";
import Link from "next/link";

export default function ServiceCard({
  // Basic content props
  title = "Service Title",
  description = "Service description goes here. This should be a brief overview of what this service offers.",
  icon = null,
  iconBg = "primary",
  iconColor = "white",

  // Link props
  href = null,
  linkText = "Learn More",
  external = false,

  // Visual props
  variant = "default", // default, elevated, minimal, gradient
  size = "default", // small, default, large
  hoverEffect = "lift", // lift, glow, scale, none

  // Content props
  showBadge = false,
  badgeText = "Popular",
  badgeColor = "primary",

  showStats = false,
  stats = [],

  showFeatures = false,
  features = [],

  // Animation props
  animationDelay = 0,
  animateOnScroll = true,

  // Custom styling
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",

  // Event handlers
  onClick = null,
  onMouseEnter = null,
  onMouseLeave = null,
  onFocus = null,
  onBlur = null,
  onKeyDown = null,

  // Accessibility
  ariaLabel = null,
  ariaDescribedBy = null,
  ariaExpanded = null,
  ariaControls = null,

  // Children for custom content
  children = null,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Handle component mount animation
  useState(() => {
    if (animateOnScroll) {
      const timer = setTimeout(() => setIsLoaded(true), animationDelay);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [animateOnScroll, animationDelay]);

  // Icon background color variants
  const iconBgVariants = {
    primary: "bg-primary-100 dark:bg-primary-900",
    secondary: "bg-secondary-100 dark:bg-secondary-900",
    success: "bg-green-100 dark:bg-green-900",
    warning: "bg-yellow-100 dark:bg-yellow-900",
    danger: "bg-red-100 dark:bg-red-900",
    info: "bg-blue-100 dark:bg-blue-900",
    gray: "bg-gray-100 dark:bg-gray-800",
    white: "bg-white dark:bg-gray-800",
    gradient: "bg-gradient-to-br from-primary-500 to-secondary-500",
  };

  // Icon color variants
  const iconColorVariants = {
    primary: "text-primary-600 dark:text-primary-400",
    secondary: "text-secondary-600 dark:text-secondary-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    danger: "text-red-600 dark:text-red-400",
    info: "text-blue-600 dark:text-blue-400",
    gray: "text-gray-600 dark:text-gray-400",
    white: "text-white",
    black: "text-gray-900 dark:text-white",
  };

  // Badge color variants
  const badgeColorVariants = {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-gray-900",
    danger: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    gray: "bg-gray-500 text-white",
  };

  // Card size variants
  const sizeVariants = {
    small: {
      card: "p-4",
      icon: "w-8 h-8",
      title: "text-lg",
      description: "text-sm",
      badge: "text-xs px-2 py-1",
    },
    default: {
      card: "p-6",
      icon: "w-12 h-12",
      title: "text-xl",
      description: "text-base",
      badge: "text-sm px-3 py-1",
    },
    large: {
      card: "p-8",
      icon: "w-16 h-16",
      title: "text-2xl",
      description: "text-lg",
      badge: "text-base px-4 py-2",
    },
  };

  // Card variant styles
  const variantStyles = {
    default:
      "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    elevated: "bg-white dark:bg-gray-800 shadow-lg border-0",
    minimal:
      "bg-transparent border-2 border-dashed border-gray-300 dark:border-gray-600",
    gradient:
      "bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 border-0",
  };

  // Hover effect styles
  const hoverEffects = {
    lift: "hover:-translate-y-2 hover:shadow-xl",
    glow: "hover:shadow-2xl hover:shadow-primary-500/25",
    scale: "hover:scale-105",
    none: "",
  };

  // Animation classes
  const animationClasses = animateOnScroll
    ? `transition-all duration-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`
    : "";

  // Default icon if none provided
  const defaultIcon = (
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  // Enhanced event handlers
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && (onClick || href)) {
      e.preventDefault();
      onClick?.();
    }
    onKeyDown?.(e);
  };

  // Enhanced ARIA attributes
  const ariaAttributes = {
    ...(ariaLabel && { "aria-label": ariaLabel }),
    ...(ariaDescribedBy && { "aria-describedby": ariaDescribedBy }),
    ...(ariaExpanded !== null && { "aria-expanded": ariaExpanded }),
    ...(ariaControls && { "aria-controls": ariaControls }),
    ...(onClick || href
      ? {
          "aria-describedby": `${title
            .toLowerCase()
            .replace(/\s+/g, "-")}-description`,
        }
      : {}),
  };

  // Card content
  const cardContent = (
    <>
      {/* Badge */}
      {showBadge && (
        <div
          className={`absolute top-4 right-4 ${badgeColorVariants[badgeColor]} ${sizeVariants[size].badge} rounded-full font-medium z-10`}
          aria-label={`${badgeText} service`}
        >
          {badgeText}
        </div>
      )}

      {/* Icon */}
      <div
        className={`${iconBgVariants[iconBg]} ${sizeVariants[size].icon} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${iconClassName}`}
        aria-hidden="true"
      >
        <div className={iconColorVariants[iconColor]}>
          {icon || defaultIcon}
        </div>
      </div>

      {/* Title */}
      <h3
        className={`${sizeVariants[size].title} font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 ${titleClassName}`}
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`${sizeVariants[size].description} text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${descriptionClassName}`}
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-description`}
      >
        {description}
      </p>

      {/* Features List */}
      {showFeatures && features.length > 0 && (
        <ul
          className="space-y-2 mb-4"
          role="list"
          aria-label={`Features of ${title}`}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-gray-600 dark:text-gray-400"
            >
              <svg
                className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Stats */}
      {showStats && stats.length > 0 && (
        <div
          className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          role="group"
          aria-label={`Statistics for ${title}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Children */}
      {children}

      {/* Link/Button */}
      {href && (
        <div className="mt-auto pt-4">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label={`${linkText} about ${title} (opens in new tab)`}
            >
              {linkText}
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <Link
              href={href}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label={`${linkText} about ${title}`}
            >
              {linkText}
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
          )}
        </div>
      )}
    </>
  );

  // Card wrapper
  const cardWrapper = (
    <div
      className={`
        relative rounded-xl transition-all duration-300 cursor-pointer
        ${variantStyles[variant]}
        ${hoverEffects[hoverEffect]}
        ${sizeVariants[size].card}
        ${animationClasses}
        ${className}
        ${isHovered ? "ring-2 ring-primary-500/20" : ""}
        ${isFocused ? "ring-2 ring-primary-500" : ""}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick || href ? "button" : "article"}
      tabIndex={onClick || href ? 0 : undefined}
      {...ariaAttributes}
    >
      {cardContent}
    </div>
  );

  // Return wrapped in Link if href provided
  if (href && !external) {
    return (
      <Link
        href={href}
        className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
      >
        {cardWrapper}
      </Link>
    );
  }

  return cardWrapper;
}

// PropTypes for better development experience (optional)
ServiceCard.propTypes = {
  // You can add PropTypes here if using TypeScript or PropTypes library
};
