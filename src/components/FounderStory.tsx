'use client';

import Image from 'next/image';
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
        className="mx-auto grid max-w-6xl gap-6 rounded-[2.4rem] bg-[rgba(255,252,247,0.82)] p-6 shadow-[0_22px_70px_rgba(31,21,27,0.09)] md:grid-cols-[0.86fr_1.14fr] md:p-8"
      >
        <div className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-[0_18px_48px_rgba(31,21,27,0.08)]">
          <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,_#fffaf4,_#f2ebe2)]">
            <Image
              src="/images/ownerimagebetterratio.png"
              alt="Power Dolls founder Muston with a group of dolls"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div className="bg-[#18141a] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.42em] text-white/58">Founder Story</p>
            <p className="mt-6 font-script text-4xl text-[#ffe2a1]">Muston</p>
            <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/60">Company Director</p>
          </div>
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
