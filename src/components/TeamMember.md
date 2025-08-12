# TeamMember Component Documentation

A professional and customizable React component for displaying team member profiles with photos, social media links, and various styling options.

## Basic Usage

```jsx
import TeamMember from "@/components/TeamMember";

// Simple usage
<TeamMember
  name="John Doe"
  position="Software Engineer"
  bio="Passionate developer with expertise in React and Node.js."
  photo="/images/team/john-doe.jpg"
  socialLinks={{
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  }}
/>;
```

## Props Reference

### Basic Info Props

| Prop       | Type   | Default                  | Description                    |
| ---------- | ------ | ------------------------ | ------------------------------ |
| `name`     | string | "Team Member Name"       | The team member's full name    |
| `position` | string | "Position Title"         | The team member's job title    |
| `bio`      | string | "A brief description..." | Short biography or description |

### Photo Props

| Prop       | Type   | Default                        | Description                           |
| ---------- | ------ | ------------------------------ | ------------------------------------- |
| `photo`    | string | "/images/team/placeholder.jpg" | Photo URL path                        |
| `photoAlt` | string | null                           | Alt text for photo (defaults to name) |

### Social Media Props

| Prop          | Type   | Default | Description                   |
| ------------- | ------ | ------- | ----------------------------- |
| `socialLinks` | object | {}      | Object with social media URLs |

### Visual Props

| Prop          | Type   | Default   | Options                                     | Description            |
| ------------- | ------ | --------- | ------------------------------------------- | ---------------------- |
| `variant`     | string | "default" | "default", "elevated", "minimal", "overlay" | Card style variant     |
| `size`        | string | "default" | "small", "default", "large"                 | Card size              |
| `hoverEffect` | string | "lift"    | "lift", "glow", "scale", "none"             | Hover animation effect |

### Content Options

| Prop              | Type      | Default | Description             |
| ----------------- | --------- | ------- | ----------------------- |
| `showBio`         | boolean   | true    | Show biography text     |
| `showSocialLinks` | boolean   | true    | Show social media links |
| `showPosition`    | boolean   | true    | Show job position       |
| `showPhoto`       | boolean   | true    | Show profile photo      |
| `customContent`   | ReactNode | null    | Custom content to add   |

### Animation Props

| Prop              | Type    | Default | Description                        |
| ----------------- | ------- | ------- | ---------------------------------- |
| `animationDelay`  | number  | 0       | Animation delay in milliseconds    |
| `animateOnScroll` | boolean | true    | Enable scroll-triggered animations |

### Styling Props

| Prop                | Type   | Default | Description                         |
| ------------------- | ------ | ------- | ----------------------------------- |
| `className`         | string | ""      | Additional CSS classes for card     |
| `photoClassName`    | string | ""      | Additional CSS classes for photo    |
| `nameClassName`     | string | ""      | Additional CSS classes for name     |
| `positionClassName` | string | ""      | Additional CSS classes for position |
| `bioClassName`      | string | ""      | Additional CSS classes for bio      |

### Event Handlers

| Prop           | Type     | Description            |
| -------------- | -------- | ---------------------- |
| `onClick`      | function | Click handler function |
| `onMouseEnter` | function | Mouse enter handler    |
| `onMouseLeave` | function | Mouse leave handler    |

### Accessibility Props

| Prop        | Type   | Default | Description                                     |
| ----------- | ------ | ------- | ----------------------------------------------- |
| `ariaLabel` | string | null    | Custom ARIA label (defaults to name + position) |

## Social Media Platforms

The component supports the following social media platforms:

- `linkedin` - LinkedIn profile
- `twitter` - Twitter/X profile
- `github` - GitHub profile
- `instagram` - Instagram profile
- `facebook` - Facebook profile
- `website` - Personal website
- `email` - Email address (mailto: link)

## Examples

### Basic Team Member

```jsx
<TeamMember
  name="Sarah Johnson"
  position="CEO & Founder"
  bio="Visionary leader with 15+ years of experience in digital transformation."
  photo="/images/team/sarah.jpg"
  socialLinks={{
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
  }}
/>
```

### Team Member with All Social Links

```jsx
<TeamMember
  name="Michael Chen"
  position="CTO"
  bio="Technology expert specializing in scalable architecture."
  photo="/images/team/michael.jpg"
  socialLinks={{
    linkedin: "https://linkedin.com/in/michaelchen",
    github: "https://github.com/michaelchen",
    twitter: "https://twitter.com/michaelchen",
    website: "https://michaelchen.dev",
    email: "mailto:michael@company.com",
  }}
  variant="elevated"
  hoverEffect="glow"
/>
```

