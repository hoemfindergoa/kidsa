"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star, Sparkles, ArrowLeft, Wrench } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Link from "next/link";

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'], display: 'swap' });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], display: 'swap' });

export default function KidGamesPage() {
  return (
    <div className={`min-h-screen w-full bg-sky-400 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-700 ${bodyFont.className}`}>
      
      {/* --- FLOATING BACKGROUND DOODLES --- */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-10 md:left-32 text-amber-300">
            <Star fill="currentColor" className="w-16 h-16 md:w-24 md:h-24" />
         </motion.div>
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 right-10 md:right-32 text-emerald-300">
            <Sparkles fill="currentColor" className="w-20 h-20 md:w-32 md:h-32" />
         </motion.div>
         <motion.div animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 right-20 text-rose-300">
            <Wrench fill="currentColor" className="w-12 h-12 md:w-16 md:h-16" />
         </motion.div>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 w-[90%] max-w-2xl bg-white rounded-[3rem] border-4 md:border-[6px] border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_rgba(0,0,0,1)] p-10 md:p-16 text-center flex flex-col items-center"
      >
        
        {/* Animated Icon */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-amber-300 p-6 rounded-full border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-8"
        >
          <Rocket className="w-16 h-16 md:w-20 md:h-20 text-slate-900" />
        </motion.div>

        {/* Text Content */}
        <div className="inline-block bg-sky-100 px-6 py-2 rounded-full border-2 border-black border-dashed mb-6 transform -rotate-2">
          <span className="font-black text-sky-600 uppercase tracking-widest text-sm md:text-base">
            Work in progress
          </span>
        </div>

        <h1 className={`${titleFont.className} text-5xl md:text-7xl text-slate-900 mb-6 drop-shadow-sm`}>
          Coming <span className="text-rose-500">Soon!</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-slate-600 mb-10 max-w-lg leading-relaxed">
          We are busy building some super fun games for you. Check back a little later!
        </p>

        {/* Back Button */}
        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            className="flex items-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-4 rounded-full border-4 border-black font-black text-lg md:text-xl uppercase tracking-wider shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all"
          >
            <ArrowLeft className="w-6 h-6" /> Go Back Home
          </motion.button>
        </Link>
        
      </motion.div>

    </div>
  );
}