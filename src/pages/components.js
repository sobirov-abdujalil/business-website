import Layout from '@/components/Layout'
import Button from '@/components/Button'

export default function Components() {
  // Icon components for demonstration
  const icons = {
    arrow: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
    plus: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    check: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    trash: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    download: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    external: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )
  }

  return (
    <Layout title="Components - Business Website">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
            Component Library
          </h1>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of reusable UI components built with React and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Button Variants */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Button Variants
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Different button styles for various use cases and contexts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Primary</h3>
              <div className="space-y-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" icon={icons.arrow}>With Icon</Button>
                <Button variant="primary" icon={icons.arrow} iconPosition="right">Icon Right</Button>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Secondary</h3>
              <div className="space-y-3">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" icon={icons.plus}>Add Item</Button>
                <Button variant="secondary" icon={icons.check} iconPosition="right">Confirm</Button>
              </div>
            </div>

            {/* Outline */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Outline</h3>
              <div className="space-y-3">
                <Button variant="outline">Outline Button</Button>
                <Button variant="outline" icon={icons.download}>Download</Button>
                <Button variant="outline" icon={icons.external} iconPosition="right">External Link</Button>
              </div>
            </div>

            {/* Ghost */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ghost</h3>
              <div className="space-y-3">
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="ghost" icon={icons.plus}>Add</Button>
                <Button variant="ghost" icon={icons.arrow} iconPosition="right">Next</Button>
              </div>
            </div>

            {/* Danger */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Danger</h3>
              <div className="space-y-3">
                <Button variant="danger">Delete</Button>
                <Button variant="danger" icon={icons.trash}>Delete Item</Button>
                <Button variant="danger" icon={icons.trash} iconPosition="right">Remove</Button>
              </div>
            </div>

            {/* Success */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Success</h3>
              <div className="space-y-3">
                <Button variant="success">Save</Button>
                <Button variant="success" icon={icons.check}>Confirm</Button>
                <Button variant="success" icon={icons.check} iconPosition="right">Complete</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Button Sizes
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Different sizes for various contexts and layouts
            </p>
          </div>

          <div className="space-y-8">
            {/* Small */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Small</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="small" variant="primary">Small Primary</Button>
                <Button size="small" variant="secondary">Small Secondary</Button>
                <Button size="small" variant="outline">Small Outline</Button>
                <Button size="small" variant="ghost">Small Ghost</Button>
              </div>
            </div>

            {/* Default */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Default</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="primary">Default Primary</Button>
                <Button variant="secondary">Default Secondary</Button>
                <Button variant="outline">Default Outline</Button>
                <Button variant="ghost">Default Ghost</Button>
              </div>
            </div>

            {/* Large */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Large</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="large" variant="primary">Large Primary</Button>
                <Button size="large" variant="secondary">Large Secondary</Button>
                <Button size="large" variant="outline">Large Outline</Button>
                <Button size="large" variant="ghost">Large Ghost</Button>
              </div>
            </div>

            {/* XLarge */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Extra Large</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="xlarge" variant="primary">XLarge Primary</Button>
                <Button size="xlarge" variant="secondary">XLarge Secondary</Button>
                <Button size="xlarge" variant="outline">XLarge Outline</Button>
                <Button size="xlarge" variant="ghost">XLarge Ghost</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button States */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Button States
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Different states for user interaction and feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Normal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Normal</h3>
              <div className="space-y-3">
                <Button variant="primary">Normal Button</Button>
                <Button variant="secondary">Normal Button</Button>
                <Button variant="outline">Normal Button</Button>
              </div>
            </div>

            {/* Loading */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Loading</h3>
              <div className="space-y-3">
                <Button variant="primary" loading>Loading...</Button>
                <Button variant="secondary" loading>Processing...</Button>
                <Button variant="outline" loading>Saving...</Button>
              </div>
            </div>

            {/* Disabled */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disabled</h3>
              <div className="space-y-3">
                <Button variant="primary" disabled>Disabled Button</Button>
                <Button variant="secondary" disabled>Disabled Button</Button>
                <Button variant="outline" disabled>Disabled Button</Button>
              </div>
            </div>

            {/* Full Width */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Width</h3>
              <div className="space-y-3">
                <Button variant="primary" fullWidth>Full Width</Button>
                <Button variant="secondary" fullWidth>Full Width</Button>
                <Button variant="outline" fullWidth>Full Width</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button as Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Button as Links
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Buttons can also function as internal and external links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internal Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Internal Links</h3>
              <div className="space-y-3">
                <Button href="/" variant="primary">Go Home</Button>
                <Button href="/about" variant="secondary" icon={icons.arrow}>About Us</Button>
                <Button href="/contact" variant="outline" icon={icons.arrow} iconPosition="right">Contact</Button>
              </div>
            </div>

            {/* External Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">External Links</h3>
              <div className="space-y-3">
                <Button href="https://example.com" external variant="primary">External Link</Button>
                <Button href="https://github.com" external variant="secondary" icon={icons.external}>GitHub</Button>
                <Button href="https://linkedin.com" external variant="outline" icon={icons.external} iconPosition="right">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Examples
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See the Button component in action with different configurations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Buttons */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Form Buttons</h3>
              <div className="space-y-4">
                <Button type="submit" variant="primary" icon={icons.check}>
                  Submit Form
                </Button>
                <Button type="reset" variant="outline" icon={icons.trash}>
                  Reset Form
                </Button>
                <Button variant="ghost" onClick={() => alert('Cancel clicked!')}>
                  Cancel
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Action Buttons</h3>
              <div className="space-y-4">
                <Button 
                  variant="success" 
                  icon={icons.check}
                  onClick={() => alert('Success action!')}
                >
                  Confirm Action
                </Button>
                <Button 
                  variant="danger" 
                  icon={icons.trash}
                  onClick={() => {
                    if (confirm('Are you sure you want to delete?')) {
                      alert('Item deleted!')
                    }
                  }}
                >
                  Delete Item
                </Button>
                <Button 
                  variant="warning"
                  onClick={() => alert('Warning action!')}
                >
                  Proceed with Caution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Demo */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Accessibility Features
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with accessibility in mind for screen readers and keyboard navigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ARIA Labels */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ARIA Labels</h3>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  icon={icons.plus}
                  ariaLabel="Add new item to cart"
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="danger" 
                  icon={icons.trash}
                  ariaLabel="Delete selected item permanently"
                >
                  Delete
                </Button>
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Loading States</h3>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  loading
                  loadingText="Saving..."
                  ariaLabel="Saving form data"
                >
                  Save Changes
                </Button>
                <Button 
                  variant="secondary" 
                  loading
                  loadingText="Processing..."
                >
                  Process Data
                </Button>
              </div>
            </div>

            {/* Disabled States */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disabled States</h3>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  disabled
                  ariaLabel="Button is currently disabled"
                >
                  Disabled Action
                </Button>
                <Button 
                  variant="outline" 
                  disabled
                >
                  Unavailable
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Usage Examples
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Common use cases and implementation patterns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Call to Action</h3>
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  size="large"
                  fullWidth
                  icon={icons.arrow}
                  iconPosition="right"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  fullWidth
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Navigation</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button variant="ghost" icon={icons.arrow}>Previous</Button>
                  <Button variant="ghost" icon={icons.arrow} iconPosition="right">Next</Button>
                </div>
                <div className="flex gap-3">
                  <Button href="/dashboard" variant="primary">Dashboard</Button>
                  <Button href="/profile" variant="outline">Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
