'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const benefits = [
  {
    name: 'Confidence',
    className: 'text-[#3a2717] md:col-span-2',
    surfaceClassName:
      'bg-[linear-gradient(135deg,rgba(255,248,233,0.98),rgba(255,221,184,0.95)_52%,rgba(255,192,137,0.92))]',
    glowClassName: 'bg-[#ffcf98]/80',
    accentClassName:
      'bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),transparent_42%),repeating-linear-gradient(135deg,rgba(58,39,23,0.08)_0_8px,transparent_8px_16px)]',
  },
  {
    name: 'Courage',
    className: 'text-white',
    surfaceClassName:
      'bg-[linear-gradient(145deg,rgba(27,16,39,0.98),rgba(54,26,72,0.96)_50%,rgba(20,42,86,0.94))]',
    glowClassName: 'bg-[#ff5aa0]/30',
    accentClassName:
      'bg-[radial-gradient(circle_at_68%_32%,rgba(255,255,255,0.18),transparent_38%),linear-gradient(135deg,transparent_0_46%,rgba(255,255,255,0.12)_46%_54%,transparent_54%_100%)]',
  },
  {
    name: 'Comfort',
    className: 'text-[#291d10]',
    surfaceClassName:
      'bg-[linear-gradient(145deg,rgba(255,244,179,0.98),rgba(255,217,92,0.96)_54%,rgba(255,171,89,0.92))]',
    glowClassName: 'bg-white/60',
    accentClassName:
      'bg-[radial-gradient(circle_at_26%_32%,rgba(255,255,255,0.88),transparent_38%),radial-gradient(circle_at_72%_72%,rgba(255,255,255,0.32),transparent_32%)]',
  },
  {
    name: 'Imagination',
    className: 'text-white md:row-span-2',
    surfaceClassName:
      'bg-[linear-gradient(160deg,rgba(120,95,255,0.98),rgba(157,124,255,0.96)_44%,rgba(255,110,184,0.9))]',
    glowClassName: 'bg-[#73d4ff]/45',
    accentClassName:
      'bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_74%_76%,rgba(255,231,124,0.22),transparent_26%),repeating-radial-gradient(circle_at_55%_50%,rgba(255,255,255,0.12)_0_2px,transparent_2px_18px)]',
  },
  {
    name: 'Self-worth',
    className: 'text-[#3a1322]',
    surfaceClassName:
      'bg-[linear-gradient(135deg,rgba(255,211,228,0.98),rgba(255,147,187,0.96)_52%,rgba(255,102,147,0.92))]',
    glowClassName: 'bg-[#fff3ba]/55',
    accentClassName:
      'bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.78),transparent_34%),linear-gradient(135deg,transparent_0_40%,rgba(255,255,255,0.2)_40%_58%,transparent_58%_100%)]',
  },
  {
    name: 'Emotional expression',
    className: 'text-[#10273a] md:col-span-2',
    surfaceClassName:
      'bg-[linear-gradient(135deg,rgba(225,249,255,0.98),rgba(126,220,255,0.95)_56%,rgba(82,170,255,0.9))]',
    glowClassName: 'bg-white/65',
    accentClassName:
      'bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.82),transparent_34%),repeating-linear-gradient(90deg,rgba(16,39,58,0.08)_0_10px,transparent_10px_22px)]',
  },
  {
    name: 'Hope',
    className: 'text-white',
    surfaceClassName:
      'bg-[linear-gradient(150deg,rgba(20,50,86,0.98),rgba(31,69,103,0.96)_46%,rgba(73,132,180,0.9))]',
    glowClassName: 'bg-[#73d4ff]/30',
    accentClassName:
      'bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.14),transparent_56%)]',
  },
  {
    name: 'Learning support',
    className: 'text-[#19311e]',
    surfaceClassName:
      'bg-[linear-gradient(135deg,rgba(239,255,208,0.98),rgba(187,239,124,0.96)_52%,rgba(121,207,111,0.9))]',
    glowClassName: 'bg-[#fff6bf]/55',
    accentClassName:
      'bg-[radial-gradient(circle_at_32%_34%,rgba(255,255,255,0.84),transparent_34%),repeating-linear-gradient(135deg,rgba(25,49,30,0.08)_0_8px,transparent_8px_18px)]',
  },
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
              className={`sticker-outline group relative overflow-hidden rounded-[1.8rem] border border-black/6 p-5 shadow-[0_22px_55px_rgba(28,20,26,0.12)] ${benefit.className}`}
            >
              <div className={`absolute inset-0 ${benefit.surfaceClassName}`} />
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-xl transition-transform duration-500 group-hover:scale-110 ${benefit.glowClassName}`}
              />
              <div className={`absolute inset-0 opacity-80 ${benefit.accentClassName}`} />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                <span className="rounded-full border border-current/16 bg-white/14 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] backdrop-blur-[2px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="h-12 w-12 rounded-full border border-current/18 bg-white/10 backdrop-blur-[2px]" />
              </div>
              <div className="absolute bottom-5 right-5 h-20 w-20 rounded-[1.4rem] border border-current/16 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute bottom-10 left-5 h-px w-24 bg-current/25" />
              <p className="relative z-10 mt-10 max-w-[12rem] font-display text-[1.75rem] leading-tight sm:text-3xl">
                {benefit.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
