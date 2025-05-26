'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
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
  );
} 