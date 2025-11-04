'use client';
import React, { useState, useEffect, ReactNode, ButtonHTMLAttributes } from 'react';
import { 
  Microscope, 
  FlaskConical, 
  Dna, 
  Heart, 
  Shield, 
  Home,
  CheckCircle,
  Clock,
  Award,
  Activity,
  Scan,
  Brain,
  Stethoscope,
  Users,
  Star
} from 'lucide-react';

// TypeScript interfaces
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'outline' | 'golden';
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
  category: string;
}

interface QualityFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Doctor {
  name: string;
  qualifications: string;
  specialty: string;
}

// Component definitions
const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  size = 'default', 
  variant = 'default', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transform hover:scale-105 shadow-lg hover:shadow-xl';
  const sizeClasses = {
    default: 'h-12 py-3 px-6',
    lg: 'h-14 px-8 text-lg'
  };
  const variantClasses = {
    default: 'bg-gradient-to-r from-purple-700 to-purple-900 text-white hover:from-purple-800 hover:to-purple-950',
    outline: 'border-2 border-purple-700 bg-transparent text-purple-700 hover:bg-purple-700 hover:text-white',
    golden: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 hover:from-yellow-500 hover:to-yellow-600 font-bold'
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
  <div className={`rounded-2xl border border-purple-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${className}`} {...props}>
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
  <h3 className={`text-xl font-bold leading-none tracking-tight text-purple-900 ${className}`} {...props}>
    {children}
  </h3>
);

