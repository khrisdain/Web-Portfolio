'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:your.email@example.com' },
  ];

  return (
    <footer className="bg-primary-100 dark:bg-secondary-900 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-dark dark:text-white">
              Yves.dev
            </Link>
            <p className="mt-2 text-dark dark:text-secondary-300 max-w-md">
              Building beautiful, functional websites and applications with modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-dark dark:text-white bg-primary-100 dark:bg-secondary-800 rounded-lg shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-dark dark:text-secondary-300 text-sm">
              © {currentYear} Yves.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 