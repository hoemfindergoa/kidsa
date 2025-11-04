'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Home,
  Navigation,
  MessageSquare,
  Send,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

// TypeScript interfaces
interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  message: string;
}

// Custom hook for scroll animations
const useScrollAnimation = (): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const Contact: React.FC = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        'Mega Diagnostics Udaipur',
        'Medical Complex',
        'Udaipur, Rajasthan - 313001'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +91-XXXX-XXXXXX',
        'Emergency: +91-XXXX-XXXXXX',
        'WhatsApp: +91-XXXX-XXXXXX'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@megadiagnosticsudaipur.com',
        'appointments@megadiagnosticsudaipur.com',
        'emergency@megadiagnosticsudaipur.com'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 8:00 AM - 8:00 PM',
        'Sunday: 9:00 AM - 5:00 PM',
        'Emergency Services: 24/7'
      ]
    }
  ];

  const services: Service[] = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule your consultation or procedure',
      action: 'Book Now'
    },
    {
      icon: Home,
      title: 'Home Collection',
      description: 'Sample collection at your doorstep',
      action: 'Request Collection'
    },
    {
      icon: MessageSquare,
      title: 'Emergency Line',
      description: '24/7 emergency medical assistance',
      action: 'Call Emergency'
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (): void => {
    // Form submission logic would go here
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const openGoogleMaps = (): void => {
    const address = "Udaipur, Rajasthan 313001, India";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            Get in touch with us for appointments, inquiries, or emergency medical assistance. 
            We&apos;re here to provide you with excellent healthcare services.
          </p>
        </div>
        
        {/* Floating contact icons */}
        <div className="absolute top-20 left-10 text-white/20 animate-bounce">
          <Phone className="h-8 w-8" />
        </div>
        <div className="absolute top-32 right-16 text-white/20 animate-pulse">
          <Mail className="h-6 w-6" />
        </div>
        <div className="absolute bottom-20 left-20 text-white/20 animate-bounce">
          <MapPin className="h-10 w-10" />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center p-6 shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer opacity-0 scale-95 animate-[fadeInScale_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-pulse">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full transform hover:scale-105 transition-all duration-300">
                      {service.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-2xl border-0 opacity-0 -translate-x-8 animate-[slideInLeft_0.8s_ease-out_0.2s_forwards] hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                {isSubmitted ? (
                  <div className="text-center py-8 animate-[bounceIn_0.6s_ease-out]">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <Input 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                          className="w-full focus:scale-[1.02] transition-transform duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <Input 
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number" 
                          className="w-full focus:scale-[1.02] transition-transform duration-200"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address" 
                        className="w-full focus:scale-[1.02] transition-transform duration-200"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Service Required
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="diagnostic">Diagnostic Services</option>
                        <option value="interventional">Interventional Radiology</option>
                        <option value="home-collection">Home Collection</option>
                        <option value="emergency">Emergency Consultation</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your query or concern..." 
                        className="w-full h-32 focus:scale-[1.02] transition-transform duration-200"
                        required
                      />
                    </div>
                    
                    <Button 
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 opacity-0 translate-x-8 animate-[slideInRight_0.8s_ease-out_0.4s_forwards]">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help you with all your healthcare needs. Reach out to us 
                  through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="p-6 shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg flex-shrink-0 animate-bounce">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Udaipur, easily accessible from all major areas.
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl border-0 opacity-0 scale-95 animate-[fadeInScale_0.8s_ease-out_0.4s_forwards]">
            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden group">
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
                <h4 className="font-semibold text-sm text-gray-900 mb-1">Mega Diagnostics Udaipur</h4>
                <p className="text-xs text-gray-600">Medical Complex, Udaipur</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115313.25671782021!2d73.58827479726563!3d24.57128060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef72c2b57d0f%3A0x9c46a74e5c6d956e!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1706195520000!5m2!1sen!2sin"
                className="w-full h-full border-0 transition-all duration-300 group-hover:contrast-110 group-hover:saturate-110"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mega Diagnostics Udaipur Location"
              />
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
              { title: 'From Airport', desc: '15 minutes drive from Udaipur Airport', icon: '✈️' },
              { title: 'From Railway Station', desc: '10 minutes from Udaipur City Railway Station', icon: '🚂' },
              { title: 'Parking', desc: 'Free parking available for patients', icon: '🅿️' },
              { title: 'Public Transport', desc: 'Well connected by bus routes', icon: '🚌' }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-4 text-center shadow-lg border-0 hover:-translate-y-2 transition-all duration-300 opacity-0 animate-[bounceIn_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_1.2s_forwards]">
            <Button 
              onClick={openGoogleMaps}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Get Directions on Google Maps
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-7xl mx-auto opacity-0 scale-95 animate-[fadeInScale_0.8s_ease-out_0.2s_forwards]">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 shadow-2xl border-0 animate-pulse">
            <CardContent className="p-0 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4">Medical Emergency?</h2>
              <p className="text-xl mb-6 opacity-90">
                For immediate medical assistance, call our emergency line available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: +91-XXXX-XXXXXX
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
          70% {
            opacity: 0.9;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;