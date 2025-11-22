"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Navigation,
  ArrowUpRight
} from "lucide-react";

const ContactPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FFF9F0] to-white relative overflow-hidden pt-24 pb-20">
      
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="absolute top-20 left-[-100px] w-80 h-80 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute bottom-40 right-[-50px] w-96 h-96 bg-[#FFE99B]/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF8A80]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider shadow-sm">
            We're here for you
          </div>
          <h1 className="text-4xl lg:text-6xl font-fedorikanew text-gray-800 mb-6 tracking-tight">
            Come Say <span className="text-[#A7D8FF] relative inline-block transform rotate-2">
              Hello!
              <svg className="absolute w-[110%] h-3 -bottom-1 -left-1 text-[#FF8A80] -z-10 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We love meeting new families. Drop by for a visit, give us a call, or just explore our campus on the map below.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-8 lg:gap-10"
        >
          
          {/* --- Left Column: Contact Details (Redesigned Cards) --- */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Address Card (Blue Theme) */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] overflow-hidden group transition-all duration-300 hover:-translate-y-1 ring-1 ring-[#A7D8FF]/30">
                <CardContent className="p-6 relative">
                  {/* Decorative blob */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#BAE6FD] rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-14 h-14 bg-white/80 backdrop-blur shadow-sm text-[#0EA5E9] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-gray-800">Our Campus</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        123 Sunshine Avenue,<br />
                        Happy Valley District,<br />
                        California, 90210
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-5 bg-white/60 hover:bg-white text-[#0284C7] border-0 shadow-sm hover:shadow font-semibold justify-between group/btn"
                  >
                    <span>Get Directions</span>
                    <Navigation className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card (Coral Theme) */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-xl bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] overflow-hidden group transition-all duration-300 hover:-translate-y-1 ring-1 ring-[#FF8A80]/30">
                <CardContent className="p-6 relative">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FECDD3] rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-14 h-14 bg-white/80 backdrop-blur shadow-sm text-[#E11D48] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div className="w-full space-y-3">
                      <h3 className="text-lg font-bold text-gray-800">Get in Touch</h3>
                      
                      <a href="tel:+15551234567" className="flex items-center justify-between p-2 rounded-lg bg-white/40 hover:bg-white/70 transition-colors group/link cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">+1 (555) 123-4567</span>
                        <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover/link:text-[#E11D48]" />
                      </a>
                      
                      <a href="mailto:hello@littledreamers.edu" className="flex items-center justify-between p-2 rounded-lg bg-white/40 hover:bg-white/70 transition-colors group/link cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">hello@littledreamers.edu</span>
                        <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover/link:text-[#E11D48]" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hours Card (Yellow Theme) */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-xl bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden group transition-all duration-300 hover:-translate-y-1 ring-1 ring-[#FFE99B]/30">
                <CardContent className="p-6 relative">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FDE68A] rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-14 h-14 bg-white/80 backdrop-blur shadow-sm text-[#D97706] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Opening Hours</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm border-b border-[#D97706]/10 pb-1">
                          <span className="text-gray-600">Weekdays</span>
                          <span className="font-bold text-[#D97706]">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-[#D97706]/10 pb-1">
                          <span className="text-gray-600">Saturday</span>
                          <span className="font-bold text-[#D97706]">9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-400 pt-1">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links - Now bigger & more distinct */}
            <motion.div variants={itemVariants} className="pt-2 flex gap-3">
               {[
                 { Icon: Facebook, color: "text-blue-600", bg: "bg-blue-50 hover:bg-blue-100" }, 
                 { Icon: Instagram, color: "text-pink-600", bg: "bg-pink-50 hover:bg-pink-100" }, 
                 { Icon: Twitter, color: "text-sky-500", bg: "bg-sky-50 hover:bg-sky-100" }
               ].map(({Icon, color, bg}, i) => (
                 <button key={i} className={`flex-1 py-3 rounded-xl ${bg} ${color} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center`}>
                   <Icon className="w-6 h-6" />
                 </button>
               ))}
            </motion.div>

          </div>

          {/* --- Right Column: The Big Map --- */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 h-full min-h-[500px]"
          >
            <div className="relative h-full w-full group">
              {/* Playful Stickers around map */}
              <div className="absolute -top-4 -left-4 z-20 bg-[#FF8A80] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12 hidden md:block">
                Visit Us!
              </div>

              {/* Rotated background decorative frame */}
              <div className="absolute inset-0 bg-[#B8F3D1] rounded-[2.5rem] rotate-1 scale-[1.01] opacity-60 group-hover:rotate-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#A7D8FF] rounded-[2.5rem] -rotate-1 scale-[1.01] opacity-60 group-hover:-rotate-2 transition-transform duration-500 -z-10" />
              
              {/* Map Container */}
              <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/60 border-[8px] border-white transform transition-transform duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40035632362666!3d34.05117161782369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb0c4206f279%3A0x51724c6801f2517!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1708654321456!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Floating Location Badge on Map */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    <span className="font-bold text-gray-800 text-sm">Visitor Parking Available</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Use the entrance on Sunset Blvd for easy drop-off and pick-up.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;