### Minimal Style Team Member

```jsx
<TeamMember
  name="Emily Rodriguez"
  position="Head of Design"
  bio="Creative director with a passion for user-centered design."
  variant="minimal"
  hoverEffect="scale"
  socialLinks={{
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    instagram: "https://instagram.com/emilydesign",
  }}
/>
```

### Interactive Team Member

```jsx
<TeamMember
  name="David Kim"
  position="Lead Developer"
  bio="Full-stack developer with expertise in React and Node.js."
  onClick={() => openProfileModal("david")}
  socialLinks={{
    linkedin: "https://linkedin.com/in/davidkim",
    github: "https://github.com/davidkim",
  }}
  variant="elevated"
  hoverEffect="lift"
/>
```

### Team Member with Custom Content

```jsx
<TeamMember
  name="Lisa Thompson"
  position="Marketing Director"
  bio="Strategic marketing professional with data-driven approach."
  socialLinks={{
    linkedin: "https://linkedin.com/in/lisathompson",
    website: "https://lisathompson.com",
  }}
  customContent={
    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
      <p className="text-sm text-green-700 dark:text-green-300">
        🎯 Certified Google Ads Specialist
      </p>
    </div>
  }
/>
```

### Small Team Member for Sidebar

```jsx
<TeamMember
  name="Alex Martinez"
  position="Product Manager"
  bio="Product strategist focused on exceptional user experiences."
  size="small"
  variant="default"
  socialLinks={{
    linkedin: "https://linkedin.com/in/alexmartinez",
  }}
/>
```

## Size Variants

### Small (64px photo)

- Compact design for sidebars or dense layouts
- Smaller text sizes
- Reduced padding

### Default (96px photo)

- Standard size for most use cases
- Balanced proportions
- Medium text sizes

### Large (128px photo)

- Prominent display for featured team members
- Larger text sizes
- More padding

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

### Overlay

- Glass-morphism effect
- Backdrop blur
- Modern aesthetic

## Hover Effects

### Lift

- Subtle upward movement
- Enhanced shadow
- Smooth transition

### Glow

- Enhanced shadow with brand color
- Glowing effect
- Eye-catching interaction

### Scale

- Slight size increase
- Scale transform
- Dynamic feel

### None

- No hover animation
- Static appearance

## Photo Handling

### Default Placeholder

If no photo is provided or the image fails to load, the component displays a gradient placeholder with a person icon.

### Image Optimization

The component uses Next.js Image component for:

- Automatic optimization
- Responsive sizing
- Lazy loading
- WebP format support

### Error Handling

- Graceful fallback to placeholder
- No broken image displays
- Consistent appearance

## Accessibility Features

- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Screen reader friendly
- **Focus Indicators** - Visible focus states
- **Semantic HTML** - Proper heading structure
- **Alt Text** - Descriptive image alt text
- **Color Contrast** - WCAG compliant

## Best Practices

1. **Photo Quality** - Use high-quality, square photos (1:1 aspect ratio)
2. **Bio Length** - Keep bios concise (2-3 sentences max)
3. **Social Links** - Only include relevant social media profiles
4. **Consistency** - Use consistent styling across team members
5. **Performance** - Use optimized images and lazy loading
6. **Accessibility** - Always provide meaningful alt text

## Responsive Design

The component is fully responsive and adapts to different screen sizes:

- **Mobile**: Single column, optimized spacing
- **Tablet**: 2-3 column grid
- **Desktop**: 3-4 column grid

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement for older browsers

## Performance Considerations

- **Lazy Loading** - Images load only when needed
- **Optimized Renders** - Efficient state management
- **CSS Transitions** - Hardware-accelerated animations
- **Minimal JavaScript** - Lightweight implementation

## Customization Examples

### Custom Styling

```jsx
<TeamMember
  name="Custom Styled"
  position="Team Member"
  bio="With custom styling applied."
  className="border-2 border-dashed border-blue-300"
  photoClassName="ring-4 ring-blue-200"
  nameClassName="text-blue-800"
  positionClassName="text-blue-600"
  bioClassName="text-blue-700"
/>
```

### Grid Layout

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <TeamMember {...member1} />
  <TeamMember {...member2} />
  <TeamMember {...member3} />
</div>
```

### Staggered Animations

```jsx
{
  teamMembers.map((member, index) => (
    <TeamMember key={index} {...member} animationDelay={index * 100} />
  ));
}
```
