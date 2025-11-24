"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Sparkles, 
  BookOpen, 
  Palette, 
  Award,
  Heart,
  Sun,
  Star
} from "lucide-react";
import image1 from "../public/butterfly.png";
import image2 from "../public/elephant.png"
import image3 from "../public/maindoodle.png"
import image4 from "../public/bird.png"
import image5 from "../public/cloud.png"


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

const ProgramsSection = () => {
  return (
    <section className="bg-white font-sans" id="programs">
      
      {/* FONTS & STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
      `}</style>

      {/* SECTION HEADER */}
      <div className=" bg-[#066d8c] mx-auto px-6 py-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-[#f7a7b4] text-white px-6 py-2 font-bold text-sm uppercase tracking-widest rounded-full inline-block mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
            Growing with <span className="text-[#7209B7]">Purpose</span>
          </h2>
        </motion.div>
      </div>

      {/* MOSAIC LAYOUT */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0">

        {/* 1. LITTLE EXPLORERS (Play Group) */}
        <Tile className="md:col-span-6 bg-[#9dcedc] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
            
              <div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  Little Explorers
                </h3>
                <p className="text-sm font-bold text-blue-100 uppercase tracking-wider">
                  Play Group • Age 2–3 Years
                </p>
              </div>
            </div>

            <p className="text-lg font-bold text-blue-50 leading-relaxed mt-6">
              Begin their joyful learning journey through play, imagination, and hands-on discovery. Activities build sensory awareness, strengthen motor skills, and encourage social interaction.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-blue-50">Sensory development & motor skills</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-blue-50">Social interaction & expression</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-blue-50">Warm, home-like environment</span>
              </div>
            </div>
            <Image src={image1} height={300} width={300} alt="Butterfly" className="mt-4 md:ml-[450px]  ml-[120px] rounded-lg" />

          </div>

          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-tl-full"></div>
        </Tile>

        {/* 2. CURIOUS LEARNERS (Nursery) */}
        <Tile className="md:col-span-6 bg-[#fad06e] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 opacity-20">
            <BookOpen className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
             
              <div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight">
                  Curious Learners
                </h3>
                <p className="text-sm font-bold text-yellow-100 uppercase tracking-wider">
                  Nursery • Age 3–4 Years
                </p>
              </div>
            </div>

            <p className="text-lg font-bold text-yellow-50 leading-relaxed mt-6">
              Explore the world of colors, numbers, and letters through fun, interactive activities. This stage builds imagination, communication, and growing independence.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-yellow-50">Colors, numbers & letters</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-yellow-50">Observation & questioning skills</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-yellow-50">Creative thinking foundation</span>
              </div>
            </div>
                        <Image src={image2} height={300} width={300} alt="Butterfly" className="mt-4 md:ml-[450px]  ml-[0px] rounded-lg" />

          </div>

          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-tr-full"></div>
        </Tile>

        {/* 3. CREATIVE THINKERS (LKG) */}
        <Tile className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 opacity-20">
            <Palette className="w-24 h-24" />
          </div>
          
          <div className="relative z-10">
        
            
            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-2">
              Creative Thinkers
            </h3>
            <p className="text-sm font-bold text-pink-100 uppercase tracking-wider mb-6">
              Lower Kindergarten • Age 4–5 Years
            </p>

            <p className="text-lg font-bold text-pink-50 leading-relaxed">
              Strengthen early academic skills while exploring creativity and expression through phonics, storytelling, art, and group play.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-pink-50">Reading & writing skills</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-pink-50">Numeracy & problem-solving</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-pink-50">Confidence & collaboration</span>
              </div>
            </div>
                        <Image src={image3} height={400} width={400} alt="Butterfly" className="mt-4 md:ml-[200px] ml-[40px] rounded-lg" />

          </div>
        </Tile>

        {/* 4. FUTURE LEADERS (UKG) */}
        <Tile className="md:col-span-4 bg-[#7209B7] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 opacity-20">
            <Award className="w-24 h-24" />
          </div>
          
          <div className="relative z-10">
            
            
            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-2">
              Future Leaders
            </h3>
            <p className="text-sm font-bold text-purple-100 uppercase tracking-wider mb-6">
              Upper Kindergarten • Age 5–6 Years
            </p>

            <p className="text-lg font-bold text-purple-50 leading-relaxed">
              Prepare for formal schooling with strong academics, life skills, and character development. Build leadership, empathy, and responsibility.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-purple-50">Language, math & science</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-purple-50">Leadership & empathy</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                <span className="font-medium text-purple-50">School readiness</span>
              </div>
            </div>
                        <Image src={image4} height={300} width={300} alt="Butterfly" className="mt-4 md:ml-[200px] ml-[2px] rounded-lg" />

          </div>
        </Tile>

        {/* 5. DAYCARE (Little Nest) - FULL WIDTH */}
        <Tile className="md:col-span-4 bg-[#06D6A0] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-4 right-4 opacity-20">
            <Heart className="w-24 h-24" />
          </div>
          
          <div className="relative z-10">
            
            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-2">
              Little Nest
            </h3>
            <p className="text-sm font-bold text-green-100 uppercase tracking-wider mb-6">
              Daycare • Age 2–12 Years
            </p>

            <p className="text-lg font-bold text-green-50 leading-relaxed">
              A safe, caring, and homely space for children after school. With nutritious meals, nap areas, and engaging activities—cared for by trained and loving caregivers.
            </p>

            <div className="mt-8  -mx-8 p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0"></div>
                  <span className="font-bold">Safe & homely environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0"></div>
                  <span className="font-bold">Nutritious meals included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full shrink-0"></div>
                  <span className="font-bold">Engaging activities & rest areas</span>
                </div>
              </div>
            </div>
              <Image src={image5} height={300} width={300} alt="Butterfly" className="mt-4  md:ml-[200px] ml-[2px] rounded-lg" />
          </div>
        </Tile>

      </div>

 

    </section>
  );
};

export default ProgramsSection;