export type Doll = {
  name: string;
  theme: string;
  poem: string;
  purpose: string;
  motif: string;
  assetPath: string;
  angle: string;
  cardClass: string;
  glowClass: string;
  badgeClass: string;
};

export const dolls: Doll[] = [
  {
    name: 'Star Struck',
    theme: 'Galaxy comfort',
    poem: "The sun, the moon, the stars don't compare to the galaxies in your eyes. You are my universe.",
    purpose:
      'A gentle reminder of unconditional love, safe closeness, and the feeling of being deeply treasured.',
    motif: 'Star map',
    assetPath: '/images/startruckbluedollimage.png',
    angle: 'rotate-[-2deg]',
    cardClass:
      'from-[#09103f] via-[#162778] to-[#ff4fa3] text-white before:bg-[radial-gradient(circle_at_top,_rgba(255,221,87,0.28),_transparent_42%)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(255,204,88,0.35),_transparent_66%)]',
    badgeClass: 'bg-[#ffe27a] text-[#11132f]',
  },
  {
    name: 'Dictionary With Legs',
    theme: 'School confidence',
    poem: 'When days are filled with study and tests, keep calm and study on.',
    purpose:
      'Designed to stay beside children through essays, exams, HSC preparation, and the pressure that can come with learning.',
    motif: 'Notebook',
    assetPath: '/images/dictionarywithlegsdoll.png',
    angle: 'rotate-[1.5deg]',
    cardClass:
      'from-[#fff5d8] via-[#cfe8ff] to-[#7bc7ff] text-[#10213a] before:bg-[linear-gradient(0deg,_transparent_0,_transparent_17px,_rgba(0,52,124,0.12)_18px)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(72,165,255,0.25),_transparent_68%)]',
    badgeClass: 'bg-[#162b7c] text-white',
  },
  {
    name: 'Inside Out',
    theme: 'Self-esteem in colour',
    poem: "You colour the world even when it's blue. You are making a difference, so keep being you.",
    purpose:
      'Created to nurture self-esteem, confidence, emotional wellbeing, and a lasting sense of self-worth.',
    motif: 'Colour wash',
    assetPath: '/images/insideoutdoll.png',
    angle: 'rotate-[-1deg]',
    cardClass:
      'from-[#fff5ee] via-[#ffb0b9] to-[#fdde60] text-[#341527] before:bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.52),_transparent_34%),radial-gradient(circle_at_80%_30%,_rgba(146,71,255,0.18),_transparent_26%),radial-gradient(circle_at_50%_80%,_rgba(0,202,255,0.22),_transparent_32%)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(255,122,170,0.28),_transparent_68%)]',
    badgeClass: 'bg-[#ff4d94] text-white',
  },
  {
    name: 'Team Soldiers',
    theme: 'Bravery in battle',
    poem: 'My courage will not be silenced. My spirit will not fall.',
    purpose:
      'A reassuring companion for children facing illness, holding space for bravery, tenderness, and team support.',
    motif: 'Shield',
    assetPath: '/images/teamsoldierspowerdoll.png',
    angle: 'rotate-[2deg]',
    cardClass:
      'from-[#191919] via-[#42214b] to-[#ff7a59] text-white before:bg-[linear-gradient(135deg,_rgba(255,255,255,0.08)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.08)_50%,_rgba(255,255,255,0.08)_75%,_transparent_75%)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(255,121,89,0.24),_transparent_68%)]',
    badgeClass: 'bg-[#f6d97b] text-[#241b18]',
  },
  {
    name: 'Dr Curious',
    theme: 'Discovery and difference',
    poem:
      'Discovery arises by looking at the same thing as everyone else and thinking something different.',
    purpose:
      'Celebrates curiosity, imagination, unconventional thinking, and the strengths children carry in their own way.',
    motif: 'Discovery notes',
    assetPath: '/images/drcuriousdoll.png',
    angle: 'rotate-[-2deg]',
    cardClass:
      'from-[#ecffe2] via-[#b5f17b] to-[#4fb892] text-[#143126] before:bg-[radial-gradient(circle_at_10%_10%,_rgba(255,255,255,0.36),_transparent_28%),linear-gradient(90deg,_transparent_0,_transparent_23px,_rgba(20,49,38,0.06)_24px)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(112,228,169,0.24),_transparent_66%)]',
    badgeClass: 'bg-[#143126] text-[#f4ffe6]',
  },
  {
    name: 'Worry Monster',
    theme: 'Anxiety support',
    poem: "When anxiety creeps in, write down your fear. I'll eat your fear away.",
    purpose:
      'Helps children name their worries, feel heard, and find comfort in moments that feel heavy or uncertain.',
    motif: 'Monster notes',
    assetPath: '/images/worrymonster.png',
    angle: 'rotate-[1deg]',
    cardClass:
      'from-[#2d1660] via-[#6d2fd8] to-[#ff7f45] text-white before:bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.2),_transparent_22%),radial-gradient(circle_at_80%_60%,_rgba(255,228,122,0.24),_transparent_24%)]',
    glowClass: 'bg-[radial-gradient(circle,_rgba(199,112,255,0.25),_transparent_68%)]',
    badgeClass: 'bg-[#fff0b3] text-[#2d1660]',
  },
];
