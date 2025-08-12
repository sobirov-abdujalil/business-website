import Layout from "@/components/Layout";
import TeamMember from "@/components/TeamMember";
import Button from "@/components/Button";

export default function About() {
  // Team data for the About page
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy. Sarah founded our company with a mission to help businesses thrive in the digital age through innovative solutions and exceptional service.",
      photo: "/images/team/member1.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "mailto:sarah@company.com",
      },
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Technology expert specializing in scalable architecture and emerging technologies. Michael leads our development team with innovation and precision, ensuring we deliver cutting-edge solutions.",
      photo: "/images/team/member2.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/michael-chen",
        github: "https://github.com/michaelchen",
        email: "mailto:michael@company.com",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      bio: "Creative marketing strategist with expertise in digital campaigns and brand development. Emily drives growth through innovative marketing solutions and strategic partnerships.",
      photo: "/images/team/member3.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/emily-rodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        instagram: "https://instagram.com/emilyrodriguez",
      },
    },
    {
      name: "David Thompson",
      position: "Lead Developer",
      bio: "Full-stack developer with deep expertise in modern web technologies. David creates robust, scalable solutions that exceed client expectations and drive business success.",
      photo: "/images/team/member4.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/david-thompson",
        github: "https://github.com/davidthompson",
        website: "https://davidthompson.dev",
      },
    },
  ];

  // Company values
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from code quality to client communication.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster strong partnerships with our clients and team members.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices in all our business relationships.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  // Company stats
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <Layout title="About Us - Business Website">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom text-center">
          <h1 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Our Company
          </h1>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of innovators, creators, and
            problem-solvers dedicated to helping businesses succeed in the
            digital world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2019, our company began with a simple mission: to
                  help businesses navigate the complex digital landscape and
                  achieve their goals through innovative technology solutions.
                </p>
                <p>
                  What started as a small team of passionate developers has
                  grown into a full-service digital agency, serving clients
                  across various industries and helping them transform their
                  digital presence.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible
                  in web development, digital marketing, and business
                  consulting, always staying ahead of industry trends and
                  technologies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Innovation at Our Core
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in the power of technology to transform
                    businesses and create meaningful impact in the digital
                    world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving digital landscape.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Deliver exceptional digital experiences
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Drive measurable business results
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Foster long-term partnerships
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To be the leading digital partner for businesses worldwide,
                known for our innovative solutions, exceptional service, and
                commitment to client success.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Industry-leading digital solutions
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Global reach and impact
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Continuous innovation and growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-responsive-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-responsive-lg text-primary-100 max-w-2xl mx-auto">
              We're proud of what we've accomplished and the value we've created
              for our clients
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape our
              relationships with clients and team members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals who are passionate about delivering
              exceptional results and driving innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                photo={member.photo}
                socialLinks={member.socialLinks}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We foster a culture of creativity, collaboration, and
                  continuous learning. Our team members are encouraged to think
                  outside the box, share ideas, and push the boundaries of
                  what's possible.
                </p>
                <p>
                  We believe in work-life balance and creating an environment
                  where everyone can thrive both professionally and personally.
                  Our flexible work arrangements and supportive atmosphere help
                  our team members achieve their best work.
                </p>
                <p>
                  Diversity and inclusion are at the heart of our culture. We
                  value different perspectives, backgrounds, and experiences,
                  knowing that this diversity makes us stronger and more
                  innovative.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  href="/careers"
                  variant="primary"
                  size="large"
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Join Our Team
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Flexible Work
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Remote and hybrid work options
                  </p>
                </div>
                <div className="bg-gradient-to-br from-secondary-100 to-primary-100 dark:from-secondary-900 dark:to-primary-900 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Learning & Growth
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Continuous professional development
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Team Events
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Regular team building activities
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Health & Wellness
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Comprehensive benefits package
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-responsive-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-responsive-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow and succeed in the
            digital world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="large"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              }
            >
              Get in Touch
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              }
              iconPosition="right"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
