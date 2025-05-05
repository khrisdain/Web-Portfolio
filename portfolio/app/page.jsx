'use client';

import { useState } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
} 