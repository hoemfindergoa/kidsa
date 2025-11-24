"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Heart, 
  ShieldCheck, 
  Quote, 
  GraduationCap, 
  Puzzle, 
  Star,
  Sparkles,
  Blocks,
  Rocket
} from "lucide-react";

type TileProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

const Tile: React.FC<TileProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative p-8 md:p-10 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const AboutUs = () => {
  return (
    <section  className="bg-white font-sans" id="about">
      
      {/* 0. FONTS & STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
      `}</style>

      {/* HEADER TITLE AREA */}
      <div className="bg-white py-6 text-center px-4 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="relative z-10"
         >
           <h2 className="text-4xl md:text-5xl font-calligraphy text-slate-900 mb-2">
             About <span className="text-[#FF4D6D]">Us</span>
           </h2>
         
         </motion.div>
      </div>

      {/* THE MOSAIC LAYOUT (Sharp Edges, Vibrant Colors) */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12">

        {/* 1. AIM & VISION (Pink Block) */}
        <Tile className="md:col-span-6 bg-[#FF9AAB] text-white min-h-[500px] flex flex-col justify-center">
           <div className="absolute top-0 right-0 p-4 opacity-20">
              <Target className="w-32 h-32" />
           </div>
           
           <div className="relative z-10 max-w-xl mx-auto md:mx-0">
             <div className="flex items-center gap-3 mb-6">
               <span className="bg-white text-[#FF4D6D] px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-sm">Our Mission</span>
             </div>
             <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
               Nurturing <span className="text-[#FFE5E5]">Curiosity</span> & <br/>
               Inspiring <span className="text-[#FFE5E5]">Dreams</span>
             </h3>
             <p className="text-lg font-bold text-pink-50 mb-8 leading-relaxed">
               We aim to create a safe haven where learning is an adventure. Our vision is to empower every child with confidence, creativity, and compassion.
             </p>
             <div className="flex gap-4">
                <div className="flex flex-col items-center">
                   <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mb-2 shadow-sm">
                      <Rocket className="w-8 h-8 text-[#FF4D6D]" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                </div>
                <div className="flex flex-col items-center">
                   <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mb-2 shadow-sm">
                      <Blocks className="w-8 h-8 text-[#FF4D6D]" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-wider">Create</span>
                </div>
             </div>
           </div>
        </Tile>

        {/* 2. IMAGE BLOCK (Child with Toys) */}
        <Tile className="md:col-span-6 bg-[#FFD166] p-0 min-h-[500px] relative group">
           <img 
             src="https://img.freepik.com/free-photo/cute-little-girl-playing-with-colorful-toys_155003-45524.jpg?w=740" 
             alt="Child Playing" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           {/* Graphic Overlay */}
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
           <div className="absolute bottom-8 left-8 text-white">
              <p className="font-calligraphy text-4xl">Pure Joy!</p>
           </div>
        </Tile>

        {/* 3. WHY CHOOSE US (Blue Block) */}
        <Tile className="md:col-span-4 bg-[#4CC9F0] text-white min-h-[400px]">
           <h3 className="text-3xl font-black mb-8 border-b-4 border-white/30 inline-block pb-2">Why Parents Love Us</h3>
           <ul className="space-y-6">
             {['Safe & Secure Campus', 'Nutritious Meals Included', 'Large Outdoor Playground', 'Transparent Communication'].map((item, i) => (
               <li key={i} className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-white/20 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-white fill-white" />
                 </div>
                 <span className="font-bold text-lg">{item}</span>
               </li>
             ))}
           </ul>
        </Tile>

        {/* 4. PHILOSOPHY & SAFETY (Green Block) */}
        <Tile className="md:col-span-4 bg-[#06D6A0] text-white min-h-[400px] flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-3 mb-4">
                 <Puzzle className="w-8 h-8 text-[#E0FFF8]" />
                 <h3 className="text-2xl font-black uppercase">Teaching Philosophy</h3>
              </div>
              <p className="font-medium text-[#E0FFF8] text-lg leading-relaxed mb-8">
                 We follow a unique blend of Montessori and Play-Way methods. Learning happens best when hands are busy and hearts are happy.
              </p>
           </div>
           
           <div className="bg-[#04ad80] p-6 -mx-8 -mb-10 mt-auto">
              <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="w-6 h-6 text-white" />
                 <h4 className="font-black text-xl uppercase">Safety First</h4>
              </div>
              <p className="text-sm font-medium opacity-90">24/7 CCTV • Verified Staff • Child-safe Zones</p>
           </div>
        </Tile>

        {/* 5. TEACHERS (Yellow Block) */}
        <Tile className="md:col-span-4 bg-[#FFD166] text-[#5c4d26] min-h-[400px]">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <GraduationCap className="w-8 h-8 text-[#FFD166]" />
           </div>
           <h3 className="text-3xl font-black mb-4">Expert Educators</h3>
           <p className="font-bold text-lg opacity-80 mb-8">
             Our teachers aren't just qualified; they are passionate mentors with 5+ years of experience in early child development.
           </p>
           
           <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FFD166] bg-gray-100 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+5}`} alt="Teacher" />
                    </div>
                 ))}
              </div>
              <span className="font-black text-sm uppercase tracking-wide">Highly Qualified Team</span>
           </div>
        </Tile>

        {/* 6. LEARNING THROUGH PLAY (Full Width Banner) */}
        <Tile className="md:col-span-8 bg-slate-900 relative p-0 min-h-[300px] group overflow-hidden">
           <img 
             src="https://img.freepik.com/free-photo/preschooler-playing-with-abacus_23-2148193688.jpg?w=996" 
             alt="Learning" 
             className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-16">
              <span className="text-[#FFD166] font-bold tracking-widest uppercase mb-2">Our Approach</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Learning Through Play</h3>
              <p className="text-white text-lg font-medium max-w-xl">
                 We believe play is serious learning. From building blocks to storytelling, every activity is designed to spark cognitive growth.
              </p>
           </div>
        </Tile>

        {/* 7. TESTIMONIAL (Purple Block) */}
        <Tile className="md:col-span-4 bg-[#7209B7] text-white flex flex-col justify-center min-h-[300px]">
           <Quote className="w-12 h-12 text-[#9D4EDD] mb-6 fill-current" />
           <p className="text-xl md:text-2xl font-hand leading-relaxed mb-6">
             "My daughter wakes up excited to go to school every single day. The teachers are simply wonderful!"
           </p>
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=parent1" alt="Parent" />
              </div>
              <div>
                 <p className="font-bold text-sm">Mrs. Kapoor</p>
                 <p className="text-xs text-purple-200 uppercase tracking-wider">Parent of Viaan</p>
              </div>
           </div>
        </Tile>

      </div>
    </section>
  );
};

export default AboutUs;