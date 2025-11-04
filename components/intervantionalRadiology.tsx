"use client";
import React, { useState } from 'react';4
import Link from 'next/link';
import { 
  Stethoscope,
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Activity,
  Zap,
  Target,
  Monitor,
  User,
  AlertCircle,
  FileText,
  Camera,
  MapPin,
  Mail
} from 'lucide-react';

const InterventionalRadiology = () => {
  const [activeTab, setActiveTab] = useState('procedures');

  const procedures = [
    {
      icon: Activity,
      title: "Vascular Interventions",
      description: "Treatment of blocked arteries, aneurysms, and vascular malformations",
      duration: "1-3 hours", 
      recovery: "Same day"
    },
    {
      icon: Target,
      title: "Tumor Ablation",
      description: "Minimally invasive tumor destruction using radiofrequency or microwave energy",
      duration: "1-2 hours",
      recovery: "24 hours"
    },
    {
      icon: Shield,
      title: "Embolization",
      description: "Blocking blood flow to treat tumors, control bleeding, or treat vascular conditions",
      duration: "2-3 hours",
      recovery: "Overnight"
    },
    {
      icon: Zap,
      title: "Drainage Procedures",
      description: "Image-guided drainage of abscesses, fluid collections, and biliary obstructions",
      duration: "30-60 minutes",
      recovery: "Same day"
    },
    {
      icon: Monitor,
      title: "Biopsy Services",
      description: "Precise tissue sampling for accurate diagnosis with minimal invasiveness",
      duration: "30-45 minutes",
      recovery: "Same day"
    }
  ];

  const advantages = [
    { icon: Clock, title: "Faster Recovery", description: "Minimal downtime compared to traditional surgery" },
    { icon: Shield, title: "Lower Risk", description: "Reduced complications and infection rates" },
    { icon: Target, title: "Precision Treatment", description: "Real-time imaging for accurate procedures" },
    { icon: User, title: "Outpatient Care", description: "Most procedures done on same-day basis" }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Cardiologist",
      text: "The interventional radiology team at Mega Diagnostics provides exceptional care with cutting-edge technology.",
      rating: 5
    },
    {
      name: "Mrs. Priya Patel",
      role: "Patient",
      text: "My vascular procedure was smooth and recovery was much faster than expected. Excellent care!",
      rating: 5
    },
    {
      name: "Dr. Amit Gupta",
      role: "Radiologist",
      text: "State-of-the-art equipment and skilled professionals make this the best IR center in the region.",
      rating: 5
    }
  ];

  return (
    <div id='Minimally-Invasive-Treatments' className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #ede4ff 100%)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: '#f0d97c' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-pulse" style={{ backgroundColor: '#e6c76b' }}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 rounded-full animate-pulse" style={{ backgroundColor: '#f0d97c' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(240, 217, 124, 0.2)', color: '#663366' }}>
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">First in Southern Rajasthan</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#4a1d4a' }}>
              Interventional
              <span className="block" style={{ color: '#8b4a8b' }}>Radiology</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#663366' }}>
              Where Precision Meets Innovation - Advanced minimally invasive treatments 
              under real-time image guidance for faster recovery and better outcomes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/Book" className='flex justify-center' >
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' }}
                >
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
              </button>
                  </Link>
           <div className='flex justify-center'>
               <a
                href="https://wa.me/+919024311126" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[300px] md:w-[250px] px-2  py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border-2 flex items-center justify-center"
                style={{ borderColor: '#8b4a8b', color: '#4a1d4a' }}
              >
                {/* WhatsApp SVG Logo */}
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#25D366"/>
                  <path d="M23.5 19.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.3-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.3-.4.5-.6.2-.2.2-.4.3-.7.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.3 3.6 5.7 4.9.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.4-.2-.8-.4z" fill="#fff"/>
                </svg>
                WhatsApp Now
              </a>
           </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#f8f4ff' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                <Stethoscope className="h-8 w-8" style={{ color: '#4a1d4a' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4a1d4a' }}>Advanced Equipment</h3>
              <p style={{ color: '#663366' }}>
                State-of-the-art Cath-Lab with ventilator support and emergency procedures capability
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#f8f4ff' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                <Users className="h-8 w-8" style={{ color: '#4a1d4a' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4a1d4a' }}>IPD Facilities</h3>
              <p style={{ color: '#663366' }}>
                Complete inpatient care with expert nursing staff and anesthesia support
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#f8f4ff' }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                <Shield className="h-8 w-8" style={{ color: '#4a1d4a' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4a1d4a' }}>Minimally Invasive</h3>
              <p style={{ color: '#663366' }}>
                Reduced risk, faster recovery, and no major surgical incisions required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#4a1d4a' }}>
              Comprehensive IR Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#663366' }}>
              Explore our full range of interventional radiology procedures and services
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
            {[
              { id: 'procedures', label: 'Procedures', icon: Activity },
              { id: 'advantages', label: 'Advantages', icon: CheckCircle },
              { id: 'equipment', label: 'Equipment', icon: Monitor },
              { id: 'team', label: 'Our Team', icon: Users }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id ? 'text-white transform scale-105' : 'hover:scale-105'
                  }`}
                  style={{
                    background: activeTab === tab.id 
                      ? 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' 
                      : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#663366'
                  }}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === 'procedures' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {procedures.map((procedure, index) => {
                  const IconComponent = procedure.icon;
                  return (
                    <div key={index} className="p-6 rounded-xl border-2 border-transparent hover:border-opacity-50 transition-all duration-300 transform hover:-translate-y-1" >
                      <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                        <IconComponent className="h-6 w-6" style={{ color: '#4a1d4a' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#4a1d4a' }}>{procedure.title}</h3>
                      <p className="text-sm mb-4" style={{ color: '#663366' }}>{procedure.description}</p>
                      <div className="flex justify-between text-xs" style={{ color: '#8b4a8b' }}>
                        <span><Clock className="h-4 w-4 inline mr-1" />{procedure.duration}</span>
                        <span><Activity className="h-4 w-4 inline mr-1" />{procedure.recovery}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'advantages' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#4a1d4a' }}>Why Choose IR?</h3>
                  <div className="space-y-4">
                    {advantages.map((advantage, index) => {
                      const IconComponent = advantage.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                            <IconComponent className="h-5 w-5" style={{ color: '#4a1d4a' }} />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1" style={{ color: '#4a1d4a' }}>{advantage.title}</h4>
                            <p className="text-sm" style={{ color: '#663366' }}>{advantage.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#f8f4ff' }}>
                    <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                      <Heart className="h-12 w-12" style={{ color: '#4a1d4a' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#4a1d4a' }}>Patient-Centric Care</h3>
                    <p style={{ color: '#663366' }}>Every procedure is tailored to individual patient needs with maximum comfort and safety</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipment' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#4a1d4a' }}>State-of-the-Art Technology</h3>
                  <p className="text-lg" style={{ color: '#663366' }}>Advanced imaging and intervention equipment for precise procedures</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
                      <h4 className="text-lg font-bold mb-3" style={{ color: '#4a1d4a' }}>Semi Cath-Lab System</h4>
                      <p style={{ color: '#663366' }}>High-resolution imaging with real-time fluoroscopy for precise catheter navigation and procedure guidance.</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
                      <h4 className="text-lg font-bold mb-3" style={{ color: '#4a1d4a' }}>Advanced Ventilator Support</h4>
                      <p style={{ color: '#663366' }}>Complete respiratory support system for complex procedures requiring anesthesia.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
                      <h4 className="text-lg font-bold mb-3" style={{ color: '#4a1d4a' }}>Emergency Equipment</h4>
                      <p style={{ color: '#663366' }}>Full emergency response capabilities including defibrillators and emergency medications.</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#f8f4ff' }}>
                      <h4 className="text-lg font-bold mb-3" style={{ color: '#4a1d4a' }}>Sterile Environment</h4>
                      <p style={{ color: '#663366' }}>Hospital-grade sterile operating theater with positive pressure ventilation systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#4a1d4a' }}>Expert Medical Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                      <User className="h-10 w-10" style={{ color: '#4a1d4a' }} />
                    </div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#4a1d4a' }}>Interventional Radiologists</h4>
                    <p style={{ color: '#663366' }}>Specialized doctors trained in minimally invasive procedures</p>
                  </div>
                  <div className="p-6">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                      <Stethoscope className="h-10 w-10" style={{ color: '#4a1d4a' }} />
                    </div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#4a1d4a' }}>Anesthesiologists</h4>
                    <p style={{ color: '#663366' }}>Expert anesthesia care for patient comfort and safety</p>
                  </div>
                  <div className="p-6">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                      <Heart className="h-10 w-10" style={{ color: '#4a1d4a' }} />
                    </div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#4a1d4a' }}>Nursing Staff</h4>
                    <p style={{ color: '#663366' }}>Dedicated nurses specialized in interventional care</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a1d4a' }}>
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: '#f8f4ff' }}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#f0d97c' }} />
                  ))}
                </div>
                <p className="mb-4 italic" style={{ color: '#663366' }}>"{testimonial.text}"</p>
                <div>
                  <p className="font-bold" style={{ color: '#4a1d4a' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: '#8b4a8b' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default InterventionalRadiology;