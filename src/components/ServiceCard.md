# ServiceCard Component Documentation

A highly customizable React component for displaying service information with various styling options, animations, and interactive features.

## Basic Usage

```jsx
import ServiceCard from '@/components/ServiceCard'

// Simple usage
<ServiceCard
  title="Web Development"
  description="Custom web applications built with modern technologies."
  icon={<YourIcon />}
  href="/services/web-development"
/>
```

## Props Reference

### Basic Content Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Service Title" | The service title |
| `description` | string | "Service description..." | The service description |
| `icon` | ReactNode | null | Icon component (SVG recommended) |
| `iconBg` | string | "primary" | Icon background color variant |
| `iconColor` | string | "white" | Icon color variant |

### Link Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | string | null | Link URL (internal or external) |
| `linkText` | string | "Learn More" | Link button text |
| `external` | boolean | false | Whether link opens in new tab |

### Visual Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `variant` | string | "default" | "default", "elevated", "minimal", "gradient" | Card style variant |
| `size` | string | "default" | "small", "default", "large" | Card size |
| `hoverEffect` | string | "lift" | "lift", "glow", "scale", "none" | Hover animation effect |

### Content Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showBadge` | boolean | false | Show badge in top-right corner |
| `badgeText` | string | "Popular" | Badge text content |
| `badgeColor` | string | "primary" | Badge color variant |
| `showStats` | boolean | false | Show statistics section |
| `stats` | array | [] | Array of stat objects: `[{value: "50+", label: "Projects"}]` |
| `showFeatures` | boolean | false | Show features list |
| `features` | array | [] | Array of feature strings |

### Animation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animationDelay` | number | 0 | Animation delay in milliseconds |
| `animateOnScroll` | boolean | true | Enable scroll-triggered animations |

### Custom Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | "" | Additional CSS classes for card |
| `iconClassName` | string | "" | Additional CSS classes for icon container |
| `titleClassName` | string | "" | Additional CSS classes for title |
| `descriptionClassName` | string | "" | Additional CSS classes for description |

### Event Handlers

| Prop | Type | Description |
|------|------|-------------|
| `onClick` | function | Click handler function |
| `onMouseEnter` | function | Mouse enter handler |
| `onMouseLeave` | function | Mouse leave handler |

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | string | null | Custom ARIA label (defaults to title) |

## Color Variants

### Icon Background Colors
- `primary` - Primary brand color
- `secondary` - Secondary brand color  
- `success` - Green
- `warning` - Yellow
- `danger` - Red
- `info` - Blue
- `gray` - Gray
- `white` - White
- `gradient` - Gradient background

### Icon Colors
- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `success` - Green
- `warning` - Yellow
- `danger` - Red
- `info` - Blue
- `gray` - Gray
- `white` - White
- `black` - Black/Dark

### Badge Colors
- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `success` - Green
- `warning` - Yellow
- `danger` - Red
- `info` - Blue
- `gray` - Gray

## Examples

### Basic Service Card
```jsx
<ServiceCard
  title="Web Development"
  description="Custom web applications built with modern technologies."
  icon={<CodeIcon />}
  href="/services/web-development"
/>
```

### Featured Service with Badge
```jsx
<ServiceCard
  title="Premium Support"
  description="24/7 dedicated support for enterprise clients."
  icon={<SupportIcon />}
  showBadge={true}
  badgeText="Popular"
  badgeColor="success"
  variant="elevated"
  hoverEffect="glow"
/>
```

### Service with Features List
```jsx
<ServiceCard
  title="UI/UX Design"
  description="User-centered design solutions."
  icon={<DesignIcon />}
  showFeatures={true}
  features={[
    "User Research",
    "Wireframing", 
    "Prototyping",
    "User Testing"
  ]}
  href="/services/design"
/>
```

### Service with Statistics
```jsx
<ServiceCard
  title="Cloud Solutions"
  description="Scalable cloud infrastructure."
  icon={<CloudIcon />}
  showStats={true}
  stats={[
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ]}
  variant="gradient"
/>
```

### Interactive Card with Click Handler
```jsx
<ServiceCard
  title="Contact Us"
  description="Get in touch for a consultation."
  icon={<ContactIcon />}
  onClick={() => openContactModal()}
  linkText="Open Contact Form"
  variant="minimal"
  hoverEffect="scale"
/>
```

### External Link Card
```jsx
<ServiceCard
  title="External Tool"
  description="Third-party integration service."
  icon={<ToolIcon />}
  href="https://external-service.com"
  linkText="Visit External Site"
  external={true}
  showBadge={true}
  badgeText="External"
  badgeColor="info"
/>
```

## Styling Customization

### Custom CSS Classes
```jsx
<ServiceCard
  title="Custom Styled"
  description="With custom styling applied."
  className="border-2 border-dashed border-blue-300"
  iconClassName="bg-blue-100"
  titleClassName="text-blue-800"
  descriptionClassName="text-blue-600"
/>
```

### Responsive Design
The component is fully responsive and works well on all screen sizes. The grid layout in the parent container should handle responsive behavior:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <ServiceCard {...props} />
  <ServiceCard {...props} />
  <ServiceCard {...props} />
</div>
```

## Best Practices

1. **Icons**: Use SVG icons for best quality and customization
2. **Descriptions**: Keep descriptions concise (2-3 sentences max)
3. **Features**: Limit features list to 4-6 items for readability
4. **Stats**: Use 2-4 statistics for optimal layout
5. **Accessibility**: Always provide meaningful titles and descriptions
6. **Performance**: Use `animateOnScroll={false}` for large lists to improve performance

## Accessibility Features

- Full keyboard navigation support
- ARIA labels and roles
- Focus indicators
- Screen reader friendly
- Semantic HTML structure
- Color contrast compliance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers
