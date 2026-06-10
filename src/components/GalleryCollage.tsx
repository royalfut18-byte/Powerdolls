'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const collage = [
  { title: 'Line-up portrait', path: '/images/power-dolls-lineup.jpg', className: 'md:col-span-2 md:row-span-2 bg-[#fff2df]' },
  { title: 'Star Struck detail', path: '/images/star-struck.jpg', className: 'bg-[#f2ebff]' },
  { title: 'Inside Out detail', path: '/images/inside-out.jpg', className: 'bg-[#ffe6ee]' },
  { title: 'Worry Monster notes', path: '/images/worry-monster.jpg', className: 'bg-[#ebe9ff]' },
  { title: 'Pattern collage', path: '/images/power-dolls-pattern-board.jpg', className: 'md:col-span-2 bg-[#e4f5ff]' },
];

export function GalleryCollage() {
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
            Visual World
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] text-[var(--ink)] sm:text-6xl">
            An editorial collage of pattern, softness, and joyful character.
          </h2>
        </motion.div>

        <div className="grid auto-rows-[200px] gap-5 sm:auto-rows-[220px] md:grid-cols-3">
          {collage.map((item, index) => (
            <motion.figure
              key={item.path}
              initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
              className={`rounded-[1.8rem] border border-black/8 p-3 shadow-[0_22px_60px_rgba(30,19,31,0.12)] ${item.className}`}
            >
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-black/8 bg-[linear-gradient(145deg,_rgba(255,255,255,0.9),_rgba(255,255,255,0.45))] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,_rgba(255,90,151,0.14),_transparent_18%),radial-gradient(circle_at_74%_28%,_rgba(115,212,255,0.18),_transparent_20%),radial-gradient(circle_at_40%_78%,_rgba(255,214,92,0.18),_transparent_24%)]" />
                <span className="relative inline-flex w-fit rounded-full bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white">
                  Replace with image
                </span>
                <div className="relative">
                  <p className="font-display text-[1.8rem] text-[var(--ink)] sm:text-3xl">
                    {item.title}
                  </p>
                  <p className="mt-3 font-mono text-xs text-[rgba(29,19,33,0.6)]">{item.path}</p>
                  {/* Swap this placeholder with the production gallery asset at item.path. */}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
