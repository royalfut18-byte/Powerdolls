'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function GivingBack() {
  return (
    <section id="giving-back" className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.4rem] bg-[#fff8ef] p-5 shadow-[0_25px_80px_rgba(31,21,27,0.1)] md:grid-cols-[0.95fr_1.05fr] md:p-7">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="pattern-heart relative overflow-hidden rounded-[2rem] bg-[#171319] p-7 text-white md:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15),_transparent_52%)]" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/58">Giving Back</p>
              <h2 className="font-display text-5xl leading-[0.95] text-[#fff7ef] sm:text-6xl">
                Care that keeps moving outward.
              </h2>
            </div>
            <div className="stitched-card max-w-sm bg-white/8 px-5 py-5 text-sm leading-7 text-white/74">
              Every doll sold includes a donation to chosen charities, helping Power Dolls make a
              difference beyond the moment of purchase.
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center gap-7 px-2 py-4 md:px-6"
        >
          <div className="relative min-h-[13rem] rounded-[2rem] bg-[linear-gradient(140deg,_#ffeec5,_#ffd2e4_48%,_#cfeeff)] p-6">
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55" />
            <div className="absolute left-[22%] top-[38%] h-12 w-12 rounded-full bg-[#ff5a97]" />
            <div className="absolute right-[24%] top-[33%] h-10 w-10 rounded-full bg-[#73d4ff]" />
            <div className="absolute bottom-[22%] left-1/2 h-16 w-16 -translate-x-1/2 rounded-[42%_58%_60%_40%/45%_42%_58%_55%] bg-[#ffd65c]" />
          </div>
          <p className="max-w-xl text-lg leading-8 text-[rgba(29,19,33,0.76)]">
            This is not charity as a footnote. It is built into the meaning of the brand: comfort
            in a child’s hands, and support reaching further into the community.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="button-primary w-fit"
          >
            Support the Mission
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
