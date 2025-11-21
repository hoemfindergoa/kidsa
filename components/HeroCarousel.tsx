"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import heroImage from "../public/hero-kids.jpg";
import butterflyImage from "../public/butterfly.png";
import birdImage from "../public/bird.png";
import cloudImage from "../public/cloud.png";

const Hero = () => {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      color: "text-[#FF8A80]",
      bgColor: "bg-[#FF8A80]/10",
    },
    {
      value: "500+",
      label: "Happy Students",
      color: "text-[#B8F3D1]",
      textColor: "text-emerald-400",
      bgColor: "bg-[#B8F3D1]/20",
    },
    {
      value: "30+",
      label: "Expert Teachers",
      color: "text-[#A7D8FF]",
      bgColor: "bg-[#A7D8FF]/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F0] to-white pt-32 pb-24">
      {/* Floating Background Elements */}
      <div className="absolute top-32 left-20 w-28 h-28 animate-float opacity-80 z-10">
        <Image
          src={butterflyImage}
          alt="Butterfly"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div
        className="absolute top-40 right-32 w-28 h-28 animate-bounce-slow opacity-80 z-10"
        style={{ animationDelay: "0.5s" }}
      >
        <Image
          src={birdImage}
          alt="Bird"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div
        className="absolute bottom-32 left-10 w-32 h-32 animate-float opacity-70 z-10"
        style={{ animationDelay: "1.5s" }}
      >
        <Image
          src={cloudImage}
          alt="Cloud"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div
        className="absolute bottom-40 right-20 w-24 h-24 animate-bounce-slow opacity-80 z-10"
        style={{ animationDelay: "1s" }}
      >
        <Image
          src={butterflyImage}
          alt="Butterfly"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#FFE99B]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#FF8A80]/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#FFE99B]/20 rounded-full border border-[#FFE99B]/30">
              <div className="flex items-center gap-2">
                <StarFilledIcon className="w-4 h-4 text-[#FF8A80]" />
                <span className="text-sm font-bold text-amber-600 tracking-wide uppercase">
                  Welcome to Happy Kids
                </span>
                <StarFilledIcon className="w-4 h-4 text-[#FF8A80]" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl font-fedorikanew  text-gray-800">
                Where Little
                <span className="relative inline-block mx-2 text-[#FF8A80]">
                  Minds
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
                <br className="hidden lg:block" />
                <span className="text-[#A7D8FF]">Grow</span> Big
              </h1>

              <p className="text-lg font-fedorika   text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A nurturing and joyful learning environment where children
                develop essential skills through play, creativity, and
                exploration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-[#FF8A80] hover:bg-[#ff6b5e] text-white shadow-lg shadow-[#FF8A80]/30 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A80]/40 hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#A7D8FF]/30 bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-[#A7D8FF]/10 hover:border-[#A7D8FF]/50 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Take a Tour
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-2 border-transparent hover:border-gray-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-4 text-center space-y-1">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-2`}
                    >
                      <div
                        className={`text-2xl font-extrabold ${
                          stat.textColor || stat.color
                        }`}
                      >
                        {/* {stat.value.split("+")[0].slice(0, 2)} */}
                      </div>
                    </div>
                    <div className={`text-2xl font-extrabold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image with enhanced styling */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#A7D8FF] rounded-[3rem] rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src={heroImage}
                    alt="Happy children learning together"
                    className="w-full h-auto object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFCEB8] rounded-full opacity-60 animate-bounce-slow blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FFE99B] rounded-full opacity-40 animate-float blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;