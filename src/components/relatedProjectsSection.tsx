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

        {/* Projects Section */}
        <div>
          <div 
            className={`flex items-center mb-12 ${
              inView ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'
            }`}
          >
            <h3 className="text-subheading font-medium">Inspiring Research</h3>
            <div className="flex-1 h-px bg-border ml-6" />
            <div className="ml-4 px-3 py-1 bg-accent rounded-full text-sm text-muted font-medium">
              Click to explore
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {relatedProjects.map((project: RelatedProject, index) => (
              <div 
                key={project.id}
                className={`group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-500 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.15}s` }}
              >
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Header with Tags */}
                      <div className="flex flex-wrap items-start gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1.5 text-sm bg-accent text-muted rounded-full font-medium border border-border/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-auto p-2 rounded-full bg-accent hover:bg-foreground/10 transition-colors duration-300 focus-ring"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Visit ${project.title}`}
                        >
                          <svg 
                            className="w-5 h-5 text-muted hover:text-foreground transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h4 className="text-subheading font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-body text-muted leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Authors */}
                      {project.authors && project.authors.length > 0 && (
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-foreground rounded-full animate-pulse-subtle" />
                          <div className="text-body text-muted">
                            <span className="font-medium">Researchers: </span>
                            {project.authors.join(', ')}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Relevance */}
                    <div className="relative">
                      <div className="bg-accent rounded-xl p-6 h-full border border-border/50 group-hover:border-foreground/20 transition-colors duration-500">
                        <div className="flex items-start space-x-3 h-full">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-foreground/20 to-muted/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-foreground mb-3">
                              Relevance
                            </div>
                            <p className="text-sm text-muted leading-relaxed">
                              {project.relevance}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action Card */}
            <div 
              className={`group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-500 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(relatedProjects.length + 4) * 0.15}s` }}
            >
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2 space-y-6">
                    {/* Header with Tag */}
                    <div className="flex flex-wrap items-start gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 text-sm bg-accent text-muted rounded-full font-medium border border-border/50">
                          Community
                        </span>
                      </div>
                      <a 
                        href="#join-us" 
                        className="ml-auto p-2 rounded-full bg-accent hover:bg-foreground/10 transition-colors duration-300 focus-ring"
                        aria-label="Go to Join Us section"
                      >
                        <svg 
                          className="w-5 h-5 text-muted hover:text-foreground transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h4 className="text-subheading font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                        Know of Related Work?
                      </h4>
                      <p className="text-body text-muted leading-relaxed">
                        We&apos;re always looking to expand our understanding of the field. 
                        If you know of projects that align with our research, we&apos;d love to hear about them.
                      </p>
                    </div>

                    {/* Action */}
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-pulse-subtle" />
                      <div className="text-body text-muted">
                        
                        <a 
                          href="mailto:zhujulie@umich.edu" 
                          className="text-foreground hover:text-gradient transition-colors duration-300 underline hover:no-underline"
                        >
                          Share your discoveries
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Call to Action */}
                  <div className="relative">
                    <div className="bg-accent rounded-xl p-6 h-full border border-border/50 group-hover:border-foreground/20 transition-colors duration-500">
                      <div className="flex items-start space-x-3 h-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-foreground/20 to-muted/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-2-4h6a2 2 0 012 2v6a2 2 0 01-2 2H9l-4 4v-4H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground mb-3">
                            Talk to Us
                          </div>
                          <p className="text-sm text-muted leading-relaxed">
                            Let&apos;s chat about projects that explore similar themes of human-AI collaboration, music, art, and interactive systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 