'use client';

import PageShell from '@/components/pageShell';
import HeroSection from '@/components/heroSection';
import AboutSection from '@/components/aboutSection';
import TeamSection from '@/components/teamSection';
import PublicationsSection from '@/components/publicationsSection';

export default function Home() {
  return (
    <PageShell>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Publications Section */}
      <PublicationsSection />

      {/* Team Section */}
      <TeamSection />
    </PageShell>
  );
}
