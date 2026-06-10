'use client';

import { motion, useReducedMotion } from 'framer-motion';

const floatingPieces = [
  'left-[9%] top-[18%] h-20 w-28 bg-[#ff5a97]',
  'left-[18%] top-[60%] h-16 w-24 bg-[#ffd65c]',
  'right-[15%] top-[24%] h-24 w-24 bg-[#73d4ff]',
];

export function IntroLoader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-label="Loading Power Dolls world"
      className="fixed inset-0 z-50 overflow-hidden bg-[#111216] text-[var(--cream)]"
      exit={{
        opacity: 0,
        transition: { duration: reduceMotion ? 0.35 : 0.65, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,92,153,0.18),_transparent_24%),radial-gradient(circle_at_78%_18%,_rgba(108,196,255,0.16),_transparent_22%),linear-gradient(180deg,_rgba(17,18,22,0.96),_rgba(17,18,22,1))]" />
      {floatingPieces.map((piece, index) => (
        <motion.div
          key={piece}
          animate={
            reduceMotion
              ? { opacity: 0.8 }
              : { opacity: [0.18, 0.9, 0.52], x: [0, 12, -4], y: [0, -8, 6], rotate: [0, 5, -4] }
          }
          initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotate: index % 2 === 0 ? -14 : 14 }}
          transition={{ duration: 3.1, delay: index * 0.1, ease: [0.42, 0, 0.58, 1] as const }}
          className={`absolute rounded-[38%_62%_57%_43%/46%_43%_57%_54%] ${piece}`}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.4 : 1.05, delay: 0.2 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          animate={reduceMotion ? undefined : { scale: [0.98, 1.02, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 2.1, repeat: 1, ease: [0.42, 0, 0.58, 1] as const }}
          className="sticker-outline mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/80"
        >
          <span className="h-2 w-2 rounded-full bg-[#ffd65c]" />
          Enter the Power Dolls world
        </motion.div>
        <p className="font-script text-5xl text-white sm:text-7xl">#Power Dolls</p>
        <p className="mt-3 max-w-xl text-base text-white/78 sm:text-lg">
          Empower. Comfort. Brighten.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0.55 : 1.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-[min(92vw,34rem)] items-center justify-between text-white/50"
      >
        <span className="stitched-line w-24" />
        <span className="text-[11px] uppercase tracking-[0.35em]">Dream in colour</span>
        <span className="stitched-line w-24" />
      </div>
    </motion.div>
  );
}
