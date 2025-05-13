'use client';

import { useState, useRef, useEffect } from 'react';

// Resume data
const experiences = [
  {
    id: 1,
    title: 'Software Engineer(Mid-level)',
    company: 'Brainswood Integrated.',
    location: 'Lagos, Nigeria',
    period: '2020 - Present',
    description: 'Led the development team in creating responsive and interactive web applications. Implemented modern UI/UX designs using React, Next.js, and Three.js. Optimized application performance and mentored junior developers.',
    achievements: [
      'Reduced page load time by 40% through code optimization and lazy loading techniques',
      'Implemented 3D interactive product visualization that increased user engagement by 25%',
      'Led the migration from Redux to React Context API, reducing bundle size by 15%',
    ],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Greay-Area',
    location: 'Lagos, Nigeria',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive designs and ensure cross-browser compatibility.',
    achievements: [
      'Built custom e-commerce solutions for 3+ clients using React and Node.js',
      'Implemented CI/CD pipelines that reduced deployment time by 70%',
      'Created reusable component library that increased development efficiency by 30%',
    ],
  },
  {
    id: 3,
    title: 'Junior Software Developer',
    company: 'University of Lagos, Nithub',
    location: 'Lagos, Nigeria',
    period: '2016 - 2018',
    description: 'Assisted in developing frontend solutions for web applications. Worked on implementing UI designs and fixing bugs in existing codebases.',
    achievements: [
      'Contributed to the development of a React-based dashboard that increased client satisfaction',
      'Optimized CSS to improve mobile responsiveness of all company products',
      'Implemented automated testing that caught 85% of potential bugs before deployment',
    ],
  },
];

const education = [
  {
    id: 1,
    degree: 'Diploma in Computer Programming and Analysis',
    institution: 'Humber College',
    location: 'Etobiocke, ON',
    period: '2025-present',
    achievements: [
      'Major in Algorithmic Thinking, Object-Oriented Programming, Database, Web Development, and Software Development',
      'GPA: 3.8/4.0',
      'Dean\'s List',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Chemical Engineering',
    institution: 'University of Lagos',
    location: 'Lagos, Nigeria',
    period: '2016-2022',
    achievements: [
      'Specialization in Process Optimizaion, Material and Energy Balance',
      'Research: "Production of Polyurethane using Alternative reacting agent"',
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2022',
  },
  {
    id: 2,
    name: 'React Advanced Concepts',
    issuer: 'Udemy',
    date: '2021',
  },
  {
    id: 3,
    name: 'Professional Web Accessibility',
    issuer: 'W3C',
    date: '2020',
  },
  {
    id: 4,
    name: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: '2019',
  },
];

// Timeline item component
function TimelineItem({ data, type = 'experience' }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  if (type === 'experience') {
    return (
      <div 
        ref={itemRef}
        className={`relative pl-10 pb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-secondary-700/30"></div>
        
        {/* Timeline dot */}
        <div className="absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-primary-500/80 shadow-lg shadow-primary-500/10"></div>
        
        {/* Content */}
        <div className="card hover:shadow-primary-500/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold text-black">{data.title}</h3>
            <div className="text-sm font-medium px-3 py-1 bg-secondary-700/30 rounded-full text-primary-400 mt-2 md:mt-0 inline-block">
              {data.period}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-primary-300 flex items-center">
              <span className="font-medium text-black">{data.company}</span>
              <span className="mx-2 text-black">•</span>
              <span className="text-black">{data.location}</span>
            </div>
          </div>
          
          <p className="text-black mb-4">{data.description}</p>
          
          {data.achievements && (
            <div className="mt-4">
              <h4 className="text-black font-semibold text-sm mb-2">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1 text-black">
                {data.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  } else if (type === 'education') {
    return (
      <div 
        ref={itemRef}
        className={`relative pl-10 pb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-secondary-700/30"></div>
        
        {/* Timeline dot */}
        <div className="absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-primary-500/80 shadow-lg shadow-primary-500/10"></div>
        
        {/* Content */}
        <div className="card hover:shadow-primary-500/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold text-black">{data.degree}</h3>
            <div className="text-sm font-medium px-3 py-1 bg-secondary-700/30 rounded-full text-primary-400 mt-2 md:mt-0 inline-block">
              {data.period}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-primary-300 flex items-center">
              <span className="font-medium text-black">{data.institution}</span>
              <span className="mx-2 text-black">•</span>
              <span className="text-black">{data.location}</span>
            </div>
          </div>
          
          {data.achievements && (
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-1 text-black">
                {data.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return null;
}

function CertificationCard({ certification }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`card transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-black mb-1">{certification.name}</h3>
          <p className="text-black text-sm">{certification.issuer}</p>
        </div>
        <span className="text-sm bg-secondary-700/30 px-3 py-1 rounded-full text-primary-400">
          {certification.date}
        </span>
      </div>
    </div>
  );
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');
  
  return (
    <section id="resume" className="section bg-secondary-800/20">
      <div className="container">
        <h2 className="section-title text-black">Resume & Experience</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary-800/30 rounded-full p-1 flex">
            {['experience', 'education', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-primary-500/80 text-white'
                    : 'text-black hover:text-primary-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div>
          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-0">
              {experiences.map((experience) => (
                <TimelineItem key={experience.id} data={experience} type="experience" />
              ))}
            </div>
          )}
          
          {/* Education */}
          {activeTab === 'education' && (
            <div className="space-y-0">
              {education.map((edu) => (
                <TimelineItem key={edu.id} data={edu} type="education" />
              ))}
            </div>
          )}
          
          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((certification) => (
                <CertificationCard key={certification.id} certification={certification} />
              ))}
            </div>
          )}
        </div>
        
        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <a 
            href="/resume.pdf" 
            download 
            className="btn btn-primary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
} 