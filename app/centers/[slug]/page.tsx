"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  School,
  CheckCircle,
  CalendarCheck,
  Star,
  Users,
  Play,
  Sparkles
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

// --- FONTS ---
const titleFont = Titan_One({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

// --- TYPES ---
type CenterDetails = {
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  description: string;
  director: string;
  mapEmbed: string;
  facilities: string[];
  image: string; // Placeholder color class
  theme: string; // Tailwind gradient class
  status: "Open" | "Opening Soon";
};

// --- MOCK DATABASE (Matches the data from the Centers List Page) ---
const centersDB: Record<string, CenterDetails> = {
  // --- DELHI ---
  "patel-nagar": {
    name: "Little Dreamers At Cambridge Patel Nagar",
    city: "New Delhi",
    state: "Delhi",
    address: "Patel Nagar, New Delhi, Delhi 110008",
    phone: "+91 98765 43210",
    email: "patelnagar@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Anjali Sharma",
    description: "Our upcoming Patel Nagar campus is designed to be a haven of creativity and learning in the heart of West Delhi. Featuring spacious classrooms and a dedicated Montessori lab.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", 
    facilities: ["Montessori Lab", "Safe Play Area", "CCTV Surveillance", "Air Conditioned", "Transport"],
    image: "bg-teal-200",
    theme: "from-teal-400 via-emerald-400 to-green-400",
    status: "Opening Soon"
  },
  "tagore-garden": {
    name: "Little Dreamers At Cambridge Tagore Garden",
    city: "New Delhi",
    state: "Delhi",
    address: "Tagore Garden, New Delhi, Delhi 110027",
    phone: "+91 98765 43211",
    email: "tagoregarden@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Mr. Rajeev Verma",
    description: "Located in the vibrant Tagore Garden area, this center will offer a blend of modern education and traditional values. We are building a state-of-the-art library and activity room.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Library", "Activity Room", "Nutritious Meals", "Daycare", "Smart Classrooms"],
    image: "bg-rose-200",
    theme: "from-rose-400 via-pink-400 to-fuchsia-400",
    status: "Opening Soon"
  },

  // --- HARYANA ---
  "karnal": {
    name: "Little Dreamers At Cambridge Karnal",
    city: "Karnal",
    state: "Haryana",
    address: "Model Town, Karnal, Haryana 132001",
    phone: "+91 98765 43212",
    email: "karnal@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Sunita Gupta",
    description: "Bringing world-class early education to Karnal. Our campus features expansive green lawns for outdoor learning and a dedicated sports area for physical development.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Green Lawns", "Sports Area", "Music & Dance", "Transport", "First Aid"],
    image: "bg-sky-200",
    theme: "from-sky-400 via-blue-400 to-indigo-400",
    status: "Opening Soon"
  },
  "ambala": {
    name: "Little Dreamers At Cambridge Ambala",
    city: "Ambala",
    state: "Haryana",
    address: "Ambala City, Haryana 134003",
    phone: "+91 98765 43213",
    email: "ambala@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Preeti Singh",
    description: "Our Ambala center is focused on holistic development. With specialized zones for arts, sciences, and sensory play, every child finds their passion here.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Art Zone", "Science Corner", "Sensory Path", "CCTV", "Qualified Staff"],
    image: "bg-amber-200",
    theme: "from-amber-400 via-orange-400 to-red-400",
    status: "Opening Soon"
  },

  // --- JAMMU ---
  "kathua": {
    name: "Little Dreamers At Cambridge Kathua",
    city: "Kathua",
    state: "Jammu",
    address: "Kathua, Jammu and Kashmir 184101",
    phone: "+91 98765 43214",
    email: "kathua@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Mr. Vikram Dogra",
    description: "Nestled in the beautiful city of Kathua, this center promises a nurturing environment. We emphasize nature walks and environmental awareness as part of our curriculum.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Nature Garden", "Eco Club", "Playground", "Digital Learning", "Daycare"],
    image: "bg-violet-200",
    theme: "from-violet-400 via-purple-400 to-fuchsia-400",
    status: "Opening Soon"
  },
  "samba": {
    name: "Little Dreamers At Cambridge Samba",
    city: "Samba",
    state: "Jammu",
    address: "Samba, Jammu and Kashmir 184121",
    phone: "+91 98765 43215",
    email: "samba@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Neha Sharma",
    description: "A safe and colorful space for little ones in Samba. Our focus is on interactive learning through play, storytelling, and cultural activities.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Storytelling Corner", "Puppet Theatre", "Cultural Hall", "Secure Entry", "Transport"],
    image: "bg-emerald-200",
    theme: "from-emerald-400 via-teal-400 to-cyan-400",
    status: "Opening Soon"
  },

  // --- KARNATAKA ---
  "mysore": {
    name: "Little Dreamers At Cambridge Mysore",
    city: "Mysore",
    state: "Karnataka",
    address: "Jayalakshmipuram, Mysore, Karnataka 570012",
    phone: "+91 98765 43216",
    email: "mysore@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Lakshmi Rao",
    description: "In the heritage city of Mysore, we are creating a center that blends tradition with modern pedagogy. Features include a large sand pit and water play area.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Sand Pit", "Water Play", "Heritage Corner", "Library", "Yoga"],
    image: "bg-yellow-200",
    theme: "from-yellow-400 via-amber-400 to-orange-400",
    status: "Opening Soon"
  },
  "bangalore": {
    name: "Little Dreamers At Cambridge Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    address: "Indiranagar, Bangalore, Karnataka 560038",
    phone: "+91 98765 43217",
    email: "bangalore@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Mr. Rahul Nair",
    description: "Located in the tech hub, our Bangalore campus is modern and spacious. We focus on STEAM (Science, Technology, Engineering, Arts, Math) activities from an early age.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["STEAM Lab", "Robot Play", "Indoor Gym", "Cafeteria", "Daycare"],
    image: "bg-cyan-200",
    theme: "from-cyan-400 via-sky-400 to-blue-400",
    status: "Opening Soon"
  },

  // --- KERALA ---
  "cochin": {
    name: "Little Dreamers At Cambridge Cochin",
    city: "Cochin",
    state: "Kerala",
    address: "Edappally, Cochin, Kerala 682024",
    phone: "+91 98765 43218",
    email: "cochin@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Deepa Thomas",
    description: "Surrounded by greenery, our Cochin center offers a calm and refreshing environment. We have a special focus on arts, crafts, and music.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Art Studio", "Music Room", "Garden", "Rain Play Area", "Secure Campus"],
    image: "bg-lime-200",
    theme: "from-lime-400 via-green-400 to-emerald-400",
    status: "Opening Soon"
  },

  // --- MAHARASHTRA ---
  "pune": {
    name: "Little Dreamers At Cambridge Pune",
    city: "Pune",
    state: "Maharashtra",
    address: "Koregaon Park, Pune, Maharashtra 411001",
    phone: "+91 98765 43219",
    email: "pune@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Priya Desai",
    description: "Our Pune campus is a vibrant community of learners. We offer extensive outdoor spaces and a curriculum that encourages curiosity and independence.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Outdoor Classroom", "Cycling Track", "Library", "Auditorium", "Transport"],
    image: "bg-fuchsia-200",
    theme: "from-fuchsia-400 via-purple-400 to-violet-400",
    status: "Opening Soon"
  },
  "kharghar": {
    name: "Little Dreamers At Cambridge Kharghar",
    city: "Navi Mumbai",
    state: "Maharashtra",
    address: "Sector 10, Kharghar, Navi Mumbai 410210",
    phone: "+91 98765 43220",
    email: "kharghar@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Mr. Amit Patil",
    description: "Ideally located in Kharghar, this center features modern infrastructure and a safe environment. We provide specialized coaching for sports and arts.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Sports Complex", "Dance Studio", "Smart Class", "CCTV", "Medical Room"],
    image: "bg-indigo-200",
    theme: "from-indigo-400 via-violet-400 to-purple-400",
    status: "Opening Soon"
  },

  // --- TAMIL NADU ---
  "chennai": {
    name: "Little Dreamers At Cambridge Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "Adyar, Chennai, Tamil Nadu 600020",
    phone: "+91 98765 43221",
    email: "chennai@littledreamersatcambridge.com",
    hours: "Opening Soon",
    director: "Ms. Meena Iyer",
    description: "Our Chennai center blends academic excellence with cultural values. We have a dedicated language lab and a traditional arts corner.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.40516037617656!3d28.502925975735742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    facilities: ["Language Lab", "Arts Corner", "Play Area", "AC Rooms", "Transport"],
    image: "bg-orange-200",
    theme: "from-orange-400 via-amber-400 to-yellow-400",
    status: "Opening Soon"
  }
};

// --- REUSABLE WAVE COMPONENT ---
const WaveSeparator = ({ position, color }: { position: "top" | "bottom", color: string }) => {
  return (
    <div className={`absolute left-0 w-full h-[60px] md:h-[100px] overflow-hidden z-20 ${position === "top" ? "top-0" : "bottom-0"}`}>
       <svg className={`relative block w-full h-full ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           {position === "top" ? (
               <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
           ) : (
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
           )}
       </svg>
    </div>
  );
};


// --- MAIN COMPONENT ---
export default function CenterProfile({ params }: { params: { slug: string } }) {
  
  // 1. Fetch Data
  const center = centersDB[params.slug];

  // 2. Handle 404
  if (!center) {
    return notFound();
  }

  return (
    <div className={`w-full flex flex-col bg-white ${bodyFont.className}`}>
      
      {/* =========================================
          HEADER SECTION (Dynamic Theme)
      ========================================= */}
      <header className={`relative w-full h-[60vh] min-h-[550px] bg-gradient-to-r ${center.theme} flex items-center justify-center overflow-hidden`}>
        
        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10">
              <School className="w-24 h-24 text-white" />
           </motion.div>
           <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10">
              <Star className="w-20 h-20 text-yellow-100 fill-yellow-100" />
           </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 mt-8 max-w-4xl">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <Link href="/Ourcenters" className="hover:text-white transition-colors">Centers</Link>
              <ChevronRight className="w-3 h-3 opacity-75" />
              <span className="text-white truncate max-w-[150px] md:max-w-none">{center.city}</span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-black text-white drop-shadow-md mb-4 leading-tight ${titleFont.className}`}>
            {center.name}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-white font-bold text-lg mt-4">
             <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full"><MapPin className="w-5 h-5" /> {center.state}</span>
             {center.status === "Opening Soon" && (
                <span className="flex items-center gap-2 bg-amber-400 text-amber-900 px-3 py-1 rounded-full animate-pulse"><Sparkles className="w-5 h-5" /> Opening Soon</span>
             )}
          </div>
        </div>

        {/* WAVE: Transitions to Section 1 (Slate-50) */}
        <WaveSeparator position="bottom" color="text-slate-50" />
      </header>


      {/* =========================================
          SECTION 1: INFO GRID (Slate-50)
      ========================================= */}
      <section className="relative  w-full bg-slate-50 pt-4 pb-2 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           
           {/* Info Cards Grid */}
           <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
              
              {/* Address */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-rose-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Address</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.address}</p>
                 </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-amber-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Phone</h3>
                    <p className="text-slate-500 text-sm font-medium">{center.phone}</p>
                 </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] p-6 shadow-xl border-b-4 border-sky-400 flex flex-col items-center text-center gap-3"
              >
                 <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-slate-500 text-sm font-medium break-all">{center.email}</p>
                 </div>
              </motion.div>


           </div>

           {/* About Section */}
           <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                  <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-6 ${titleFont.className}`}>
                    Welcome to <span className="text-teal-500">{center.city}</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {center.description}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    At Little Dreamers At Cambridge {center.city}, we believe in creating a safe, nurturing, and stimulating environment where your child can grow, learn, and thrive. Our experienced staff and state-of-the-art facilities ensure the best early childhood education experience.
                  </p>
                  
                  {center.status === "Opening Soon" ? (
                      <button className="bg-amber-400 text-amber-900 cursor-default font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 opacity-80">
                         Opening Shortly <Sparkles className="w-5 h-5" />
                      </button>
                  ) : (
                      <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                         Book a Campus Tour <CalendarCheck className="w-5 h-5" />
                      </button>
                  )}
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                  <div className={`relative w-full max-w-md aspect-square rounded-[3rem] ${center.image} border-8 border-white shadow-2xl overflow-hidden`}>
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-700/50 font-black text-2xl gap-2">
                         <School className="w-16 h-16 opacity-30" />
                         <span>Image Placeholder</span>
                         <span className="text-sm opacity-60 font-normal">({center.name})</span>
                      </div>
                  </div>
              </div>
           </div>

        </div>
        {/* WAVE */}
        <WaveSeparator position="bottom" color="text-white" />
      </section>


      {/* =========================================
          SECTION 2: FACILITIES & MAP (White)
      ========================================= */}
      <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
           
           {/* Facilities Grid */}
           <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-black text-slate-900 mb-4 ${titleFont.className}`}>
                Center <span className="text-amber-500">Facilities</span>
              </h2>
           </div>

           <div className="flex flex-wrap justify-center gap-4 mb-20">
              {center.facilities.map((facility, index) => (
                 <motion.div 
                   key={index}
                   whileHover={{ scale: 1.05 }}
                   className="bg-amber-50 text-amber-800 px-6 py-3 rounded-full font-bold shadow-sm border border-amber-100 flex items-center gap-2"
                 >
                    <CheckCircle className="w-5 h-5 text-amber-500" />
                    {facility}
                 </motion.div>
              ))}
           </div>

           {/* Large Map */}
           <div className="w-full h-[450px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner relative">
                <iframe 
                   src={center.mapEmbed}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg border border-slate-200">
                    <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Locate Us</p>
                    <p className="text-slate-600 font-bold text-lg">{center.name}</p>
                </div>
           </div>

        </div>
      </section>


      {/* =========================================
          SECTION 3: CTA (Colored)
      ========================================= */}
      <section className={`relative w-full bg-gradient-to-r ${center.theme} py-20 overflow-hidden`}>
         <WaveSeparator position="top" color="text-white" />
         
         <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${titleFont.className}`}>
               {center.status === "Opening Soon" ? "Be the First to Join!" : "Ready to Join the Family?"}
            </h2>
            <p className="text-xl font-bold opacity-90 mb-8 max-w-2xl mx-auto">
               {center.status === "Opening Soon" 
                 ? `Pre-registrations are open for ${center.name}. Secure your child's spot in our founding batch!` 
                 : `Admissions are open for the upcoming academic year at ${center.name}. Secure your spot today!`
               }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href={"/admission"}>
               <button className="bg-white text-slate-800 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  {center.status === "Opening Soon" ? "Pre-Register Now" : "Apply Now"} <Play className="w-4 h-4 fill-slate-800" />
               </button>
               </Link>
               <button className="bg-transparent border-4 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                  Download Brochure
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}