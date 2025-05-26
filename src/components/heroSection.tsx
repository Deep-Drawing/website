'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="min-h-screen w-full flex flex-col px-4 pt-4">
      <div className="flex-1 flex flex-col justify-evenly max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-3xl md:text-5xl font-medium tracking-tight">
            Deep Drawing
          </h1>
          
          <p className="text-center text-lg md:text-xl font-light w-full leading-relaxed">
            Towards an intuitive artistic dialogue between humans and AI. Through sound.
          </p>

          <div className="aspect-[9/4] w-full bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
            <Image 
              src="/images/cover.png" 
              alt="" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <a 
            href="#about" 
            className="animate-bounce-slow flex flex-col items-center text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Scroll to About section"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
} 