'use client';

import PageShell from '@/components/pageShell';
import HeroSection from '@/components/heroSection';
import AboutSection from '@/components/aboutSection';
import TeamSection from '@/components/teamSection';
import PublicationsSection from '@/components/publicationsSection';
import RelatedProjectsSection from '@/components/relatedProjectsSection';
import JoinUsSection from '@/components/joinUsSection';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <PageShell>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <TeamSection />
        <RelatedProjectsSection />
        <JoinUsSection />
      </PageShell>
    </>
  );
}
