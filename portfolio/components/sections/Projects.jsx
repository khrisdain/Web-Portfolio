'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, and payment integration.',
    image: '/images/image.png',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    role: 'Full Stack Developer',
    liveLink: 'https://food-ordering-app-frontend-l26p.onrender.com',
    repoLink: 'https://github.com/khrisdain/Food-Ordering-App',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Interactive weather application built with plain HTML, CSS, and JavaScript and openweathermap api.',
    image: '/images/weather-app.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    role: 'FullStack Developer',
    liveLink: 'https://example.com/project2',
    repoLink: 'https://github.com/khrisdain/Weather-Application',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'A collaborative E-commerce application with real-time updates and team features.',
    image: '/images/ecommerce.jpeg',
    tags: ['React', 'Css', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
    role: 'Lead Backend Developer',
    liveLink: 'https://example.com/project3',
    repoLink: 'https://github.com/khrisdain/Ecommerce-.git',
  },
  {
    id: 4,
    title: 'Biological Plant Application',
    description: 'A application to track your biological plant.',
    image: '/images/project-5.png',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full Stack Developer',
    liveLink: 'https://aptechota-plantpalace-cyberminds.vercel.app/',
    repoLink: 'https://github.com/MhideTech/Techwiz-Project-PlantPalace-',
  },
  {
    id: 5,
    title: 'Memory App',
    description: 'A mobile-responsive application to track your journery and record memory.',
    image: '/images/project -2.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full Stack Developer',
    liveLink: 'https://memories-app-frontend-khrisdain.vercel.app/',
    repoLink: 'https://github.com/khrisdain/memories_app',
  },
];

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card group relative overflow-hidden h-full transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-secondary-700 mb-6 relative">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id === 1}
        />
        
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-primary-500/80 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 p-2 rounded-full hover:bg-secondary-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 p-2 rounded-full hover:bg-secondary-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
        <p className="text-black text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mt-auto space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-secondary-700 text-black px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Role */}
          <div className="text-sm text-black">
            <span className="text-primary-400 font-medium">Role:</span> {project.role}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple 3D model for category selection
function Model3D() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.some(tag => 
        tag.toLowerCase().includes(activeCategory.toLowerCase())
      ));
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title text-black">My Projects</h2>
        
        {/* 3D Category Selection */}
        <div className="mb-12">
          <div className="h-32 mb-8">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Model3D />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-secondary-700 text-black hover:bg-secondary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-black mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 