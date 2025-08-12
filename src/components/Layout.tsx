import { ReactNode } from "react";
import Head from "next/head";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Business Website",
  description = "A modern business website built with Next.js and Tailwind CSS",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Business
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </a>
                </nav>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container-custom py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2024 Business Website. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
