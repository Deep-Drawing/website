'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLElement>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;
  
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isInView];
}

// Staggered animation hook for multiple elements
export function useStaggeredAnimation(
  count: number,
  delay: number = 100,
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLElement>, boolean, (index: number) => string] {
  const [elementRef, isInView] = useScrollAnimation(options);

  const getAnimationDelay = (index: number): string => {
    return `${index * delay}ms`;
  };

  return [elementRef, isInView, getAnimationDelay];
}

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

// Parallax scroll hook
export function useParallax(speed: number = 0.5): [RefObject<HTMLElement>, { transform: string }] {
  const [transform, setTransform] = useState({ transform: 'translateY(0px)' });
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;

      setTransform({
        transform: `translateY(${rate}px)`
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, transform];
}

// Mouse tracking hook for interactive elements
export function useMouseTracking(): [RefObject<HTMLElement>, { x: number; y: number }] {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return [elementRef, mousePosition];
} 