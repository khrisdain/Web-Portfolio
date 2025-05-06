'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeProvider';

export default function AnimatedBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Set up canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Draw animated background
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create gradient based on theme
    const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height);
    
    if (isDark) {
      gradient.addColorStop(0, 'rgba(39, 39, 42, 1)'); // secondary-800
      gradient.addColorStop(1, 'rgba(24, 24, 27, 1)'); // secondary-900
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // white
      gradient.addColorStop(1, 'rgba(245, 245, 245, 1)'); // primary-200
    }

    // Background particles
    const particles = [];
    const particleCount = Math.floor(dimensions.width * dimensions.height / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Set color based on theme
        if (isDark) {
          ctx.fillStyle = `rgba(79, 70, 229, ${particle.opacity})`; // indigo-600
        } else {
          ctx.fillStyle = `rgba(38, 38, 38, ${particle.opacity})`; // primary-800
        }
        
        ctx.fill();
        
        // Draw connection lines between nearby particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Set connection line color based on theme
            if (isDark) {
              ctx.strokeStyle = `rgba(79, 70, 229, ${0.1 * (1 - distance / 100)})`; // indigo-600
            } else {
              ctx.strokeStyle = `rgba(38, 38, 38, ${0.1 * (1 - distance / 100)})`; // primary-800
            }
            
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }, [dimensions, isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
} 