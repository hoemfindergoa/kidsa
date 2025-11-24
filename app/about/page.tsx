  "use client";
  import React from "react";
  import { motion } from "framer-motion";
  import smilingboy from "../../public/smilingboy.png";
  import Girls from "../../public/girlsimage.png"
  import anothergirl from "../../public/anothergirl.png"
  import Toys from "../../public/Toys.png"
  import { 
    Target, 
    Heart, 
    ShieldCheck, 
    Puzzle,
    Quote, 
  } from "lucide-react";
  import Image from "next/image";
  import Childrengroup from "../../public/childrensimage.png"

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

  const AboutUs = () => {
    return (
      <section  className="bg-white font-sans" id="about">
        
        {/* 0. FONTS & STYLES */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
          .font-calligraphy { font-family: 'Pacifico', cursive; }
          .font-hand { font-family: 'Dancing Script', cursive; }
        `}</style>
        {/* THE MOSAIC LAYOUT (Sharp Edges, Vibrant Colors) */}
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12">

            <Tile className="md:col-span-4 bg-[#f7a7b4] text-white min-h-[550px] flex flex-col  relative">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <Target className="w-32 h-32" />
            </div>
            
            <div className="relative mt-0 z-10 max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-3 mb-6">
              {/* <span className="bg-white text-[#FF4D6D] px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-sm">Our Mission</span> */}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Nurturing <span className="text-[#FFE5E5]">Curiosity</span> & <br/>
              Inspiring <span className="text-[#FFE5E5]">Dreams</span>
              </h3>
              <p className="text-lg font-bold text-pink-50 mb-8 leading-relaxed">
              We aim to create a safe haven where learning is an adventure. Our vision is to empower every child with confidence, creativity, and compassion.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                </div>
                <div className="flex flex-col items-center">
                </div>
              </div>
            </div>

            {/* Decorative image in the right corner */}
            <div className="absolute bottom-0 right-4 z-20">
              <Image
              src={smilingboy}
              alt="Child corner"
              width={380}
              height={380}
              className="object-cover"
              />
            </div>
            </Tile>
                 <Tile className="md:col-span-4 bg-[#9dcedc] text-white min-h-[550px] flex flex-col  relative">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <Puzzle className="w-32 h-32" />
            </div>
            
            <div className="relative mt-0 z-10 max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-3 mb-6">
              {/* <span className="bg-white text-[#FF4D6D] px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-sm">Our Mission</span> */}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Building <span className="text-[#FFE5E5]">Strong Minds</span> & <br/>
              Kind Hearts 
              </h3>
              <p className="text-lg font-bold text-pink-50 mb-8 leading-relaxed">
             we cherish the magical early years of
childhood — a phase where curiosity sparks, imagination takes flight and the foundation
for lifelong learning is built with care.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                </div>
                <div className="flex flex-col items-center">
                </div>
              </div>
            </div>

            {/* Decorative image in the right corner */}
            <div className="absolute bottom-0 right-4 z-20">
              <Image
              src={Girls}
              alt="Child corner"
              width={380}
              height={380}
              className="object-cover"
              />
            </div>
            </Tile>
              <Image 
              src={anothergirl} 
              alt="Child Playing" 
              className="w-full md:col-span-4 st h-full object-cover "
              height={800}
              width={800}
            />
          {/* 2. IMAGE BLOCK (Child with Toys) */}
    

          {/* 3. WHY CHOOSE US (Blue Block) */}
          {/* <Tile className="md:col-span-4 bg-[#4CC9F0] text-white min-h-[400px]">
            <h3 className="text-3xl font-black mb-8 border-b-4 border-white/30 inline-block pb-2">Why Parents Love Us</h3>
            <ul className="space-y-6">
              {['Safe & Secure Campus', 'Nutritious Meals Included', 'Large Outdoor Playground', 'Transparent Communication'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Tile> */}

          {/* 4. PHILOSOPHY & SAFETY (Green Block) */}
          {/* <Tile className="md:col-span-4 bg-[#06D6A0] text-white min-h-[400px] flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-4">
                  <Puzzle className="w-8 h-8 text-[#E0FFF8]" />
                  <h3 className="text-2xl font-black uppercase">Teaching Philosophy</h3>
                </div>
                <p className="font-medium text-[#E0FFF8] text-lg leading-relaxed mb-8">
                  We follow a unique blend of Montessori and Play-Way methods. Learning happens best when hands are busy and hearts are happy.
                </p>
            </div>
            
            <div className="bg-[#04ad80] p-6 -mx-8 -mb-10 mt-auto">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <h4 className="font-black text-xl uppercase">Safety First</h4>
                </div>
                <p className="text-sm font-medium opacity-90">24/7 CCTV • Verified Staff • Child-safe Zones</p>
            </div>
          </Tile> */}

          {/* 5. TEACHERS (Yellow Block) */}
          {/* <Tile className="md:col-span-4 bg-[#FFD166] text-[#5c4d26] min-h-[400px]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <GraduationCap className="w-8 h-8 text-[#FFD166]" />
            </div>
            <h3 className="text-3xl font-black mb-4">Expert Educators</h3>
            <p className="font-bold text-lg opacity-80 mb-8">
              Our teachers aren't just qualified; they are passionate mentors with 5+ years of experience in early child development.
            </p>
            
            <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FFD166] bg-gray-100 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+5}`} alt="Teacher" />
                      </div>
                  ))}
                </div>
                <span className="font-black text-sm uppercase tracking-wide">Highly Qualified Team</span>
            </div>
          </Tile> */}

          {/* 6. LEARNING THROUGH PLAY (Full Width Banner) */}
            <Tile className="md:col-span-8 bg-[#fad06e] text-white min-h-[550px] flex flex-col  relative">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <Heart className="w-32 h-32" />
            </div>
            
            <div className="relative mt-0 z-10 max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-3 mb-6">
              {/* <span className="bg-white text-[#FF4D6D] px-4 py-1 font-bold text-xs uppercase tracking-widest rounded-sm">Our Mission</span> */}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Curiosity<span className="text-[#FFE5E5]"> Sparks,</span> & <br/>
              Imagination takes <span className="text-[#FFE5E5]">flight</span>
              </h3>
              <p className="text-lg font-bold text-pink-50 mb-8 leading-relaxed">
             At Little Dreamers at Cambridge, we help those dreams shine brighter every day.With the perfect balance of structured learning, hands-on
experiences, and joyful exploration, we empower children aged 2 to 6 years to grow
with confidence, creativity, and strong character.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                </div>
                <div className="flex flex-col items-center">
                </div>
              </div>
            </div>

            {/* Decorative image in the right corner */}
            <div className="absolute bottom-0 right-4 z-20">
              <Image
              src={Toys}
              alt="Child corner"
              width={760}
              height={760}
              className="object-cover"
              />
            </div>
            </Tile>

          {/* 7. TESTIMONIAL (Purple Block) */}
          <Tile className="md:col-span-4 bg-[#7209B7] text-white flex flex-col justify-center min-h-[300px]">
            <Quote className="w-12 h-12 text-[#9D4EDD] mb-6 fill-current" />
            <p className="text-xl md:text-2xl font-hand leading-relaxed mb-6">
              "My daughter wakes up excited to go to school every single day. The teachers are simply wonderful!"
            </p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=parent1" alt="Parent" />
                </div>
                <div>
                  <p className="font-bold text-sm">Mrs. Kapoor</p>
                  <p className="text-xs text-purple-200 uppercase tracking-wider">Parent of Viaan</p>
                </div>
            </div>
          </Tile>

        </div>
      </section>
    );
  };

  export default AboutUs;