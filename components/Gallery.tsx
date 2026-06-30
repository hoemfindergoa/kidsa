"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

// --- SUPABASE CLIENT ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// --- GALLERY IMAGE IMPORTS ---
import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery9.jpeg";
import gallery3 from "@/public/gallery3.jpeg";
import gallery4 from "@/public/gallery6.jpeg";
import gallery5 from "@/public/gallery5.jpeg";
import gallery6 from "@/public/gallery4.jpeg";
import gallery7 from "@/public/gallery7.jpeg";

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

// --- STATIC DATA ---
const schoolFrontItems = [
  { src: gallery1, alt: "Kids playing" },
  { src: gallery2, alt: "Art class" },
  { src: gallery3, alt: "Outdoor fun" },
  { src: gallery4, alt: "Reading time" },
  { src: gallery5, alt: "Group activity" },
  { src: gallery6, alt: "Music room" },
  { src: gallery7, alt: "Playground" } 
];

// Fallback layout if no format is provided
const getDynamicSpanClass = (index: number) => {
  const spans = [
    "md:col-span-2 md:row-span-2", // Large
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-1 md:row-span-2", // Tall
    "md:col-span-1 md:row-span-1", // Small
    "md:col-span-2 md:row-span-1", // Wide
    "md:col-span-1 md:row-span-1"  // Small
  ];
  return spans[index % spans.length];
};

// Layout based on Supabase Format Column
const getSpanFromFormat = (format: string | undefined, index: number) => {
  if (format === 'H') return "md:col-span-2 md:row-span-1"; // Wide/Horizontal
  if (format === 'Y' || format === 'V') return "md:col-span-1 md:row-span-2"; // Tall/Vertical
  return getDynamicSpanClass(index); // Default fallback
};

const SpreadingLoveSection = () => {
  const [activeTab, setActiveTab] = useState("school");
  
  // States for API data
  const [partnerImages, setPartnerImages] = useState<any[]>([]);
  const [studentImages, setStudentImages] = useState<any[]>([]);
  
  // Loading states
  const [isLoadingPartners, setIsLoadingPartners] = useState(false);
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);

  // Fetch Supabase Data based on active tab
  useEffect(() => {
    // --- Fetch Partners ---
    if (activeTab === "partners" && partnerImages.length === 0) {
      const fetchPartnerData = async () => {
        setIsLoadingPartners(true);
        try {
          const { data, error } = await supabase
            .from('partnerimages')
            .select('image_url, format, alt_text')
            .limit(10);
            
          if (error) throw error;
          // Set the data, and NEVER clear it out with a setTimeout!
          setPartnerImages(data || []);
        } catch (error) {
          console.error("Error fetching partner images:", error);
        } finally {
          setIsLoadingPartners(false);
        }
      };
      fetchPartnerData();
    }

    // --- Fetch Students ---
    if (activeTab === "students" && studentImages.length === 0) {
      const fetchStudentData = async () => {
        setIsLoadingStudents(true);
        try {
          const { data, error } = await supabase
            .from('studentimages')
            .select('image_url, format, alt_text')
            .limit(10);
            
          if (error) throw error;
          setStudentImages(data || []);
        } catch (error) {
          console.error("Error fetching student images:", error);
        } finally {
          setIsLoadingStudents(false);
        }
      };
      fetchStudentData();
    }
  }, [activeTab, partnerImages.length, studentImages.length]);

  // Determine which images to show based on the active tab
  const renderGalleryContent = () => {
    let currentImages = [];
    let loading = false;
    let emptyMessage = "";

    if (activeTab === "school") {
      currentImages = schoolFrontItems;
      emptyMessage = "No school images available.";
    } else if (activeTab === "students") {
      currentImages = studentImages;
      loading = isLoadingStudents;
      emptyMessage = "No student images available yet.";
    } else if (activeTab === "partners") {
      currentImages = partnerImages;
      loading = isLoadingPartners;
      emptyMessage = "No partner testimonials available yet.";
    }

    if (loading) {
      return (
        <div className="py-24 text-center">
          <h3 className="text-xl font-bold text-[#3E3431]">Loading images...</h3>
        </div>
      );
    }

    // Enforce the strict 10-image limit for this section
    const displayImages = currentImages.slice(0, 10);

    if (displayImages.length === 0) {
      return (
        <div className="py-24 text-center">
          <h3 className="text-xl font-bold text-[#3E3431]">{emptyMessage}</h3>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[320px] gap-4 md:gap-6 mt-10">
        {displayImages.map((item, index) => (
          <motion.div
            key={`${activeTab}-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className={`
              relative group overflow-hidden bg-white
              border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,0.8)]
              rounded-none
              ${getSpanFromFormat(item.format, index)} 
              min-h-[400px] md:min-h-0
            `}
          >
            <Image 
              src={item.src || item.image_url || item.url} 
              alt={item.alt || item.alt_text || `Gallery Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay graphic effect */}
            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 transition-colors duration-300"></div>
          </motion.div>
        ))}
      </div>
    );
  };

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

      <div className="md:mx-44 mx-4 mb-12 px-6 relative z-10">
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
                { id: 'school', label: 'School Front' },
                { id: 'students', label: 'Students' },
                { id: 'partners', label: 'Testimonials' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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

            {/* --- GALLERY GRID CONTENT --- */}
            {renderGalleryContent()}

            {/* View More Button */}
            <Link href="/gallery">
            <div className="mt-16 flex justify-center">
               <button className="flex items-center gap-2 bg-white px-8 py-4 font-extrabold uppercase tracking-wide text-[#3E3431] border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
                  View Full Gallery <ArrowRight className="w-5 h-5" />
               </button>
            </div>
            </Link>
        </div>
      </div>

      <WaveSeparator position="bottom" />
    </section>
  );
};

export default SpreadingLoveSection;