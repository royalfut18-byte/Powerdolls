'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { dolls } from '@/lib/dolls';

const accents = [
  'from-[#fff2df] via-[#fff8ef] to-[#ffe0ef]',
  'from-[#eef6ff] via-[#f7fbff] to-[#dbeeff]',
  'from-[#fff0f5] via-[#fff7fa] to-[#ffe3b8]',
  'from-[#f0ecff] via-[#f8f5ff] to-[#e2dcff]',
  'from-[#edffe7] via-[#f8fff4] to-[#ddf8ec]',
  'from-[#f2ebff] via-[#faf7ff] to-[#ffd9c8]',
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
            Visual Gallery
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] text-[var(--ink)] sm:text-6xl">
            Six portrait frames, each one built around its own soft world of comfort and character.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dolls.map((doll, index) => (
            <motion.figure
              key={doll.name}
              initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
              className={`rounded-[1.8rem] border border-black/8 bg-gradient-to-br p-3 shadow-[0_22px_60px_rgba(30,19,31,0.12)] ${accents[index % accents.length]}`}
            >
              <div className="relative overflow-hidden rounded-[1.4rem] border border-black/8 bg-white/70">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={doll.assetPath}
                    alt={`${doll.name} Power Doll portrait`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_42%,_rgba(17,18,22,0.08)_62%,_rgba(17,18,22,0.78)_100%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-display text-[1.8rem] sm:text-3xl">{doll.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/72">
                    {doll.theme}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
