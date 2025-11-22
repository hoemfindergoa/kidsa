"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../public/logo.png"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "#franchise", label: "Franchise" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50 py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-20 h-20 flex items-center justify-center">
             <Image
                src={logo}
                alt="Logo"
                className="absolute inset-0 rounded-2xl transform rotate-4 group-hover:rotate-12 transition-transform duration-300 "
              />
            </div>
            <div>
              <div className="text-xl font-fedorikanew text-gray-800 leading-none tracking-tight flex items-center">
                Little<span className="text-[#FF8A80]">Dreamers</span>
              </div>
              <div className="text-[10px] font-fedorikanew  text-[#A7D8FF] tracking-widest uppercase">
                AtCambridge
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5  py-2.5 text-gray-600 hover:text-[#FF8A80] font-fedorikanew text-xl transition-all duration-300 rounded-full hover:bg-[#FF8A80]/10 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF8A80] group-hover:w-8 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Phone Number */}
            {/* <a
              href="tel:1234567890"
              className="hidden lg:flex items-center gap-2 bg-[#B8F3D1]/20 hover:bg-[#B8F3D1]/30 px-4 py-2.5 rounded-full border-2 border-[#B8F3D1]/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#B8F3D1] to-emerald-400 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-emerald-700">
 
               </span>
            </a> */}

            {/* Enroll Button */}
            <Link href="/enroll">
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-[#FF8A80] hover:bg-[#ff6b5e] text-white rounded-full font-fedorikanew shadow-lg shadow-[#FF8A80]/30 px-6 py-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A80]/40 hover:-translate-y-0.5"
              >
              Enroll Now
            </Button>

              </Link>
            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-gray-600 hover:bg-[#A7D8FF]/10 hover:text-[#FF8A80] rounded-full transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl md:hidden animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-base font-semibold text-gray-600 hover:text-[#FF8A80] transition-all duration-300 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#FF8A80]/5 hover:to-[#A7D8FF]/5 flex items-center justify-between overflow-hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A7D8FF] group-hover:bg-[#FF8A80] transition-colors duration-300" />
                    {link.label}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FFE99B]/20 group-hover:bg-[#FFE99B]/40 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A80]" />
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
              <Link href="/enroll">
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">

              <Button className="w-full bg-[#FF8A80] hover:bg-[#ff6b5e] text-white font-bold rounded-2xl shadow-lg shadow-[#FF8A80]/30 py-6 text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A80]/40">
                Enroll Now
              </Button>
            </div>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;