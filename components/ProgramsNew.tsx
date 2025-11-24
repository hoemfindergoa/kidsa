"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Palette, Rocket, Star, Heart } from 'lucide-react';

const BentoPrograms = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learning is an <span className="text-orange-500">Adventure</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our colorful programs designed to nurture curiosity, creativity, and confidence at every age.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(350px,auto)]">
          
          {/* Card 1: Little Explorers (Pink) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#FF8FA3] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10 text-white">
              <div className="mb-4 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                Age 2–3 Years
              </div>
              <h3 className="text-3xl font-bold mb-3 leading-tight">Little Explorers</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Sensory awareness and motor skills through joyful play. A warm, home-like environment where they feel safe and loved.
              </p>
            </div>
            
            {/* Background Icon Watermark */}
            <Heart className="absolute top-4 right-4 text-white/20 w-24 h-24 -rotate-12" />
            
            {/* Placeholder for Image popping up from bottom */}
            <div className="h-32 w-full mt-4 relative z-10 flex items-end justify-center">
                 {/* Replace div with <img src="..." /> */}
                 <div className="w-32 h-32 bg-white/30 rounded-full blur-xl absolute bottom-0 translate-y-1/2"></div>
                 <Gamepad2 className="w-20 h-20 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 2: Curious Learners (Blue) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#4BC9F1] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10 text-white">
              <div className="mb-4 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                Age 3–4 Years
              </div>
              <h3 className="text-3xl font-bold mb-3 leading-tight">Curious Learners</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Exploring colors, numbers, and letters. Laying a strong foundation for creative thinking and early academics.
              </p>
            </div>

            <Rocket className="absolute top-4 right-4 text-white/20 w-24 h-24 rotate-12" />

            <div className="h-32 w-full mt-4 relative z-10 flex items-end justify-center">
                 <div className="w-32 h-32 bg-white/30 rounded-full blur-xl absolute bottom-0 translate-y-1/2"></div>
                 <Palette className="w-20 h-20 text-white drop-shadow-lg transform group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 3: Daycare (Image Heavy / Green) - Top Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#4ADE80] rounded-3xl p-8 relative overflow-hidden flex flex-col group"
          >
            {/* Simulating the 'Photo' card from your reference */}
            <div className="absolute inset-0 bg-black/10 z-0" /> 
            {/* You would put a real background image here: <img src="..." className="absolute inset-0 w-full h-full object-cover" /> */}
            
            <div className="relative z-10 text-white mt-auto">
              <div className="mb-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                Age 2–12 Years
              </div>
              <h3 className="text-2xl font-bold mb-1">Little Nest Daycare</h3>
              <p className="text-sm text-white/90 mb-4">Safe, caring, and homely after-school space.</p>
              
              <button className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all bg-white text-green-500 px-4 py-2 rounded-full w-fit">
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Card 4: Creative Thinkers (Yellow) - Spans 2 Columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#FCD34D] rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 group"
          >
             <div className="relative z-10 text-white flex-1">
              <div className="mb-4 bg-black/10 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm text-yellow-900">
                Age 4–5 Years
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Curiosity Sparks & <br/>Imagination Takes Flight</h3>
              <p className="text-yellow-900/80 text-base leading-relaxed max-w-lg mb-6">
                In the Creative Thinkers program, children strengthen early academic skills while exploring creativity. Through phonics, storytelling, art, and thematic activities, they build confidence and collaboration.
              </p>
              <button className="bg-yellow-900 text-yellow-400 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                Explore LKG Program
              </button>
            </div>
            
            {/* Decorative visual area for the wide card */}
            <div className="w-full md:w-1/3 h-full min-h-[200px] relative flex items-center justify-center">
                {/* Toy Stack Visualization */}
                 <Star className="absolute top-0 right-0 text-white/40 w-48 h-48 rotate-12" />
                 <div className="relative z-10 grid grid-cols-2 gap-2">
                    <div className="w-16 h-16 bg-red-400 rounded-lg shadow-md animate-bounce"></div>
                    <div className="w-16 h-16 bg-blue-400 rounded-lg shadow-md animate-pulse"></div>
                    <div className="w-16 h-16 bg-green-400 rounded-lg shadow-md"></div>
                    <div className="w-16 h-16 bg-purple-400 rounded-lg shadow-md"></div>
                 </div>
            </div>
          </motion.div>

          {/* Card 5: Future Leaders (Purple) - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#8B5CF6] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center text-center group"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                 <div className="w-64 h-64 bg-white/10 rounded-full absolute -top-10 -right-10 blur-2xl"></div>
            </div>
            
            <div className="relative z-10 text-white">
              <div className="mx-auto mb-4 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                Age 5–6 Years
              </div>
              <h3 className="text-2xl font-bold mb-6">Future Leaders</h3>
              <div className="text-4xl text-white/40 mb-2">❝</div>
              <p className="text-lg font-medium leading-snug mb-6 italic">
                "Empowering children to take their next big step with readiness and enthusiasm."
              </p>
              <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors">
                Meet UKG
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoPrograms;