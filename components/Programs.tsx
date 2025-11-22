import React from "react";
import { 
  Clock, 
  Users, 
  BookOpen, 
  Palette, 
  Music, 
  Baby, 
  ArrowRight 
} from "lucide-react";

// --- Simple UI Components (Inlined for portability) ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | string;
  size?: 'default' | 'sm' | 'lg' | string;
};

const Button: React.FC<ButtonProps> = ({ children, className, variant = "default", size = "default", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

type DivProps = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<DivProps> = ({ className = "", children, ...props }) => (
  <div className={`rounded-3xl border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<DivProps> = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const Programs = () => {
  const butterflyUrl = "https://cdn-icons-png.flaticon.com/512/3066/3066531.png";

  const programs = [
    {
      icon: Baby,
      title: "Toddler Program",
      age: "18-36 months",
      time: "8:00 AM - 12:00 PM",
      students: "8-10 children",
      // Added Image
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80", 
      color: "bg-[#FF8A80]/10",
      iconColor: "text-[#FF8A80]",
      iconBg: "bg-[#FF8A80]",
      borderColor: "border-[#FF8A80]/20",
      description: "Gentle introduction to social play and sensory exploration in a safe, loving environment.",
      features: ["Sensory Activities", "Music & Movement", "Story Time", "Creative Play"],
    },
    {
      icon: Palette,
      title: "Preschool Program",
      age: "3-4 years",
      time: "8:00 AM - 3:00 PM",
      students: "12-15 children",
      // Added Image
      image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80",
      color: "bg-[#A7D8FF]/10",
      iconColor: "text-[#A7D8FF]",
      iconBg: "bg-[#A7D8FF]",
      borderColor: "border-[#A7D8FF]/20",
      description: "Building confidence through structured play, creativity, and early learning concepts.",
      features: ["Arts & Crafts", "Early Math", "Language Skills", "Outdoor Play"],
    },
    {
      icon: BookOpen,
      title: "Pre-K Program",
      age: "4-5 years",
      time: "8:00 AM - 3:00 PM",
      students: "15-18 children",
      // Added Image
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      color: "bg-[#B8F3D1]/20",
      iconColor: "text-emerald-400",
      iconBg: "bg-[#B8F3D1]",
      borderColor: "border-[#B8F3D1]/30",
      description: "Preparing for kindergarten with advanced learning activities and school readiness skills.",
      features: ["Reading Prep", "Science & Nature", "Problem Solving", "Social Skills"],
    },
  ];

  return (
    <section
      id="programs"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F0] to-white"
    >
      <div
        className="absolute bottom-32 right-20 w-20 h-20 animate-bounce-slow opacity-80 z-10"
        style={{ animationDelay: "0.8s" }}
      >
        <img
          src={butterflyUrl}
          alt="Butterfly"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#A7D8FF]/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#FFE99B]/20 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-[#A7D8FF]/10 rounded-full border border-[#A7D8FF]/20">
            <span className="text-sm font-bold text-[#A7D8FF] tracking-wide uppercase">
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-fedorikanew text-gray-800 leading-tight">
            Age-Appropriate
            <span className="relative inline-block mx-2 text-[#FF8A80]">
              Learning
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
            <span className="text-[#A7D8FF]">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Carefully designed programs that cater to each developmental stage,
            ensuring optimal growth and learning.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`group border-2 ${program.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col`}
            >
              {/* --- NEW: Image Section Added Here --- */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${program.color} opacity-20 mix-blend-multiply`} />
              </div>

              {/* Colored Header */}
              <div className={`${program.color} p-6 space-y-4`}>
                <div
                  className={`w-16 h-16 ${program.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 bg-white/80 rounded-full`}>
                    <span className={`text-sm font-bold ${program.iconColor}`}>
                      {program.age}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Details */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 ${program.color} rounded-lg flex items-center justify-center`}>
                      <Clock className={`w-4 h-4 ${program.iconColor}`} />
                    </div>
                    <span className="text-gray-600 font-medium">{program.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 ${program.color} rounded-lg flex items-center justify-center`}>
                      <Users className={`w-4 h-4 ${program.iconColor}`} />
                    </div>
                    <span className="text-gray-600 font-medium">
                      {program.students}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="font-bold text-gray-800 text-sm">
                    Key Features:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 ${program.color} rounded-full font-semibold ${program.iconColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                    <Button
                    variant="outline"
                    className={`w-full rounded-full border-2 ${program.borderColor} hover:${program.color} ${program.iconColor} hover:border-transparent font-semibold transition-all duration-300 hover:shadow-lg group/btn h-12`}
                    >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#FF8A80] to-[#FFE99B] hover:from-[#ff6b5e] hover:to-[#ffd770] text-white shadow-xl shadow-[#FF8A80]/30 rounded-full px-10 py-7 text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8A80]/40 hover:-translate-y-1 hover:scale-105"
            >
              <Music className="w-6 h-6 mr-2 " />
              Schedule a Visit Today!
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500 mt-4 font-medium">
              See our programs in action and meet our teachers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;