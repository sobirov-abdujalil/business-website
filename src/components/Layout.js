import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ 
  children, 
  title = 'Business Website', 
  description = 'A modern business website built with Next.js and Tailwind CSS' 
}) {
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
        <Header />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
