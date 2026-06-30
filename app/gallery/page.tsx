"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Loader2, Camera, Star } from "lucide-react";
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
    
    // Pagination logic (0-9, 10-19, etc.)
    const from = currentPage * 10;
    const to = from + 9;

    // Handle Static Local Fallback first
    if (currentTab === "school") {
      setTimeout(() => { // Simulated network delay for smooth UI
        const newItems = schoolFrontItems.slice(from, to + 1);
        setImages((prev) => [...prev, ...newItems]);
        if (newItems.length < 10) setHasMore(false);
        setLoading(false);
      }, 500);
      return;
    }

    // Determine correct Supabase table
    const tableName = currentTab === "students" ? "studentimages" : "partnerimages";

    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('image_url, format, alt_text')
        .range(from, to); 
        // Note: Add `.order('created_at', { ascending: false })` if you want newest first!

      if (error) throw error;

      if (data) {
        setImages((prev) => [...prev, ...data]);
        
        // If we get fewer than 10 images back, we hit the end of the DB records
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

  // Trigger fetch when tab OR page changes
  useEffect(() => {
    fetchImages(page, activeTab);
  }, [page, activeTab]);

  // Infinite Scroll Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        // If the loader hits the screen and we aren't loading, grab next page
        if (first?.isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loading, hasMore]);

  return (
    <div className={`w-full min-h-screen bg-slate-50 flex flex-col ${bodyFont.className}`}>
      
      {/* =========================================
          HERO SECTION (Violet Theme)
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
              className={`
                group relative w-full h-[250px] md:h-[300px] bg-white rounded-3xl p-2 shadow-xl border-4 
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
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

    </div>
  );
}