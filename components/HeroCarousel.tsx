"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon , StarFilledIcon } from "@radix-ui/react-icons";
import heroImage from "../public/hero-kids.jpg"
import butterflyImage from "../public/butterfly.png";
import birdImage from "../public/bird.png";
import cloudImage from "../public/cloud.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 pt-20 pb-32">
        <div className="relative h-12 overflow-hidden  bg-transparent">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30 T900,30 T1000,30 T1100,30 T1200,30 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-orange-200 dark:text-orange-300"
          />
          <path
            d="M0,40 Q60,25 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-orange-200 dark:text-orange-300 opacity-60"
          />
          {/* <path
            d="M0,50 Q75,35 150,50 T300,50 T450,50 T600,50 T750,50 T900,50 T1050,50 T1200,50 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-white dark:text-gray-950 opacity-40"
          /> */}
        </svg>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-pink/30 rounded-full blur-2xl animate-bounce-slow" />
      
      {/* Floating Animals and Birds */}
      <div className="absolute top-32 left-20 w-32 h-32 animate-float opacity-80">
        <Image src={butterflyImage} alt="Butterfly" className="w-full h-full" />
      </div>
      <div className="absolute top-48 right-32 w-32 h-32 animate-bounce-slow opacity-80" style={{ animationDelay: '0.5s' }}>
        <Image src={birdImage} alt="Bird" className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-32 w-32 h-32 animate-float opacity-70" style={{ animationDelay: '1.5s' }}>
        <Image src={cloudImage} alt="Cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-[400px] right-32 w-32 h-32 animate-bounce-slow opacity-80" style={{ animationDelay: '0.5s' }}>
        <Image src={butterflyImage} alt="Butterfly" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full">
              <StarFilledIcon className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">Welcome to Happy Kidsa</span>
              <StarFilledIcon className="w-4 h-4 fill-primary text-primary" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Where Little
              <span className="text-primary"> Minds </span>
              Grow Big
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              A nurturing and joyful learning environment where children develop essential skills through play, creativity, and exploration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Enroll Now
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Take a Tour
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Happy children learning together"
                className="w-full h-auto object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-card p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <StarFilledIcon className="w-6 h-6 fill-success-foreground text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-card-foreground">4.9/5.0</div>
                    <div className="text-xs text-muted-foreground">Parent Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 animate-bounce-slow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
