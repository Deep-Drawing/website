'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="section-padding scroll-mt-[-20px] bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-heading font-semibold mb-6">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full" />
        </AnimatedSection>

        {/* Content Cards */}
        <div className="space-y-16 md:space-y-24">
          {/* First Card */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
            <AnimatedSection 
              direction="left" 
              delay={0.2}
              className="space-y-6 md:col-span-3"
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
            </AnimatedSection>
            
            <AnimatedSection 
              direction="right" 
              delay={0.4}
              className="relative md:col-span-2"
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
            </AnimatedSection>
          </div>

          {/* Second Card */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
            <AnimatedSection 
              direction="left" 
              delay={0.2}
              className="relative order-2 md:order-1 md:col-span-2"
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
            </AnimatedSection>
            
            <AnimatedSection 
              direction="right" 
              delay={0.4}
              className="space-y-6 order-1 md:order-2 md:col-span-3"
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
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
} 