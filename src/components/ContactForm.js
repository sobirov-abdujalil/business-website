import { useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function ContactForm({
  // Form configuration
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",

  // Form fields
  fields = {
    name: {
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your email address",
      required: true,
    },
    phone: {
      label: "Phone Number",
      placeholder: "Enter your phone number",
      required: false,
    },
    subject: {
      label: "Subject",
      placeholder: "What is this about?",
      required: true,
    },
    message: {
      label: "Message",
      placeholder: "Tell us more about your inquiry...",
      required: true,
    },
  },

  // Form options
  showPhone = true,
  showSubject = true,
  messageRows = 5,

  // Submit configuration
  submitText = "Send Message",
  submitLoadingText = "Sending...",
  submitSuccessText = "Message Sent!",

  // Styling
  variant = "default", // default, elevated, minimal, gradient
  size = "default", // small, default, large

  // Form handlers
  onSubmit = null,
  onSuccess = null,
  onError = null,

  // Validation
  enableValidation = true,
  customValidation = null,

  // Styling props
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  fieldClassName = "",
  buttonClassName = "",

  // Accessibility
  formId = "contact-form",
  ariaLabel = "Contact form",
  ariaDescribedBy = null,

  // Children for custom content
  children = null,
}) {
  const { trackFormSubmission } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  // Size variants
  const sizeVariants = {
    small: {
      container: "p-4",
      title: "text-lg",
      subtitle: "text-sm",
      field: "p-2 text-sm",
      button: "px-4 py-2 text-sm",
    },
    default: {
      container: "p-6",
      title: "text-xl",
      subtitle: "text-base",
      field: "p-3 text-base",
      button: "px-6 py-3 text-base",
    },
    large: {
      container: "p-8",
      title: "text-2xl",
      subtitle: "text-lg",
      field: "p-4 text-lg",
      button: "px-8 py-4 text-lg",
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

  // Validation functions
  const validateField = (name, value) => {
    const field = fields[name];
    if (!field || !field.required) return "";

    if (!value.trim()) {
      return `${field.label} is required`;
    }

    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "phone":
        if (
          value &&
          !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ""))
        ) {
          return "Please enter a valid phone number";
        }
        break;
      case "message":
        if (value.trim().length < 10) {
          return "Message must be at least 10 characters long";
        }
        break;
    }

    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(fields).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    // Custom validation
    if (customValidation) {
      const customError = customValidation(formData);
      if (customError) {
        newErrors.custom = customError;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFocusedField(null);

    if (enableValidation) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocusedField(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (enableValidation && !validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = document.getElementById(
          `${formId}-${firstErrorField}`
        );
        if (errorElement) {
          errorElement.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Track form submission
      trackFormSubmission("contact_form", {
        hasName: !!formData.name,
        hasEmail: !!formData.email,
        hasPhone: !!formData.phone,
        hasSubject: !!formData.subject,
        hasMessage: !!formData.message,
      });

      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission simulation
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setIsSubmitted(true);
      onSuccess?.(formData);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setErrors({
        submit: error.message || "Failed to send message. Please try again.",
      });
      onError?.(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  // Render field
  const renderField = (fieldName, fieldConfig) => {
    const isTextarea = fieldName === "message";
    const hasError = errors[fieldName] && touched[fieldName];
    const isFocused = focusedField === fieldName;
    const fieldId = `${formId}-${fieldName}`;
    const errorId = `${fieldId}-error`;
    const helpId = `${fieldId}-help`;

    return (
      <div key={fieldName} className={`mb-4 ${fieldClassName}`}>
        <label
          htmlFor={fieldId}
          className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${
            fieldConfig.required ? "required" : ""
          }`}
          id={`${fieldId}-label`}
        >
          {fieldConfig.label}
          {fieldConfig.required && (
            <span className="text-red-500 ml-1" aria-label="required">
              *
            </span>
          )}
        </label>

        {isTextarea ? (
          <textarea
            id={fieldId}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            rows={messageRows}
            placeholder={fieldConfig.placeholder}
            className={`
              w-full rounded-lg border transition-colors duration-200
              ${sizeVariants[size].field}
              ${
                hasError
                  ? "border-red-300 bg-red-50 dark:bg-red-900/20 focus:border-red-500 focus:ring-red-500"
                  : isFocused
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 focus:ring-primary-500"
                    : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary-500 focus:ring-primary-500"
              }
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              placeholder-gray-500 dark:placeholder-gray-400
              text-gray-900 dark:text-white
              resize-vertical
            `}
            aria-describedby={
              hasError ? errorId : fieldConfig.helpText ? helpId : undefined
            }
            aria-invalid={hasError}
            aria-required={fieldConfig.required}
            aria-labelledby={`${fieldId}-label`}
          />
        ) : (
          <input
            id={fieldId}
            name={fieldName}
            type={
              fieldName === "email"
                ? "email"
                : fieldName === "phone"
                  ? "tel"
                  : "text"
            }
            value={formData[fieldName]}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder={fieldConfig.placeholder}
            className={`
              w-full rounded-lg border transition-colors duration-200
              ${sizeVariants[size].field}
              ${
                hasError
                  ? "border-red-300 bg-red-50 dark:bg-red-900/20 focus:border-red-500 focus:ring-red-500"
                  : isFocused
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 focus:ring-primary-500"
                    : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary-500 focus:ring-primary-500"
              }
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              placeholder-gray-500 dark:placeholder-gray-400
              text-gray-900 dark:text-white
            `}
            aria-describedby={
              hasError ? errorId : fieldConfig.helpText ? helpId : undefined
            }
            aria-invalid={hasError}
            aria-required={fieldConfig.required}
            aria-labelledby={`${fieldId}-label`}
            autoComplete={
              fieldName === "email"
                ? "email"
                : fieldName === "phone"
                  ? "tel"
                  : fieldName === "name"
                    ? "name"
                    : undefined
            }
          />
        )}

        {/* Help text */}
        {fieldConfig.helpText && !hasError && (
          <p
            id={helpId}
            className="mt-1 text-sm text-gray-500 dark:text-gray-400"
          >
            {fieldConfig.helpText}
          </p>
        )}

        {/* Error message */}
        {hasError && (
          <p
            id={errorId}
            className="mt-1 text-sm text-red-600 dark:text-red-400"
            role="alert"
            aria-live="polite"
          >
            <svg
              className="inline w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errors[fieldName]}
          </p>
        )}
      </div>
    );
  };

  // Success message
  if (isSubmitted) {
    return (
      <div
        className={`rounded-xl ${variantStyles[variant]} ${sizeVariants[size].container} ${className}`}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
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
          </div>
          <h3
            className={`${sizeVariants[size].title} font-bold text-gray-900 dark:text-white mb-2`}
          >
            {submitSuccessText}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thank you for your message. We'll get back to you soon!
          </p>
          <button
            onClick={resetForm}
            className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Send another message"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl ${variantStyles[variant]} ${sizeVariants[size].container} ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h2
          className={`${sizeVariants[size].title} font-bold text-gray-900 dark:text-white mb-2 ${titleClassName}`}
          id={`${formId}-title`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-gray-600 dark:text-gray-300 ${subtitleClassName}`}
            id={`${formId}-subtitle`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Form */}
      <form
        id={formId}
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy || `${formId}-subtitle`}
        noValidate
        role="form"
      >
        {/* Name Field */}
        {fields.name && renderField("name", fields.name)}

        {/* Email Field */}
        {fields.email && renderField("email", fields.email)}

        {/* Phone Field */}
        {showPhone && fields.phone && renderField("phone", fields.phone)}

        {/* Subject Field */}
        {showSubject &&
          fields.subject &&
          renderField("subject", fields.subject)}

        {/* Message Field */}
        {fields.message && renderField("message", fields.message)}

        {/* Custom Content */}
        {children}

        {/* Submit Error */}
        {errors.submit && (
          <div
            className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            role="alert"
            aria-live="assertive"
          >
            <p className="text-sm text-red-600 dark:text-red-400">
              <svg
                className="inline w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.submit}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full btn transition-all duration-200
              ${sizeVariants[size].button}
              ${
                isSubmitting
                  ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              }
              text-white font-medium rounded-lg
              ${buttonClassName}
            `}
            aria-describedby={isSubmitting ? `${formId}-loading` : undefined}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {submitLoadingText}
              </div>
            ) : (
              submitText
            )}
          </button>

          {isSubmitting && (
            <p id={`${formId}-loading`} className="sr-only" aria-live="polite">
              Submitting form, please wait...
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

// PropTypes for better development experience (optional)
ContactForm.propTypes = {
  // You can add PropTypes here if using TypeScript or PropTypes library
};
