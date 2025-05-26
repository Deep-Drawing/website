'use client';

import Image from 'next/image';
import { useLabMembers } from '@/hooks/useLabMembers';

function TeamSection() {
  const { 
    loading, 
    error, 
    getProfessors, 
    getStudents, 
    getAlums,
    getProfilePictureUrl 
  } = useLabMembers();

  if (loading) {
    return (
      <section id="team" className="mt-24 max-w-4xl mx-auto w-full mb-32 scroll-mt-24">
        <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Team</h2>
        <div className="flex justify-center items-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground/20"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="mt-24 max-w-4xl mx-auto w-full mb-32 scroll-mt-24">
        <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Team</h2>
        <div className="text-center text-foreground/70 p-8">
          <p>Error loading team members</p>
        </div>
      </section>
    );
  }

  const professors = getProfessors();
  const students = getStudents();
  const alums = getAlums();

  return (
    <section id="team" className="mt-24 max-w-4xl mx-auto w-full mb-32 scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Team</h2>
      
      {/* Faculty and Current Students */}
      <div className="mb-16">
        <h3 className="text-xl font-medium mb-8">Faculty and Current Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {professors.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                <Image
                  src={getProfilePictureUrl(member)}
                  alt={`${member.name} profile picture`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <h4 className="text-lg">{member.name}</h4>
              <p className="text-sm text-foreground/70 mt-1">{member.position}</p>
            </div>
          ))}

          {students.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                <Image
                  src={getProfilePictureUrl(member)}
                  alt={`${member.name} profile picture`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <h4 className="text-lg">{member.name}</h4>
              <p className="text-sm text-foreground/70 mt-1">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Alumni */}
      {alums.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Alumni</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {alums.map((member) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                  <Image
                    src={getProfilePictureUrl(member)}
                    alt={`${member.name} profile picture`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h4 className="text-lg">{member.name}</h4>
                <p className="text-sm text-foreground/70 mt-1">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

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
      <section id="about" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
        <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">About</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl font-medium mb-4">Subtitle 1</h3>
            <p className="text-lg font-light leading-relaxed mb-4">
              Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing.
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-950 dark:to-blue-800 rounded-lg overflow-hidden">
            <div className="aspect-[1/1] relative">
              <Image 
                src="/images/about-1.png" 
                alt="About Deep Drawing" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="flex-1 order-1 bg-gradient-to-r from-purple-100 to-purple-300 dark:from-purple-950 dark:purple-800 rounded-lg overflow-hidden">
            <div className="aspect-[1/1] relative">
              <Image 
                src="/images/about-2.png" 
                alt="Sound Integration" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 order-2">
            <h3 className="text-2xl font-medium mb-4">Subtitle 2</h3>
            <p className="text-lg font-light leading-relaxed mb-4">
              Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing. 
            </p>
            <p className="text-lg font-light leading-relaxed">
              Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing. Description of Deep Drawing.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
        <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Publications</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-foreground/10 pl-6 py-2">
            <h3 className="text-xl font-medium">Publication Title and Subtitle</h3>
            <p className="text-md text-foreground/70 mt-2 mb-2">Conference, Year</p>
            <p className="text-md font-light mb-4">Author 1, Author 2, Author 3</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm underline hover:text-foreground/70 transition-colors">PDF</a>
              <a href="#" className="text-sm underline hover:text-foreground/70 transition-colors">Demo</a>
              <a href="#" className="text-sm underline hover:text-foreground/70 transition-colors">Code</a>
            </div>
          </div>
        </div>
      </section>

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
