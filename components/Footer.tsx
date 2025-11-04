"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Activity, Stethoscope, Send } from 'lucide-react';
import Link from 'next/link';
import logo from "../public/Mega_Logo_Side.png"
import Image from 'next/image';

const MegaDiagnosticsFooter = () => {
  const [decorativeElements, setDecorativeElements] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Generate decorative elements only on client side
  useEffect(() => {
    const elements = [...Array(8)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setDecorativeElements(elements);
  }, []);

  // Quick Links navigation mapping
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Book Test', href: '/Book' },
    { name: 'Contact Us', href: '/Book' },
    { name: 'Career', href: '/career' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer 
      className="text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #4a1d4a 0%, #663366 50%, #8b4a8b 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {decorativeElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full animate-pulse"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.animationDelay,
              animationDuration: element.animationDuration,
              backgroundColor: 'rgba(240, 217, 124, 0.1)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group">
              
              {/* <div 
                className="p-3 rounded-2xl mr-4 shadow-xl transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)'
                }}
              >
              
              </div> */}
              <div>
                  <Image
                src={logo}
                alt="Mega Diagnostics Logo"
                width={170}
                height={170}
                className="object-contain"
                >

                </Image>
             
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#e6c76b' }}>
              Leading diagnostic center providing state-of-the-art medical imaging services, 
              pathology tests, and comprehensive health checkups with precision and care.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, name: 'facebook' },
                { Icon: Twitter, name: 'twitter' },
                { Icon: Instagram, name: 'instagram' },
                { Icon: Linkedin, name: 'linkedin' }
              ].map(({ Icon, name }) => (
                <Icon 
                  key={name}
                  className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                  style={{ 
                    color: hoveredIcon === name ? '#f0d97c' : '#e6c76b' 
                  }}
                  onMouseEnter={() => setHoveredIcon(name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm transition-all duration-300 transform hover:translate-x-2 inline-block group"
                    style={{ 
                      color: hoveredLink === link.name ? '#f0d97c' : '#e6c76b' 
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Digital X-Ray',
                'CT Scan & MRI',
                'Ultrasound & Doppler',
                'Blood Tests',
                'Pathology Services',
                'Health Checkups'
              ].map((service) => (
                <li 
                  key={service}
                  className="text-sm cursor-pointer transition-all duration-300 hover:translate-x-1 transform group"
                  style={{ 
                    color: hoveredLink === service ? '#f0d97c' : '#e6c76b' 
                  }}
                  onMouseEnter={() => setHoveredLink(service)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Newsletter
            </h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: '#e6c76b' }}>
                Stay updated with our latest health tips, diagnostic insights, and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'rgba(230, 199, 107, 0.1)',
                      color: '#f0d97c',
                      border: '1px solid rgba(230, 199, 107, 0.3)',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                  style={{ 
                    background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)',
                    color: '#4a1d4a'
                  }}
                >
                  {isSubscribed ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"></div>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-xs" style={{ color: 'rgba(230, 199, 107, 0.7)' }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  <p className="font-medium" style={{ color: '#f0d97c' }}>Main Center</p>
                  <p>Plot No.29-C, Madhuban</p>
                  <p>Udaipur - 313001, Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Phone 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  {['+91 93514 11126', '+91 90243 11126'].map((phone) => (
                    <p 
                      key={phone}
                      className="cursor-pointer transition-colors hover:underline"
                      style={{ 
                        color: hoveredLink === phone ? '#f0d97c' : '#e6c76b' 
                      }}
                      onMouseEnter={() => setHoveredLink(phone)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {phone}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail 
                  className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <p 
                  className="text-sm cursor-pointer transition-colors hover:underline"
                  style={{ 
                    color: hoveredLink === 'email' ? '#f0d97c' : '#e6c76b' 
                  }}
                  onMouseEnter={() => setHoveredLink('email')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  megadiagnosticsudaipur@gmail.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Clock 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  <p>Mon - Sat: 7:00 AM - 10:00 PM</p>
                  <p>Sunday: 8:00 AM - 8:00 PM</p>
                  <p className="font-medium mt-1" style={{ color: '#f0d97c' }}>
                    Emergency Services: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 relative"
          style={{ borderTop: '1px solid rgba(230, 199, 107, 0.3)' }}
        >
          {/* Decorative line */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 -mt-px"
            style={{ 
              background: 'linear-gradient(135deg, #e6c76b 0%, #f0d97c 100%)'
            }}
          ></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#e6c76b' }}>
              © 2025 Mega Diagnostics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy-policy" 
                className="text-sm transition-all duration-300 group"
                style={{ 
                  color: hoveredLink === 'Privacy Policy' ? '#f0d97c' : '#e6c76b' 
                }}
                onMouseEnter={() => setHoveredLink('Privacy Policy')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                  Privacy Policy
                </span>
              </Link>
              <Link 
                href="/career" 
                className="text-sm transition-all duration-300 group"
                style={{ 
                  color: hoveredLink === 'Careers' ? '#f0d97c' : '#e6c76b' 
                }}
                onMouseEnter={() => setHoveredLink('Careers')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                  Careers
                </span>
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center items-center space-x-8 mt-8 pt-6" style={{ borderTop: '1px solid rgba(230, 199, 107, 0.2)' }}>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
              >
                <Activity size={20} style={{ color: '#4a1d4a' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#e6c76b' }}>ISO Certified</p>
            </div>
            <div className="text-center group">
           
            </div>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
              >
                <Stethoscope size={16} style={{ color: '#4a1d4a' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#e6c76b' }}>Trusted Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaDiagnosticsFooter;