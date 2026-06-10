'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Doll } from '@/lib/dolls';

type DollCardProps = {
  doll: Doll;
  index: number;
};

export function DollCard({ doll, index }: DollCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -10, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
      className={`group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-black/8 bg-gradient-to-br p-5 shadow-[0_28px_65px_rgba(30,19,31,0.12)] before:absolute before:inset-0 before:content-[''] ${doll.angle} ${doll.cardClass}`}
    >
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <div className={`absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl ${doll.glowClass}`} />
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] ${doll.badgeClass}`}
          >
            {doll.theme}
          </span>
          <span className="rounded-full border border-current/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-current/70">
            {doll.motif}
          </span>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-current/12 bg-white/14 p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-white/12">
            <Image
              src={doll.assetPath}
              alt={`${doll.name} Power Dolls artwork`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-between gap-6">
          <div>
            <h3 className="font-display text-4xl leading-none">{doll.name}</h3>
            <p className="mt-4 max-w-md text-base leading-7 text-current/82">{doll.purpose}</p>
          </div>

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[1.5rem] border border-current/12 bg-white/18 p-5"
          >
            <div className="absolute inset-x-5 top-4 h-px bg-current/18" />
            <p className="pt-3 font-script text-2xl leading-relaxed text-current/95">{doll.poem}</p>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
