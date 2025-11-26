"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import maineimage from "../public/mainimage.png";

const Hero = () => {
  return (
    <section className="relative w-full pt-[100px] h-[260px] md:h-[700px]  overflow-hidden flex items-center justify-center font-sans">
      
      {/* 0. GOOGLE FONT IMPORT (For Calligraphy Style) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        
        .font-calligraphy {
          font-family: 'Pacifico', cursive;
        }
        .font-script {
           font-family: 'Dancing Script', cursive;
        }
      `}</style>

      {/* 1. BACKGROUND IMAGE (Full Cover) */}
      <div className="absolute pt-16  inset-0 z-0">
        <Image 
          // Using the image generated in the previous step
          src={maineimage}
          alt="Indian Kids Playing Background" 
          className="w-full h-full object-cover"
        />
        {/* Subtle Dark Overlay to make white text pop */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/20 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. MAIN CONTENT OVERLAY (Centered Text) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center mt-8">
        
        {/* Small Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 mb-3"
        >
          <Sparkles className="w-3 h-3 text-yellow-200 fill-yellow-200" />
          <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase shadow-sm">Admissions Open</span>
        </motion.div>

        {/* Main Title - Calligraphy Style & Smaller */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-calligraphy text-4xl md:text-5xl text-white drop-shadow-md mb-2 relative inline-block"
        >
          Little <span className="text-pink-500">Dreamers</span>
          {/* Cute Decor Star */}
          <Star className="absolute -top-3 -right-5 w-5 h-5 text-yellow-300 fill-yellow-300 rotate-12 animate-pulse" />
        </motion.h1>

        {/* Subtitle - Script Style */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-script text-2xl md:text-3xl text-white/95 mb-6 drop-shadow-sm font-normal"
        >
          Where Little Dreams Begin to  <span className="text-yellow-200 decoration-wavy underline decoration-white/30">Shine!</span>
        </motion.h2>

        {/* Buttons - Small & Elegant */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button className="bg-pink-500/90 hover:bg-pink-500 text-white px-5 py-2 rounded-full font-medium text-sm shadow-md backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-2">
            Join Now <ArrowRight className="w-4 h-4" />
          </button>
{/*           
          <button className="bg-white/20 hover:bg-white/30 text-white border border-white/50 px-5 py-2 rounded-full font-medium text-sm shadow-sm backdrop-blur-sm transition-all flex items-center gap-2">
            <Play className="w-3 h-3 fill-white" /> Watch Video
          </button> */}
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;