'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function JoinUsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="join-us" 
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
            Join Us
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full mb-6 ${
              inView ? 'animate-scale-in animate-stagger-1' : 'opacity-0'
            }`}
          />
        </div>
        
        {/* Main Content Card */}
        <div 
          className={`relative max-w-4xl mx-auto ${
            inView ? 'animate-scale-in animate-stagger-3' : 'opacity-0'
          }`}
        >
          <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-xl">
            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 p-6 border-b border-border">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href="https://artsengine.engin.umich.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive-card hover:scale-105 transition-transform duration-300 focus-ring rounded-xl"
                >
                  <Image
                    src="/images/artsengine.webp" 
                    alt="ArtsEngine Logo" 
                    width={48}
                    height={48}
                    className="h-10 md:h-12 object-contain"
                  />
                </a>
                
                <div className="text-center md:text-left">
                  <h3 className="text-subheading font-semibold mb-2">UARTS FEAST Project</h3>
                  <p className="text-body text-muted">Faculty Engineering/Arts Student Teams</p>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto space-y-8">
                <div className="space-y-6">
                  <p className="text-body text-muted leading-relaxed">
                    Deep Drawing is a UARTS FEAST (Faculty Engineering/Arts Student Teams) project 
                    sponsored by the ArtsEngine initiative at the University of Michigan. We are 
                    always looking for highly motivated students who are interested in the 
                    intersection of AI, music, and art.
                  </p>
                  
                  {/* Opportunities Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-accent rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">Machine Learning</h4>
                      <p className="text-sm text-muted">Signal processing and AI research roles</p>
                    </div>
                    
                    <div className="bg-accent rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">Summer Fellowships</h4>
                      <p className="text-sm text-muted">Research fellowships for qualifying students</p>
                    </div>
                    
                    <div className="bg-accent rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-2">Open to All</h4>
                      <p className="text-sm text-muted">All students on campus welcome</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <a 
                    href="https://artsengine.engin.umich.edu/feast/deep-drawing/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 interactive-button focus-ring"
                  >
                    Apply to Join Deep Drawing
                    <svg 
                      className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating background elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl animate-float" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
} 