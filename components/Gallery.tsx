"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Heart, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

// --- GRID SPAN LOGIC (UPDATED FOR SMALLER IMAGES) ---
const getSpanFromFormat = (format: string | undefined, index: number) => {
  // A standard image takes 1 column. 
  // Horizontal takes 2 columns to remain wide. Vertical takes 2 rows to remain tall.
  if (format === 'H') return "col-span-2 row-span-2";
  if (format === 'V' || format === 'Y') return "col-span-1 row-span-2";
  if (format === 'S') return "col-span-2 row-span-3";
  
  // Fallback array for missing formats
  const fallbacks = [
    "col-span-1 row-span-1", // S
    "col-span-2 row-span-1", // H
    "col-span-1 row-span-2", // V
    "col-span-1 row-span-1", // S
  ];
  return fallbacks[index % fallbacks.length];
};

// Array of vibrant border/shadow colors to rotate through
const frameColors = [
  "border-pink-400 shadow-[4px_4px_0px_#f472b6] hover:shadow-[8px_8px_0px_#f472b6]", // pink
  "border-sky-400 shadow-[4px_4px_0px_#38bdf8] hover:shadow-[8px_8px_0px_#38bdf8]",   // sky
  "border-amber-400 shadow-[4px_4px_0px_#fbbf24] hover:shadow-[8px_8px_0px_#fbbf24]", // amber
  "border-emerald-400 shadow-[4px_4px_0px_#34d399] hover:shadow-[8px_8px_0px_#34d399]",// emerald
  "border-violet-400 shadow-[4px_4px_0px_#a78bfa] hover:shadow-[8px_8px_0px_#a78bfa]", // violet
  "border-rose-400 shadow-[4px_4px_0px_#fb7185] hover:shadow-[8px_8px_0px_#fb7185]",   // rose
];

const getModalDimensions = (format: string | undefined) => {
  if (format === 'H') {
    return "w-[95vw] md:w-[85vw] max-w-5xl h-[50vh] md:h-[70vh]"; // Wide modal
  }
  if (format === 'V' || format === 'Y') {
    return "w-[85vw] md:w-[45vw] max-w-md lg:max-w-lg h-[80vh] md:h-[85vh]"; // Tall modal
  }
  return "w-[85vw] md:w-[65vw] max-w-3xl h-[60vh] md:h-[75vh]"; // Standard/Square modal
};

