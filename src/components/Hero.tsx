'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { drift, fadeUp, stagger } from '@/lib/animations';

const collageCards = [
  {
    title: 'Doll line-up moment',
    path: '/images/power-dolls-lineup.jpg',
    className: 'col-span-2 bg-[#fff4e6] md:absolute md:left-0 md:top-4 md:w-52 md:rotate-[-7deg]',
  },
  {
    title: 'Hero doll portrait',
    path: '/images/power-dolls-hero.jpg',
    className: 'bg-[#fff] md:absolute md:right-0 md:top-28 md:w-60 md:rotate-[6deg]',
  },
  {
    title: 'Pattern detail board',
    path: '/images/power-dolls-patterns.jpg',
    className: 'bg-[#f7f0ff] md:absolute md:bottom-3 md:left-12 md:w-56 md:rotate-[-3deg]',
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative px-4 pb-18 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-6 pt-6 lg:pt-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[rgba(255,255,255,0.72)] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[rgba(29,19,33,0.74)] shadow-lg shadow-black/5"
          >
            <span className="h-2 w-2 rounded-full bg-[#ff5a97]" />
            #Power Dolls
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-display text-5xl leading-[0.92] text-[var(--ink)] sm:text-6xl lg:text-8xl"
          >
            Colourful companions with a powerful purpose.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-8 text-[rgba(29,19,33,0.78)] sm:text-xl"
          >
            Power Dolls are soft, meaningful friends created to comfort, encourage, and empower
            children through life&apos;s big feelings, brave moments, learning challenges, and
            everyday wins.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.a
              href="#dolls"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="button-primary"
            >
              Meet the Dolls
            </motion.a>
            <motion.a
              href="#purpose"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="button-secondary"
            >
              Our Purpose
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 pt-2 sm:grid-cols-3">
            {[
              'Comfort for big feelings',
              'Confidence through every chapter',
              'A donation woven into every sale',
            ].map((item) => (
              <div
                key={item}
                className="stitched-card bg-white/60 px-4 py-4 text-sm leading-6 text-[rgba(29,19,33,0.76)]"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative min-h-[20rem] md:min-h-[38rem] lg:min-h-[46rem]">
          <motion.div
            animate={reduceMotion ? undefined : drift}
            className="absolute left-[6%] top-[4%] h-28 w-28 rounded-[40%_60%_60%_40%/46%_47%_53%_54%] bg-[#ff5a97]/25 blur-2xl md:top-[8%] md:h-40 md:w-40"
          />
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { ...drift, transition: { ...drift.transition, delay: 0.4 } }
            }
            className="absolute right-[3%] top-[9%] h-32 w-32 rounded-full bg-[#74d8ff]/25 blur-2xl md:top-[20%] md:h-48 md:w-48"
          />
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    transition: {
                      duration: 7,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: [0.42, 0, 0.58, 1] as const,
                    },
                  }
            }
            className="hero-panel relative mt-6 rounded-[2rem] px-4 py-5 sm:px-5 sm:py-6 md:absolute md:inset-x-0 md:top-10 md:px-8 md:py-8"
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-[#111216] p-5 text-white shadow-[0_22px_60px_rgba(18,13,18,0.32)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,_rgba(255,208,92,0.2),_transparent_20%),radial-gradient(circle_at_72%_22%,_rgba(255,91,151,0.22),_transparent_22%),radial-gradient(circle_at_55%_70%,_rgba(74,176,255,0.18),_transparent_26%)]" />
                <div className="relative flex h-full min-h-[20rem] flex-col justify-between rounded-[1.4rem] border border-white/10 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/72">
                      Boutique comfort brand
                    </span>
                    <span className="font-script text-3xl text-[#ffe8ad]">Power</span>
                  </div>
                  <div>
                    <p className="max-w-xs font-display text-3xl leading-tight text-[#fff7ef]">
                      Joyful design for courageous hearts.
                    </p>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                      Layered patterns, tactile details, and story-rich dolls create a world that
                      feels artistic, reassuring, and full of possibility.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <span className="stitched-line w-16" />
                    <span className="text-xs uppercase tracking-[0.32em]">Comfort in colour</span>
                  </div>
                </div>
              </div>

              <div className="relative grid gap-3 sm:grid-cols-2 md:block md:min-h-[20rem]">
                {collageCards.map((card, index) => (
                  <motion.figure
                    key={card.path}
                    initial={{ opacity: 0, y: 24, rotate: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 + index * 0.12 }}
                    whileHover={
                      reduceMotion ? undefined : { y: -8, rotate: index === 1 ? 3 : -3 }
                    }
                    className={`relative w-full rounded-[1.4rem] border border-[rgba(17,18,22,0.08)] p-3 shadow-[0_22px_55px_rgba(30,19,31,0.18)] ${card.className}`}
                  >
                    <div className="relative flex h-44 flex-col justify-between overflow-hidden rounded-[1rem] border border-[rgba(17,18,22,0.08)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.9),_rgba(255,255,255,0.3))] p-4 md:h-56">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,_rgba(255,90,151,0.18),_transparent_18%),radial-gradient(circle_at_75%_28%,_rgba(115,212,255,0.18),_transparent_20%),radial-gradient(circle_at_45%_75%,_rgba(255,214,92,0.26),_transparent_24%)]" />
                      <span className="relative inline-flex w-fit rounded-full bg-black/75 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white">
                        Replace with image
                      </span>
                      <div className="relative">
                        <p className="font-display text-2xl leading-tight text-[var(--ink)]">
                          {card.title}
                        </p>
                        <p className="mt-3 font-mono text-xs text-[rgba(29,19,33,0.62)]">
                          {card.path}
                        </p>
                      </div>
                    </div>
                  </motion.figure>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                    transition: {
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: [0.42, 0, 0.58, 1] as const,
                    },
                  }
            }
            className="relative mt-4 w-fit rounded-[1.8rem] bg-[var(--yellow)] px-5 py-4 shadow-[0_22px_45px_rgba(255,188,48,0.35)] md:absolute md:bottom-2 md:left-0 md:mt-0"
          >
            <p className="font-display text-2xl text-[var(--ink)]">For brave moments.</p>
          </motion.div>
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 8, 0],
                    transition: {
                      duration: 5.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: [0.42, 0, 0.58, 1] as const,
                      delay: 0.4,
                    },
                  }
            }
            className="relative mt-3 ml-auto w-fit rounded-[999px] bg-[var(--hot-pink)] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(255,90,151,0.34)] md:absolute md:bottom-20 md:right-3 md:mt-0"
          >
            Hope, stitched softly.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
