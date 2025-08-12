# Button Component Documentation

A comprehensive and accessible React button component with multiple variants, sizes, states, and link functionality built with Tailwind CSS.

## Basic Usage

```jsx
import Button from '@/components/Button'

// Simple button
<Button>Click me</Button>

// Button with variant
<Button variant="primary">Primary Button</Button>
```

## Props Reference

### Content Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Button content/text |
| `icon` | ReactNode | null | Icon component |
| `iconPosition` | string | "left" | Icon position: "left" or "right" |
| `loading` | boolean | false | Show loading spinner |
| `loadingText` | string | "Loading..." | Text to show when loading |

### Variant Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `variant` | string | "primary" | "primary", "secondary", "outline", "ghost", "danger", "success", "warning" | Button style variant |
| `size` | string | "default" | "small", "default", "large", "xlarge" | Button size |

### State Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | boolean | false | Disable the button |
| `fullWidth` | boolean | false | Make button full width |

### Link Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | null | Link URL (internal or external) |
| `external` | boolean | false | Whether link opens in new tab |

### Form Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | "button" | Button type: "button", "submit", "reset" |

### Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | "" | Additional CSS classes |
| `iconClassName` | string | "" | Additional CSS classes for icon |

### Event Handlers

| Prop | Type | Description |
|------|------|-------------|
| `onClick` | function | Click handler |
| `onMouseEnter` | function | Mouse enter handler |
| `onMouseLeave` | function | Mouse leave handler |
| `onFocus` | function | Focus handler |
| `onBlur` | function | Blur handler |

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | string | null | ARIA label |
| `ariaDescribedBy` | string | null | ARIA described by |
| `ariaExpanded` | boolean | null | ARIA expanded state |
| `ariaPressed` | boolean | null | ARIA pressed state |

## Examples

### Basic Buttons
```jsx
<Button>Default Button</Button>
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```

### Button with Icons
```jsx
const arrowIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

<Button icon={arrowIcon}>With Left Icon</Button>
<Button icon={arrowIcon} iconPosition="right">With Right Icon</Button>
```

### Button Sizes
```jsx
<Button size="small">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="large">Large Button</Button>
<Button size="xlarge">Extra Large Button</Button>
```

### Button Variants
```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
```

### Button States
```jsx
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

### Button as Links
```jsx
// Internal link
<Button href="/about">About Us</Button>

// External link
<Button href="https://example.com" external>External Link</Button>

// With icon
<Button href="/contact" icon={arrowIcon}>Contact Us</Button>
```

### Form Buttons
```jsx
<Button type="submit" variant="primary">Submit Form</Button>
<Button type="reset" variant="outline">Reset Form</Button>
<Button onClick={handleClick}>Custom Action</Button>
```

## Variant Styles

### Primary
- Blue background with white text
- Hover: Darker blue
- Focus: Blue ring
- Used for main actions

### Secondary
- Secondary color background
- Hover: Darker secondary
- Focus: Secondary ring
- Used for secondary actions

### Outline
- Transparent background with colored border
- Hover: Light background tint
- Focus: Colored ring
- Used for subtle actions

### Ghost
- Transparent background and border
- Hover: Light gray background
- Focus: Gray ring
- Used for minimal actions

### Danger
- Red background
- Hover: Darker red
- Focus: Red ring
- Used for destructive actions

### Success
- Green background
- Hover: Darker green
- Focus: Green ring
- Used for positive actions

### Warning
- Yellow background
- Hover: Darker yellow
- Focus: Yellow ring
- Used for caution actions

## Size Variants

### Small
- Compact padding: `px-3 py-1.5`
- Small text: `text-sm`
- Small icon: `w-4 h-4`
- Used for dense layouts

### Default
- Standard padding: `px-4 py-2`
- Base text: `text-base`
- Standard icon: `w-5 h-5`
- Most common size

### Large
- Large padding: `px-6 py-3`
- Large text: `text-lg`
- Large icon: `w-6 h-6`
- Used for prominent actions

### XLarge
- Extra large padding: `px-8 py-4`
- Extra large text: `text-xl`
- Extra large icon: `w-7 h-7`
- Used for hero sections

## Button States

### Normal
- Default interactive state
- Hover and focus effects
- Full functionality

### Loading
- Shows spinning icon
- Disables interaction
- Custom loading text
- ARIA busy state

### Disabled
- Reduced opacity
- No interaction
- Cursor not allowed
- ARIA disabled state

### Full Width
- Takes full container width
- Useful for mobile layouts
- Consistent with form inputs

## Link Functionality

### Internal Links
```jsx
<Button href="/about">About Us</Button>
```
- Uses Next.js Link component
- Client-side navigation
- SEO friendly

### External Links
```jsx
<Button href="https://example.com" external>External Link</Button>
```
- Opens in new tab
- Security attributes
- External link indicator

## Accessibility Features

### ARIA Support
- `aria-label` for screen readers
- `aria-describedby` for descriptions
- `aria-expanded` for expandable content
- `aria-pressed` for toggle buttons
- `aria-busy` for loading states
- `aria-disabled` for disabled states

### Keyboard Navigation
- Full keyboard support
- Focus indicators
- Enter/Space activation
- Tab navigation

### Screen Reader Support
- Proper button semantics
- Loading announcements
- State changes
- Icon descriptions

## Icon Integration

### Icon Positioning
```jsx
// Left icon (default)
<Button icon={arrowIcon}>Next</Button>