const SpreadingLoveSection = () => {
  const [activeTab, setActiveTab] = useState("school");
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // --- LIGHTBOX STATES ---
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleTabChange = (newTab: string) => {
    if (activeTab === newTab) return;
    setActiveTab(newTab);
    setImages([]);
    setPage(0);
    setHasMore(true);
  };

  const fetchImages = async (currentPage: number, currentTab: string) => {
    setLoading(true);
    
    const from = currentPage * 10;
    const to = from + 9;

    let tableName = "schoolimages";
    if (currentTab === "students") tableName = "studentimages";
    if (currentTab === "partners") tableName = "partnerimages";

    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('image_url, format, alt_text')
        .range(from, to); 

      if (error) throw error;

      if (data) {
        setImages((prev) => [...prev, ...data]);
        if (data.length < 10) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error(`Error fetching ${tableName}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page, activeTab);
  }, [page, activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loading, hasMore]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  }, [selectedIndex, images.length]);

  const goToPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  }, [selectedIndex, images.length]);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrev]);

  // Safely grab the current image for the lightbox to fix TS errors
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section className={`relative w-full bg-sky-400 pt-28 pb-32 overflow-hidden ${bodyFont.className}`}>
      
      <WaveSeparator position="top" />

      {/* Floating Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-40 left-10 text-rose-200">
            <Heart fill="currentColor" className="w-16 h-16" />
         </motion.div>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-40 right-10 text-amber-200">
            <Star fill="currentColor" className="w-20 h-20" />
         </motion.div>
      </div>

      <div className="md:mx-20 lg:mx-32 xl:mx-44 mx-4 mb-12 px-2 md:px-6 relative z-10">
        <div className="mt-10 text-center">
          
            <h2 className={`${titleFont.className} text-5xl md:text-6xl leading-tight mb-12`}>
              <span className="text-[#3E3431]">Explore Our </span> 
              <span className="text-amber-300 relative inline-block">
                 Gallery
                 <svg className="absolute w-full h-6 -bottom-4 left-0 text-sky-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0,5 Q50,15 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                 </svg>
              </span>
            </h2>

            {/* --- TAB NAVIGATION --- */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'school', label: 'School Images' },
                { id: 'students', label: 'Students' },
                { id: 'partners', label: 'Testimonials' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-200 
                    border-2 rounded-full
                    ${activeTab === tab.id 
                      ? 'bg-amber-300 border-black text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] translate-y-[-2px]' 
                      : 'bg-white border-transparent text-slate-700 hover:border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,0.2)]'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* --- GALLERY GRID CONTENT (6 columns on large screens) --- */}
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-6 auto-rows-[100px] sm:auto-rows-[120px] md:auto-rows-[140px] gap-3 md:gap-5 mt-10">
              {images.map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index % 10) * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    relative group bg-white cursor-pointer
                    border-[3px] md:border-[4px] ${frameColors[index % frameColors.length]?.split(" ")[0]}
                    rounded-3xl z-10 hover:z-50 hover:scale-105 
                    ${frameColors[index % frameColors.length]?.substring((frameColors[index % frameColors.length]?.indexOf("shadow") ?? 0))}
                    transition-all duration-300 overflow-hidden
                    ${getSpanFromFormat(item.format, index)} 
                  `}
                >
                  <Image 
                    src={item.image_url || item.src || item.url} 
                    alt={item.alt_text || item.alt || `Gallery Image ${index + 1}`}
                    fill
                    className="object-cover  transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* --- INFINITE SCROLL LOADER TARGET --- */}
            <div ref={loaderRef} className="w-full py-12 flex flex-col items-center justify-center min-h-[100px]">
              {loading && (
                <div className="flex flex-col items-center text-[#3E3431] font-bold gap-3">
                  <Loader2 className="w-10 h-10 animate-spin text-[#3E3431]" />
                  <span>Loading more {activeTab}...</span>
                </div>
              )}
              
              {!loading && !hasMore && images.length > 0 && (
                <div className="bg-amber-100 text-amber-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 border-2 border-amber-300 shadow-sm mt-8">
                  <Star className="w-5 h-5" fill="currentColor" />
                  You've seen all the {activeTab} images!
                  <Star className="w-5 h-5" fill="currentColor" />
                </div>
              )}

              {!loading && images.length === 0 && (
                <div className="text-[#3E3431] font-bold text-lg mt-8 bg-white/50 py-3 px-6 rounded-full inline-block backdrop-blur-sm">
                  No images found for this category yet.
                </div>
              )}
            </div>
        </div>
      </div>

      <WaveSeparator position="bottom" />

      {/* =========================================
          DYNAMIC LIGHTBOX / SLIDER MODAL
      ========================================= */}
      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-hidden"
            onClick={closeLightbox}
          >
            {/* --- Close Button --- */}
            <button 
              onClick={closeLightbox} 
              className="absolute top-6 right-6 p-3 text-black hover:text-red-500 bg-white hover:bg-white border-2 border-black rounded-full transition-all duration-300 z-[110] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <X size={28} />
            </button>

            {/* --- Prev Button --- */}
            <button 
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 md:left-8 lg:left-12 p-3 md:p-4 text-black bg-white hover:bg-amber-300 border-2 border-black rounded-full transition-all duration-300 z-[110] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <ChevronLeft size={36} />
            </button>

            {/* --- Main Zoomed Image --- */}
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className={`
                relative bg-white p-2 rounded-[2rem] 
                shadow-[12px_12px_0px_rgba(0,0,0,1)] border-4 border-black 
                flex flex-col transition-all duration-300
                ${getModalDimensions(currentImage?.format)}
              `}
            >
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src={currentImage?.image_url || currentImage?.src || currentImage?.url}
                  alt={currentImage?.alt_text || currentImage?.alt || "Zoomed gallery image"}
                  fill
                  className="object-cover md:object-contain bg-slate-100"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>

            {/* --- Next Button --- */}
            <button 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 lg:right-12 p-3 md:p-4 text-black bg-white hover:bg-amber-300 border-2 border-black rounded-full transition-all duration-300 z-[110] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <ChevronRight size={36} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SpreadingLoveSection;