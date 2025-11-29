"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion,  } from "framer-motion";
// --- DATA ---
const methodologyData = [
  {
    id: 1,
    title: "Research-Backed Learning",
    desc: "Blending Montessori & experiential learning for holistic development through scientifically designed activities.",
    color: "bg-purple-200 text-purple-900",
  },
  {
    id: 2,
    title: "Highly Trained Educators",
    desc: "Specialized training ensures personalized attention and a warm, nurturing environment for every child.",
    color: "bg-blue-200 text-blue-900",
  },
  {
    id: 3,
    title: "Safe Infrastructure",
    desc: "Rounded furniture, sensory corners, and secure zones designed specifically for child safety.",
    color: "bg-rose-200 text-rose-900",
  },
  {
    id: 4,
    title: "Montessori Lab",
    desc: "Authentic materials encourage exploration, independence, fine motor skills, and critical thinking.",
    color: "bg-purple-200 text-purple-900",
  },
  {
    id: 5,
    title: "Structured Daycare",
    desc: "A balanced mix of rest, meals, and play ensures a happy, productive environment all day.",
    color: "bg-blue-200 text-blue-900",
  },
  {
    id: 6,
    title: "Tech-Enabled Learning",
    desc: "Age-appropriate digital resources introduce early literacy, numeracy, and creativity.",
    color: "bg-rose-200 text-rose-900",
  },
  {
    id: 7,
    title: "Parent Partnership",
    desc: "Consistent updates, meetings, and digital reports ensure active collaboration in your child's growth.",
    color: "bg-purple-200 text-purple-900",
  },
  {
    id: 8,
    title: "Life Skills & Values",
    desc: "Learning sharing, empathy, and discipline through daily routines, stories, and role-play.",
    color: "bg-blue-200 text-blue-900",
  },
  {
    id: 9,
    title: "Holistic Growth",
    desc: "A balanced mix of sports, music, art, and dance boosts physical and emotional development.",
    color: "bg-rose-200 text-rose-900",
  },
  {
    id: 10,
    title: "Hygienic Environment",
    desc: "Strict sanitization and health monitoring ensure a clean, safe space for all children.",
    color: "bg-purple-200 text-purple-900",
  },
];

// --- COMPONENTS ---

const WaveSeparator = ({ position }: { position: "top" | "bottom" }) => {
  // ... (Keeping your existing Wave Logic to save space, assuming it's the same)
  // simplified for this snippet, but you can paste your previous wave code here
  return (
    <div className={`absolute w-full h-[60px] z-10 ${position === "top" ? "top-0" : "bottom-0"}`}>
        {/* Placeholder for your wave SVG */}
    </div>
  );
};

const MethodologySection = () => {
  // Current index of the carousel
  const [index, setIndex] = useState(0);
  // Ref for the container to calculate width
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Measure card width for scrolling math
    if (carouselRef.current) {
        // Approximate width of card + gap. 
        // On desktop card is roughly 280px + 24px gap = 304px
        // On mobile card is roughly 260px + 16px gap = 276px
        setWidth(carouselRef.current.scrollWidth / methodologyData.length);
    }
  }, []);

  // "Tick" Logic: Move to next slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % methodologyData.length);
    }, 3500); // 3.5 seconds interval (Pause time)

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      
      {/* Container "Pill" - The Big Pink Background */}
      <div className="container mx-auto px-4">
        <div className="bg-rose-100 rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-sm border border-rose-200">
          
          {/* LEFT SIDE: Static Content (Title + Illustration) */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left z-10 shrink-0">
            <h2 className="font-black text-4xl md:text-5xl text-slate-900 mb-2 leading-tight">
              TEACHING
              <span className="block text-rose-500 font-cursive" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                Methodology
              </span>
            </h2>
            
            {/* Illustration Area */}
            <div className="mt-6 relative w-48 h-48 md:w-64 md:h-64">
                {/* PLACEHOLDER FOR YOUR GIRL IMAGE 
                   Replace src="/girl-head.png" with your actual image
                */}
                 <div className="w-full h-full relative">
                    {/* CSS Approximation of the head in the image provided */}
                    <div className="absolute inset-0 bg-slate-900 rounded-full scale-90 translate-y-2"></div> {/* Hair Back */}
                    <div className="absolute inset-2 bg-[#f4d0b1] rounded-full"></div> {/* Face */}
                    <div className="absolute top-8 left-4 w-full h-24 bg-slate-900 rounded-t-full rotate-[-10deg]"></div> {/* Bangs */}
                    <div className="absolute bottom-10 left-12 w-16 h-8 bg-rose-400 rounded-b-full opacity-80"></div> {/* Mouth */}
                    <div className="absolute top-20 left-10 w-4 h-4 bg-slate-800 rounded-full"></div> {/* Eye L */}
                    <div className="absolute top-20 right-16 w-4 h-4 bg-slate-800 rounded-full text-center">^</div> {/* Eye R (Wink) */}
                 </div>
            </div>
          </div>

          {/* RIGHT SIDE: Animated Carousel */}
          {/* Gradient Overlay for Fade Effect on edges */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-100 to-transparent z-20 pointer-events-none hidden lg:block" />
          
          <div className="w-full lg:w-2/3 overflow-hidden relative" ref={carouselRef}>
            <motion.div 
              className="flex gap-6"
              // The Animation Magic
              animate={{
                x: `-${index * (100 / (window.innerWidth < 768 ? 1.2 : 2.5))}%` 
                // Logic: On mobile move almost full width, on desktop move partial width
              }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }} // "Spring" gives it the snappy stop-and-go feel
            >
              {/* Render list TWICE to create illusion of infinite scroll if we wanted strict infinite,
                 but for a simple ticker, rendering once and looping index is fine. 
                 To make it truly infinite smooth loop, we'd need complex index math.
                 Here we just map the data.
              */}
              {methodologyData.map((item) => (
                <div 
                  key={item.id} 
                  className={`
                    shrink-0 
                    w-[260px] md:w-[280px] lg:w-[300px] 
                    h-[320px] 
                    rounded-3xl p-6 
                    flex flex-col justify-center items-center text-center 
                    shadow-sm ${item.color}
                  `}
                >
                  <h3 className="text-xl font-black uppercase mb-4 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Decorative dashed line */}
                  <div className="w-12 h-1 border-b-2 border-dashed border-current opacity-40 mb-4"></div>

                  <p className="text-sm font-semibold opacity-90 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Big Background Letter (Watermark style) */}
                  <div className="mt-4 text-6xl font-black opacity-10">
                    {item.title.charAt(0)}
                  </div>
                </div>
              ))}
              
              {/* Dummy buffer at end to prevent white space if you scroll too far before reset */}
              {methodologyData.slice(0,3).map((item) => (
                 <div key={`dummy-${item.id}`} className={`shrink-0 w-[260px] md:w-[280px] lg:w-[300px] h-[320px] rounded-3xl ${item.color} opacity-0`}></div>
              ))}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodologySection;