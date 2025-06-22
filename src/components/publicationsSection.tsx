'use client';

import publicationsData from '@/data/publications.json';
import { useEffect, useRef, useState } from 'react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  links: {
    pdf?: string;
    demo?: string;
    code?: string;
  };
}

export default function PublicationsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { publications } = publicationsData;
  
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
  
  // Sort publications in descending order by year (newest first)
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section 
      ref={sectionRef}
      id="publications" 
      className="section-padding scroll-mt-[-20px]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-heading font-semibold mb-6 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Publications
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full mb-6 ${
              inView ? 'animate-scale-in animate-stagger-1' : 'opacity-0'
            }`}
          />
        </div>
        
        {/* Publications Grid */}
        <div className="space-y-8">
          {sortedPublications.map((publication: Publication, index) => (
            <div 
              key={publication.id} 
              className={`group interactive-card bg-background border border-border rounded-2xl p-8 hover:shadow-xl hover:border-foreground/20 transition-all duration-500 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  
                  {/* Title */}
                  <h3 className="text-subheading font-semibold group-hover:text-gradient transition-all duration-300">
                    {publication.title}
                  </h3>
                  
                  {/* Conference */}
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-subtle" />
                    <p className="text-body text-muted font-medium">
                      {publication.conference}
                    </p>
                  </div>
                  
                  {/* Authors */}
                  <p className="text-body text-muted leading-relaxed">
                    {publication.authors.join(', ')}
                  </p>
                </div>
                
                {/* Links */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[120px]">
                  {publication.links.pdf && (
                    <a 
                      href={publication.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 interactive-button focus-ring"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                  )}
                  {publication.links.demo && (
                    <a 
                      href={publication.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-300 focus-ring"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5m-6 0h6" />
                      </svg>
                      Demo
                    </a>
                  )}
                  {publication.links.code && (
                    <a 
                      href={publication.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-300 focus-ring"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 