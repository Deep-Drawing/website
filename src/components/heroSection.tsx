'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="text-center space-y-6 pt-8 pb-20">
          {/* Main Title */}
          <div className="">
            <AnimatedSection>
              <h1 className="text-display font-bold tracking-tight text-gradient leading-tight pb-4">
                Deep Drawing
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-body-large text-muted max-w-3xl mx-auto leading-relaxed">
                Towards an intuitive artistic dialogue between humans and AI. Through sound.
              </p>
            </AnimatedSection>
          </div>

          {/* Hero Image */}
          <AnimatedSection 
            direction="scale" 
            delay={0.4}
            className="relative max-w-6xl mx-auto"
          >
            <div className="aspect-[16/9] relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              
              <Image 
                src="/images/cover.png" 
                alt="Deep Drawing - AI and Human Artistic Collaboration" 
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              />
              
              {/* Subtle border */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-foreground/3 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection 
          delay={0.6}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-pulse-subtle"
        >
          <span className="text-xs text-muted font-medium tracking-wider uppercase">Scroll to explore</span>
          <a 
            href="#about" 
            className="p-2 rounded-full hover:bg-accent transition-colors duration-300 focus-ring"
            aria-label="Scroll to About section"
          >
            <svg 
              className="w-6 h-6 text-muted animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>

    </section>
  );
} 