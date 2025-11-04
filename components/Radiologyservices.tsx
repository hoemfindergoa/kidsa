"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { 
  Microscope, 
  FlaskConical, 
  Dna, 
  Heart, 
  Shield, 
  CheckCircle,
  Activity,
  Scan,
  Brain,
  Clock,
  Award,
  Users,
  Target,
  Phone,
  Calendar,
  Camera,
  Zap,
  TrendingUp,
  Home,
  Download
} from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tests: string[];
  category: string;
  duration?: string;
  accuracy?: string;
  homeCollection?: boolean;
}

const radiologyServices: Service[] = [
  {
    icon: Scan,
    title: 'Digital X-Ray',
    description: 'Fast, high-resolution digital scans with instant results and minimal radiation exposure',
    tests: ['Chest X-Ray', 'Bone X-Ray', 'Joint X-Ray', 'Spine X-Ray', 'Abdominal X-Ray', 'Dental X-Ray'],
    category: 'imaging',
    duration: '5-10 mins',
    accuracy: '99.5%',
    homeCollection: false
  },
  {
    icon: Heart,
    title: 'CT Scan',
    description: 'Multi-slice CT-Scan for all body parts with specialized protocols and 3D reconstruction',
    tests: ['CT Angiographies', 'Triple-phase CT (Liver)', 'CT-Adrenal protocol', 'Enteroclysis', 'HRCT Chest', 'CT Brain'],
    category: 'imaging',
    duration: '15-30 mins',
    accuracy: '99.8%',
    homeCollection: false
  },
  {
    icon: Brain,
    title: 'MRI Scanning',
    description: '3D Digital Silent MRI for brain, spine, joint, and abdominal scans with advanced sequences',
    tests: ['Brain MRI', 'Spine MRI', 'Joint MRI', 'Abdominal MRI', 'Cardiac MRI', 'MR Angiography'],
    category: 'imaging',
    duration: '30-60 mins',
    accuracy: '99.9%',
    homeCollection: false
  },
  {
    icon: Heart,
    title: 'Ultrasound & Doppler',
    description: '2D, 3D, 4D scans for all organs with advanced Doppler studies and real-time imaging',
    tests: ['Abdominal USG', 'Pelvic USG', 'Doppler Studies', 'Echocardiography', 'Thyroid USG', 'Scrotal USG'],
    category: 'imaging',
    duration: '20-40 mins',
    accuracy: '98.5%',
    homeCollection: true
  },
  {
    icon: Activity,
    title: 'Antenatal Services',
    description: 'Comprehensive fetal scans including 3D, 4D, and anomaly scans with expert consultation',
    tests: ['3D/4D Scans', 'Anomaly Scan', 'Fetal Echo', 'NBNT', 'Growth Scan', 'Cervical Length'],
    category: 'imaging',
    duration: '30-45 mins',
    accuracy: '99.2%',
    homeCollection: false
  },
  {
    icon: Camera,
    title: 'Mammography',
    description: 'Advanced breast imaging and cancer screening with digital mammography and tomosynthesis',
    tests: ['Digital Mammography', 'Breast Cancer Screening', 'Tomosynthesis', 'Breast USG', 'BIRADS Reporting'],
    category: 'imaging',
    duration: '15-20 mins',
    accuracy: '99.7%',
    homeCollection: false
  }
];

