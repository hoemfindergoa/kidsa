'use client';
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Bharatjain from "../../public/bharatgupta.jpg"
import hitesh from "../../public/hitesh.jpg"
import paranveer from "../../public/pranverr.jpg"
import bharatjainew from "../../public/bharat jain new.jpg"
import Locations from '@/components/location';
import { 
  Award, 
  Users, 
  Heart, 
  Target,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  Activity,
  Star,
  Phone,
  Mail,
  Microscope,
  Zap,
  UserCheck,
  HeartHandshake,
  Calendar,
  Building2,
  Sparkles
} from 'lucide-react';
import MegaDiagnosticsNavbar from '../navbar/navbar';

// TypeScript interfaces
interface Achievement {
  number: string;
  label: string;
  icon: any;
}

import type { StaticImageData } from 'next/image';

interface Doctor {
  name: string;
  src: string | StaticImageData;
  qualification: string;
  specialization: string;
  experience?: string;
  photoPlaceholder: string;
}

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create the observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0) scale(1)';
            element.classList.add('animate-visible');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};

const MegaAbout: React.FC = () => {
  useScrollAnimation();

  const achievements: Achievement[] = [
    { number: '24/7', label: 'Emergency Services', icon: Clock },
    { number: '10K+', label: 'Happy Patients', icon: Users },
    { number: '1st', label: 'In Southern Rajasthan', icon: Award },
    { number: '100%', label: 'Accurate Results', icon: Shield }
  ];

  const whyTrustUs = [
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge diagnostic equipment and latest medical technology',
      icon: Zap
    },
    {
      title: 'Accurate Results',
      description: 'Precision diagnostics with detailed reporting and expert interpretation',
      icon: Target
    },
    {
      title: '24x7 Availability',
      description: 'Round-the-clock emergency services and patient support',
      icon: Clock
    },
    {
      title: 'World Class Services',
      description: 'International standards of healthcare delivery and patient care',
      icon: Star
    },
    {
      title: 'Care for Everyone',
      description: 'Comprehensive healthcare solutions for all age groups and conditions',
      icon: HeartHandshake
    },
    {
      title: 'Expert Team',
      description: 'Highly qualified professionals from top medical institutes of India',
      icon: UserCheck
    }
  ];

  const services = [
    {
      title: 'Routine Health Checkups',
      description: 'Complete health screening packages',
      icon: CheckCircle
    },
    {
      title: 'Diabetes Profiles',
      description: 'Comprehensive diabetes management testing',
      icon: Activity
    },
    {
      title: 'Thyroid Function Tests',
      description: 'Complete thyroid hormone evaluation',
      icon: Microscope
    },
    {
      title: 'Fertility Assessment',
      description: 'Advanced fertility testing panels',
      icon: Heart
    },
    {
      title: 'Cancer Screening',
      description: 'Early detection and screening programs',
      icon: Shield
    },
    {
      title: 'Pre-surgical Panels',
      description: 'Complete pre-operative evaluation',
      icon: Stethoscope
    },
    {
      title: 'Women\'s Wellness',
      description: 'Specialized women\'s health packages',
      icon: HeartHandshake
    },
    {
      title: 'Pediatric & Geriatric Care',
      description: 'Age-specific healthcare solutions',
      icon: Users
    }
  ];

  const doctors: Doctor[] = [
    {
      name: 'Dr. Bharat Gupta',
      qualification: 'MD, DNB, PDCC (SGPGI, Lucknow)',
      specialization: 'Consultant Interventional Radiologist',
      src: Bharatjain,
      experience: '15+ Years Experience',
      photoPlaceholder: 'Add Dr. Bharat Gupta\'s professional photo here'
    },
    {
      name: 'Dr. Bharat Jain',
      src: bharatjainew,
      qualification: 'MD, Radiodiagnosis, Fellowship in Fetal Medicine',
      specialization: 'Consultant Radiologist & Fetal Medicine Expert',
      experience: '12+ Years Experience',
      photoPlaceholder: 'Add Dr. Bharat Jain\'s professional photo here'
    },
    {
      name: 'Dr. Pranveer Singh Rao',
      src: paranveer,
      qualification: 'MD, Pathology',
      specialization: 'Consultant Pathologist & Laboratory Medicine',
      experience: '10+ Years Experience',
      photoPlaceholder: 'Add Dr. Pranveer Singh Rao\'s professional photo here'
    },
    {
      name: 'Dr. Hitesh Sharma',
      src: hitesh,
      qualification: 'Consultant Radiologist',
      specialization: 'Diagnostic Imaging & Radiology Specialist',
      experience: '8+ Years Experience',
      photoPlaceholder: 'Add Dr. Hitesh Sharma\'s professional photo here'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <MegaDiagnosticsNavbar />
      <style jsx>{`
        .scroll-animate {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-[100px] md:py-[140px]  bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating background elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 text-white/10 animate-bounce">
          <Heart className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        <div className="absolute top-20 right-8 md:top-32 md:right-16 text-white/10 animate-pulse">
          <Activity className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 text-white/10 animate-bounce" style={{animationDelay: '1s'}}>
          <Microscope className="h-8 w-8 md:h-10 md:w-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 md:p-3 rounded-full">
                <Stethoscope className="h-5 w-5 md:h-8 md:w-8 text-purple-900" />
              </div>
              <h1 className="text-xl md:text-5xl font-bold">About Mega Diagnostics</h1>
            </div>
            <p className="text-base md:text-xl max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
              At Mega Interventions & Diagnostics, we combine cutting-edge medical technology with 
              compassionate care to offer comprehensive diagnostic and interventional services under one roof.
            </p>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 md:px-8 py-2 md:py-3 rounded-full text-purple-900 font-bold text-sm md:text-lg shadow-lg">
              <Sparkles className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
            MEGA CARE  MEGA ACCURACY  MEGA YOU.
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Our Commitment</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing exceptional patient care and accurate diagnostic results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <Card className="p-6 md:p-8 shadow-xl border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'translateX(-32px)' }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center shadow-lg animate-pulse">
                  <Target className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  We are dedicated to providing exceptional patient care and accurate diagnostic results. 
                  Our team of experts is committed to delivering high-quality services with compassion and 
                  professionalism, making advanced healthcare accessible to everyone in Southern Rajasthan.
                </p>
                <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Patient-Centered Care
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Quality Excellence
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 md:p-8 shadow-xl border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'translateX(32px)' }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-purple-900 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                  <HeartHandshake className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">State-of-the-Art Facilities</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  We are committed to providing accurate and reliable diagnostic services. Our center is 
                  equipped with cutting-edge technology and staffed by experienced professionals from top 
                  institutes of India, ensuring world-class medical care.
                </p>
                <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Advanced Technology
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Expert Team
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Why Patients Trust Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in every aspect of healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {whyTrustUs.map((reason, index) => (
              <Card key={index} className="p-4 md:p-6 shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white/80 backdrop-blur-sm" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-5 w-5 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center">{reason.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Rajasthan's First</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4">
              Advanced Diagnostic and Interventional Radiology Center
            </p>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-purple-900 font-semibold text-sm md:text-base shadow-lg">
              <Award className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
              Experience the MEGA Difference
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-4 md:p-6 shadow-xl border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-purple-900 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg animate-pulse">
                    <achievement.icon className="h-5 w-5 md:h-8 md:w-8" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-1 md:mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Group of Doctors from</h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 md:mb-4">
              Top Institutes of India
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Highly qualified radiologists, pathologists, and technologists delivering accurate results with focus on early detection, precision, and patient safety
            </p>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {doctors.map((doctor, index) => (
    <Card 
      key={index} 
      className="group relative overflow-hidden border border-gray-200/80 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 ease-out bg-white"
      style={{ 
        opacity: 80, 
        transform: 'translateY(20px)', 
        transitionDelay: `${index * 100}ms` 
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardContent className="relative p-8">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Professional Photo */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative">
              <div className="w-32 h-32 rounded-full mt-12 overflow-hidden ring-4 ring-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={doctor.src}
                  alt={doctor.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-3 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Doctor Information */}
          <div className="flex-grow text-center sm:text-left space-y-5">
            {/* Name and Title */}
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                {doctor.name}
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto sm:mx-0"></div>
            </div>
            
            {/* Professional Details */}
            <div className="space-y-4">
              {/* Qualification */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">Qualification</p>
                  <p className="text-base font-semibold text-gray-900">{doctor.qualification}</p>
                </div>
              </div>
              
              {/* Specialization */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">Specialization</p>
                  <p className="text-base font-semibold text-gray-900">{doctor.specialization}</p>
                </div>
              </div>
              
              {/* Experience */}
              {doctor.experience && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">Experience</p>
                    <p className="text-base font-semibold text-gray-900">{doctor.experience}</p>
                  </div>
                </div>
              )}
            </div>
            
      
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Whether it's a routine check or advanced cancer profiling: we're equipped for it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-4 md:p-6 text-center shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-gradient-to-br from-white to-gray-50 hover:shadow-xl" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: `${(index % 8) * 75}ms` }}>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-purple-900 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-5 w-5 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate" style={{ opacity: 0, transform: 'translateY(32px)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Watch Our Videos
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our services, facilities, and patient care through our video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Video 1 */}
            <Card className="overflow-hidden shadow-xl border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: '0ms' }}>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ndA6xmfAWR4"
                    title="Mega Diagnostics "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    First Mega Diagnostic
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    First Mega Diagnostic & Intervention Centre Opens in Udaipur | Advanced Medical Care Under One Roof
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="overflow-hidden shadow-xl border-0 hover:-translate-y-2 transition-all duration-300 scroll-animate bg-white" style={{ opacity: 0, transform: 'scale(0.95)', transitionDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/AaiHVeJaGX4"
                    title="Advanced Technology"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    MEGA Diagnostics - Advanced Technology
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Mega diagnostics in news 
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Locations/>

    </div>
  );
};

export default MegaAbout;