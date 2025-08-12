# ContactForm Component Documentation

A professional and feature-rich React contact form component with validation, accessibility, and modern styling using Tailwind CSS.

## Basic Usage

```jsx
import ContactForm from "@/components/ContactForm";

// Simple usage
<ContactForm
  title="Get in Touch"
  subtitle="We'd love to hear from you."
  onSubmit={handleFormSubmit}
/>;
```

## Props Reference

### Form Configuration

| Prop       | Type   | Default                         | Description   |
| ---------- | ------ | ------------------------------- | ------------- |
| `title`    | string | "Get in Touch"                  | Form title    |
| `subtitle` | string | "We'd love to hear from you..." | Form subtitle |

### Form Fields

| Prop          | Type    | Default   | Description                         |
| ------------- | ------- | --------- | ----------------------------------- |
| `fields`      | object  | See below | Field configuration object          |
| `showPhone`   | boolean | true      | Show phone number field             |
| `showSubject` | boolean | true      | Show subject field                  |
| `messageRows` | number  | 5         | Number of rows for message textarea |

### Submit Configuration

| Prop                | Type   | Default         | Description          |
| ------------------- | ------ | --------------- | -------------------- |
| `submitText`        | string | "Send Message"  | Submit button text   |
| `submitLoadingText` | string | "Sending..."    | Loading state text   |
| `submitSuccessText` | string | "Message Sent!" | Success message text |

### Visual Props

| Prop      | Type   | Default   | Options                                      | Description        |
| --------- | ------ | --------- | -------------------------------------------- | ------------------ |
| `variant` | string | "default" | "default", "elevated", "minimal", "gradient" | Form style variant |
| `size`    | string | "default" | "small", "default", "large"                  | Form size          |

### Form Handlers

| Prop        | Type     | Description             |
| ----------- | -------- | ----------------------- |
| `onSubmit`  | function | Form submission handler |
| `onSuccess` | function | Success callback        |
| `onError`   | function | Error callback          |

### Validation

| Prop               | Type     | Default | Description                   |
| ------------------ | -------- | ------- | ----------------------------- |
| `enableValidation` | boolean  | true    | Enable client-side validation |
| `customValidation` | function | null    | Custom validation function    |

### Styling Props

| Prop                | Type   | Default | Description                 |
| ------------------- | ------ | ------- | --------------------------- |
| `className`         | string | ""      | Additional CSS classes      |
| `titleClassName`    | string | ""      | Title CSS classes           |
| `subtitleClassName` | string | ""      | Subtitle CSS classes        |
| `fieldClassName`    | string | ""      | Field container CSS classes |
| `buttonClassName`   | string | ""      | Button CSS classes          |

### Accessibility

| Prop        | Type   | Default        | Description               |
| ----------- | ------ | -------------- | ------------------------- |
| `formId`    | string | "contact-form" | Form ID for accessibility |
| `ariaLabel` | string | "Contact form" | ARIA label                |

## Default Fields Configuration

```jsx
const defaultFields = {
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
};
```

## Examples

### Basic Contact Form

```jsx
<ContactForm
  title="Contact Us"
  subtitle="Send us a message and we'll get back to you."
  onSubmit={handleFormSubmit}
/>
```

### Custom Form Handler

```jsx
const handleFormSubmit = async (formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  } catch (error) {
    throw new Error("Network error: " + error.message);
  }
};

<ContactForm
  onSubmit={handleFormSubmit}
  onSuccess={(data) => console.log("Success:", data)}
  onError={(error) => console.error("Error:", error)}
/>;
```

### Minimal Form

```jsx
const minimalFields = {
  name: { label: "Name", placeholder: "Your name", required: true },
  email: { label: "Email", placeholder: "your@email.com", required: true },
  message: { label: "Message", placeholder: "Your message...", required: true }
}

<ContactForm
  title="Quick Contact"
  fields={minimalFields}
  showPhone={false}
  showSubject={false}
  variant="minimal"
  size="small"
/>
```

### Extended Form with Custom Validation

```jsx
const customValidation = (formData) => {
  if (formData.message.length > 1000) {
    return "Message is too long. Please keep it under 1000 characters.";
  }
  if (
    formData.phone &&
    !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
  ) {
    return "Please enter a valid phone number.";
  }
  return null;
};

<ContactForm
  title="Project Inquiry"
  customValidation={customValidation}
  variant="elevated"
  messageRows={8}
/>;
```

