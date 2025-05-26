'use client';

import Image from 'next/image';
import AboutSection from '@/components/aboutSection';
import TeamSection from '@/components/teamSection';
import PublicationsSection from '@/components/publicationsSection';

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)] flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-10 bg-background/80 backdrop-blur-sm">
        <div className="text-lg font-medium tracking-tight"><a href="#">画</a></div>
        <div className="flex gap-8 text-lg pr-16">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#publications" className="hover:opacity-70 transition-opacity">Publications</a>
          <a href="#team" className="hover:opacity-70 transition-opacity">Team</a>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <AboutSection />

      {/* Publications Section */}
      <PublicationsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10 flex justify-between items-center text-sm text-foreground/70">
        <div className="pl-8">© 2025 Deep Drawing</div>
        <div className="flex gap-6 pr-8">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
