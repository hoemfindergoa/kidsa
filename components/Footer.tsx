"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Send, 
  Heart,
  ArrowRight
} from "lucide-react";

// Assuming logo is in the same path as previous examples
import logo from "../public/logo.png"; 

const Footer = () => {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    },
  };

  return (
    <footer className="relative bg-[#7209B7] pt-24 pb-10 overflow-hidden font-sans text-white">
      
      {/* 0. DECORATIVE TOP WAVE (SVG) - Smooth transition from previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* 1. GLOBAL STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
      `}</style>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND / ABOUT --- */}
          <motion.div variants={itemVariants} className="space-y-6">
            <a href="/" className="flex items-center gap-3 group">
              {/* Logo Icon Container */}
              <div className="relative w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <Image 
                  src={logo} 
                  alt="Little Dreamers Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              {/* Logo Text */}
              <div>
                <div className="text-2xl font-calligraphy text-white leading-none">
                  Little<span className="text-[#fad06e]">Dreamers</span>
                </div>
                <div className="text-[12px] font-bold text-[#9dcedc] tracking-wider ml-1 uppercase">
                  At Cambridge
                </div>
              </div>
            </a>
            
            <p className="text-purple-100 text-sm leading-relaxed font-medium max-w-xs">
              Creating a foundation for lifelong learning through play, creativity, and exploration in a safe, loving environment.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button 
                  key={i} 
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#fad06e] text-white hover:text-[#5c4d26] flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* --- QUICK LINKS --- */}
          <motion.div variants={itemVariants}>
            <h3 className="font-calligraphy text-[#fad06e] text-2xl mb-6">
               Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Programs', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-purple-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 text-sm font-bold group">
                    <ArrowRight className="w-4 h-4 text-[#9dcedc]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- CONTACT INFO --- */}
          <motion.div variants={itemVariants}>
             <h3 className="font-calligraphy text-[#9dcedc] text-2xl mb-6">
               Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm group">
                <div className="w-10 h-10 rounded-full bg-[#f7a7b4] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="mt-2 font-bold text-purple-50">123 Learning Lane, Kidsville,<br/>KS 12345</span>
              </li>
              <li className="flex items-center gap-4 text-sm group">
                <div className="w-10 h-10 rounded-full bg-[#fad06e] text-[#5c4d26] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-purple-50 hover:text-white transition-colors">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-4 text-sm group">
                 <div className="w-10 h-10 rounded-full bg-[#06D6A0] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-bold text-purple-50 hover:text-white transition-colors">info@littledreamers.com</span>
              </li>
            </ul>
          </motion.div>

          {/* --- NEWSLETTER --- */}
          <motion.div variants={itemVariants}>
             <h3 className="font-calligraphy text-[#f7a7b4] text-2xl mb-6">
               Newsletter
            </h3>
            <p className="text-sm text-purple-100 mb-5 font-bold">
              Subscribe for updates, tips, and special events!
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-purple-200 focus:outline-none focus:border-[#fad06e] focus:bg-white/20 transition-all font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#fad06e] rounded-xl flex items-center justify-center text-[#5c4d26] hover:scale-105 active:scale-95 transition-transform shadow-lg">
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-purple-200 font-medium flex items-center gap-1">
             © 2025 Little Dreamers. Made with <Heart className="w-4 h-4 text-[#f7a7b4] fill-[#f7a7b4] animate-pulse"/> for happy learning by <a href="https://scalesaas.ashishrohilla.co.in/" className="font-bold text-white hover:text-[#fad06e] transition-colors ml-1"> scalesaas</a>
          </p>
          <div className="flex gap-6 text-xs font-bold text-purple-200 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Circle Blur in Background */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f7a7b4] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#9dcedc] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

    </footer>
  );
};

export default Footer;