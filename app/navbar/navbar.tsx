"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import logo from "../../public/logo.png"; // Ensure this path is correct for your project structure

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  // Scroll Effect & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple logic to highlight sections based on scroll position
      const sections = ["about", "programs", "gallery"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `/#${section}`;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#programs", label: "Programs" },
     { href: "/Whyus", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
       { href: "/Ourcenters", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-2 md:py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40  group-hover:rotate-12 transition-transform duration-300">
              <Image 
                src={logo} 
                width={200}  
                height={200}
                alt="Little Dreamers Logo"
                className="object-contain"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className={`text-xl md:text-2xl text-slate-800 leading-none ${titleFont.className}`}>
                Little<span className="text-rose-500">Dreamers</span>
              </span>
              <span className={`text-[10px] md:text-xs text-blue-400 font-bold tracking-widest uppercase ml-0.5 ${bodyFont.className}`}>
                At Cambridge
              </span>
            </div> */}
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href || hoveredLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}

                  className="relative group py-2"
                >
                  {/* The Handwritten Arrow (Shows on Hover or Active) */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, rotate: -10 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 text-rose-500 w-6 h-6"
                      >
                         {/* Doodle Arrow SVG */}
                      
                      </motion.div>
                    )}

                  <span className={`text-lg transition-colors duration-300 ${
                    isActive ? "text-rose-500 font-bold" : "text-slate-500 font-semibold"
                  } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-3">
            {/* Desktop Enroll Button */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 py-2.5 shadow-lg shadow-rose-200 flex items-center gap-2 text-sm font-bold transition-all ${bodyFont.className}`}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-rose-50 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-bold text-slate-600 hover:bg-rose-50 hover:text-rose-500 transition-all ${bodyFont.className}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link href="/enroll" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-md flex justify-center items-center gap-2 ${bodyFont.className}`}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;