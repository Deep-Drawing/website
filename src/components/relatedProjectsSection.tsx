'use client';

import relatedProjectsData from '@/data/relatedProjects.json';

interface RelatedProject {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  relevance: string;
  authors?: string[];
}

export default function RelatedProjectsSection() {
  const { relatedProjects } = relatedProjectsData;

  return (
    <section id="related-projects" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Related Projects</h2>
      
      <div 
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'auto',
          scrollbarColor: 'rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1)'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            height: 8px;
          }
          div::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 4px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.5);
          }
          @media (prefers-color-scheme: dark) {
            div::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.1);
            }
            div::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.3);
            }
            div::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.5);
            }
          }
        `}</style>
        
        {relatedProjects.map((project: RelatedProject) => (
          <div key={project.id} className="flex-none w-80 border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 text-xs bg-foreground/5 text-foreground/60 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-medium mb-2">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground/70 transition-colors"
              >
                {project.title} ↗
              </a>
            </h3>
            
            <p className="text-sm text-foreground/70 leading-relaxed mb-3">{project.description}</p>

            <div className="text-xs text-foreground/50 italic border-l-2 border-foreground/10 pl-3">
              {project.relevance}
            </div>

            {project.authors && (
              <div className="text-xs text-foreground/50 mt-2">
                {project.authors.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 