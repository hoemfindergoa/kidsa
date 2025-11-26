"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  CalendarHeart, 
  FileText, 
  PartyPopper, 
  CheckCircle2,
  Download,
  ArrowRight,
  Baby,
  Backpack,
  BookOpen
} from "lucide-react";
import Image from "next/image";

// Reusing assets
import smilingboy from "../../public/smilingboy.png";
import Girls from "../../public/girlsimage.png";
import Toys from "../../public/Toys.png";

type TileProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

// Reusing the exact Tile animation logic
const Tile: React.FC<TileProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative p-8 md:p-10 overflow-hidden rounded-3xl ${className}`} // Added rounded-3xl for extra softness on this page
  >
    {children}
  </motion.div>
);

const Admissions = () => {
  return (
    <section className="bg-white mt-12 font-sans" id="admissions">
      
      {/* FONTS & STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&family=Inter:wght@400;700;900&display=swap');
        .font-calligraphy { font-family: 'Pacifico', cursive; }
        .font-hand { font-family: 'Dancing Script', cursive; }
        /* Adding Inter for clean body text if needed, matching previous design's sans feel */
        body { font-family: 'Inter', sans-serif; } 
      `}</style>

      <div className="max-w-[1920px]  mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">

        {/* 1. HERO SECTION (Teal Block - #06D6A0) */}
        <Tile className="md:col-span-12 bg-[#06D6A0] text-white min-h-[650px] flex flex-col pt-[70px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 rotate-12">
            <Rocket className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left md:mx-0">
            <span className="inline-block mb-4 bg-white/20 backdrop-blur-md px-6 py-2 font-bold text-sm uppercase tracking-widest rounded-full">
                 Join Our Family
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
              Begin Their <br />
              <span className="text-[#E0FFF8] font-calligraphy">Adventure</span> Today.
            </h2>
            <p className="text-xl font-bold text-teal-50 max-w-xl">
              We know choosing the right school is a big decision. Our admissions process is designed to be transparent, easy, and welcoming.
            </p>
          </div>

          {/* Image placed on the left for a different look than About/Contact page */}
          <div className="absolute bottom-[-30px] md:right-[70px] rigth-0 z-20  block md:block">
            <Image
              src={smilingboy}
              alt="Ready for school"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </Tile>

        {/* 2. THE PROCESS (Sequential Steps - Different Layout Flow) */}
        <div className="md:col-span-12 pt-8 pb-4">
            <h3 className="text-3xl font-black text-center text-gray-800 mb-2">Your Path to Enrollment</h3>
        </div>

        {/* STEP 1: Blue */}
        <Tile delay={0.1} className="md:col-span-4 bg-[#9dcedc] text-white min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
           <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 leading-none select-none group-hover:scale-110 transition-transform">1</div>
           <CalendarHeart className="w-16 h-16 mb-6" />
           <h4 className="text-3xl font-black mb-4">Inquire & Visit</h4>
           <p className="font-bold text-lg opacity-90 leading-relaxed">
             Fill out an inquiry form and schedule a campus tour. Come feel the warmth of our classrooms!
           </p>
           {/* Connector Arrow for desktop */}
           <div className="hidden md:block absolute right-[-30px] top-1/2 -translate-y-1/2 z-20 text-[#9dcedc]">
             <ArrowRight className="w-12 h-12 drop-shadow-lg" />
           </div>
        </Tile>

        {/* STEP 2: Yellow */}
        <Tile delay={0.2} className="md:col-span-4 bg-[#fad06e] text-[#5c4d26] min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
        <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 text-white leading-none select-none group-hover:scale-110 transition-transform">2</div>
           <FileText className="w-16 h-16 mb-6" />
           <h4 className="text-3xl font-black mb-4">Apply & Meet</h4>
           <p className="font-bold text-lg opacity-90 leading-relaxed">
             Submit the application. We'll invite you and your child for a friendly interaction session.
           </p>
            {/* Connector Arrow for desktop */}
            <div className="hidden md:block absolute right-[-30px] top-1/2 -translate-y-1/2 z-20 text-[#fad06e]">
             <ArrowRight className="w-12 h-12 drop-shadow-lg" />
           </div>
        </Tile>

        {/* STEP 3: Pink */}
        <Tile delay={0.3} className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
        <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 leading-none select-none group-hover:scale-110 transition-transform">3</div>
           <PartyPopper className="w-16 h-16 mb-6" />
           <h4 className="text-3xl font-black mb-4">Welcome Aboard!</h4>
           <p className="font-bold text-lg opacity-90 leading-relaxed">
             Receive acceptance letter, complete formalities, and get ready for the first day of smiles!
           </p>
        </Tile>


        {/* 3. INFO & CHECKLIST SPLIT */}
        
        {/* Programs (Purple Block) */}
        <Tile className="md:col-span-7 bg-[#7209B7] text-white min-h-[400px]">
          <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8"/> Age Groups & Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Baby className="w-10 h-10 opacity-80" />
                <div>
                    <h5 className="text-xl font-black text-[#fad06e]">Toddlers</h5>
                    <p className="font-bold text-sm opacity-80">1.5 - 2.5 Years</p>
                </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Backpack className="w-10 h-10 opacity-80" />
                <div>
                    <h5 className="text-xl font-black text-[#9dcedc]">Nursery</h5>
                    <p className="font-bold text-sm opacity-80">2.5 - 3.5 Years</p>
                </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl flex items-start gap-4">
                <Rocket className="w-10 h-10 opacity-80" />
                <div>
                    <h5 className="text-xl font-black text-[#f7a7b4]">Junior KG</h5>
                    <p className="font-bold text-sm opacity-80">3.5 - 4.5 Years</p>
                </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl flex items-start gap-4">
                <PartyPopper className="w-10 h-10 opacity-80" />
                <div>
                    <h5 className="text-xl font-black text-[#06D6A0]">Senior KG</h5>
                    <p className="font-bold text-sm opacity-80">4.5 - 5.5 Years</p>
                </div>
            </div>
          </div>
        </Tile>

        {/* Checklist (White/Gray Block with background image) */}
        <Tile className="md:col-span-5 bg-gray-50 text-gray-800 min-h-[400px] relative border-4 border-[#9dcedc]">
           {/* Subtle background pattern using existing asset */}
           <div className="absolute inset-0 opacity-10">
                <Image src={Toys} alt="pattern" layout="fill" objectFit="cover" />
           </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-6 text-[#7209B7] uppercase tracking-wider">Documents Checklist</h3>
            <ul className="space-y-4 font-bold text-lg">
                {['Birth Certificate', 'Passport Size Photos (Child & Parents)', 'Immunization Record', 'Previous School Reports (if applicable)', 'Address Proof'].map((item, i) =>(
                    <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-[#06D6A0] flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
          </div>
        </Tile>


        {/* 4. FINAL CTA (Full Width Yellow) */}
        <Tile className="md:col-span-12 bg-[#fad06e] text-[#5c4d26] flex flex-col md:flex-row items-center   p-8 relative overflow-hidden">
           <div className="relative z-10 mb-4 md:mb-0  md:text-left">
             <h2 className="text-4xl font-black mb-4 text-white" style={{textShadow: '2px 2px 0px #5c4d2640'}}>Ready to take the first step?</h2>
             <p className="text-xl font-bold text-[#5c4d26] opacity-90">Admissions are now open for the upcoming academic year.</p>
           </div>
           
           <div className="relative pt-[50px] z-10 flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-[#fad06e] font-black text-lg py-4 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                 Download Brochure <Download className="w-5 h-5 group-hover:animate-bounce" />
              </button>
              <button className="bg-[#7209B7] text-white font-black text-lg py-4 px-8 rounded-full hover:bg-[#5e0796] hover:shadow-xl hover:scale-105 transition-all shadow-lg shadow-purple-900/20">
                 Apply Online Now
              </button>
           </div>

           {/* Decorative image at the bottom */}
           <div className="absolute bottom-[-50px]  right-0 md:right-20 z-0  md:opacity-100 pointer-events-none">
             <Image 
               src={Girls}
               alt="Group of children"
               width={400}
               height={300}
               className="object-cover  pt-[100px]"
             />
           </div>
        </Tile>

      </div>
    </section>
  );
};

export default Admissions;