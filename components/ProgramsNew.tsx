'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import boywithcup from "../public/boywithcup.png";
import girlwithbook from "../public/girlwithbook 1.svg"
import boywithelephant from "../public/boywithelephent.png"
import girlonswing from "../public/girlonwing.png"
import boywithbrush from "../public/boywithbrush.png"
import Image from 'next/image';
import Link from 'next/link';
// --- TYPES & INTERFACES ---

type ThemeColor = 'rose' | 'sky' | 'purple' | 'teal' | 'amber';

interface Program {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  theme: ThemeColor;
  image: any;
  ids: string;
}

interface ThemeStyles {
  text: string;
  bg: string;
  border: string;
  btn: string;
  image?: string;
}

// --- FONT CONFIGURATION ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const handwritingFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// --- DATA ---
const programs: Program[] = [
  {
    id: 1,
    title: "Little Explorers",
    subtitle: "Play Group – Age 2–3 Years",
    description: "At Little Dreamers, our Little Explorers begin their joyful learning journey through play and imagination.",
    fullDescription: "Activities are thoughtfully designed to build sensory awareness, strengthen motor skills, and encourage social interaction. Children learn to adapt, express themselves freely, and gain early confidence.",
    theme: "rose", 
    image : boywithcup,
    ids: "#explorers"
  },
  {
    id: 2,
    title: "Curious Learners",
    subtitle: "Nursery – Age 3–4 Years",
    description: "Our Curious Learners explore the world of colors, numbers, and letters through fun, interactive activities.",
    fullDescription: "This stage builds imagination, communication, and growing independence. Children learn to observe, question, express, and share their ideas.",
    theme: "sky",
    image : girlwithbook,
    ids: "learners"
  },
  {
    id: 3,
    title: "Creative Thinkers",
    subtitle: "LKG – Age 4–5 Years",
    description: "Children strengthen early academic skills while exploring creativity, imagination, and expression.",
    fullDescription: "Through phonics, storytelling, art, and group play, they build confidence. Each day encourages children to think creatively and communicate confidently.",
    theme: "purple",
    image : boywithelephant,
    ids: "thinkers"
  },
  {
    id: 4,
    title: "Future Leaders",
    subtitle: "UKG – Age 5–6 Years",
    description: "Prepares children for formal schooling by building a strong foundation in academics and life skills.",
    fullDescription: "With structured learning in language, math, and environmental studies, children develop clarity in concepts and confidence in application.",
    theme: "teal",
    image : girlonswing,
    ids: "/Programs/#leaders"
  },
  {
    id: 5,
    title: "Day Care Service",
    subtitle: "Flexible Hours – 2 Years+",
    description: "A home away from home where your child is cared for in a safe, engaging, and loving environment.",
    fullDescription: "Our Day Care program offers structured relaxation, nutritious snacks, and supervised play activities giving parents peace of mind.",
    theme: "amber",
    image : boywithbrush,
    ids: "/Programs/#daycare"
  }
];

// --- COMPONENTS ---

const ProgramSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if(scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id='programs' className={`py-16 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden ${bodyFont.className}`}>
      
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 relative z-10">


   <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-500 font-bold tracking-wider text-sm uppercase bg-sky-100 px-4 py-1 rounded-full">
              Our Programs
            </span>
          <h2 className={`text-5xl pt-4 md:text-7xl uppercase leading-tight ${titleFont.className}`}>
              <span className="text-rose-500">Spreading</span>{' '}
              <span className="text-black">Love</span>
            </h2>
          </motion.div>
        </div>




          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h2 className={`text-5xl md:text-7xl uppercase leading-tight ${titleFont.className}`}>
              <span className="text-rose-500">Spreading</span>{' '}
              <span className="text-black">Love</span>
            </h2>
          </motion.div> */}
          
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl text-rose-500 mt-3 flex items-center justify-center gap-3 ${titleFont.className}`}
          >
            <span className="uppercase">Since</span>
            <span className="relative inline-block">
               <span className="relative z-10">30+ Years</span>
               <svg 
                 className="absolute -bottom-2 left-0 w-full h-4" 
                 viewBox="0 0 200 15" 
                 preserveAspectRatio="none"
               >
                 <path 
                   d="M5 10 Q 50 5, 100 8 T 195 10" 
                   stroke="#fb7185" 
                   strokeWidth="4" 
                   fill="none" 
                   strokeLinecap="round"
                 />
               </svg>
            </span>
          </motion.div> */}

          {/* Decorative bird */}
          <div className="hidden md:block absolute -top-4 right-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
             🐦
          </div>
        </div>

        {/* --- DESKTOP CAROUSEL BUTTONS --- */}
        <div className="hidden md:flex justify-end gap-3 mb-6">
           <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => scroll('left')} 
             className="p-3 rounded-full bg-white border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-300 transition-all shadow-md"
           >
             <ChevronLeft className="w-6 h-6 text-rose-500" />
           </motion.button>
           <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => scroll('right')} 
             className="p-3 rounded-full bg-white border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-300 transition-all shadow-md"
           >
             <ChevronRight className="w-6 h-6 text-rose-500" />
           </motion.button>
        </div>

        {/* --- PROGRAM LIST / CAROUSEL --- */}
        <div 
          ref={scrollRef}
          className="
            flex flex-col gap-8 
            md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:pb-12 md:px-4
            scrollbar-hide
          "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {programs.map((program, index) => (
            <ProgramCard key={program.id} data={program} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- CARD COMPONENT ---

interface ProgramCardProps {
  data: Program;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ data, index }) => {
  
  const colors: Record<ThemeColor, ThemeStyles> = {
    rose:   { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', btn: 'bg-rose-500' },
    sky:    { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200', btn: 'bg-sky-500' },
    purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', btn: 'bg-purple-500' },
    teal:   { text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', btn: 'bg-teal-500' },
    amber:  { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', btn: 'bg-amber-500' },
  };

  const theme = colors[data.theme];

  return (
    <motion.div
      className={`
        shrink-0 snap-center
        w-full md:w-[450px] 
        relative flex flex-col items-center gap-6 
        p-8 md:p-10
        bg-white border-[3px] ${theme.border} 
        rounded-[50px]
        shadow-xl hover:shadow-2xl transition-all duration-300
        hover:-translate-y-2
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* --- CHARACTER IMAGE --- */}
      <div className="relative mb-4">
        <div className="w-40 h-40 sm:w-48 sm:h-48  overflow-hidden flex items-center justify-center relative z-10">
          <Image 
            src={data.image} 
            alt={data.title} 
            width={320}
            height={320}
            className="object-cover py-8" 
          /> 
        </div>
        {/* Decorative glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] ${theme.bg} rounded-full blur-2xl opacity-60 -z-0`} />
      </div>

      {/* --- CONTENT --- */}
      <div className="flex-1 text-center space-y-4 w-full">
        <div>
          <h3 className={`text-3xl sm:text-4xl ${theme.text} mb-2 ${handwritingFont.className} font-bold tracking-wide`}>
            {data.title}
          </h3>
          <p className={`text-gray-700 font-extrabold text-sm uppercase tracking-widest ${bodyFont.className}`}>
            {data.subtitle}
          </p>
        </div>
        
        <p className={`text-gray-700 text-base leading-relaxed font-semibold px-4 ${bodyFont.className}`}>
          {data.description}
          <span className="hidden md:inline"> {data.fullDescription}</span>
        </p>

        {/* --- ACTION BUTTONS --- */}
        <Link href={`Programs/#${data.ids}`}>
        <div className="pt-6 flex items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all ${bodyFont.className}`}
            >
            Know More 
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-500 flex items-center justify-center shadow-lg hover:shadow-xl border-4 border-white transition-all"
            >
            <Play className="w-5 h-5 fill-white text-white ml-1" />
          </motion.button>
        </div>
            </Link>
      </div>
    </motion.div>
  );
};

export default ProgramSection;