const pathologyServices: Service[] = [
  {
    icon: FlaskConical,
    title: 'Clinical Biochemistry',
    description: 'Comprehensive blood chemistry analysis with 5-part hematology and advanced automated systems',
    tests: ['Liver Profile', 'Kidney Profile', 'Lipid Profile', 'Thyroid Profile', 'Cardiac Markers', 'Diabetes Profile'],
    category: 'pathology',
    duration: '2-4 hours',
    accuracy: '99.8%',
    homeCollection: true
  },
  {
    icon: Shield,
    title: 'Immunology & Serology',
    description: 'Advanced testing for infections and immune system disorders with rapid and accurate results',
    tests: ['Dengue Testing', 'HIV Testing', 'Hepatitis Panel', 'COVID Testing', 'Autoimmune Panel', 'Allergy Testing'],
    category: 'pathology',
    duration: '4-6 hours',
    accuracy: '99.5%',
    homeCollection: true
  },
  {
    icon: Microscope,
    title: 'Histopathology',
    description: 'In-house tissue evaluation with tumor markers and specialized staining techniques',
    tests: ['Biopsy Examination', 'Cancer Screening', 'Tumor Markers', 'Special Stains', 'IHC Testing', 'Frozen Sections'],
    category: 'pathology',
    duration: '3-5 days',
    accuracy: '99.9%',
    homeCollection: false
  },
  {
    icon: Activity,
    title: 'Microbiology',
    description: 'Cultures, sensitivity testing, and infection diagnosis with antimicrobial susceptibility',
    tests: ['Culture & Sensitivity', 'Blood Culture', 'Urine Culture', 'TB Testing', 'Fungal Culture', 'Viral PCR'],
    category: 'pathology',
    duration: '2-7 days',
    accuracy: '99.2%',
    homeCollection: true
  },
  {
    icon: FlaskConical,
    title: 'Clinical Pathology',
    description: 'Routine analysis of urine, stool, and body fluids with automated microscopy',
    tests: ['Urine Analysis', 'Stool Examination', 'Body Fluid Analysis', 'Semen Analysis', 'CSF Analysis', 'Synovial Fluid'],
    category: 'pathology',
    duration: '1-2 hours',
    accuracy: '99.1%',
    homeCollection: true
  }
];

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`rounded-2xl border-2 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-bold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

function MedicalServices() {
  const [activeTab, setActiveTab] = useState<'pathology' | 'radiology'>('pathology');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Reset visibility when tab changes
    setIsVisible({});
    
    const timer = setTimeout(() => {
      const newVisible: Record<string, boolean> = {};
      newVisible['header'] = true;
      
      const services = activeTab === 'pathology' ? pathologyServices : radiologyServices;
      services.forEach((_, index) => {
        setTimeout(() => {
          setIsVisible(prev => ({
            ...prev,
            [`service-${index}`]: true
          }));
        }, index * 150);
      });
      
      setIsVisible(prev => ({ ...prev, ...newVisible }));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentServices = activeTab === 'pathology' ? pathologyServices : radiologyServices;

  const stats = [
    { icon: Award, value: '50,00+', label: 'Tests Performed' },
    { icon: Users, value: '15,00+', label: 'Happy patients' },
    { icon: Target, value: '99.8%', label: 'Accuracy Rate' },
    { icon: Clock, value: '24/7', label: 'Emergency Services' }
  ];

  return (
    <div  className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #ede4ff 100%)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: '#f0d97c' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-pulse" style={{ backgroundColor: '#e6c76b' }}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 rounded-full animate-pulse" style={{ backgroundColor: '#f0d97c' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(240, 217, 124, 0.2)', color: '#663366' }}>
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">Rajasthan's First Fully Digital Lab</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#4a1d4a' }}>
              Medical Diagnostic
              <span className="block" style={{ color: '#8b4a8b' }}>Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: '#663366' }}>
              Advanced automated and barcoded diagnostic laboratory ensuring speed, accuracy, 
              and reliability with state-of-the-art equipment and expert medical professionals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/Book" className='flex justify-center' >
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' }}
                >
                <Calendar className="h-5 w-5 mr-2" />
                Book Test Now
              </button>
                  </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                    <IconComponent className="h-6 w-6" style={{ color: '#4a1d4a' }} />
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: '#4a1d4a' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: '#663366' }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id='radiology' className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white grid grid-flow-row md:grid-cols-2 grid-cols-1    rounded-2xl p-2 shadow-xl border-2" style={{ borderColor: 'rgba(139, 74, 139, 0.2)' }}>
            <button
              onClick={() => setActiveTab('pathology')}
              className={`px-8 mx-2 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                activeTab === 'pathology'
                  ? 'text-white shadow-lg transform scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                background: activeTab === 'pathology' 
                  ? 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' 
                  : 'transparent',
                color: activeTab === 'pathology' ? 'white' : '#663366'
              }}
            >
              <FlaskConical className="w-5 h-5 mr-2" />
              Pathology Services
            </button>
            <button
              onClick={() => setActiveTab('radiology')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                activeTab === 'radiology'
                  ? 'text-white shadow-lg transform scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                background: activeTab === 'radiology' 
                  ? 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' 
                  : 'transparent',
                color: activeTab === 'radiology' ? 'white' : '#663366'
              }}
            >
              <Scan className="w-5 h-5 mr-2" />
              Radiology Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={`${activeTab}-${index}`}
                className={`transition-all duration-500 ${
                  isVisible[`service-${index}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  borderColor: 'rgba(139, 74, 139, 0.2)'
                }}
              >
                <CardHeader>
                  <div 
                    className="text-white p-4 rounded-xl w-fit mb-4 transform transition-transform duration-300 hover:scale-110 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#4a1d4a' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 leading-relaxed" style={{ color: '#663366' }}>
                    {service.description}
                  </p>
                  
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg" style={{ backgroundColor: '#f8f4ff' }}>
                      <Clock className="h-4 w-4 mx-auto mb-1" style={{ color: '#8b4a8b' }} />
                      <div className="text-xs font-semibold" style={{ color: '#4a1d4a' }}>{service.duration}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg" style={{ backgroundColor: '#f8f4ff' }}>
                      <Target className="h-4 w-4 mx-auto mb-1" style={{ color: '#8b4a8b' }} />
                      <div className="text-xs font-semibold" style={{ color: '#4a1d4a' }}>{service.accuracy}</div>
                    </div>
                  </div>

                  {service.homeCollection && (
                    <div className="flex items-center mb-4 p-2 rounded-lg" style={{ backgroundColor: 'rgba(240, 217, 124, 0.2)' }}>
                      <Home className="h-4 w-4 mr-2" style={{ color: '#663366' }} />
                      <span className="text-sm font-medium" style={{ color: '#663366' }}>Home Collection Available</span>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#8b4a8b' }}>
                      Key Tests Available:
                    </h4>
                    <ul className="space-y-2">
                      {service.tests.slice(0, 4).map((test, testIndex) => (
                        <li key={testIndex} className="flex items-center text-sm" style={{ color: '#663366' }}>
                          <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: '#f0d97c' }} />
                          <span className="font-medium">{test}</span>
                        </li>
                      ))}
                      {service.tests.length > 4 && (
                        <li className="text-sm font-semibold ml-7" style={{ color: '#8b4a8b' }}>
                          +{service.tests.length - 4} more specialized tests
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white rounded-3xl shadow-xl mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4a1d4a' }}>
              Why Choose Mega Diagnostics?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Rapid Results', description: 'Fast turnaround times with accurate reporting' },
                { icon: TrendingUp, title: 'Advanced Technology', description: 'State-of-the-art equipment and automated systems' },
                { icon: Users, title: 'Expert Team', description: 'Experienced pathologists and radiologists' }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}>
                      <IconComponent className="h-8 w-8" style={{ color: '#4a1d4a' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#4a1d4a' }}>{feature.title}</h3>
                    <p className="text-sm" style={{ color: '#663366' }}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 rounded-3xl text-white text-center mb-16" style={{ background: 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' }}>
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4">Ready for Accurate Diagnostics?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your test today and experience the difference of advanced medical diagnostics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)', color: '#4a1d4a' }}>
                <Phone className="h-5 w-5 mr-2" />
                Call +91 93514 11126
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold border-2 border-white text-white hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center" >
                <Home className="h-5 w-5 mr-2" />
                Home Collection
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MedicalServices