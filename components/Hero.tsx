"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
const carouselImages = [
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80", alt: "Kids jumping" },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80", alt: "Kids on playground" },
  { src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80", alt: "Kids reading" },
];

const Hero = () => {
  // Embla Carousel setup with Autoplay plugin
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      color: "text-[#FF8A80]",
      bgColor: "bg-[#FF8A80]/10",
    },
    {
      value: "500+",
      label: "Happy Students",
      color: "text-[#B8F3D1]",
      textColor: "text-emerald-400",
      bgColor: "bg-[#B8F3D1]/20",
    },
    {
      value: "30+",
      label: "Expert Teachers",
      color: "text-[#A7D8FF]",
      bgColor: "bg-[#A7D8FF]/10",
    },
  ];

  // Animation variants for left content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  } as Variants;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F0] to-white pt-32 pb-24 min-h-[90vh] flex items-center">
      {/* --- NEW: Subtle Background Pattern Texture --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      {/* Floating Background Elements (Keep exisitng ones if they load, using divs as placeholders if not) */}
      <div className="absolute top-32 left-20 w-28 h-28 animate-float opacity-80 z-10 pointer-events-none">
         {/* Uncomment your Image component when real images are ready */}
         {/* <Image src={butterflyImage} alt="Butterfly" className="w-full h-full object-contain drop-shadow-lg" /> */}
         <div className="w-full h-full bg-pink-200/50 rounded-full blur-md"></div> 
      </div>
      <div className="absolute top-40 right-32 w-28 h-28 animate-bounce-slow opacity-80 z-10 pointer-events-none" style={{ animationDelay: "0.5s" }}>
         <div className="w-full h-full bg-blue-200/50 rounded-full blur-md"></div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#FFE99B]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#FF8A80]/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
     {/* Right Image Area - NOW A CAROUSEL */}
          <div className="relative order-last lg:order-first">
            <div className="relative w-full max-w-lg  z-20">
              {/* The Fun Framed Container */}
              <div className="relative group">
                 {/* The rotated background shape */}
                <div className="absolute inset-0 bg-[#A7D8FF] rounded-[3rem] rotate-6 scale-120 opacity-20 group-hover:rotate-3 transition-transform duration-500" />
                
                {/* The main image container frame */}
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.01] bg-white aspect-[4/5]">
                  
                  {/* --- EMBLA CAROUSEL IMPLEMENTATION --- */}
                  <div className="h-full w-full" ref={emblaRef}>
                    <div className="flex h-full check">
                      {carouselImages.map((img, index) => (
                        <div className="relative flex-[0_0_100%] h-full min-w-0" key={index}>
                           <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={index === 0} // Load first image ASAP
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* ------------------------------------ */}

                </div>
              </div>

              {/* Decorative shapes near image */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFCEB8] rounded-full opacity-60 animate-bounce-slow blur-xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFE99B] rounded-full opacity-40 animate-float blur-xl -z-10" />
            </div>
          </div>


          {/* Left Content - Now Animated */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-[#FFE99B]/20 rounded-full border border-[#FFE99B]/30">
              <div className="flex items-center gap-2">
                <span className="text-sm font-fedorikanew text-amber-600 tracking-wide uppercase">
                  Welcome to Little Dreamers
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-fedorikanew text-gray-800 leading-tight">
                Where Little
                <span className="relative inline-block mx-2 text-[#FF8A80]">
                  Minds
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE99B] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <br className="hidden lg:block" />
                <span className="text-[#A7D8FF]">Grow</span> Big
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A nurturing and joyful learning environment where children
                develop essential skills through play, creativity, and
                exploration.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/enroll">
              <Button size="lg" className="group bg-[#FF8A80] hover:bg-[#ff6b5e] text-white shadow-lg shadow-[#FF8A80]/30 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A80]/40 hover:-translate-y-0.5">
                Enroll Now
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-[#A7D8FF]/30 bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-[#A7D8FF]/10 hover:border-[#A7D8FF]/50 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Take a Tour
              </Button>
            </motion.div>

            {/* Stats Cards - Animated Entrance */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <Card key={index} className="border-2 border-transparent hover:border-gray-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-4 text-center space-y-1">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-2`}>
                        {/* Replaced empty div with icon placeholder for better visual if needed */}
                       <StarFilledIcon className={`w-6 h-6 ${stat.textColor || stat.color}`} />
                    </div>
                    <div className={`text-2xl font-extrabold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>

     
        </div>
      </div>
    </section>
  );
};

export default Hero;