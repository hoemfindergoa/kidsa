"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2,
  Building2,
  Wallet,
  ArrowRight,
  Star,
  Trophy,
  Heart,
  Target,
  Sparkles,
  Globe,
  DollarSign,
  Award,
  Zap
} from "lucide-react";

type TileProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

const Tile: React.FC<TileProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative p-8 md:p-10 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const FranchisePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    property: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email || !formData.mobile) {
      alert('Please fill in required fields');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        city: '',
        state: '',
        property: '',
        budget: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="bg-[#06D6A0] font-sans" id="franchise">
      
      {/* FONTS & STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
      `}</style>

      {/* HEADER SECTION */}
      <div className="max-w-7xl  pt-[200px] mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#f7a7b4] text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            <Briefcase className="w-4 h-4" />
            Business Opportunity
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4">
            Partner with <span className="text-[#f7a7b4]">Little Dreamers</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Join a revolutionary preschool franchise with zero royalty, 100% profit retention, and proven success
          </p>
        </motion.div>
      </div>

      {/* MOSAIC LAYOUT */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12">

        {/* 1. ZERO ROYALTY - Large Feature */}
        <Tile className="md:col-span-5 bg-[#9dcedc] text-white min-h-[500px] flex flex-col relative">
          <div className="absolute top-0 right-0 p-2 opacity-20">
            <DollarSign className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Zero <span className="text-[#FFE5E5]">Royalty</span> Model
            </h3>
            <p className="text-xl font-bold text-blue-50 mb-8 leading-relaxed">
              100% profit retention for franchise partners. We only charge for student kits—no recurring royalty fees ever.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span className="font-bold">Keep all your earnings</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span className="font-bold">Pay only for student kits</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span className="font-bold">No hidden recurring fees</span>
              </div>
            </div>
          </div>
        </Tile>

        {/* 2. DAYCARE BONUS */}
        <Tile className="md:col-span-3 bg-[#fad06e] text-white min-h-[500px] flex flex-col relative">
          <div className="absolute bottom-0 right-0 opacity-20">
            <Heart className="w-40 h-40" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Daycare Revenue Bonus
            </h3>
            <p className="text-lg font-bold text-yellow-50 leading-relaxed">
              No royalty on daycare operations. Enjoy 100% earnings for consistent monthly income stream.
            </p>
          </div>
        </Tile>

        {/* 3. HIGH ROI */}
        <Tile className="md:col-span-4 bg-[#7209B7] text-white min-h-[500px] flex flex-col justify-between relative">
          <div className="absolute top-0 left-0 opacity-10">
            <TrendingUp className="w-48 h-48" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              High ROI Business
            </h3>
            <p className="text-lg font-bold text-purple-100 leading-relaxed mb-6">
              Low investment with quick breakeven and scalable profitability. Recession-resilient education industry.
            </p>
          </div>
          
          <div className="bg-[#5a0793] p-6 -mx-8 md:-mx-10 -mb-8 md:-mb-10">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">12-18 Months</div>
              <div className="text-sm font-bold text-purple-200 uppercase tracking-wider">Expected Breakeven</div>
            </div>
          </div>
        </Tile>

        {/* 4. PROVEN CURRICULUM */}
        <Tile className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[450px] flex flex-col relative">
          <div className="absolute top-2 right-2 opacity-20">
            <BookOpen className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-black mb-4">
              Proven Academic Framework
            </h3>
            <p className="text-lg font-bold text-pink-50 leading-relaxed">
              Scientifically designed curriculum blending play-based, experiential and value-based learning.
            </p>
          </div>
        </Tile>

        {/* 5. COMPLETE SETUP SUPPORT */}
        <Tile className="md:col-span-4 bg-[#06D6A0] text-white min-h-[450px] flex flex-col relative">
          <div className="absolute bottom-0 left-0 opacity-20">
            <Building2 className="w-36 h-36" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-black mb-4">
              Complete Setup Support
            </h3>
            <p className="text-lg font-bold text-green-50 leading-relaxed">
              End-to-end guidance from property selection, interiors, branding to staff recruitment and training.
            </p>
          </div>
        </Tile>

        {/* 6. BENEFITS GRID */}
        <Tile className="md:col-span-4 bg-[#fad06e] text-white min-h-[450px] flex flex-col relative">
          <div className="absolute top-2 right-2 opacity-20">
            <Star className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6">
              More Benefits
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <div className="font-black text-lg mb-1">Strong Brand Identity</div>
                  <div className="text-sm font-bold text-yellow-50">Premium preschool parents trust</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <div className="font-black text-lg mb-1">Comprehensive Training</div>
                  <div className="text-sm font-bold text-yellow-50">Step-by-step operational support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 shrink-0 mt-1" />
                <div>
                  <div className="font-black text-lg mb-1">Marketing Support</div>
                  <div className="text-sm font-bold text-yellow-50">Digital marketing & lead generation</div>
                </div>
              </div>
            </div>
          </div>
        </Tile>

        {/* 7. INVESTMENT DETAILS - Full Width */}
        <Tile className="md:col-span-8 bg-gradient-to-br from-[#9dcedc] to-[#7209B7] text-white min-h-[400px] flex flex-col relative">
          <div className="absolute top-0 right-0 opacity-10">
            <Wallet className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black">Investment Overview</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <div className="text-5xl font-black mb-2">₹10-15L</div>
                <div className="text-lg font-bold text-blue-100 uppercase tracking-wide">Franchise Fee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <div className="text-5xl font-black mb-2">₹25-40L</div>
                <div className="text-lg font-bold text-blue-100 uppercase tracking-wide">Setup Cost</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20">
                <div className="text-5xl font-black mb-2">1500+</div>
                <div className="text-lg font-bold text-blue-100 uppercase tracking-wide">Sq. Ft. Area</div>
              </div>
            </div>
            
            <p className="text-sm font-bold text-blue-100 mt-6 opacity-80">
              *Figures are indicative and may vary based on location and city tier
            </p>
          </div>
        </Tile>

        {/* 8. APPLICATION FORM */}
        <Tile className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[400px] flex flex-col relative">
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 flex flex-col items-center justify-center h-full text-center"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-black mb-3">Success!</h4>
              <p className="text-lg font-bold text-pink-50 mb-6">
                We'll contact you within 48 hours
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-white text-[#f7a7b4] font-black rounded-full hover:scale-105 transition-transform"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2">Apply Now</h3>
              <p className="text-sm font-bold text-pink-100 mb-6">Join the Little Dreamers family</p>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 placeholder-white/70 text-white outline-none focus:border-white transition-all font-bold"
                  />
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 placeholder-white/70 text-white outline-none focus:border-white transition-all font-bold"
                  />
                </div>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 placeholder-white/70 text-white outline-none focus:border-white transition-all font-bold"
                />
                <input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  type="tel" 
                  placeholder="Mobile" 
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 placeholder-white/70 text-white outline-none focus:border-white transition-all font-bold"
                />
                <input 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder="City" 
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 placeholder-white/70 text-white outline-none focus:border-white transition-all font-bold"
                />
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white outline-none focus:border-white transition-all font-bold"
                >
                  <option value="" className="text-gray-800">Investment Budget</option>
                  <option value="low" className="text-gray-800">₹35L - ₹50L</option>
                  <option value="mid" className="text-gray-800">₹50L - ₹75L</option>
                  <option value="high" className="text-gray-800">₹75L+</option>
                </select>

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-[#f7a7b4] font-black rounded-xl hover:scale-105 transition-transform shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}
        </Tile>

        {/* 9. DAYCARE INTEGRATION */}
        <Tile className="md:col-span-3 bg-[#06D6A0] text-white min-h-[350px] flex flex-col relative">
          <div className="absolute bottom-0 right-0 opacity-20">
            <Target className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black mb-4">
              Daycare Integration
            </h3>
            <p className="text-lg font-bold text-green-50 leading-relaxed">
              Extended service model for year-round revenue and higher parent satisfaction.
            </p>
          </div>
        </Tile>

        {/* 10. PAN-INDIA EXPANSION */}
        <Tile className="md:col-span-5 bg-[#7209B7] text-white min-h-[350px] flex flex-col relative">
          <div className="absolute top-0 right-0 opacity-10">
            <Globe className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Pan-India & International Vision
            </h3>
            <p className="text-lg font-bold text-purple-100 leading-relaxed mb-6">
              Opportunity to grow with a brand focused on quality, consistency and innovation across borders.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Quality', 'Consistency', 'Innovation', 'Growth'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Tile>

        {/* 11. 360° SUPPORT */}
        <Tile className="md:col-span-4 bg-[#9dcedc] text-white min-h-[350px] flex flex-col relative">
          <div className="absolute top-2 right-2 opacity-20">
            <ShieldCheck className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-black mb-6">
              360° Support System
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 shrink-0" />
                <span className="font-bold">Pre-launch assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 shrink-0" />
                <span className="font-bold">Marketing & admissions</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 shrink-0" />
                <span className="font-bold">Ongoing operations support</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 shrink-0" />
                <span className="font-bold">Regular training workshops</span>
              </div>
            </div>
          </div>
        </Tile>

      </div>

    </section>
  );
};

export default FranchisePage;