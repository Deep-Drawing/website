'use client';

// Simple utility functions for scroll animations
// Most functionality is now handled by AnimatedSection component using Framer Motion

// Smooth scroll utility
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId.replace('#', ''));
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Simple hook for components that need basic visibility detection
export function useInView() {
  // This is kept for legacy compatibility if needed
  // For new components, use AnimatedSection instead
  return {
    ref: null,
    inView: true
  };
} 