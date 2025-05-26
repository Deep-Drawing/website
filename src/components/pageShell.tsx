'use client';

import { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
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

      {/* Main Content */}
      {children}

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