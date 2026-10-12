"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Facebook, Instagram, Twitter, Youtube, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- 1. Import this
import { Titan_One, Nunito, Caveat } from 'next/font/google';
import logo from "../../public/logo.png";

// --- FONTS ---
const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });
const handwritingFont = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = () => {
  const pathname = usePathname(); // <--- 2. Get current path
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Scroll Effect & Active Section Detection (For Home Page Sections)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only check for sections if we are on the home page
      if (pathname === "/") {
        const sections = ["about", "programs", "gallery"];
        let current = "";

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if element is roughly in view
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `/#${section}`;
            }
          }
        }
        if (current) setActiveSection(current);
      } else {
        setActiveSection(""); // Reset if not on home page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#programs", label: "Programs" },
    { href: "/Whyus", label: "Why Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/franchise", label: "Franchise" },
    { href: "/Ourcenters", label: "Our Centers" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/littledreamersatcambridge/",
      className: "text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/little_dreamers_at_cambridge/",
      className: "text-pink-600 bg-pink-50 hover:bg-pink-100 border border-pink-100"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@LittleDreamersAtCambridge",
      className: "text-red-600 bg-red-50 hover:bg-red-100 border border-red-100"
    },
  ];

  return (
    <nav
      className={`fixed top-0 px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-[180px] left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
        : "bg-white py-2 md:py-2.5"
        }`}
    >
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-[160px] sm:w-[200px] md:w-[230px] xl:w-[250px] group-hover:rotate-2 transition-transform duration-300">
              <Image
                src={logo}
                width={240}
                height={240}
                alt="Little Dreamers Logo"
                className="object-contain w-auto h-9 sm:h-11 md:h-12"
                priority
              />
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => {
              // 3. UPDATED LOGIC: 
              // Active if: 
              // A. User is hovering OR
              // B. The current URL exactly matches the link (e.g. /admission) OR
              // C. We are scrolling on home page and hit a section anchor
              const isActive =
                hoveredLink === link.href ||
                pathname === link.href ||
                (pathname === "/" && activeSection === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group py-2"
                >
                  {/* The Handwritten Sparkle */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, rotate: -10 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-rose-500"
                    >
                      <Sparkles className="w-4 h-4 fill-rose-500" />
                    </motion.div>
                  )}

                  <span className={`text-sm 2xl:text-base whitespace-nowrap transition-colors duration-300 ${isActive ? "text-rose-500 font-bold" : "text-slate-600 font-semibold hover:text-rose-500"
                    } ${bodyFont.className}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">


            {/* Desktop Enroll Button */}
            <Link href="/admission" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-rose-500 hover:bg-rose-600 text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg shadow-rose-200 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${bodyFont.className}`}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Social Icons */}
            <div className="hidden md:flex xl:hidden 2xl:flex items-center gap-2 border-l border-slate-200 pl-3 2xl:pl-5 mr-1">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 hover:-translate-y-1 ${social.className}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>


              ))}

              {/* Phone Number CTA */}
              <a
                href="tel:8929296266"
                className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-200/80 transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 group shrink-0"
                title="Call 8929296266"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="hidden min-[480px]:flex flex-col text-left leading-none pr-1">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">
                    Call Us
                  </span>
                  <span className={`text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-emerald-700 tracking-tight transition-colors ${bodyFont.className}`}>
                    8929296266
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-slate-600 hover:bg-rose-50 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
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
            className="xl:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden absolute w-full left-0 top-full"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (pathname === "/" && activeSection === link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${bodyFont.className} ${isActive
                        ? "text-rose-500 bg-rose-50"
                        : "text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Action Buttons in Mobile Drawer */}
              <div className="mt-3 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="tel:9999996266"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-3 px-4 rounded-xl font-bold shadow-sm flex items-center justify-center gap-3 transition-all ${bodyFont.className}`}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Direct Line</span>
                    <span className="text-base font-extrabold text-slate-800">Call Us: 9999996266</span>
                  </div>
                </a>

                <Link href="/admission" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <button className={`w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold shadow-md flex justify-center items-center gap-2 transition-colors ${bodyFont.className}`}>
                    Enroll Now <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              <div className="flex justify-center gap-6 py-4 border-t border-slate-100 mt-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-full ${social.className}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;