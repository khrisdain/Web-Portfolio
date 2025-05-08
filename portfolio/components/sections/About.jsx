'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Skills data
const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3/SASS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Three.js', level: 70 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'GraphQL', level: 65 },
];

function SkillBar({ name, level }) {
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${level}%`;
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-secondary-200 font-medium">{name}</span>
        <span className="text-primary-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-secondary-700 rounded-full h-2.5">
        <div
          ref={barRef}
          className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section bg-secondary-800/50">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative flex-shrink-0 flex justify-center">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative border-4 border-primary-500/20">
              <Image
                src="/images/image.png"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 flex-grow">
            <h3 className="text-2xl font-bold text-white mb-4">Software Engineer<span className="text-primary-400">& Designer</span></h3>
            
            <p className="text-secondary-300">
              I'm a passionate web developer with expertise in creating visually stunning and highly functional websites and applications. With over 5 years of experience in the industry, I've worked with clients from startups to large corporations.
            </p>
            
            <p className="text-secondary-300">
              My approach combines technical expertise with an eye for design, ensuring that every project not only works flawlessly but also looks amazing. I'm particularly interested in creating interactive experiences using technologies like Three.js.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {["JavaScript", "React", "Next.js", "Three.js", "Tailwind CSS", "Node.js", "Web Design", "UI/UX"].map((tag) => (
                <span key={tag} className="bg-secondary-700 text-secondary-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="pt-6">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">My Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 