// Right icon
<Button icon={arrowIcon} iconPosition="right">Next</Button>
```

### Icon Sizing
Icons automatically scale with button size:
- Small: `w-4 h-4`
- Default: `w-5 h-5`
- Large: `w-6 h-6`
- XLarge: `w-7 h-7`

### Custom Icon Styling
```jsx
<Button 
  icon={customIcon} 
  iconClassName="text-red-500"
>
  Custom Icon
</Button>
```

## Event Handling

### Click Handler
```jsx
const handleClick = (e) => {
  console.log('Button clicked!')
}

<Button onClick={handleClick}>Click Me</Button>
```

### Form Integration
```jsx
const handleSubmit = (e) => {
  e.preventDefault()
  // Form submission logic
}

<form onSubmit={handleSubmit}>
  <Button type="submit">Submit</Button>
</form>
```

## Styling Customization

### Custom Classes
```jsx
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Styled
</Button>
```

### Icon Customization
```jsx
<Button 
  icon={customIcon}
  iconClassName="text-white opacity-75"
>
  Custom Icon Style
</Button>
```

## Best Practices

1. **Semantic Usage**: Use appropriate variants for actions
2. **Accessibility**: Always provide meaningful labels
3. **Loading States**: Show loading for async actions
4. **Icon Usage**: Use icons to enhance clarity
5. **Consistency**: Use consistent sizing across similar actions
6. **Mobile First**: Consider touch targets for mobile

## Common Use Cases

### Call to Action
```jsx
<Button 
  variant="primary" 
  size="large"
  fullWidth
  icon={arrowIcon}
  iconPosition="right"
>
  Get Started Today
</Button>
```

### Form Actions
```jsx
<div className="flex gap-3">
  <Button type="submit" variant="primary">Save</Button>
  <Button type="reset" variant="outline">Reset</Button>
  <Button variant="ghost" onClick={onCancel}>Cancel</Button>
</div>
```

### Navigation
```jsx
<div className="flex gap-3">
  <Button href="/previous" variant="ghost" icon={prevIcon}>Previous</Button>
  <Button href="/next" variant="ghost" icon={nextIcon} iconPosition="right">Next</Button>
</div>
```

### Destructive Actions
```jsx
<Button 
  variant="danger" 
  icon={trashIcon}
  onClick={handleDelete}
  ariaLabel="Delete item permanently"
>
  Delete Item
</Button>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers

## Performance Considerations

- **Lightweight**: Minimal JavaScript overhead
- **Efficient**: Optimized re-renders
- **Fast**: Quick initial render
- **Scalable**: Works with large numbers of buttons
