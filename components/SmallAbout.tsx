"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Bird, Palette, Users, Rocket } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";

import foldedboy from "../public/foldedhandsboy.png";
import girlsasking from "../public/whoweare.png"
import bothcharaters from "../public/bothcharacter.png"
import Link from "next/link";

// --- FONTS ---
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

// --- REUSABLE MOVING WAVE COMPONENT ---
const WaveSeparator = ({ position }: { position: "top" | "bottom" }) => {
  const viewBoxWidth = 2000;
  const viewBoxHeight = 100;

  const getWavePath = (count: number) => {
    const waveWidth = viewBoxWidth / count;
    let pathD = "";

    if (position === "top") {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, 25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} 0 H 0 Z`;
    } else {
      pathD = `M0,${viewBoxHeight / 2} `;
      for (let i = 0; i < count; i++) {
        pathD += `q ${waveWidth / 4}, -25 ${waveWidth / 2}, 0 t ${waveWidth / 2}, 0 `;
      }
      pathD += `V ${viewBoxHeight} H 0 Z`;
    }
    return pathD;
  };

  const mobilePath = getWavePath(5);
  const desktopPath = getWavePath(20);

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={` absolute inset-0 w-[200%] h-full text-white ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[90px] sm:h-[120px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
      <div className="block md:hidden w-full h-full absolute inset-0">
        <WaveLayer pathD={mobilePath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={mobilePath} opacityClass="opacity-100" duration={15} />
      </div>
      <div className="hidden md:block w-full h-full absolute inset-0">
        <WaveLayer pathD={desktopPath} opacityClass="opacity-40" duration={20} />
        <WaveLayer pathD={desktopPath} opacityClass="opacity-100" duration={15} />
      </div>
    </div>
  );
};

// --- CARD DATA ---
const features = [
  {
    id: 1,
    title: "Who We Are?",
    subtitle: "Most Loved Preschool",
    icon: Users, // Replace with your Image if available
    iconColor: "text-blue-500",
    bgIcon: "bg-blue-100",
    image: girlsasking,
    ids: "#whowe"
  },
  {
    id: 2,
    title: "Our Vision",
    subtitle: "Sound Foundation for Life",
    icon: Palette,
    iconColor: "text-rose-500",
    bgIcon: "bg-rose-100",
    image: bothcharaters,
    ids: "#vision"
  },
  {
    id: 3,
    title: "Our Mission",
    subtitle: "Transformation of Education",
    icon: Rocket,
    iconColor: "text-amber-500",
    bgIcon: "bg-amber-100",
    image: foldedboy,
    ids: "#mission"
  }
];

const SpreadingLoveSection = () => {
  return (
  <div className="bg-gradient-to-b from-orange-50 to-white">
      <section className={`relative w-full bg-rose-200 mt-0 pt-[80px] md:pt-40 pb-28 md:pb-40 overflow-hidden ${bodyFont.className}`}>
      
      {/* Top Moving Wave */}
      <WaveSeparator position="top" />

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-32 right-[22%] text-[#3E3431]"
         >
             <Bird className="w-12 h-12 md:w-16 md:h-16" fill="black" />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
            <h2 className={`${titleFont.className} text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-sm`}>
                <span className="text-[#D33060]">SPREADING </span> 
                <span className="text-[#3E3431]">LOVE & Joy</span> 
                <span className="text-[#D33060] inline-block relative">                   {/* Underline Doodle */}
                   <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#9BC6C0]" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                   </svg>
                </span>
            </h2>
        </div>

        {/* --- CARDS ROW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <Link href={`about/${feature.ids}`} key={feature.id}>
                <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-[#F9F9F9] rounded-[3rem] p-4 pr-6 md:p-6 md:pr-8 flex items-center justify-between shadow-lg border-2 border-white hover:border-[#F4D03F] transition-all duration-300 group cursor-pointer"
                >
                    {/* Left: Icon/Image */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className={`w-20 h-20 md:w-34 md:h-34 rounded-full  flex items-center justify-center  group-hover:scale-105 transition-transform duration-300`}>
                             {/* Replace this Icon component with <Image /> if you have the PNGs */}
                           <Image 
                               src={feature.image ?? foldedboy}
                               alt={feature.title}
                               width={180}
                               height={180}
                               className="object-contain"
                           />

                        </div>
                        
                        {/* Text */}
                        <div className="flex flex-col">
                            <h3 className={`${titleFont.className} text-[#D33060] text-xl md:text-2xl mb-1`}>
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm font-bold mb-2">
                                {feature.subtitle}
                            </p>
                            <span className="text-[#3E3431] font-black text-sm md:text-base group-hover:underline decoration-[#D33060] decoration-2 underline-offset-4">
                                Know More
                            </span>
                        </div>
                    </div>

                    {/* Right: Button */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F4D03F] rounded-full flex items-center justify-center shadow-md group-hover:bg-[#D33060] transition-colors duration-300 shrink-0">
                        <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-current ml-1" />
                    </div>

                </motion.div>
                </Link>
            ))}
        </div>

      </div>

      {/* Bottom Moving Wave */}
      <WaveSeparator position="bottom" />

    </section>
  </div>
  );
};

export default SpreadingLoveSection;