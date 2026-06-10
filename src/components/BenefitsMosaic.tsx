'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const benefits = [
  { name: 'Confidence', className: 'bg-[#fff1da] text-[#3a2717] md:col-span-2' },
  { name: 'Courage', className: 'bg-[#201328] text-white' },
  { name: 'Comfort', className: 'bg-[#ffd95c] text-[#291d10]' },
  { name: 'Imagination', className: 'bg-[#9b7cff] text-white md:row-span-2' },
  { name: 'Self-worth', className: 'bg-[#ff93bb] text-[#3a1322]' },
  { name: 'Emotional expression', className: 'bg-[#7edcff] text-[#10273a] md:col-span-2' },
  { name: 'Hope', className: 'bg-[#1f4567] text-white' },
  { name: 'Learning support', className: 'bg-[#bbef7c] text-[#19311e]' },
];

export function BenefitsMosaic() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.42em] text-[rgba(29,19,33,0.56)]">
            Emotional Benefits
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl">
            Designed to nurture what children need most.
          </h2>
        </motion.div>

        <div className="grid auto-rows-[145px] gap-4 sm:auto-rows-[170px] md:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
              className={`sticker-outline relative overflow-hidden rounded-[1.8rem] p-5 shadow-[0_18px_45px_rgba(28,20,26,0.1)] ${benefit.className}`}
            >
              <div className="absolute right-4 top-4 h-12 w-12 rounded-full border border-current/18" />
              <div className="absolute bottom-4 left-5 h-px w-24 bg-current/25" />
              <p className="max-w-[12rem] font-display text-[1.75rem] leading-tight sm:text-3xl">
                {benefit.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