### Form with Custom Content

```jsx
<ContactForm
  title="Support Request"
  variant="gradient"
  onSubmit={handleSupportSubmit}
>
  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
      Support Information
    </h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Please include your account number and describe the issue in detail.
    </p>
  </div>
</ContactForm>
```

## Size Variants

### Small

- Compact design for sidebars or dense layouts
- Smaller text sizes and padding
- Reduced form field heights

### Default

- Standard size for most use cases
- Balanced proportions
- Medium text sizes

### Large

- Prominent display for detailed forms
- Larger text sizes and padding
- More spacious layout

## Card Variants

### Default

- Clean border design
- Subtle background
- Professional appearance

### Elevated

- Enhanced shadow
- More prominent visual presence
- Modern look

### Minimal

- Dashed border
- Transparent background
- Subtle appearance

### Gradient

- Beautiful gradient background
- Eye-catching design
- Modern aesthetic

## Validation Features

### Built-in Validation

- **Required Fields**: Validates required field presence
- **Email Format**: Validates email address format
- **Phone Format**: Validates phone number format (optional)
- **Message Length**: Ensures minimum message length

### Custom Validation

```jsx
const customValidation = (formData) => {
  // Your custom validation logic
  if (formData.message.length > 1000) {
    return "Message is too long.";
  }
  return null; // Return null for valid, string for error message
};
```

### Validation States

- **Real-time**: Validates on blur
- **Error Display**: Shows error messages below fields
- **Visual Feedback**: Red borders and backgrounds for errors
- **Accessibility**: ARIA attributes for screen readers

## Form Submission

### Submit Handler

```jsx
const handleSubmit = async (formData) => {
  // formData contains all field values
  const { name, email, phone, subject, message } = formData;

  // Your submission logic here
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};
```

### Success/Error Handling

```jsx
<ContactForm
  onSubmit={handleSubmit}
  onSuccess={(data) => {
    console.log("Form submitted successfully:", data);
    // Show success notification
  }}
  onError={(error) => {
    console.error("Form submission failed:", error);
    // Show error notification
  }}
/>
```

## Accessibility Features

- **Semantic HTML**: Proper form structure with labels
- **ARIA Attributes**: Labels, descriptions, and error states
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Proper announcements
- **Error Announcements**: Screen readers announce errors
- **Loading States**: Loading announcements for screen readers

## Styling Customization

### Custom CSS Classes

```jsx
<ContactForm
  className="border-2 border-dashed border-blue-300"
  titleClassName="text-blue-800"
  subtitleClassName="text-blue-600"
  fieldClassName="mb-6"
  buttonClassName="bg-blue-600 hover:bg-blue-700"
/>
```

### Responsive Design

The form is fully responsive and adapts to different screen sizes:

- **Mobile**: Single column, optimized spacing
- **Tablet**: Improved layout and spacing
- **Desktop**: Full layout with optimal spacing

## Best Practices

1. **Form Handler**: Always provide a proper form submission handler
2. **Validation**: Use custom validation for business-specific rules
3. **Error Handling**: Implement proper error handling and user feedback
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Performance**: Keep custom validation lightweight
6. **User Experience**: Provide clear success/error feedback

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers

## Performance Considerations

- **Efficient Validation**: Only validates on blur and submit
- **Optimized Renders**: Minimal re-renders with proper state management
- **Lightweight**: No heavy dependencies
- **Fast Loading**: Quick initial render

## Customization Examples

### Custom Field Configuration

```jsx
const customFields = {
  name: { label: "Full Name", placeholder: "Enter your full name", required: true },
  email: { label: "Email Address", placeholder: "Enter your email address", required: true },
  company: { label: "Company", placeholder: "Your company name", required: false },
  budget: { label: "Budget Range", placeholder: "Select your budget", required: true },
  message: { label: "Project Details", placeholder: "Describe your project...", required: true }
}

<ContactForm fields={customFields} />
```

### Different Variants

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <ContactForm variant="default" title="Standard Form" />
  <ContactForm variant="elevated" title="Elevated Form" />
  <ContactForm variant="minimal" title="Minimal Form" />
  <ContactForm variant="gradient" title="Gradient Form" />
</div>
```

### Size Comparison

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ContactForm size="small" title="Small Form" />
  <ContactForm size="default" title="Default Form" />
  <ContactForm size="large" title="Large Form" />
</div>
```
