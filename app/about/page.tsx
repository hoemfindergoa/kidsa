"use client"
import React from "react";
import { Heart, Sparkles, Users, Award } from "lucide-react";

// --- UI Components ---
type DivProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ className, children, ...props }: DivProps) => (
  <div className={`rounded-3xl border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }: DivProps) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const About = () => {
  // Using Unsplash images to match the "Teacher + Child" and "Group of Kids" vibe from your reference
  const mainImage = "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"; // Teacher helping child
  const subImage = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80";   // Group of kids
  const beeImage = "https://cdn-icons-png.flaticon.com/512/826/826963.png"; 
  const cloudImage = "https://cdn-icons-png.flaticon.com/512/1161/1161670.png"; // Car icon replacement for the left side

  const features = [
    {
      icon: Heart,
      title: "Loving Care",
      description: "Nurturing environment where every child feels valued and secure",
      color: "text-[#FF8A80]",
      bgColor: "bg-[#FF8A80]/10",
      borderColor: "border-[#FF8A80]/20",
    },
    {
      icon: Sparkles,
      title: "Creative Learning",
      description: "Engaging activities that spark imagination and curiosity",
      color: "text-[#E6C200]", // Adjusted for better contrast
      textColor: "text-amber-500",
      bgColor: "bg-[#FFE99B]/20",
      borderColor: "border-[#FFE99B]/30",
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Building friendships and learning to work together",
      color: "text-[#A7D8FF]",
      bgColor: "bg-[#A7D8FF]/10",
      borderColor: "border-[#A7D8FF]/20",
    },
    {
      icon: Award,
      title: "Expert Teachers",
      description: "Qualified educators passionate about child development",
      color: "text-[#4CAF50]",
      textColor: "text-emerald-500",
      bgColor: "bg-[#B8F3D1]/20",
      borderColor: "border-[#B8F3D1]/30",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-white to-[#FFF9F0]"
    >
      {/* --- Floating Background Elements --- */}
      <div className="absolute top-20 right-10 w-16 h-16 animate-bounce-slow opacity-80 z-10">
        <img src={beeImage} alt="Bee" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      <div className="absolute top-40 left-10 w-20 h-20 animate-pulse-slow opacity-60 z-10 hidden lg:block">
        <img src={cloudImage} alt="Cloud Car" className="w-full h-full object-contain -rotate-12" />
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#FFE99B]/20 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: COMPOSITE IMAGE (Blob Layout) --- */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end pr-0 lg:pr-10">
            <div className="relative w-full max-w-[500px]">
              
              {/* 1. MAIN BLOB IMAGE */}
              <div className="relative z-10">
                 {/* The Main Blob Shape */}
                 <div 
                   className="relative overflow-hidden shadow-2xl w-full aspect-[4/5] bg-gray-100"
                   style={{
                     borderRadius: "62% 38% 36% 64% / 56% 48% 52% 44%", // Organic blob shape
                   }}
                 >
                   <img
                     src={mainImage}
                     alt="Teacher and Child"
                     className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                   />
                 </div>
              </div>

              {/* 2. SECONDARY BLOB IMAGE (Overlapping) */}
              <div className="absolute -bottom-12 -left-8 lg:-left-12 z-20 w-48 h-48 lg:w-56 lg:h-56">
                 <div 
                   className="relative overflow-hidden shadow-xl w-full h-full bg-white border-[8px] border-white"
                   style={{
                     borderRadius: "41% 59% 42% 58% / 56% 42% 58% 44%", // Smaller blob
                   }}
                 >
                   <img
                     src={subImage}
                     alt="Children Playing"
                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                   />
                 </div>
                 {/* Decorative sparkles near the small blob */}
                 <div className="absolute -top-4 -right-4 text-[#FF8A80] animate-bounce">
                    <Sparkles className="w-8 h-8 fill-current" />
                 </div>
              </div>

              {/* Background decorative shape behind everything */}
              <div 
                className="absolute top-10 -right-10 w-full h-full bg-[#FF8A80] opacity-10 -z-10"
                style={{ borderRadius: "54% 46% 42% 58% / 45% 52% 48% 55%" }}
              />

            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#FF8A80]/10 rounded-full border border-[#FF8A80]/20">
                <span className="text-sm font-bold text-[#FF8A80] tracking-wide uppercase">
                  About Our School
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-fedorikanew text-[#2D3748] leading-tight">
                Creating a Foundation for
                <span className="relative inline-block mx-2 text-[#A7D8FF]">
                  Lifelong
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE99B] -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
                <span className="text-[#FF8A80]">Learning</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Happy Kids Kindergarten, we believe every child is unique and
                capable of achieving great things. Our play-based curriculum
                combines structured learning with creative exploration.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`group border-2 ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden`}
                >
                  <CardContent className="p-5 space-y-3 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${
                          feature.textColor || feature.color
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;