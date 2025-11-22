"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { StarFilledIcon } from "@radix-ui/react-icons";

// Define the structure of gallery items with their grid spans
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
    alt: "Kids playing together outdoors",
    category: "Outdoor Fun",
    // Tailwind classes for spanning rows/cols
    className: "col-span-1 row-span-1 h-[180px] md:col-span-2 md:row-span-2 md:h-full",
    accentColor: "#FF8A80", // Coral
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=500",
    alt: "Child painting",
    category: "Creative Arts",
    className: "col-span-1 row-span-1 h-[180px] md:col-span-1 md:row-span-1 md:h-full",
    accentColor: "#A7D8FF", // Blue
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=500",
    alt: "Learning with blocks",
    category: "Early Learning",
    className: "col-span-1 row-span-1 h-[180px] md:col-span-1 md:row-span-2 md:h-full",
    accentColor: "#FFE99B", // Yellow
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=500",
    alt: "Group reading time",
    category: "Story Time",
    className: "md:col-span-1 md:row-span-1 h-[200px] md:h-full",
    accentColor: "#B8F3D1", // Mint
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1000",
    alt: "Playground adventures",
    category: "Adventures",
    className: "col-span-1 row-span-1 h-[180px] md:col-span-2 md:row-span-1 md:h-full",
    accentColor: "#FF8A80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=500",
    alt: "Learning with blocks",
    category: "Early Learning",
    className: "md:col-span-2 md:row-span-1 h-[200px] md:h-full",
    accentColor: "#FFE99B", // Yellow
  },
];

// Framer Motion Variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#FFF9F0] py-24">
      {/* Decorative Blobs matched from Hero */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF8A80]/10 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header matching Hero style */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#FFE99B]/30 rounded-full border border-[#FFE99B]/40 mb-4">
            <div className="flex items-center gap-2">
              <StarFilledIcon className="w-4 h-4 text-[#FF8A80]" />
              <span className="text-sm font-bold text-amber-700 tracking-wide uppercase">
                Our Gallery
              </span>
              <StarFilledIcon className="w-4 h-4 text-[#FF8A80]" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-fedorikamedium text-gray-800">
            Capturing
            <span className="relative inline-block mx-2 text-[#A7D8FF]">
              Joyful
              {/* Little underline squiggle */}
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-[#FF8A80] -z-10 opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
            Moments
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // We use auto-rows to define base height for the bento cells
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4 md:gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative group rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl ${item.className}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                 // Subtle colored shadow based on item accent color
                 boxShadow: hoveredId === item.id ? `0 20px 25px -5px ${item.accentColor}40, 0 8px 10px -6px ${item.accentColor}20` : ''
              }}
            >
              {/* The Image with zoom hover effect */}
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Overlay & Content on Hover */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 flex flex-col justify-end"
                  >
                     {/* accent colored tag */}
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold text-gray-800 mb-2"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      {item.category}
                    </motion.span>
                     {/* description */}
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white font-semibold text-lg"
                    >
                      {item.alt}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;