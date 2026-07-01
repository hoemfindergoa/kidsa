"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Loader2, Camera, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import { createClient } from "@supabase/supabase-js";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- STATIC IMAGES FOR SCHOOL TAB ---
import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery9.jpeg";
import gallery3 from "@/public/gallery3.jpeg";
import gallery4 from "@/public/gallery6.jpeg";
import gallery5 from "@/public/gallery5.jpeg";
import gallery6 from "@/public/gallery4.jpeg";
import gallery7 from "@/public/gallery7.jpeg";

const schoolFrontItems = [
  { src: gallery1, alt_text: "Kids playing" },
  { src: gallery2, alt_text: "Art class" },
  { src: gallery3, alt_text: "Outdoor fun" },
  { src: gallery4, alt_text: "Reading time" },
  { src: gallery5, alt_text: "Group activity" },
  { src: gallery6, alt_text: "Music room" },
  { src: gallery7, alt_text: "Playground" } 
];

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
interface WaveSeparatorProps {
  position: "top" | "bottom";
  color: string;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ position, color }) => {
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
      className={`absolute inset-0 w-[200%] h-full ${color} ${opacityClass}`}
      animate={{ x: position === "top" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <path d={pathD} fill="currentColor"></path>
      </svg>
    </motion.div>
  );

  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
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

// --- MAIN GALLERY COMPONENT ---
export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("school");
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // --- LIGHTBOX STATES ---
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Reset states when clicking a new tab
  const handleTabChange = (newTab: string) => {
    if (activeTab === newTab) return;
    setActiveTab(newTab);
    setImages([]);
    setPage(0);
    setHasMore(true);
  };

  // Fetch data based on the active tab and current page
  const fetchImages = async (currentPage: number, currentTab: string) => {
    setLoading(true);
    
    const from = currentPage * 10;
    const to = from + 9;

    if (currentTab === "school") {
      setTimeout(() => { 
        const newItems = schoolFrontItems.slice(from, to + 1);
        setImages((prev) => [...prev, ...newItems]);
        if (newItems.length < 10) setHasMore(false);
        setLoading(false);
      }, 500);
      return;
    }

    const tableName = currentTab === "students" ? "studentimages" : "partnerimages";

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

  // --- LIGHTBOX NAVIGATION LOGIC ---
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
    setIsHovered(false);
  };

  // Keyboard navigation listener
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

  // Autoplay slider logic (pauses when hovered)
  useEffect(() => {
    if (selectedIndex === null || isHovered) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [selectedIndex, isHovered, goToNext]);


  return (
    <div className={`w-full min-h-screen bg-slate-50 flex flex-col ${bodyFont.className}`}>
      
      {/* =========================================
          HERO SECTION 
      ========================================= */}
      <section className="relative w-full bg-violet-400 pt-28 pb-32 overflow-hidden">
        {/* Floating Background Doodles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-20 left-10 text-white/20">
            <Star fill="currentColor" className="w-24 h-24" />
          </motion.div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-20 right-10 text-white/20">
            <Camera fill="currentColor" className="w-32 h-32" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl font-black text-white mb-4 ${titleFont.className} drop-shadow-lg`}>
            Our <span className="text-amber-300">Gallery</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-bold max-w-2xl mx-auto bg-violet-500/30 py-2 px-6 rounded-full backdrop-blur-sm border border-white/20">
            A sneak peek into the joy, learning, and fun at our school!
          </p>

          {/* --- TAB NAVIGATION --- */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { id: 'school', label: 'School Front' },
              { id: 'students', label: 'Students' },
              { id: 'partners', label: 'Testimonials' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-200 
                  border-2 rounded-none
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
        </div>

        <WaveSeparator position="bottom" color="text-slate-50" />
      </section>

      {/* =========================================
          GALLERY GRID SECTION 
      ========================================= */}
      <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className={`
                group relative w-full h-[250px] md:h-[300px] bg-white rounded-3xl p-2 shadow-xl border-4 cursor-pointer
                ${activeTab === 'students' ? 'border-sky-100 hover:border-sky-300' : 'border-violet-100 hover:border-violet-300'}
                transition-all duration-300 hover:-translate-y-2 overflow-hidden
              `}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={img.image_url || img.src}
                  alt={img.alt_text || img.alt || `Gallery Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 bg-white/30 backdrop-blur-sm p-3 rounded-full transition-opacity duration-300">
                      <Camera className="w-6 h-6 text-white" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- INFINITE SCROLL LOADER TARGET --- */}
        <div ref={loaderRef} className="w-full py-12 flex flex-col items-center justify-center min-h-[100px]">
          {loading && (
            <div className="flex flex-col items-center text-violet-500 font-bold gap-3">
              <Loader2 className="w-10 h-10 animate-spin text-violet-500" />
              <span>Loading more {activeTab}...</span>
            </div>
          )}
          
          {!loading && !hasMore && images.length > 0 && (
            <div className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 border-2 border-emerald-200 shadow-sm mt-8">
              <Star className="w-5 h-5" fill="currentColor" />
              You've seen all the {activeTab} images!
              <Star className="w-5 h-5" fill="currentColor" />
            </div>
          )}

          {!loading && images.length === 0 && (
            <div className="text-slate-500 font-bold text-lg mt-8">
              No images found for this category yet.
            </div>
          )}
        </div>

      </section>

      {/* =========================================
          LIGHTBOX / SLIDER MODAL (WITH COLOR & ANIMATION)
      ========================================= */}
      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* --- Animated Colorful Background Accents --- */}
            
            {/* Left Accent (Cool Violet/Cyan) */}
            <motion.div 
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-[30%] h-full bg-gradient-to-r from-violet-600/40 via-cyan-500/10 to-transparent blur-[100px] pointer-events-none"
            />

            {/* Right Accent (Warm Pink/Amber) */}
            <motion.div 
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-0 right-0 w-[30%] h-full bg-gradient-to-l from-pink-600/40 via-amber-500/10 to-transparent blur-[100px] pointer-events-none"
            />

            {/* --- Close Button --- */}
            <button 
              onClick={closeLightbox} 
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 backdrop-blur-md rounded-full transition-all duration-300 z-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:rotate-90"
            >
              <X size={28} />
            </button>

            {/* --- Prev Button --- */}
            <button 
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 md:left-12 p-3 md:p-5 text-white hover:text-cyan-300 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 z-50 group shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-x-2"
            >
              <ChevronLeft size={36} className="transition-transform group-hover:-translate-x-1" />
            </button>

            {/* --- Main Zoomed Image --- */}
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-[85vw] h-[75vh] max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <Image
                src={images[selectedIndex].image_url || images[selectedIndex].src}
                alt={images[selectedIndex].alt_text || images[selectedIndex].alt || "Zoomed gallery image"}
                fill
                className="object-contain bg-black/40 backdrop-blur-sm p-4"
                sizes="100vw"
                priority
              />
              
              {/* Image Counter Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white font-bold tracking-widest text-sm shadow-xl">
                <span className="text-amber-300">{selectedIndex + 1}</span> / {images.length}
              </div>
            </motion.div>

            {/* --- Next Button --- */}
            <button 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-12 p-3 md:p-5 text-white hover:text-pink-300 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 z-50 group shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:translate-x-2"
            >
              <ChevronRight size={36} className="transition-transform group-hover:translate-x-1" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}