const MegaDiagnostics: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasLoaded(true);
    
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

    return () => observer.disconnect();
  }, []);

  const radiologyServices: Service[] = [
    {
      icon: Scan,
      title: 'Digital X-Ray',
      description: 'Fast, high-resolution digital scans with instant results',
      tests: ['Chest X-Ray', 'Bone X-Ray', 'Joint X-Ray', 'Spine X-Ray'],
      category: 'imaging'
    },
    {
      icon: Heart,
      title: 'CT Scan',
      description: 'Multi-slice CT-Scan for all body parts with specialized protocols',
      tests: ['CT Angiographies', 'Triple-phase CT (Liver)', 'CT-Adrenal protocol', 'Enteroclysis'],
      category: 'imaging'
    },
    {
      icon: Brain,
      title: 'MRI',
      description: '3D Digital Silent MRI for brain, spine, joint, and abdominal scans',
      tests: ['Brain MRI', 'Spine MRI', 'Joint MRI', 'Abdominal MRI'],
      category: 'imaging'
    },
    {
      icon: Heart,
      title: 'Ultrasound & Doppler',
      description: '2D, 3D, 4D scans for all organs with advanced Doppler studies',
      tests: ['Abdominal USG', 'Pelvic USG', 'Doppler Studies', 'Echocardiography'],
      category: 'imaging'
    },
    {
      icon: Activity,
      title: 'Antenatal Services',
      description: 'Comprehensive fetal scans including 3D, 4D, and anomaly scans',
      tests: ['3D/4D Scans', 'Anomaly Scan', 'Fetal Echo', 'NBNT'],
      category: 'imaging'
    },
    {
      icon: Heart,
      title: 'Mammography',
      description: 'Advanced breast imaging and cancer screening',
      tests: ['Digital Mammography', 'Breast Cancer Screening', 'Tomosynthesis'],
      category: 'imaging'
    }
  ];

  const pathologyServices: Service[] = [
    {
      icon: FlaskConical,
      title: 'Clinical Biochemistry',
      description: 'Comprehensive blood chemistry analysis with 5-part hematology',
      tests: ['Liver Profile', 'Kidney Profile', 'Lipid Profile', 'Thyroid Profile'],
      category: 'pathology'
    },
    {
      icon: Shield,
      title: 'Immunology & Serology',
      description: 'Advanced testing for infections and immune system disorders',
      tests: ['Dengue Testing', 'HIV Testing', 'Hepatitis Panel', 'COVID Testing'],
      category: 'pathology'
    },
    {
      icon: Microscope,
      title: 'Histopathology',
      description: 'In-house tissue evaluation with tumor markers',
      tests: ['Biopsy Examination', 'Cancer Screening', 'Tumor Markers', 'Special Stains'],
      category: 'pathology'
    },
    {
      icon: Dna,
      title: 'Cytology',
      description: 'Cell-based diagnostic testing including FNACs and Pap smears',
      tests: ['FNAC', 'Pap Smear', 'Body Fluids', 'Cervical Screening'],
      category: 'pathology'
    },
    {
      icon: Activity,
      title: 'Microbiology',
      description: 'Cultures, sensitivity testing, and infection diagnosis',
      tests: ['Culture & Sensitivity', 'Blood Culture', 'Urine Culture', 'TB Testing'],
      category: 'pathology'
    },
    {
      icon: FlaskConical,
      title: 'Clinical Pathology',
      description: 'Routine analysis of urine, stool, and body fluids',
      tests: ['Urine Analysis', 'Stool Examination', 'Body Fluid Analysis', 'Semen Analysis'],
      category: 'pathology'
    }
  ];

  const interventionalServices: Service[] = [
    {
      icon: Stethoscope,
      title: 'Minimally Invasive Procedures',
      description: 'Advanced treatments under real-time image guidance',
      tests: ['Angioplasty', 'Stent Placement', 'Embolization', 'Biopsy Procedures'],
      category: 'interventional'
    }
  ];

  const qualityFeatures: QualityFeature[] = [
    {
      icon: Award,
      title: 'Advanced Technology',
      description: 'Cutting-edge equipment and state of the art facilities for accurate diagnosis.'
    },
    {
      icon: CheckCircle,
      title: 'Appropriate Results',
      description: 'Precise and reliable diagnostic results with expert interpretation.'
    },
    {
      icon: Clock,
      title: '24 x 7 Availability',
      description: 'Round-the-clock services for emergency and routine diagnostic needs.'
    },
    {
      icon: Star,
      title: 'World Class Services',
      description: 'International standards of healthcare delivery and patient care.'
    },
    {
      icon: Users,
      title: 'Care for Everyone',
      description: 'Comprehensive healthcare solutions for patients of all ages and conditions.'
    },
    {
      icon: Home,
      title: 'Digital Reports',
      description: 'Digital reports accessible from anywhere, anytime for your convenience.'
    }
  ];

  const doctors: Doctor[] = [
    {
      name: 'Dr. Bharat Gupta',
      qualifications: 'MD, DNB, PDCC (SGPGI, Lucknow)',
      specialty: 'Consultant Intervention Radiologist'
    },
    {
      name: 'Dr. Bharat Jain',
      qualifications: 'MD Radiodiagnosis, Fellowship in Fetal Medicine',
      specialty: 'Consultant Radiologist'
    },
    {
      name: 'Dr. Pranveer Singh Rao',
      qualifications: 'MD Pathology',
      specialty: 'Consultant Pathologist'
    },
    {
      name: 'Dr. Hitesh Sharma',
      qualifications: 'MD',
      specialty: 'Consultant Radiologist'
    }
  ];

  const healthPackages = [
    'Routine health checkups',
    'Specialized profiles for diabetes, thyroid, fertility, cancer',
    'Pre-surgical panels',
    'Pediatric, geriatric and women\'s wellness testing'
  ];

  return (
    <div className="">
      {/* Hero Section */}
 

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="about-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['about-content'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-4xl font-bold mb-6 text-purple-900">
                Rajasthan's First <span className="text-yellow-500">Advanced Diagnostic Center</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Mega Interventions & Diagnostics, we combine cutting-edge medical technology with compassionate care to offer comprehensive diagnostic and interventional services under one roof.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With a team of highly qualified radiologists, pathologists, and technologists from top institutes of India, we deliver accurate results with a focus on early detection, precision, and patient safety.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-700">First</div>
                  <div className="text-sm text-purple-600">IR Services in South Rajasthan</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600">24/7</div>
                  <div className="text-sm text-yellow-700">Emergency Services</div>
                </div>
              </div>
            </div>
            <div 
              id="about-image"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible['about-image'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative h-96 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Microscope className="h-24 w-24 mx-auto mb-4" />
                    <p className="text-xl font-bold">State of the Art Facilities</p>
                    <p className="text-purple-200">Advanced Technology & Expert Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



   



      {/* Quality Features */}
      {/* <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="quality-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['quality-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-900">Why Patients Trust Us</h2>
            <p className="text-xl text-gray-700">
              Committed to providing exceptional patient care with world-class standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card 
                key={index}
                id={`quality-${index}`}
                data-animate
                className={`text-center p-6 hover:shadow-2xl transition-all duration-500 bg-white ${
                  isVisible[`quality-${index}`] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-purple-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Doctors Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">Our Expert Team</h2>
            <p className="text-xl text-gray-700">Group of Doctors from Top Institutes of India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-purple-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{doctor.qualifications}</p>
                  <p className="text-sm text-purple-700 font-medium">{doctor.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

    

      {/* Contact CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Need Medical Assistance?</h2>
              <p className="text-xl mb-8 text-purple-200">
                Book your test today and experience the MEGA difference with Rajasthan's most trusted diagnostic center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="golden" className="font-bold px-8">
                  Book Test Online
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                  Emergency Services
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 text-purple-900 p-2 rounded-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">+91 93514 11126</p>
                    <p className="text-purple-200">+91 90243 11126</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 text-purple-900 p-2 rounded-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="font-semibold">megadiagnosticsudaipur@gmail.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-400 text-purple-900 p-2 rounded-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Plot No.29-C, Madhuban</p>
                    <p className="text-purple-200">Behind Lok Kala Mandal</p>
                    <p className="text-purple-200">Udaipur - 313001, Rajasthan</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-center text-purple-200 text-sm">
                  <span className="text-yellow-400 font-semibold">Special Note:</span> MRI services in collaboration with Star Imaging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

   
    </div>
  );
};

export default MegaDiagnostics;