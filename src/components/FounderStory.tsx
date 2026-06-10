'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function FounderStory() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-6xl gap-6 rounded-[2.4rem] bg-[rgba(255,252,247,0.82)] p-6 shadow-[0_22px_70px_rgba(31,21,27,0.09)] backdrop-blur-sm md:grid-cols-[0.72fr_1.28fr] md:p-8"
      >
        <div className="rounded-[1.8rem] bg-[#18141a] p-6 text-white">
          <p className="text-xs uppercase tracking-[0.42em] text-white/58">Founder Story</p>
          <p className="mt-8 font-script text-4xl text-[#ffe2a1]">Katerina Jovevski</p>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/60">Company Director</p>
        </div>
        <div className="flex flex-col justify-center gap-5 px-1 py-2 md:px-5">
          <h2 className="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
            Created with the belief that children deserve love, encouragement, imagination, and
            support through every chapter.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-[rgba(29,19,33,0.74)]">
            The Power Dolls story is personal, warm, and practical: a belief that design can offer
            comfort, that words can build courage, and that a doll can become a reassuring friend
            in moments when children need extra strength.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
