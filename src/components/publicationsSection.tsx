'use client';

import publicationsData from '@/data/publications.json';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  links: {
    pdf?: string;
    demo?: string;
    code?: string;
  };
}

export default function PublicationsSection() {
  const { publications } = publicationsData;
  
  // Sort publications in descending order by year (newest first)
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section id="publications" className="mt-24 max-w-4xl mx-auto w-full scroll-mt-24">
      <h2 className="text-center text-3xl font-semibold mb-8 tracking-tight">Publications</h2>
      
      <div className="space-y-8">
        {sortedPublications.map((publication: Publication) => (
          <div key={publication.id} className="border-l-2 border-foreground/10 pl-6 py-2">
            <h3 className="text-lg font-medium">{publication.title}</h3>
            <p className="text-md text-foreground/70 mt-2 mb-2">{publication.conference}</p>
            <p className="text-md font-light mb-4">{publication.authors.join(', ')}</p>
            <div className="flex gap-4">
              {publication.links.pdf && (
                <a href={publication.links.pdf} className="text-sm underline hover:text-foreground/70 transition-colors">PDF</a>
              )}
              {publication.links.demo && (
                <a href={publication.links.demo} className="text-sm underline hover:text-foreground/70 transition-colors">Demo</a>
              )}
              {publication.links.code && (
                <a href={publication.links.code} className="text-sm underline hover:text-foreground/70 transition-colors">Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 