'use client';

import React, { useState, useEffect, ReactNode, ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import image from "@/public/images/uploads/medicalimage.png";
import Link from 'next/link';
import { 
  Microscope, 
  FlaskConical, 
  Dna, 
  Heart, 
  Shield, 
  Home,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

// TypeScript interfaces
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline';
}

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
}

interface QualityFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Component definitions
const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'default', 
  variant = 'default', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transform hover:scale-105';
  const sizeClasses = {
    default: 'h-10 py-2 px-4 text-sm',
    lg: 'h-12 px-6 sm:px-8 text-base sm:text-lg'
  };
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    outline: 'border border-current bg-transparent hover:bg-current hover:text-background'
  };
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => (
  <div className={`p-4 sm:p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-4 sm:p-6 pb-2 sm:pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    setHasLoaded(true);
    
    // Scroll animation handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services: Service[] = [
    {
      icon: FlaskConical,
      title: 'Clinical Biochemistry',
      description: 'Comprehensive blood chemistry analysis including glucose, lipids, liver function, kidney function, and cardiac markers.',
      tests: ['Blood Glucose', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Cardiac Markers', 'HbA1c', 'Electrolytes']
    },
    {
      icon: Shield,
      title: 'Immunology & Serology',
      description: 'Advanced testing for infectious diseases, autoimmune conditions, and hormone levels.',
      tests: ['HIV/HBsAg Testing', 'Thyroid Function', 'Autoimmune Markers', 'Allergy Testing', 'Tumor Markers', 'Hormone Analysis']
    },
    {
      icon: Microscope,
      title: 'Histopathology',
      description: 'Detailed tissue examination for cancer diagnosis and other pathological conditions.',
      tests: ['Biopsy Examination', 'Cancer Screening', 'FNAC', 'Frozen Section', 'Special Stains', 'IHC Studies']
    },
    {
      icon: Microscope,
      title: 'Cytology',
      description: 'Cell-based diagnostic testing including Pap smears and fine needle aspirations.',
      tests: ['Pap Smear', 'FNAC', 'Pleural Fluid', 'Ascitic Fluid', 'CSF Analysis', 'Cervical Screening']
    },
    {
      icon: FlaskConical,
      title: 'Microbiology',
      description: 'Identification of bacterial, viral, and fungal infections with antibiotic sensitivity.',
      tests: ['Culture & Sensitivity', 'TB Testing', 'Viral Load', 'Antigen Detection', 'PCR Testing', 'Blood Culture']
    },
    {
      icon: Shield,
      title: 'IFA (Immunofluorescence Assays)',
      description: 'Specialized testing using fluorescent markers for precise diagnosis.',
      tests: ['ANA Testing', 'Anti-dsDNA', 'ANCA', 'Direct IF', 'Indirect IF', 'Autoimmune Panel']
    },
    {
      icon: Heart,
      title: 'Hematology',
      description: 'Complete blood analysis including cell counts, blood disorders, and blood typing.',
      tests: ['CBC with ESR', 'Peripheral Smear', 'Blood Grouping', 'Reticulocyte Count', 'Bone Marrow', 'Flow Cytometry']
    },
    {
      icon: FlaskConical,
      title: 'Coagulation Studies',
      description: 'Blood clotting assessment for bleeding disorders and pre-surgical evaluation.',
      tests: ['PT/INR', 'APTT', 'Bleeding Time', 'Clotting Time', 'D-Dimer', 'Factor Analysis']
    },
    {
      icon: Dna,
      title: 'Molecular Biology',
      description: 'DNA/RNA based testing for genetic disorders and infectious diseases.',
      tests: ['PCR Testing', 'Genetic Analysis', 'Viral Load', 'Mutation Analysis', 'Pharmacogenomics', 'NGS Studies']
    }
  ];

  const qualityFeatures: QualityFeature[] = [
    {
      icon: Award,
      title: 'NABL & CAP Accredited',
      description: 'All specialized tests processed through nationally and internationally accredited laboratories.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast and reliable results with same-day reporting for urgent tests.'
    },
    {
      icon: Home,
      title: 'Home Collection',
      description: 'Convenient sample collection from your home with trained phlebotomists.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Stringent quality control measures ensuring accurate and reliable results.'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Book Your Test',
      description: 'Schedule online or call us for appointment'
    },
    {
      step: 2,
      title: 'Sample Collection',
      description: 'Visit our center or opt for home collection'
    },
    {
      step: 3,
      title: 'Processing & Analysis',
      description: 'Samples processed in accredited laboratories'
    },
    {
      step: 4,
      title: 'Get Results',
      description: 'Receive detailed reports with expert interpretation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-gray-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            height: '120%'
          }}
        >
          <Image
            src={image}
            alt="Pathology Lab"
            fill
            className="object-cover opacity-80"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 sm:bottom-32 right-16 sm:right-32 w-24 sm:w-48 h-24 sm:h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white transition-all duration-1000 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Mega Diagnostic Services
            </h1>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-white max-w-3xl mx-auto transition-all duration-1000 delay-300 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Full spectrum pathology services powered by top-tier lab networks, 
              ensuring accurate diagnosis and quality healthcare for Southern Rajasthan.
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 delay-500 ${hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link href="/diagnostic-services">
                <Button size="lg" className="bg-blue text-blue-600 hover:bg-blue-50 font-semibold  sm:w-auto transform hover:scale-105 transition-all duration-200">
                  Book Test Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['services-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Our Testing Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnostic testing with state-of-the-art equipment and 
              expert interpretation for accurate medical diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                id={`service-${index}`}
                data-animate
                className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[`service-${index}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4 transform transition-transform duration-300 hover:rotate-12">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <CardTitle className="text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">Common Tests:</h4>
                    <ul className="space-y-1">
                      {service.tests.slice(0, 3).map((test, testIndex) => (
                        <li key={testIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-blue-600 mr-2 flex-shrink-0" />
                          {test}
                        </li>
                      ))}
                      {service.tests.length > 3 && (
                        <li className="text-xs sm:text-sm text-blue-600 font-medium">
                          +{service.tests.length - 3} more tests available
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="quality-header"
            data-animate
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['quality-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">Quality You Can Trust</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              All advanced and specialized tests are processed through NABL/CAP-accredited laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card 
                key={index}
                id={`quality-${index}`}
                data-animate
                className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[`quality-${index}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent>
                  <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center transform transition-transform duration-300 hover:rotate-12">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div 
              id="process-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['process-content'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                Simple <span className="text-blue-600">Process</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-3 sm:space-x-4 transition-all duration-500 ${
                      isVisible['process-content'] 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="bg-blue-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{step.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div 
              id="process-image"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible['process-image'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt="Modern Laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 mb-3 sm:mb-4 mx-auto w-fit">
                      <Microscope className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-white" />
                    </div>
                    <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Modern Laboratory</p>
                    <p className="text-xs sm:text-sm opacity-90">State-of-the-art diagnostic equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Need a Diagnostic Test?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Book your test today and get accurate results from Rajasthan's most trusted diagnostic center.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-blue text-blue-600 hover:bg-blue-50 font-semibold w-full sm:w-auto">
              Book Test Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold w-full sm:w-auto">
              Request Home Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;