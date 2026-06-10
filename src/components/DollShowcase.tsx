'use client';

import { motion } from 'framer-motion';
import { DollCard } from '@/components/DollCard';
import { dolls } from '@/lib/dolls';
import { fadeUp } from '@/lib/animations';

export function DollShowcase() {
  return (
    <section id="dolls" className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-[rgba(29,19,33,0.56)]">
              Meet the Power Dolls
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl">
              Six distinct characters, each carrying a world of comfort, courage, and colour.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[rgba(29,19,33,0.7)]">
            Every card is styled as its own mini-world, echoing the doll’s purpose through pattern,
            motion, tone, and storytelling.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {dolls.map((doll, index) => (
            <DollCard key={doll.name} doll={doll} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
