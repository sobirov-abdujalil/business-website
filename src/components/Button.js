import { forwardRef } from 'react'
import Link from 'next/link'

const Button = forwardRef(({
  // Content
  children,
  icon = null,
  iconPosition = "left", // left, right
  loading = false,
  loadingText = "Loading...",
  
  // Variants
  variant = "primary", // primary, secondary, outline, ghost, danger, success, warning
  size = "default", // small, default, large, xlarge
  
  // States
  disabled = false,
  fullWidth = false,
  
  // Link props
  href = null,
  external = false,
  
  // Form props
  type = "button", // button, submit, reset
  
  // Styling
  className = "",
  iconClassName = "",
  
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
  ariaPressed = null,
  ariaControls = null,
  ariaHaspopup = null,
  ariaLive = null,
  ariaAtomic = null,
  ariaRelevant = null,
  
  // Other props
  ...props
}, ref) => {
  // Size variants
  const sizeVariants = {
    small: {
      button: "px-3 py-1.5 text-sm",
      icon: "w-4 h-4",
      iconSpacing: "mr-1.5",
      iconSpacingRight: "ml-1.5"
    },
    default: {
      button: "px-4 py-2 text-base",
      icon: "w-5 h-5",
      iconSpacing: "mr-2",
      iconSpacingRight: "ml-2"
    },
    large: {
      button: "px-6 py-3 text-lg",
      icon: "w-6 h-6",
      iconSpacing: "mr-2.5",
      iconSpacingRight: "ml-2.5"
    },
    xlarge: {
      button: "px-8 py-4 text-xl",
      icon: "w-7 h-7",
      iconSpacing: "mr-3",
      iconSpacingRight: "ml-3"
    }
  }

  // Variant styles
  const variantStyles = {
    primary: {
      base: "bg-primary-600 text-white border border-primary-600",
      hover: "hover:bg-primary-700 hover:border-primary-700",
      focus: "focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
      disabled: "bg-primary-300 border-primary-300 cursor-not-allowed",
      loading: "bg-primary-500 border-primary-500"
    },
    secondary: {
      base: "bg-secondary-600 text-white border border-secondary-600",
      hover: "hover:bg-secondary-700 hover:border-secondary-700",
      focus: "focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2",
      disabled: "bg-secondary-300 border-secondary-300 cursor-not-allowed",
      loading: "bg-secondary-500 border-secondary-500"
    },
    outline: {
      base: "bg-transparent text-primary-600 border border-primary-600",
      hover: "hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 dark:hover:bg-primary-900/20",
      focus: "focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
      disabled: "text-primary-300 border-primary-300 cursor-not-allowed",
      loading: "text-primary-500 border-primary-500"
    },
    ghost: {
      base: "bg-transparent text-gray-700 dark:text-gray-300 border border-transparent",
      hover: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
      focus: "focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
      disabled: "text-gray-400 dark:text-gray-600 cursor-not-allowed",
      loading: "text-gray-500 dark:text-gray-500"
    },
    danger: {
      base: "bg-red-600 text-white border border-red-600",
      hover: "hover:bg-red-700 hover:border-red-700",
      focus: "focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
      disabled: "bg-red-300 border-red-300 cursor-not-allowed",
      loading: "bg-red-500 border-red-500"
    },
    success: {
      base: "bg-green-600 text-white border border-green-600",
      hover: "hover:bg-green-700 hover:border-green-700",
      focus: "focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
      disabled: "bg-green-300 border-green-300 cursor-not-allowed",
      loading: "bg-green-500 border-green-500"
    },
    warning: {
      base: "bg-yellow-600 text-white border border-yellow-600",
      hover: "hover:bg-yellow-700 hover:border-yellow-700",
      focus: "focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2",
      disabled: "bg-yellow-300 border-yellow-300 cursor-not-allowed",
      loading: "bg-yellow-500 border-yellow-500"
    }
  }

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className={`animate-spin ${sizeVariants[size].icon} ${iconClassName}`} 
      fill="none" 
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      aria-label="Loading"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  // Button content
  const buttonContent = (
    <>
      {/* Left Icon */}
      {icon && iconPosition === "left" && !loading && (
        <span className={`inline-flex items-center ${sizeVariants[size].iconSpacing}`} aria-hidden="true">
          {icon}
        </span>
      )}
      
      {/* Loading Spinner */}
      {loading && (
        <span className={`inline-flex items-center ${sizeVariants[size].iconSpacing}`} aria-hidden="true">
          <LoadingSpinner />
        </span>
      )}
      
      {/* Button Text */}
      <span className="inline-flex items-center">
        {loading ? loadingText : children}
      </span>
      
      {/* Right Icon */}
      {icon && iconPosition === "right" && !loading && (
        <span className={`inline-flex items-center ${sizeVariants[size].iconSpacingRight}`} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  )

  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeVariants[size].button}
    ${fullWidth ? 'w-full' : ''}
    ${variantStyles[variant].base}
    ${disabled 
      ? variantStyles[variant].disabled 
      : loading 
        ? variantStyles[variant].loading 
        : variantStyles[variant].hover
    }
    ${!disabled && !loading ? variantStyles[variant].focus : ''}
    ${className}
  `

  // Enhanced ARIA attributes
  const ariaAttributes = {
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(ariaDescribedBy && { 'aria-describedby': ariaDescribedBy }),
    ...(ariaExpanded !== null && { 'aria-expanded': ariaExpanded }),
    ...(ariaPressed !== null && { 'aria-pressed': ariaPressed }),
    ...(ariaControls && { 'aria-controls': ariaControls }),
    ...(ariaHaspopup && { 'aria-haspopup': ariaHaspopup }),
    ...(ariaLive && { 'aria-live': ariaLive }),
    ...(ariaAtomic && { 'aria-atomic': ariaAtomic }),
    ...(ariaRelevant && { 'aria-relevant': ariaRelevant }),
    ...(loading && { 'aria-busy': true }),
    ...(disabled && { 'aria-disabled': true }),
    ...(loading && { 'aria-describedby': 'button-loading-status' })
  }

  // Enhanced event handlers
  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  const handleKeyDown = (e) => {
    // Handle keyboard interactions
    if (e.key === 'Enter' || e.key === ' ') {
      if (disabled || loading) {
        e.preventDefault()
        return
      }
    }
    onKeyDown?.(e)
  }

  // Loading status for screen readers
  const loadingStatus = loading && (
    <span id="button-loading-status" className="sr-only" aria-live="polite">
      {loadingText}
    </span>
  )

  // External link
  if (href && external) {
    return (
      <>
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          {...ariaAttributes}
          {...props}
        >
          {buttonContent}
        </a>
        {loadingStatus}
      </>
    )
  }

  // Internal link
  if (href && !external) {
    return (
      <>
        <Link
          ref={ref}
          href={href}
          className={baseClasses}
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          {...ariaAttributes}
          {...props}
        >
          {buttonContent}
        </Link>
        {loadingStatus}
      </>
    )
  }

  // Regular button
  return (
    <>
      <button
        ref={ref}
        type={type}
        className={baseClasses}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled || loading}
        {...ariaAttributes}
        {...props}
      >
        {buttonContent}
      </button>
      {loadingStatus}
    </>
  )
})

Button.displayName = 'Button'

export default Button
