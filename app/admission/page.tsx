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
  Camera,
  Syringe,
  MapPin,
  BookOpen,
  Sparkles
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
    className={`relative  p-8 md:p-10 overflow-hidden rounded-3xl ${className}`}
  >
    {children}
  </motion.div>
);

const Admissions = () => {
  return (
    <div></div>
//     <section className="bg-white mt-16 md:mt-[80px] font-sans" id="admissions">
      
//       {/* FONTS & STYLES */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&family=Inter:wght@400;700;900&display=swap');
//         .font-calligraphy { font-family: 'Pacifico', cursive; }
//         .font-hand { font-family: 'Dancing Script', cursive; }
//         body { font-family: 'Inter', sans-serif; } 
//       `}</style>

//       <div className="max-w-[1920px] mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">

//         {/* 1. HERO SECTION (Teal Block - #06D6A0) */}
//         <Tile className="md:col-span-12 bg-[#06D6A0] text-white min-h-[600px] flex flex-col justify-center relative overflow-hidden">
//           {/* Decorative Icon */}
//           <div className="absolute top-0 right-0 p-4 opacity-20 rotate-12">
//             <Rocket className="w-48 h-48" />
//           </div>
          
//           <div className="relative z-10 grid md:grid-cols-2 items-center h-full">
//             <div className="text-center md:text-left pt-10 md:pt-0">
//                 <span className="inline-block mb-4 bg-white/20 backdrop-blur-md px-6 py-2 font-bold text-sm uppercase tracking-widest rounded-full">
//                      Join Our Family
//                 </span>
//                 <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
//                   Begin Their <br />
//                   <span className="text-[#E0FFF8] font-calligraphy">Adventure</span> Today.
//                 </h2>
//                 <p className="text-xl font-bold text-teal-50 max-w-xl mx-auto md:mx-0">
//                   We know choosing the right school is a big decision. Our admissions process is designed to be transparent, easy, and welcoming.
//                 </p>
//             </div>
            
//             {/* Image placed on the right */}
//             <div className="relative h-full min-h-[300px] md:min-h-full flex items-end justify-center md:justify-end mt-8 md:mt-0">
//                 <Image
//                   src={smilingboy}
//                   alt="Ready for school"
//                   width={500}
//                   height={500}
//                   className="object-contain md:absolute md:bottom-[-40px] md:right-0"
//                 />
//             </div>
//           </div>
//         </Tile>

//         {/* 2. THE PROCESS (Sequential Steps) */}
//         <Tile className="md:col-span-12  bg-transparent p-0 pt-8 pb-4">
//             <h3 className="text-3xl font-black text-center text-gray-800 mb-2 flex items-center justify-center gap-3">
//               <Sparkles className="text-[#fad06e] w-8 h-8"/> Your Path to Enrollment
//             </h3>
//         </Tile>

//         {/* STEP 1: Blue */}
//         <Tile delay={0.1} className="md:col-span-4 bg-[#9dcedc] text-white min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
//            <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 leading-none select-none group-hover:scale-110 transition-transform">1</div>
//            <CalendarHeart className="w-16 h-16 mb-6" />
//            <h4 className="text-3xl font-black mb-4">Inquire & Visit</h4>
//            <p className="font-bold text-lg opacity-90 leading-relaxed">
//              Fill out an inquiry form and schedule a campus tour. Come feel the warmth of our classrooms!
//            </p>
//            {/* Connector Arrow for desktop */}
//            <div className="hidden md:block absolute right-[-30px] top-1/2 -translate-y-1/2 z-20 text-[#9dcedc]">
//              <ArrowRight className="w-12  h-6 drop-shadow-lg" />
//            </div>
//         </Tile>

//         {/* STEP 2: Yellow */}
//         <Tile delay={0.2} className="md:col-span-4 bg-[#fad06e] text-[#5c4d26] min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
//         <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 text-white leading-none select-none group-hover:scale-110 transition-transform">2</div>
//            <FileText className="w-16 h-16 mb-6" />
//            <h4 className="text-3xl font-black mb-4">Apply & Meet</h4>
//            <p className="font-bold text-lg opacity-90 leading-relaxed">
//              Submit the application. We'll invite you and your child for a friendly interaction session.
//            </p>
//             {/* Connector Arrow for desktop */}
//             <div className="hidden md:block absolute right-[-30px] top-1/2 -translate-y-1/2 z-20 text-[#fad06e]">
//              <ArrowRight className="w-12 h-12 drop-shadow-lg" />
//            </div>
//         </Tile>

//         {/* STEP 3: Pink */}
//         <Tile delay={0.3} className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[350px] flex flex-col relative group hover:-translate-y-2 transition-transform">
//         <div className="absolute -bottom-10 -right-6 text-[180px] font-black opacity-20 leading-none select-none group-hover:scale-110 transition-transform">3</div>
//            <PartyPopper className="w-16 h-16 mb-6" />
//            <h4 className="text-3xl font-black mb-4">Welcome Aboard!</h4>
//            <p className="font-bold text-lg opacity-90 leading-relaxed">
//              Receive acceptance letter, complete formalities, and get ready for the first day of smiles!
//            </p>
//         </Tile>


//         {/* 3. INFO & CHECKLIST SPLIT */}
        
//         {/* Programs (Purple Block) */}
//         <Tile className="md:col-span-7 bg-[#7209B7] text-white min-h-[400px]">
//           <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
//             <BookOpen className="w-8 h-8"/> Age Groups & Programs
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-colors cursor-pointer">
//                 <Baby className="w-10 h-10 opacity-80" />
//                 <div>
//                     <h5 className="text-xl font-black text-[#fad06e]">Toddlers</h5>
//                     <p className="font-bold text-sm opacity-80">1.5 - 2.5 Years</p>
//                 </div>
//             </div>
//             <div className="bg-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-colors cursor-pointer">
//                 <Backpack className="w-10 h-10 opacity-80" />
//                 <div>
//                     <h5 className="text-xl font-black text-[#9dcedc]">Nursery</h5>
//                     <p className="font-bold text-sm opacity-80">2.5 - 3.5 Years</p>
//                 </div>
//             </div>
//             <div className="bg-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-colors cursor-pointer">
//                 <Rocket className="w-10 h-10 opacity-80" />
//                 <div>
//                     <h5 className="text-xl font-black text-[#f7a7b4]">Junior KG</h5>
//                     <p className="font-bold text-sm opacity-80">3.5 - 4.5 Years</p>
//                 </div>
//             </div>
//             <div className="bg-white/10 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-colors cursor-pointer">
//                 <PartyPopper className="w-10 h-10 opacity-80" />
//                 <div>
//                     <h5 className="text-xl font-black text-[#06D6A0]">Senior KG</h5>
//                     <p className="font-bold text-sm opacity-80">4.5 - 5.5 Years</p>
//                 </div>
//             </div>
//           </div>
//         </Tile>

//         {/* Checklist (White/Gray Block) */}
// {/* Checklist (White/Gray Block) */}
//         <Tile className="md:col-span-5 bg-white text-gray-800 min-h-[400px] relative border-[3px] border-dashed border-[#9dcedc] flex flex-col">
           
//            {/* Background Pattern */}
//            <div className="absolute inset-0 opacity-5 pointer-events-none">
//                 <Image src={Toys} alt="pattern" layout="fill" objectFit="cover" />
//            </div>

//            {/* Paper Clip Visual */}
//            <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-32 h-8 bg-[#9dcedc] rounded-full shadow-sm z-20 flex items-center justify-center">
//               <div className="w-20 h-2 bg-white/30 rounded-full"></div>
//            </div>

//           <div className="relative z-10 flex-1 flex flex-col mt-4">
            
//             <div className="mb-6 text-center md:text-left">
//                 <h3 className="text-2xl font-black text-[#7209B7] uppercase tracking-wider flex items-center justify-center md:justify-start gap-3">
//                     <CheckCircle2 className="w-8 h-8"/> Documents
//                 </h3>
//                 <p className="text-gray-400 font-bold text-sm ml-11">Please bring these along</p>
//             </div>

//             <ul className="space-y-3 flex-1">
//                 {['Birth Certificate', 'Passport Size Photos', 'Immunization Record', 'Previous School Reports', 'Address Proof'].map((item, i) => {
                    
//                     // DEFINING STYLES
//                     const styles: { icon: React.ComponentType<any>; color: string; bg: string }[] = [
//                         { icon: Baby, color: 'text-[#f7a7b4]', bg: 'bg-[#f7a7b4]' },
//                         { icon: Camera, color: 'text-[#fad06e]', bg: 'bg-[#fad06e]' },
//                         { icon: Syringe, color: 'text-[#06D6A0]', bg: 'bg-[#06D6A0]' },
//                         { icon: FileText, color: 'text-[#9dcedc]', bg: 'bg-[#9dcedc]' },
//                         { icon: MapPin, color: 'text-[#7209B7]', bg: 'bg-[#7209B7]' }
//                     ];

//                     // Use modulo to safely cycle through styles and assert non-null
//                     const currentStyle = styles[i % styles.length]!; 
                    
//                     // Extract Icon component to render it cleanly
//                     const IconComponent = currentStyle.icon;

//                     return (
//                         <li 
//                           key={i} 
//                           className="group flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-default"
//                         >
//                             {/* Icon Box */}
//                             <div className={`w-10 h-10 rounded-xl ${currentStyle.bg}/10 flex items-center justify-center group-hover:${currentStyle.bg} group-hover:text-white transition-colors duration-300`}>
//                                 <IconComponent className={`w-5 h-5 ${currentStyle.color} group-hover:text-white transition-colors`} />
//                             </div>
                            
//                             {/* Text */}
//                             <span className="font-bold text-gray-600 group-hover:text-gray-900 transition-colors">
//                               {item}
//                             </span>

//                             {/* Checkmark (Appears on Hover) */}
//                             <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
//                                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                                     <CheckCircle2 className="w-4 h-4 text-green-600" />
//                                  </div>
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//           </div>
//         </Tile>


//         {/* 4. FINAL CTA (Full Width Yellow - Optimized Layout) */}
//         <Tile className="md:col-span-12 bg-[#fad06e] text-[#5c4d26] p-0 relative overflow-hidden">
//            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
//                {/* Left Content */}
//                <div className="p-10 md:p-14 z-10">
//                     <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-md">
//                         Ready to take the first step?
//                     </h2>
//                     <p className="text-xl font-bold text-[#5c4d26] opacity-90 mb-8">
//                         Admissions are now open for the upcoming academic year.
//                     </p>
                    
//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <button className="group bg-white text-[#fad06e] font-black text-lg py-4 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
//                             Download Brochure <Download className="w-5 h-5 group-hover:animate-bounce" />
//                         </button>
//                         <button className="bg-[#7209B7] text-white font-black text-lg py-4 px-8 rounded-full hover:bg-[#5e0796] hover:shadow-xl hover:scale-105 transition-all shadow-lg shadow-purple-900/20">
//                             Apply Online Now
//                         </button>
//                     </div>
//                </div>

//                {/* Right Image */}
//                <div className="relative h-64 md:h-full w-full">
//                     {/* Background Circle for pop */}
//                     <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
                    
//                     <Image 
//                         src={Girls}
//                         alt="Group of children"
//                         layout="fill"
//                         objectFit="cover"
//                         objectPosition="top center"
//                         className="opacity-90 md:opacity-100"
//                     />
//                </div>
//            </div>
//         </Tile>

//       </div>
//     </section>
  );
};

export default Admissions;