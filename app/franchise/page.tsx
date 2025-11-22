"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Briefcase, 
  Lightbulb,
  CheckCircle2,
  Building2,
  Wallet,
  ArrowRight,
  Star
} from "lucide-react";

const FranchisePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b pt-[160px] from-white via-[#FFF9F0] to-white relative overflow-hidden  pb-20">
      
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8F3D1]/20 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A7D8FF]/20 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF8A80]/10 text-[#FF8A80] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#FF8A80]/20">
            <Briefcase className="w-4 h-4" />
            Business Opportunity
          </div>
          <h1 className="text-4xl lg:text-6xl font-fedorikanew text-gray-800 mb-6 leading-tight">
            Build a Future with <br/>
            <span className="text-[#FF8A80] relative inline-block">
              Little Dreamers
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#FFE99B] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Partner with a trusted brand in early childhood education. We provide the blueprint, training, and support—you bring the passion for shaping young minds.
          </p>
        </motion.div>

        {/* --- Unique Selling Points (USPs) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {[
            {
              icon: TrendingUp,
              color: "text-emerald-500",
              bg: "bg-emerald-50",
              title: "Proven Business Model",
              desc: "A tested framework that ensures operational efficiency and faster ROI."
            },
            {
              icon: BookOpen,
              color: "text-blue-500",
              bg: "bg-blue-50",
              title: "Award-Winning Curriculum",
              desc: "Access to our proprietary play-based learning syllabus and materials."
            },
            {
              icon: ShieldCheck,
              color: "text-amber-500",
              bg: "bg-amber-50",
              title: "Established Brand Trust",
              desc: "Leverage our 15+ years of reputation to gain instant parent confidence."
            }
          ].map((usp, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className={`w-14 h-14 ${usp.bg} ${usp.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <usp.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{usp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{usp.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Main Content Grid: Info & Form --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Benefits, Support, Investment */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl font-fedorikanew text-gray-800 mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-[#FFE99B] fill-amber-300" />
                Partner Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "High Returns on Investment (ROI)",
                  "Recession-Resilient Industry",
                  "Work-Life Balance",
                  "Comprehensive Marketing Support",
                  "Ongoing Staff Training",
                  "Site Selection Assistance"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#B8F3D1] fill-emerald-500 shrink-0" />
                    <span className="font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Support Services */}
            <section>
              <h2 className="text-3xl font-fedorikanew text-gray-800 mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#A7D8FF] fill-blue-300" />
                360° Franchise Support
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#FF8A80]/20 rounded-full flex items-center justify-center text-[#FF8A80] shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Pre-Launch</h3>
                    <p className="text-gray-600">Site survey, interior design guidelines, legal agreement assistance, and licensing support.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#FFE99B]/30 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Launch & Marketing</h3>
                    <p className="text-gray-600">Grand opening event planning, digital marketing setup, social media kit, and lead generation strategies.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#A7D8FF]/20 rounded-full flex items-center justify-center text-[#0EA5E9] shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Ongoing Operations</h3>
                    <p className="text-gray-600">Regular audits, curriculum updates, teacher training workshops, and 24/7 operational guidance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Investment Details */}
            <section className="bg-[#FFF9F0] rounded-3xl p-8 border border-[#FFE99B]/50">
              <h2 className="text-2xl font-fedorikanew text-gray-800 mb-6 flex items-center gap-3">
                <Wallet className="w-7 h-7 text-amber-500" />
                Investment Snapshot
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                *Figures are indicative and may vary based on location and city tier.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-dashed border-gray-300">
                  <span className="font-medium text-gray-600">Franchise Fee</span>
                  <span className="font-bold text-gray-800">$15,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-dashed border-gray-300">
                  <span className="font-medium text-gray-600">Setup Cost (Interiors & Equipment)</span>
                  <span className="font-bold text-gray-800">$40,000 - $60,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-dashed border-gray-300">
                  <span className="font-medium text-gray-600">Area Required</span>
                  <span className="font-bold text-gray-800">1500 - 2500 Sq. Ft.</span>
                </div>
                <div className="p-4 bg-[#B8F3D1]/20 rounded-xl text-center mt-4">
                  <span className="text-emerald-800 font-bold">Estimated ROI: 12 - 18 Months</span>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Franchise Form */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative">
              {/* Rotated Background */}
              <div className="absolute inset-0 bg-[#A7D8FF] rounded-[2rem] rotate-3 scale-105 opacity-20 pointer-events-none" />
              
              <Card className="border-none shadow-xl bg-white relative z-10 overflow-hidden rounded-[2rem]">
                <div className="h-3 bg-gradient-to-r from-[#FF8A80] via-[#FFE99B] to-[#A7D8FF]" />
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-fedorikanew text-gray-800">Start Your Journey</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">Fill out the form to download our detailed brochure.</p>
                </CardHeader>
                
                <CardContent className="p-6 md:p-8">
                  {isSuccess ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-[#B8F3D1] text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h3>
                      <p className="text-gray-600 mb-6">
                        Our franchise development team will review your profile and contact you within 48 hours.
                      </p>
                      <Button variant="outline" onClick={() => setIsSuccess(false)}>Submit Another</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Personal Info */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Personal Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF8A80] outline-none transition-all text-sm" />
                          <input required type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF8A80] outline-none transition-all text-sm" />
                        </div>
                        <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF8A80] outline-none transition-all text-sm" />
                        <input required type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF8A80] outline-none transition-all text-sm" />
                      </div>

                      {/* Location & Business Info */}
                      <div className="space-y-4 pt-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Franchise Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#A7D8FF] outline-none transition-all text-sm" />
                          <input required type="text" placeholder="State" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#A7D8FF] outline-none transition-all text-sm" />
                        </div>
                        
                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#A7D8FF] outline-none transition-all text-sm text-gray-600">
                          <option value="">Do you own property?</option>
                          <option value="owned">Yes, I own a property</option>
                          <option value="leased">No, but I can lease one</option>
                          <option value="looking">Currently looking for space</option>
                        </select>

                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#A7D8FF] outline-none transition-all text-sm text-gray-600">
                          <option value="">Investment Budget</option>
                          <option value="low">$50k - $75k</option>
                          <option value="mid">$75k - $100k</option>
                          <option value="high">$100k+</option>
                        </select>
                      </div>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Story</h4>
                        <textarea 
                          rows={3}
                          placeholder="Why do you want to partner with Little Dreamers?"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FFE99B] outline-none transition-all text-sm resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-6 bg-[#FF8A80] hover:bg-[#ff7566] text-white font-bold rounded-xl shadow-lg shadow-[#FF8A80]/20 mt-4 group"
                      >
                        {isSubmitting ? "Processing..." : (
                          <span className="flex items-center gap-2">
                            Submit Application
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                      
                      <p className="text-xs text-center text-gray-400 mt-4">
                        By clicking submit, you agree to our terms and privacy policy.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FranchisePage;