'use client';

import { motion } from 'framer-motion';

export function ContactFooter() {
  return (
    <footer id="contact" className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-10">
      <div className="pattern-finale mx-auto max-w-7xl rounded-[2.8rem] p-3 shadow-[0_28px_90px_rgba(20,13,20,0.22)]">
        <div className="grid gap-8 rounded-[2.2rem] bg-[rgba(17,18,22,0.88)] px-6 py-8 text-white backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-12">
          <div className="space-y-6">
            <p className="font-script text-5xl text-[#ffe3a9]">Power Dolls</p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-[#fff7ef] sm:text-5xl">
              Empower and brighten not only your children’s day, but their future.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/74">
              A colourful emotional support brand created to comfort, encourage, and inspire brave
              little hearts.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:info@powerdolls.co"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="button-primary"
              >
                Email Us
              </motion.a>
              <motion.a
                href="https://instagram.com/powerdollsco"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="button-secondary border-white/20 bg-white/10 text-white hover:bg-white/14"
              >
                Visit Instagram
              </motion.a>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/7 p-6">
            <p className="text-xs uppercase tracking-[0.42em] text-white/52">Contact</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/76">
              <p>
                <span className="block font-semibold text-white">Power Dolls</span>
                Katerina Jovevski
                <br />
                Company Director
              </p>
              <p>
                Phone: <a href="tel:0416595902" className="underline decoration-white/20 underline-offset-4">0416 595 902</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@powerdolls.co" className="underline decoration-white/20 underline-offset-4">
                  info@powerdolls.co
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="http://www.powerdolls.co" className="underline decoration-white/20 underline-offset-4">
                  www.powerdolls.co
                </a>
              </p>
              <p>
                Instagram:{' '}
                <a href="https://instagram.com/powerdollsco" className="underline decoration-white/20 underline-offset-4">
                  instagram.com/powerdollsco
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
