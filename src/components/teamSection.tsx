'use client';

import Image from 'next/image';
import { useLabMembers } from '@/hooks/useLabMembers';
import { useEffect, useRef, useState } from 'react';

export default function TeamSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { 
    loading, 
    error, 
    getProfessors, 
    getStudents, 
    getAlums,
    getProfilePictureUrl 
  } = useLabMembers();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (loading) {
    return (
      <section 
        ref={sectionRef}
        id="team" 
        className="section-padding scroll-mt-[-20px]"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading font-semibold mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full" />
          </div>
          
          {/* Loading skeleton */}
          <div className="flex justify-center items-center min-h-64">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-accent border-t-foreground rounded-full animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-muted rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section 
        ref={sectionRef}
        id="team" 
        className="section-padding scroll-mt-[-20px]"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-heading font-semibold mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full" />
          </div>
          
          <div className="text-center p-12 bg-accent rounded-2xl">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Unable to load team members</h3>
            <p className="text-muted">Please try refreshing the page</p>
          </div>
        </div>
      </section>
    );
  }

  const professors = getProfessors();
  const students = getStudents();
  const alums = getAlums();

  const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
    const content = (
      <div 
        className={`group interactive-card bg-background border border-border rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-xl hover:border-foreground/20 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex flex-col items-center text-center h-full">
          <div className="relative mb-4">
            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={getProfilePictureUrl(member)}
                alt={`${member.name} profile picture`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="128px"
              />
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>
          </div>
          
          {/* Text content with consistent spacing */}
          <div className="flex-1 flex flex-col justify-center space-y-2 mb-4">
            <h4 className="text-lg font-semibold group-hover:text-gradient transition-all duration-300 min-h-[3.5rem] flex items-center justify-center text-center leading-tight">
              {member.name}
            </h4>
            <p className="text-sm text-muted font-medium min-h-[2.5rem] flex items-center justify-center text-center leading-tight">
              {member.position}
            </p>
          </div>
          
          {/* Website section - always rendered for consistent positioning */}
          <div className="min-h-[1.5rem] flex items-center justify-center">
            {member.website ? (
              <div className="inline-flex items-center text-xs text-muted group-hover:text-foreground transition-colors duration-300">
                <span>View Profile</span>
                <svg className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            ) : (
              <div className="opacity-0 pointer-events-none">
                <span className="text-xs">View Profile</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    return member.website ? (
      <a
        href={member.website}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring rounded-2xl"
      >
        {content}
      </a>
    ) : (
      <div className="focus-ring rounded-2xl">
        {content}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="team" 
              className="section-padding scroll-mt-[-20px] bg-secondary/20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-heading font-semibold mb-6 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Our Team
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-foreground to-muted mx-auto rounded-full mb-6 ${
              inView ? 'animate-scale-in animate-stagger-1' : 'opacity-0'
            }`}
          />
        </div>
        
        {/* Team Stats */}
        <div 
          className={`mb-20 grid grid-cols-2 md:grid-cols-5 gap-8 ${
            inView ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'
          }`}
        >
          <div className="text-center p-6 bg-background border border-border rounded-xl">
            <div className="text-2xl font-bold text-gradient mb-2">1</div>
            <div className="text-sm text-muted font-medium">Project</div>
          </div>
          <div className="text-center p-6 bg-background border border-border rounded-xl">
            <div className="text-2xl font-bold text-gradient mb-2">{professors.length}</div>
            <div className="text-sm text-muted font-medium">Faculty</div>
          </div>
          <div className="text-center p-6 bg-background border border-border rounded-xl">
            <div className="text-2xl font-bold text-gradient mb-2">{students.length}</div>
            <div className="text-sm text-muted font-medium">Students</div>
          </div>
          <div className="text-center p-6 bg-background border border-border rounded-xl">
            <div className="text-2xl font-bold text-gradient mb-2">{alums.length}</div>
            <div className="text-sm text-muted font-medium">Alumni</div>
          </div>
          <div className="text-center p-6 bg-background border border-border rounded-xl">
            <div className="text-2xl font-bold text-gradient mb-2">∞</div>
            <div className="text-sm text-muted font-medium">Possibilities</div>
          </div>
        </div>
        
        {/* Faculty and Current Students */}
        <div className="mb-20">
          <div 
            className={`flex items-center mb-12 ${
              inView ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0'
            }`}
          >
            <h3 className="text-subheading font-medium">Faculty & Current Students</h3>
            <div className="flex-1 h-px bg-border ml-6" />
            <div className="ml-4 px-3 py-1 bg-accent rounded-full text-xs text-muted font-medium">
              {professors.length + students.length} members
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {[...professors, ...students].map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
        
        {/* Alumni */}
        {alums.length > 0 && (
          <div>
            <div 
              className={`flex items-center mb-12 ${
                inView ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0'
              }`}
            >
              <h3 className="text-subheading font-medium">Alumni</h3>
              <div className="flex-1 h-px bg-border ml-6" />
              <div className="ml-4 px-3 py-1 bg-accent rounded-full text-xs text-muted font-medium">
                {alums.length} alumni
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
              {alums.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index + professors.length + students.length} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 