'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeProvider';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-primary-100 dark:bg-secondary-900 shadow-neumorphic dark:shadow-neumorphic-dark' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-dark dark:text-white">
          Yves.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          
          <button 
            onClick={toggleTheme}
            className="p-3 ml-4 rounded-lg bg-primary-100 text-dark dark:bg-secondary-800 dark:text-white shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary-100 text-dark dark:bg-secondary-800 dark:text-white shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-primary-100 text-dark dark:bg-secondary-800 dark:text-white shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'max-h-screen bg-primary-100 dark:bg-secondary-900 shadow-neumorphic dark:shadow-neumorphic-dark' 
          : 'max-h-0'
      }`}>
        <div className="container py-4 space-y-3">
          <MobileNavLinks closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#resume">Resume</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }) => {
  return (
    <>
      <MobileNavLink href="#about" onClick={closeMenu}>About</MobileNavLink>
      <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
      <MobileNavLink href="#projects" onClick={closeMenu}>Projects</MobileNavLink>
      <MobileNavLink href="#resume" onClick={closeMenu}>Resume</MobileNavLink>
      <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>
    </>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="px-4 py-2 text-dark dark:text-secondary-100 hover:text-primary-400 dark:hover:text-primary-400 font-medium transition-colors duration-300">
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-4 py-3 rounded-lg text-dark dark:text-white bg-primary-100 dark:bg-secondary-800 shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default Navbar; 