'use client';

import Image from 'next/image';
import { useLabMembers } from '@/hooks/useLabMembers';

export default function TeamSection() {
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
      <section id="team" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
        <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Team</h2>
        <div className="flex justify-center items-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground/20"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
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
    <section id="team" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Team</h2>
      
      {/* Faculty and Current Students */}
      <div className="mb-16">
        <h3 className="text-xl font-medium mb-8">Faculty and Current Students</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {professors.map((member) => {
            const content = (
              <>
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
              </>
            );

            return member.website ? (
              <a
                key={member.id}
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            ) : (
              <div key={member.id} className="group">
                {content}
              </div>
            );
          })}

          {students.map((member) => {
            const content = (
              <>
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
              </>
            );

            return member.website ? (
              <a
                key={member.id}
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            ) : (
              <div key={member.id} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Alumni */}
      {alums.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Alumni</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {alums.map((member) => {
              const content = (
                <>
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
                </>
              );

              return member.website ? (
                <a
                  key={member.id}
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={member.id} className="group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
} 