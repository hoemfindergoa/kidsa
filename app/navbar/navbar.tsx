"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Sparkles, ArrowRight } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* 0. GOOGLE FONT IMPORT (Same as Hero) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        
        .font-calligraphy {
          font-family: 'Pacifico', cursive;
        }
        .font-script {
           font-family: 'Dancing Script', cursive;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-100/50 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* --- LOGO SECTION --- */}
            <a href="/" className="flex items-center gap-2 group cursor-pointer">
              {/* Logo Icon Placeholder */}
              <div className="relative w-12 h-12 flex items-center justify-center  group-hover:rotate-12 transition-transform duration-300">
                <Image 
                  src={logo} 
                  alt="Little Dreamers Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              
              {/* Logo Text - Using Calligraphy Theme */}
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-calligraphy text-slate-800 leading-none flex items-center">
                  Little<span className="text-pink-500">Dreamers</span>
                </div>
                <div className="text-[12px] font-script font-bold text-blue-400 tracking-wider ml-1">
                  At Cambridge
                </div>
              </div>
            </a>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-slate-600 hover:text-pink-500 font-script rounded-full hover:bg-pink-50 transition-all duration-300 group text-2xl tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              
              <a href="/franchise"
                className="relative px-4 py-2 text-slate-600 font-script hover:text-pink-500 text-2xl  rounded-full hover:bg-pink-50 transition-all duration-300 group  tracking-wide ml-2"
              >
                Franchise
              </a>
            </div>

            {/* --- CTA BUTTONS --- */}
            <div className="flex items-center gap-3">
              
              {/* Enroll Button (Desktop) */}
              <a href="/enroll" className="hidden sm:block">
                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-lg shadow-pink-200 px-6 py-2.5 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-slate-600 hover:bg-pink-50 hover:text-pink-500 p-2 rounded-full transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-2xl md:hidden animate-in slide-in-from-top-5 duration-300">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative text-lg font-bold text-slate-600 hover:text-pink-500 transition-all duration-300 p-4 rounded-2xl hover:bg-pink-50 flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-200 group-hover:bg-pink-500 transition-colors duration-300" />
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="/enroll" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl shadow-lg shadow-pink-200 py-4 text-lg transition-all duration-300 flex justify-center items-center gap-2">
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;