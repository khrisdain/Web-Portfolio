'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-100/80 dark:bg-secondary-800/50 backdrop-blur-md py-12 shadow-inner-3d dark:shadow-inner-3d-white border-t border-dark/10 dark:border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="#home" className="text-2xl font-bold text-dark dark:text-white mb-4 inline-block">
              <span className="text-primary-800 dark:text-primary-400">Port</span>folio
            </Link>
            <p className="text-dark/90 dark:text-secondary-300 mt-4 max-w-md">
              A passionate web developer specializing in creating stunning, functional, and user-friendly websites and applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.184A4.92 4.92 0 0011.9 8.035a13.995 13.995 0 01-10.07-5.147A4.929 4.929 0 003.437 8.23a4.9 4.9 0 01-2.224-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="bg-primary-50 dark:bg-secondary-800/70 p-4 rounded-lg shadow-3d-sm dark:shadow-3d-white-sm">
            <h3 className="text-lg font-semibold mb-4 text-dark dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400">Home</Link></li>
              <li><Link href="#about" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400">About</Link></li>
              <li><Link href="#projects" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400">Projects</Link></li>
              <li><Link href="#resume" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400">Resume</Link></li>
              <li><Link href="#contact" className="text-dark dark:text-secondary-300 hover:text-primary-800 dark:hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="bg-primary-50 dark:bg-secondary-800/70 p-4 rounded-lg shadow-3d-sm dark:shadow-3d-white-sm">
            <h3 className="text-lg font-semibold mb-4 text-dark dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-dark dark:text-secondary-300">contact@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-dark dark:text-secondary-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-dark dark:text-secondary-300">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark/10 dark:border-secondary-700 mt-12 pt-8 text-center text-dark dark:text-secondary-300">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 