'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { startTransition, useEffect, useState } from 'react';
import { BenefitsMosaic } from '@/components/BenefitsMosaic';
import { ContactFooter } from '@/components/ContactFooter';
import { DollShowcase } from '@/components/DollShowcase';
import { FounderStory } from '@/components/FounderStory';
import { GalleryCollage } from '@/components/GalleryCollage';
import { GivingBack } from '@/components/GivingBack';
import { Hero } from '@/components/Hero';
import { IntroLoader } from '@/components/IntroLoader';
import { Navbar } from '@/components/Navbar';
import { PurposeSection } from '@/components/PurposeSection';

export function PowerDollsPage() {
  const reduceMotion = useReducedMotion();
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      startTransition(() => setIntroVisible(false));
    }, reduceMotion ? 900 : 2500);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--cream)] text-[var(--ink)]">
      <AnimatePresence>{introVisible ? <IntroLoader key="intro" /> : null}</AnimatePresence>

      <motion.div
        animate={{ opacity: introVisible ? 0.2 : 1, scale: introVisible ? 1.01 : 1 }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,88,156,0.12),_transparent_30%),radial-gradient(circle_at_85%_18%,_rgba(58,175,255,0.16),_transparent_22%),radial-gradient(circle_at_50%_80%,_rgba(255,206,84,0.16),_transparent_24%),linear-gradient(180deg,_#fff8ef_0%,_#fff6ee_48%,_#fbe7f2_100%)]"
        />
        <Navbar />
        <main>
          <Hero />
          <PurposeSection />
          <DollShowcase />
          <BenefitsMosaic />
          <GivingBack />
          <FounderStory />
          <GalleryCollage />
        </main>
        <ContactFooter />
      </motion.div>
    </div>
  );
}
