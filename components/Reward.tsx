"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Medal, Star } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";

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

// --- REUSABLE WAVE COMPONENT ---
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
      className={`absolute inset-0 w-[200%] h-full text-white ${opacityClass}`}
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

// --- DATA ---
const recognitionData = [
  {
    id: 1,
    title: "Visionary Educator of the Year Award",
    description: "We are incredibly proud to be recognized for our unwavering commitment to providing top-tier holistic education. This certificate stands as a testament to our dedicated teachers, bright students, and innovative learning methodologies.",
    image: "https://jwybnvsiiwfhqolmgtgi.supabase.co/storage/v1/object/public/Schoolimages/certificate1.png",
    date: "Outstanding Achievement",
    tag: "Education",
    cardColor: "bg-pink-300",
  },
  {
    id: 2,
    title: "Global Education Icon Award 2026",
    description: "Awarded for outstanding contributions to the field of global education and innovation. We believe that a child learns best when they feel safe, happy, and surrounded by a nurturing community.",
    image: "https://jwybnvsiiwfhqolmgtgi.supabase.co/storage/v1/object/public/Schoolimages/certificate2.png",
    date: "Learning & Care",
    tag: "Learning and Care",
    cardColor: "bg-amber-300",
  },
  {
    id: 3,
    title: "Excellence AND Leadership Award 2026",
    description: "This award recognizes our school's commitment to excellence in education and leadership. It celebrates the dedication of our staff, the achievements of our students, and the support of our parents in fostering a thriving learning environment.",
    image: "https://jwybnvsiiwfhqolmgtgi.supabase.co/storage/v1/object/public/Schoolimages/certificate3.png",
    date: "Excellence AND Leadership",
    tag: "Leadership",
    cardColor: "bg-rose-300",
  }
];

const RewardsRecognitionSection = () => {
  return (
    <section className={`relative w-full bg-emerald-400 pt-32 pb-40 overflow-hidden ${bodyFont.className}`}>
      
      <WaveSeparator position="top" />

      {/* Floating Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-32 left-10 text-emerald-200">
            <Trophy fill="currentColor" className="w-20 h-20" />
         </motion.div>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-40 right-10 text-emerald-200">
            <Star fill="currentColor" className="w-24 h-24" />
         </motion.div>
         <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 left-1/2 text-white/20">
            <Sparkles fill="currentColor" className="w-32 h-32" />
         </motion.div>
      </div>

      <div className="md:mx-16 lg:mx-24 xl:mx-40 mx-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
            <Medal className="text-amber-500 w-6 h-6" />
            <span className="font-bold text-black uppercase tracking-wider">Hall of Fame</span>
            <Medal className="text-amber-500 w-6 h-6" />
          </div>
          
          <h2 className={`${titleFont.className} text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white drop-shadow-lg`}>
            Rewards & <span className="text-amber-300 relative inline-block">
               Recognition
               <svg className="absolute w-full h-6 -bottom-4 left-0 text-emerald-700" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0,5 Q50,15 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
               </svg>
            </span>
          </h2>
          <p className="text-emerald-950 text-xl md:text-2xl font-extrabold bg-white/40 backdrop-blur-sm rounded-3xl p-4 border-2 border-emerald-500 border-dashed">
            Every milestone we achieve is a celebration of the hard work of our students, teachers, and supportive parents!
          </p>
        </div>

        {/* --- VERTICAL CERTIFICATE LAYOUT --- */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {recognitionData.map((item, index) => {
            const isEven = index % 2 !== 0; // Alternate layout left/right

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`
                  group flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                  bg-white rounded-[2.5rem] border-4 border-black 
                  shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[18px_18px_0px_rgba(0,0,0,1)] 
                  hover:-translate-y-2 transition-all duration-300 overflow-hidden
                `}
              >
                
                {/* --- IMAGE SIDE --- */}
                <div 
                  className={`
                    relative w-full lg:w-5/12 ${item.cardColor} p-8 md:p-12 
                    flex items-center justify-center overflow-hidden shrink-0
                    border-black border-b-4 lg:border-b-0 
                    ${isEven ? 'lg:border-l-4' : 'lg:border-r-4'}
                  `}
                >
                  {/* Background Dots Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Vertical Image Wrapper */}
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] bg-white rounded-xl border-4 border-black p-2 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-contain bg-slate-100 rounded-lg p-1"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </motion.div>
                  
                  {/* Tag Badge */}
                  <div className="absolute top-6 left-6 bg-white px-5 py-2 rounded-full border-2 border-black font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] z-10">
                    {item.tag}
                  </div>
                </div>

                {/* --- TEXT SIDE --- */}
                <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-6 h-6 text-amber-500" fill="currentColor" />
                    <span className="text-slate-500 font-black uppercase tracking-widest text-sm md:text-base">
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className={`${titleFont.className} text-4xl md:text-5xl text-slate-900 mb-6 leading-tight group-hover:text-emerald-600 transition-colors`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 font-bold text-lg md:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      <WaveSeparator position="bottom" />

    </section>
  );
};

export default RewardsRecognitionSection;