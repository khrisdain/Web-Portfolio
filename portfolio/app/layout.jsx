'use client';

import { useState, useEffect } from 'react';
import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  // Fix hydration issues with Three.js
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Portfolio | Web Developer</title>
        <meta name="description" content="Professional web development portfolio showcasing my projects and skills" />
      </head>
      <body className="transition-colors duration-300 bg-light dark:bg-secondary-900 text-dark dark:text-secondary-100">
        <ThemeProvider>
          {mounted && <AnimatedBackground />}
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 