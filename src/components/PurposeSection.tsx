'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function PurposeSection() {
  return (
    <section id="purpose" className="relative px-4 py-20 sm:px-6 lg:px-10">
      <div className="pattern-bloom mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-3 shadow-[0_30px_80px_rgba(28,20,26,0.12)]">
        <div className="grid gap-10 rounded-[2rem] bg-[rgba(17,18,22,0.92)] px-6 py-8 text-white md:px-10 md:py-12 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-between gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/56">Our Purpose</p>
              <blockquote className="mt-5 font-display text-4xl leading-tight text-[#fff7ef] md:text-5xl">
                “Every doll begins with our children to empower and brighten their future.”
              </blockquote>
            </div>
            <div className="stitched-card max-w-md bg-white/8 p-5 text-sm leading-7 text-white/74">
              Every doll sold helps support chosen charities, allowing comfort and generosity to
              move together.
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5"
          >
            <p className="max-w-2xl text-lg leading-8 text-white/78">
              Power Dolls recognises that all children need love, encouragement, and support. For
              children facing learning challenges, illness, anxiety, or low confidence, positive
              reinforcement can help build self-worth, courage, and determination.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-white/78">
              The purpose is to give children hope, imagination, comfort, and a colourful friend
              to hold onto. Every doll begins with children in mind. Every doll is designed to
              empower and brighten a child’s future.
            </p>
            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {[
                'Children-first design',
                'Comfort with emotional meaning',
                'Colourful companions that give back',
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-5 text-sm leading-6 text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
