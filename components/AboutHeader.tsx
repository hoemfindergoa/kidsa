"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight, Star, Heart } from "lucide-react";

const AboutHeaderSimple: React.FC = () => {
  return (
    // Added rounded-b-[3rem] for a soft, friendly bottom edge instead of a wave
    <header className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-xl">
      
      {/* --- BACKGROUND DOODLES --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles/Particles */}
        <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 w-20 h-20 bg-white rounded-full opacity-20 blur-xl"
        />
        <motion.div 
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-xl"
        />
        
        {/* Doodle SVGs */}
        <svg className="absolute top-20 right-20 w-24 h-24 opacity-30 text-white animate-pulse" viewBox="0 0 100 100">
             <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <svg className="absolute bottom-32 left-20 w-16 h-16 opacity-30 text-white" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10,10" />
        </svg>
      </div>

      {/* --- FLOATING ICONS --- */}
      <motion.div 
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[20%] left-[15%] text-white/40 hidden md:block"
      >
        <Star className="w-12 h-12" fill="currentColor" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-[30%] right-[20%] text-rose-200/50 hidden md:block"
      >
        <Heart className="w-10 h-10" fill="currentColor" />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 mt-10">
        
        {/* Breadcrumb */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
        >
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4 opacity-75" />
            <span className="text-white">About Us</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4"
        >
          Who We 
          <span className="inline-block relative ml-4 text-yellow-200 font-cursive" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            Are
            {/* Underline Doodle */}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Nurturing curiosity, creativity, and confidence in every little dreamer.
        </motion.p>
      </div>

    </header>
  );
};

export default AboutHeaderSimple;