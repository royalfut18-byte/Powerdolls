'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const collage = [
  {
    title: 'Line-up portrait',
    path: '/images/alldollsinoneimage.png',
    alt: 'Full Power Dolls line-up on a colourful floral background',
    className: 'md:col-span-2 md:row-span-2 bg-[#fff2df]',
    imageClassName: 'object-cover object-center',
    imageWrapperClassName: '',
  },
  {
    title: 'Star Struck detail',
    path: '/images/startruckbluedollimage.png',
    alt: 'Star Struck doll against a galaxy background',
    className: 'bg-[#f2ebff]',
    imageClassName: 'object-contain object-center',
    imageWrapperClassName: 'bg-[#211f78] p-3',
  },
  {
    title: 'Inside Out detail',
    path: '/images/insideoutdoll.png',
    alt: 'Inside Out doll against a colourful paisley pattern',
    className: 'bg-[#ffe6ee]',
    imageClassName: 'object-contain object-center',
    imageWrapperClassName: 'bg-[#ffe6ee] p-3',
  },
  {
    title: 'Worry Monster notes',
    path: '/images/worrymonster.png',
    alt: 'Worry Monster doll on a playful monster pattern background',
    className: 'bg-[#ebe9ff]',
    imageClassName: 'object-contain object-center',
    imageWrapperClassName: 'bg-[#1f3563] p-3',
  },
  {
    title: 'Doll world collage',
    path: '/images/imagewithallpowerdolls.png',
    alt: 'Close-up collage of multiple Power Dolls together',
    className: 'md:col-span-2 bg-[#e4f5ff]',
    imageClassName: 'object-cover object-center',
    imageWrapperClassName: '',
  },
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
              <div
                className={`relative h-full overflow-hidden rounded-[1.4rem] border border-black/8 ${item.imageWrapperClassName}`}
              >
                <Image
                  src={item.path}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className={item.imageClassName}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_36%,_rgba(17,18,22,0.08)_58%,_rgba(17,18,22,0.78)_100%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-display text-[1.8rem] sm:text-3xl">{item.title}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
