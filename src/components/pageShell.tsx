'use client';

import { ReactNode, useEffect, useState } from 'react';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#publications', label: 'Publications' },
    { href: '#team', label: 'Team' },
    { href: '#related-projects', label: 'Related Projects' },
    { href: '#join-us', label: 'Join Us' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="text-2xl font-semibold tracking-tight">
              <a 
                href="#" 
                className="hover:opacity-70 transition-opacity duration-300 focus-ring rounded-md px-2 py-1"
              >
                画
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 focus-ring rounded-md px-3 py-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus-ring rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen 
              ? 'max-h-96 opacity-100 bg-background/95 backdrop-blur-xl border-b border-border' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 focus-ring rounded-md px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 md:py-6 border-t border-border bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted">
              © 2025 Deep Drawing. All rights reserved.
            </div>
            <div className="text-sm text-muted">
              Questions about the project? 
              <a href="mailto:artsengine@umich.edu" className="ml-1 text-foreground hover:underline focus-ring rounded">
                Get in touch.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 