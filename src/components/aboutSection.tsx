'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">About</h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
        <div className="flex-1 order-2 md:order-1">
          <p className="text-md font-light leading-relaxed">
            Imagine your signature, its particular loops with its particular rhythms. Imagine writing your signature over and over until it becomes a loop and a beat. Hold onto that sound. Now imagine a machine that tries to guess your signature just from the sound. With enough mics and training, would it, could it, reproduce your signature?
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
          <p className="text-md font-light leading-relaxed">
            Deep Drawing is an intermedia AI co-performer that creates a real-time artistic dialogue with human artists on a shared web-based canvas. Our system employs four contact microphones attached to a drawing surface to capture the subtle sounds of pen strokes. Upon predicting the path of the pen through custom machine learning surface sound source localization, the system overlays its predictions onto a live video feed of the human drawing.
          </p>
        </div>
      </div>
    </section>
  );
} 