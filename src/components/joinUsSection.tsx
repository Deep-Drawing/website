'use client';

export default function JoinUsSection() {
  return (
    <section id="join-us" className="mt-24 max-w-4xl mx-auto w-full mb-32 scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Join Us</h2>
      
      <div className="relative border border-foreground/10 rounded-lg overflow-hidden">
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-foreground/5 to-foreground/10 p-6 border-b border-foreground/10">
          <div className="flex items-center justify-center gap-6">
            <a href="https://artsengine.engin.umich.edu/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/artsengine.webp" 
                alt="ArtsEngine Logo" 
                className="h-10 object-contain hover:opacity-80 transition-opacity"
              />
            </a>
            <div className="text-center">
              <h3 className="text-xl font-medium">UARTS FEAST Project</h3>
              <p className="text-sm text-foreground/70">Faculty Engineering/Arts Student Teams </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-8">
          <div className="text-center max-w-2xl mx-auto">
            
            <p className="text-foreground/70 leading-relaxed mb-4">
              Deep Drawing is a UARTS FEAST (Faculty Engineering/Arts Student Teams) project sponsored by the ArtsEngine initiative at the University of Michigan. We are always looking for highly motivated students who are interested in the intersection of AI, music, and art.
            </p>
            
            <div className="bg-foreground/5 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground/60 mb-2 font-medium">Available Opportunities:</p>
              <div className="text-sm text-foreground/70 space-y-1">
                <div>• Machine Learning & Signal Processing roles</div>
                <div>• Summer research fellowships for qualifying students</div>
                <div>• Open to all students on campus</div>
              </div>
            </div>
            
            <a 
              href="https://artsengine.engin.umich.edu/feast/deep-drawing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg hover:bg-foreground/80 transition-colors font-medium"
            >
              Apply to Join Deep Drawing
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 