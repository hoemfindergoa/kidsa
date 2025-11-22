"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Users, Award } from "lucide-react";
import Image from "next/image";
import animalsImage from "../../public/animals-circle.jpg"; // Ensure this path matches your folder
import beeImage from "../../public/cloud.png";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Loving Care",
      description: "Nurturing environment where every child feels valued and secure",
      color: "text-[#FF8A80]", // Coral
      bgColor: "bg-[#FF8A80]/10",
      borderColor: "border-[#FF8A80]/20",
    },
    {
      icon: Sparkles,
      title: "Creative Learning",
      description: "Engaging activities that spark imagination and curiosity",
      color: "text-[#FFE99B]", // Yellow (darkened for text usually, but keeping theme)
      // Adjust text color for readability on yellow
      textColor: "text-amber-400",
      bgColor: "bg-[#FFE99B]/20",
      borderColor: "border-[#FFE99B]/30",
    },
    {
      icon: Users,
      title: "Social Skills",
      description: "Building friendships and learning to work together",
      color: "text-[#A7D8FF]", // Blue
      bgColor: "bg-[#A7D8FF]/10",
      borderColor: "border-[#A7D8FF]/20",
    },
    {
      icon: Award,
      title: "Expert Teachers",
      description: "Qualified educators passionate about child development",
      color: "text-[#B8F3D1]", // Mint
      // Mint is light, so use a darker green for text
      textColor: "text-emerald-400",
      bgColor: "bg-[#B8F3D1]/20",
      borderColor: "border-[#B8F3D1]/30",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F0] to-white"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 animate-bounce-slow opacity-80 z-10">
        <Image
          src={beeImage}
          alt="Bee"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#FFE99B]/20 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Visuals */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image with Cloud Shape */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#FF8A80] rounded-[3rem] rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white cloud-shape transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={animalsImage}
                    alt="Cute animals illustration"
                    className="w-full h-auto object-cover"
                    placeholder="blur" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#FF8A80]/10 rounded-full border border-[#FF8A80]/20">
                <span className="text-sm font-fedorikanew text-[#FF8A80] tracking-wide uppercase">
                  About Our School
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-fedorikanew text-gray-800 leading-tight">
                Creating a Foundation for
                <span className="relative inline-block ml-2 text-[#A7D8FF]">
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
                </span>{" "}
                <span className="text-[#FF8A80]">Learning</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Happy Kids Kindergarten, we believe every child is unique and
                capable of achieving great things. Our play-based curriculum
                combines structured learning with creative exploration.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`group border-2 ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden`}
                >
                  <CardContent className="p-6 space-y-4 flex flex-col font-fedorikanew items-center text-center lg:items-start lg:text-left">
                    <div
                      className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <feature.icon
                        className={`w-7 h-7 ${
                          feature.textColor || feature.color
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
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
    </section>
  );
};

export default About;