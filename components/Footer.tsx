"use client";
import logo from "../public/logo.png";
import Image from "next/image";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Sparkles, Send, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-pink-50/50 to-pink-100/50 pt-20 pb-10 overflow-hidden font-sans">
      
      {/* 1. Global Styles for Fonts & Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        
        .font-calligraphy {
          font-family: 'Pacifico', cursive;
        }
        .font-script {
           font-family: 'Dancing Script', cursive;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* --- BRAND / ABOUT --- */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-white  group-hover:rotate-12 transition-transform duration-300">
                <Image 
                  src={logo} 
                  alt="Little Dreamers Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* Logo Text */}
              <div>
                <div className="text-2xl font-calligraphy text-slate-800 leading-none">
                  Little<span className="text-pink-500">Dreamers</span>
                </div>
                <div className="text-[12px] font-script font-bold text-blue-400 tracking-wider ml-1">
                  At Cambridge
                </div>
              </div>
            </a>
            
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Creating a foundation for lifelong learning through play, creativity, and exploration in a safe, loving environment.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-white border border-pink-100 text-slate-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 group"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </button>
              ))}
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Programs', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-pink-500 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 text-sm font-bold group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-200 group-hover:bg-pink-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT INFO --- */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-400 rounded-full"></span> Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 group">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-pink-100 transition-colors">
                  <MapPin className="w-4 h-4 text-pink-500" />
                </div>
                <span className="mt-1.5 font-medium">123 Learning Lane, Kidsville,<br/>KS 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-4 h-4 text-blue-500" />
                </div>
                <span className="font-medium hover:text-blue-500 transition-colors">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 group">
                <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
                  <Mail className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="font-medium hover:text-yellow-500 transition-colors">info@littledreamers.com</span>
              </li>
            </ul>
          </div>

          {/* --- NEWSLETTER --- */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-yellow-400 rounded-full"></span> Newsletter
            </h3>
            <p className="text-sm text-slate-600 mb-5 font-medium">
              Subscribe for updates, tips, and special events!
            </p>
            <div className="flex items-center bg-white p-1.5 rounded-full border border-pink-100 shadow-sm focus-within:ring-2 focus-within:ring-pink-200 transition-all">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 font-medium"
              />
              <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors shadow-md hover:scale-105 active:scale-95">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-pink-100/60 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            © 2025 Little Dreamers. Made with ❤️ for happy learning by <a href="https://scalesaas.ashishrohilla.co.in/"> scalesaas</a>
          </p>
          <div className="flex gap-4 text-xs font-bold text-slate-400">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* --- GIRAFFE IMAGE (Bottom Right) --- */}
      {/* I have added a placeholder image here. 
          To use your giraffe.png, replace the src below with: src="/giraffe.png"
      */}
      {/* <div className="absolute bottom-[-20px] right-[-20px] md:right-10 w-40 md:w-60 pointer-events-none animate-float hidden sm:block">
        <img
          src="https://img.freepik.com/premium-vector/cute-giraffe-cartoon-vector-illustration_138676-2060.jpg?w=360" // Placeholder
          alt="Friendly Giraffe"
          className="w-full h-auto drop-shadow-xl mix-blend-multiply opacity-90"
          style={{ transform: "scaleX(-1)" }} // Flip if needed to look at content
        />
      </div> */}

    </footer>
  );
};

export default Footer;