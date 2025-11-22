"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { motion, Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80", alt: "Kids jumping" },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80", alt: "Kids on playground" },
  { src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80", alt: "Kids reading" },
];

const Hero = () => {
  // Embla Carousel setup
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const stats = [
    { value: "15+", label: "Years Experience", color: "text-[#FF8A80]", bgColor: "bg-[#FF8A80]/10" },
    { value: "500+", label: "Happy Students", color: "text-[#4caf50]", textColor: "text-emerald-500", bgColor: "bg-[#B8F3D1]/40" },
    { value: "30+", label: "Expert Teachers", color: "text-[#A7D8FF]", bgColor: "bg-[#A7D8FF]/10" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-48 min-h-[90vh] flex items-center">
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      
      {/* --- 1. THE WAVY DASHED LINE (Background) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <svg className="absolute w-full h-full opacity-30 text-teal-300" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <path 
            d="M-50,100 C150,50 300,200 450,150 C600,100 700,50 900,100 C1100,150 1100,400 900,500 C700,600 600,750 400,700 C200,650 100,400 -50,450" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeDasharray="20 20"
            className="animate-pulse-slow" 
          />
        </svg>
      </div>

      {/* --- 2. THE BOTTOM WAVE (Sand color) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg className="block w-full h-16 md:h-24 lg:h-32 text-[#FFF9F0]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,245.3C672,245,768,203,864,186.7C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- RIGHT SIDE: THE BUBBLE WINDOW CAROUSEL --- */}
          {/* We order this first on mobile for visual impact, or last on desktop */}
          <div className="relative order-first lg:order-last flex justify-center">
            
            {/* The Container Size */}
            <div className="relative w-full max-w-[550px] aspect-[4/3] md:aspect-[5/4]">
              
              {/* THE ORGANIC SHAPE TRICK:
                  We use an SVG mask/clipPath logic.
                  Here we use a 'blob' borderRadius as a fallback, 
                  but for the specific shape, a clip-path is best.
                  
                  Let's use a "Squircle-ish" shape via CSS radius for smoothness
                  OR a custom clip-path polygon if we want edges.
                  The reference looks like a wave-distorted rectangle.
              */}
              
              {/* Background Blob Shadow/Offset (The light teal rim effect) */}
              <div 
                className="absolute inset-0 bg-[#dbeff6] scale-[1.03] translate-y-2 rounded-[35%_65%_70%_30%_/_30%_30%_70%_70%]"
                style={{
                  borderRadius: "45% 55% 52% 48% / 54% 43% 57% 46%", // Organic blob shape
                  transform: "rotate(-3deg)"
                }}
              />
              
              {/* The "Frame" Border (Thick Light Blue/Grey Stroke) */}
              <div 
                className="absolute inset-[-15px] border-[20px] border-[#D1E9F1]/80 z-20 pointer-events-none"
                style={{
                  borderRadius: "42% 58% 55% 45% / 51% 40% 60% 49%",
                  transform: "rotate(-2deg)"
                }}
              />

              {/* The Main Clipper for Images */}
              <div 
                className="relative h-full w-full overflow-hidden shadow-2xl z-10 bg-white"
                style={{
                   borderRadius: "45% 55% 52% 48% / 54% 43% 57% 46%",
                   transform: "rotate(-2deg)"
                }}
              >
                 {/* Carousel Inside the Blob */}
                 <div className="h-full w-full" ref={emblaRef}>
                    <div className="flex h-full w-full">
                      {carouselImages.map((img, index) => (
                        <div className="relative flex-[0_0_100%] h-full w-full min-w-0" key={index}>
                           <img
                             src={img.src}
                             alt={img.alt}
                             className="absolute inset-0 w-full h-full object-cover scale-110" // Slight scale to avoid gaps during blob curve
                           />
                           {/* Overlay gradient for better text contrast if needed later */}
                           <div className="absolute inset-0 bg-black/5" />
                        </div>
                      ))}
                    </div>
                  </div>
              </div>

         
            </div>

          </div>


          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left pt-8 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-[#FFF4E5] rounded-full border border-[#FFE0B2]">
              <span className="text-sm font-bold text-[#FF9800] tracking-wide uppercase font-sans">
                The Best Kindergarten
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-fedorikanew text-[#2D3748] leading-[1.15] tracking-tight">
                Join Our Friendly
                <span className="block text-[#E91E63]">Little  Dreamers Family</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Discover our unique program designed to help each child quickly adapt and feel at home. At Peas in Pod, we nurture individuality and happiness.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="/enroll">
              <Button size="lg" className="bg-[#8BC34A] hover:bg-[#7CB342] text-white rounded-full px-8 py-7 text-lg font-bold shadow-lg shadow-[#8BC34A]/30 transition-transform hover:-translate-y-1">
                LEARN MORE 
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
              </a>
              <div className="w-14 h-14 bg-[#D1E9F1] rounded-full flex items-center justify-center text-[#26A69A] cursor-pointer hover:bg-[#B2DFDB] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5z" clipRule="evenodd" />
                 </svg>
              </div>
            </motion.div>

            {/* Stats Cards Row */}
            {/* <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-6 max-w-md mx-auto lg:mx-0">
               // ... stats code if you want to keep them ... 
            </motion.div> */}
          </motion.div>

        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;