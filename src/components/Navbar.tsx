'use client';

import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#purpose', label: 'Our Purpose' },
  { href: '#dolls', label: 'Meet the Dolls' },
  { href: '#giving-back', label: 'Giving Back' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[2rem] border border-white/65 bg-[rgba(255,250,245,0.8)] px-4 py-3 shadow-[0_18px_60px_rgba(38,26,32,0.12)] backdrop-blur-xl sm:px-6 md:flex-row md:items-center md:justify-between md:rounded-full">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-script text-2xl leading-none text-[var(--ink)]">
            Power Dolls
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/15 md:hidden"
          >
            Brighten Their Day
          </motion.a>
        </div>
        <div className="scrollbar-none flex items-center gap-1 overflow-x-auto md:justify-center">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-[rgba(32,26,37,0.82)] transition hover:bg-white/70 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a97]"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden items-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/15 md:inline-flex"
        >
          Brighten Their Day
        </motion.a>
      </nav>
    </motion.header>
  );
}
