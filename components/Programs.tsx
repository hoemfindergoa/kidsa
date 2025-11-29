"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GirlHead from "../public/girlfaceonly.png"; // Ensure path is correct
// Import icons (Make sure to npm install lucide-react)
import { 
  
  GraduationCap, 
  ShieldCheck, 
  Shapes, 
  Clock, 
  Laptop, 
  Users, 
  HeartHandshake, 
  Music, 
  Sparkles 
} from "lucide-react";

// Helper to map IDs to icons dynamically
const getIcon = (id: number) => {
  const icons = [
    GraduationCap,  // 1
    ShieldCheck,    // 2
    Shapes,         // 3
    Clock,          // 4
    Laptop,         // 5
    Users,          // 7
    HeartHandshake, // 8
    Music,          // 9
    Sparkles        // 10
  ];
  return icons[id] || Sparkles;
};

const methodologyData = [
  {
    id: 1,
    title: "Research-Backed",
    desc: "Blending Montessori & experiential learning for holistic development.",
    // Updated colors to gradients for depth
    style: "from-purple-100 to-purple-200 text-purple-900 border-purple-300",
    iconColor: "text-purple-600"
  },
  {
    id: 2,
    title: "Expert Educators",
    desc: "Specialized training ensures personalized attention and warmth.",
    style: "from-blue-100 to-blue-200 text-blue-900 border-blue-300",
    iconColor: "text-blue-600"
  },
  {
    id: 3,
    title: "Safe Infrastructure",
    desc: "Rounded furniture and sensory corners designed for child safety.",
    style: "from-rose-100 to-rose-200 text-rose-900 border-rose-300",
    iconColor: "text-rose-600"
  },
  {
    id: 4,
    title: "Montessori Lab",
    desc: "Authentic materials encourage exploration and fine motor skills.",
    style: "from-amber-100 to-amber-200 text-amber-900 border-amber-300",
    iconColor: "text-amber-600"
  },
  {
    id: 5,
    title: "Structured Daycare",
    desc: "A balanced mix of rest, meals, and play ensures a happy environment.",
    style: "from-emerald-100 to-emerald-200 text-emerald-900 border-emerald-300",
    iconColor: "text-emerald-600"
  },
  {
    id: 6,
    title: "Tech-Enabled",
    desc: "Age-appropriate digital resources introduce early literacy.",
    style: "from-cyan-100 to-cyan-200 text-cyan-900 border-cyan-300",
    iconColor: "text-cyan-600"
  },
  {
    id: 7,
    title: "Parent Partnership",
    desc: "Consistent updates and digital reports ensure active collaboration.",
    style: "from-indigo-100 to-indigo-200 text-indigo-900 border-indigo-300",
    iconColor: "text-indigo-600"
  },
  {
    id: 8,
    title: "Values & Skills",
    desc: "Learning empathy and discipline through daily routines.",
    style: "from-orange-100 to-orange-200 text-orange-900 border-orange-300",
    iconColor: "text-orange-600"
  },
  {
    id: 9,
    title: "Holistic Growth",
    desc: "Music, art, and dance to boost physical and emotional development.",
    style: "from-pink-100 to-pink-200 text-pink-900 border-pink-300",
    iconColor: "text-pink-600"
  },
  {
    id: 10,
    title: "Clean Environment",
    desc: "Strict sanitization ensures a clean, safe space for all children.",
    style: "from-teal-100 to-teal-200 text-teal-900 border-teal-300",
    iconColor: "text-teal-600"
  },
];

// --- ANIMATED WAVE COMPONENT (UNCHANGED) ---
interface WaveSeparatorProps {
  position: "top" | "bottom";
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position }) => {
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
  const transformClass = "";

  const WaveLayer = ({ pathD, opacityClass, duration }: { pathD: string, opacityClass: string, duration: number }) => (
    <motion.div
      className={`absolute inset-0 w-[200%] h-full text-white ${opacityClass} ${transformClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[80px] sm:h-[120px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
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

const UniqueFeatures: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / methodologyData.length);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % methodologyData.length);
    }, 3500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-amber-50 pt-32 pb-40 overflow-hidden">
      <WaveSeparator position="top" />

      {/* Background Dotted Line Doodle */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hidden lg:block top-40">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path 
            d="M50,300 Q200,100 350,300 T650,300 T950,300 T1250,300" 
            fill="none" 
            stroke="#fb7185" 
            strokeWidth="3" 
            strokeDasharray="12,12"
          />
        </svg>
      </div>

      <div className=" md:mx-[30px] px-4">
        <div className="bg-rose-100 rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-sm border border-rose-200">
          
          {/* LEFT SIDE: Static Content */}
          <div className="w-full lg:w-[300px] flex flex-col items-center lg:items-start text-center lg:text-left z-10 shrink-0">
            <h2 className="font-black text-4xl md:text-5xl text-slate-900 mb-2 leading-tight">
              OUR 
              <span className="block text-rose-500 font-cursive" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Unique Features
              </span>
            </h2>
            <Image
              src={GirlHead}
              alt="Illustration of a girl's head"
              width={400}
              height={400}
              className="mt-6 drop-shadow-md"
            />
          </div>

          {/* RIGHT SIDE: Animated Carousel */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-100 to-transparent z-20 pointer-events-none hidden lg:block" />
          
          <div className="w-full lg:w-2/3 overflow-hidden relative py-10" ref={carouselRef}>
            <motion.div 
              className="flex gap-6 pl-4" // Added padding left for initial offset
              animate={{
                x: width ? -index * width : 0,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} 
            >
              {methodologyData.map((item) => {
                // Dynamically get the Icon component
                const IconComponent = getIcon(item.id);

                return (
                  <motion.div 
                    key={item.id} 
                    // Add hover effect
                    whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
                    className={`
                      shrink-0 
                      w-[260px] md:w-[280px] lg:w-[300px] 
                      h-[340px] 
                      rounded-[2rem] p-6 
                      flex flex-col items-center text-center 
                      shadow-xl
                      bg-gradient-to-br ${item.style}
                      border-4 border-white
                      relative
                      group
                      cursor-pointer
                    `}
                  >
                    {/* Icon Bubble */}
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform duration-300">
                      {/* @ts-ignore - Rendering dynamic icon */}
                      <IconComponent className={`w-10 h-10 ${item.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-black uppercase mb-3 leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    
                    {/* Decorative Element */}
                    <div className="w-16 h-1 bg-white/50 rounded-full mb-4"></div>

                    <p className="text-sm font-semibold opacity-90 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Subtle shine effect on top right */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full blur-md"></div>
                  </motion.div>
                );
              })}
              
              {/* Dummy buffer items for smooth scrolling illusion */}
              {methodologyData.slice(0,3).map((item) => (
                 <div key={`dummy-${item.id}`} className="shrink-0 w-[260px] md:w-[280px] lg:w-[300px] h-[340px] opacity-0"></div>
              ))}

            </motion.div>
          </div>

        </div>
      </div>

      <WaveSeparator position="bottom" />
    </section>
  );
};

export default UniqueFeatures;