'use client';

import relatedProjectsData from '@/data/relatedProjects.json';
import { useEffect, useRef, useState } from 'react';

interface RelatedProject {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  relevance: string;
  authors?: string[];
}

export default function RelatedProjectsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { relatedProjects } = relatedProjectsData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="related-projects" 
      className="section-padding scroll-mt-[-20px] bg-secondary/20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-heading font-semibold mb-6 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Related Projects
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full mb-6 ${
              inView ? 'animate-scale-in animate-stagger-1' : 'opacity-0'
            }`}
          />
        </div>
        
        {/* Projects Carousel */}
        <div 
          className={`relative ${
            inView ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'
          }`}
        >
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: var(--accent);
                border-radius: 3px;
              }
              div::-webkit-scrollbar-thumb {
                background: var(--muted);
                border-radius: 3px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: var(--foreground);
              }
            `}</style>
            
            {relatedProjects.map((project: RelatedProject, index) => (
              <div 
                key={project.id} 
                className="flex-none w-80 group interactive-card bg-background border border-border rounded-2xl p-6 hover:shadow-xl hover:border-foreground/20 hover:z-20 transition-all duration-500"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-accent text-muted rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs bg-accent text-muted rounded-full font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline focus-ring rounded-md"
                  >
                    {project.title}
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Relevance */}
                <div className="bg-accent rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-muted font-medium mb-1">Relevance</div>
                      <p className="text-xs text-muted italic leading-relaxed">
                        {project.relevance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Authors */}
                {project.authors && (
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted">
                      <span className="font-medium">Authors: </span>
                      {project.authors.join(', ')}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation hint */}
        <div 
          className={`text-center mt-8 ${
            inView ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-xs text-muted">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Scroll horizontally to explore more projects
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 