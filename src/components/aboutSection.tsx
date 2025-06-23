'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
      id="about" 
      className="section-padding scroll-mt-[-20px] bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-heading font-semibold mb-6 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            About
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full ${
              inView ? 'animate-scale-in animate-stagger-1' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content Cards */}
        <div className="space-y-16 md:space-y-24">
          {/* First Card */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
            <div 
              className={`space-y-6 md:col-span-3 ${
                inView ? 'animate-slide-in-left animate-stagger-2' : 'opacity-0'
              }`}
            >
              <div className="space-y-4">
                <p className="text-body text-muted leading-relaxed">
                  Imagine your signature, its particular loops with its particular rhythms.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Imagine writing your signature over and over until it becomes a loop and a beat.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Hold onto that sound.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Now imagine a machine that tries to guess your signature just from the sound.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  With enough mics and training, would it, could it, reproduce your signature?
                </p>
              </div>
            </div>
            
            <div 
              className={`relative md:col-span-2 ${
                inView ? 'animate-slide-in-right animate-stagger-3' : 'opacity-0'
              }`}
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl interactive-card">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <Image 
                  src="/images/about-1.png" 
                  alt="Deep Drawing - Sound visualization and AI prediction" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10" />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-xl animate-float" />
            </div>
          </div>

          {/* Second Card */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
            <div 
              className={`relative order-2 md:order-1 md:col-span-2 ${
                inView ? 'animate-slide-in-left animate-stagger-4' : 'opacity-0'
              }`}
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl interactive-card">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                <Image 
                  src="/images/about-2.png" 
                  alt="Deep Drawing - Real-time artistic collaboration interface" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/10" />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
                      Our Technology
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <div 
              className={`space-y-6 order-1 md:order-2 md:col-span-3 ${
                inView ? 'animate-slide-in-right animate-stagger-5' : 'opacity-0'
              }`}
            >
              <div className="space-y-4">
                <p className="text-body text-muted leading-relaxed">
                  Deep Drawing is an intermedia AI co-performer that creates a real-time 
                  artistic dialogue with human artists on a shared web-based canvas.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Our system employs four contact microphones attached to a drawing surface 
                  to capture the subtle sounds of pen strokes.
                </p>
                <p className="text-body text-muted leading-relaxed">
                  Upon predicting the path of 
                  the pen through surface sound source localization, 
                  the system overlays its predictions onto a live video feed of the human drawing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 