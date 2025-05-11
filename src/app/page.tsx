export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)] flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-10 bg-background/80 backdrop-blur-sm">
        <div className="text-lg font-medium tracking-tight"><i>deep drawing</i></div>
        <div className="flex gap-8 text-lg pr-16">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#publications" className="hover:opacity-70 transition-opacity">Publications</a>
          <a href="#team" className="hover:opacity-70 transition-opacity">Team</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mt-32 flex flex-col gap-12 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl tracking-tight">
          Deep Drawing
        </h1>
        
        <p className="text-lg md:text-xl font-light w-full leading-relaxed">
          Towards an instantaneous artistic dialogue between humans and AI. Through sound.
        </p>

        <div className="aspect-[16/9] w-full bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
          {/* Image placeholder - replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
            Featured Project Image
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="mt-32 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-12 tracking-tight">About</h2>
        
        <p className="text-lg font-light leading-relaxed mb-6">
          Description of Deep Drawing, and pictures, if necessary.
        </p>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mt-32 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-12 tracking-tight">Publications</h2>
        
        <div className="space-y-12">
          {/* Publication 1 */}
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
      <section id="team" className="mt-32 max-w-5xl mx-auto w-full mb-32">
        <h2 className="text-2xl font-semibold mb-12 tracking-tight">Team</h2>
        
        {/* Faculties and Current Students */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Faculties and Current Students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[1, 2].map((item) => (
              <a href="#" key={`faculty-${item}`} className="group cursor-pointer">
                <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                  {/* Replace with actual faculty images */}
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                    Faculty {item}
                  </div>
                </div>
                <h4 className="text-lg">Faculty Name {item}</h4>
                <p className="text-sm text-foreground/70 mt-1">Professor</p>
              </a>
            ))}

            {[1, 2, 3].map((item) => (
              <a href="#" key={`current-${item}`} className="group cursor-pointer">
                <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                  {/* Replace with actual current student images */}
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                    Student {item}
                  </div>
                </div>
                <h4 className="text-lg">Student Name {item}</h4>
                <p className="text-sm text-foreground/70 mt-1">Undergraduate/Master&apos;s/PhD Student</p>
              </a>
            ))}
          </div>
        </div>
        
        {/* Alumni */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Alumni</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[1, 2, 3].map((item) => (
              <a href="#" key={`past-${item}`} className="group cursor-pointer">
                <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4 relative w-40">
                  {/* Replace with actual alumni images */}
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                    Alumni {item}
                  </div>
                </div>
                <h4 className="text-lg">Alumni Name {item}</h4>
                <p className="text-sm text-foreground/70 mt-1">Next: Master&apos;s/PhD at School</p>
              </a>
            ))}
          </div>
        </div>
      </section>

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
