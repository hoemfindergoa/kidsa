"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Heart,
  Phone,
  MessageCircle,
  Mail,
  Home,
  ArrowRight,
  School,
  Clock,
  ShieldCheck,
  CalendarCheck,
  Award,
  ChevronRight,
  MapPin,
  Smile,
  BookOpen,
  Gamepad2
} from "lucide-react";
import { Titan_One, Nunito, Caveat } from "next/font/google";
import foldedboy from "../public/foldedhandsboy.png";

// --- FONTS ---
const titleFont = Titan_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const handwritingFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// --- FLOATING CLOUD COMPONENT ---
const FloatingCloud = ({
  className = "",
  size = 80,
  duration = 7,
  delay = 0,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
}) => {
  return (
    <motion.div
      animate={{ x: [0, 25, 0], y: [0, -10, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute pointer-events-none select-none opacity-40 ${className}`}
    >
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C22 7 30 2 40 2C52 2 62 10 65 21C68 20 72 20 75 20C88 20 98 30 98 42C98 54 88 50 75 50H20Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
};

export default function ThankYouPage() {
  const steps = [
    {
      step: "01",
      title: "Inquiry Review",
      timing: "Within 2-4 Hours",
      description:
        "Our academic counselor reviews your query, age eligibility, and program preferences (Playgroup, Nursery, LKG, UKG, or Daycare).",
      icon: CalendarCheck,
      color: "bg-sky-100 text-sky-600 border-sky-200",
      pill: "bg-sky-50 text-sky-700",
      accent: "border-sky-400",
    },
    {
      step: "02",
      title: "Personalized Consultation",
      timing: "Within 24 Hours",
      description:
        "We connect with you via phone call or WhatsApp to answer questions, explain our Montessori play curriculum, and share details.",
      icon: Phone,
      color: "bg-rose-100 text-rose-600 border-rose-200",
      pill: "bg-rose-50 text-rose-700",
      accent: "border-rose-400",
    },
    {
      step: "03",
      title: "Campus Experience & Tour",
      timing: "At Your Convenience",
      description:
        "Schedule a joyful campus visit! Bring your little one to explore our child-safe play arenas, sensory corners, and learning labs.",
      icon: School,
      color: "bg-amber-100 text-amber-600 border-amber-200",
      pill: "bg-amber-50 text-amber-700",
      accent: "border-amber-400",
    },
  ];

  const quickLinks = [
    {
      title: "Explore Programs",
      subtitle: "Playgroup to UKG & Daycare",
      href: "/#programs",
      icon: BookOpen,
      color: "bg-rose-50 text-rose-600 border-rose-100 hover:border-rose-300",
    },
    {
      title: "Our Centers",
      subtitle: "Find your nearest campus",
      href: "/Ourcenters",
      icon: MapPin,
      color: "bg-sky-50 text-sky-600 border-sky-100 hover:border-sky-300",
    },
    {
      title: "Franchise Partnership",
      subtitle: "Zero Royalty Model",
      href: "/franchise",
      icon: Award,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-300",
    },
    {
      title: "Kids Game Zone",
      subtitle: "Playful learning games",
      href: "/gamezone",
      icon: Gamepad2,
      color: "bg-amber-50 text-amber-600 border-amber-100 hover:border-amber-300",
    },
  ];

  const trustBadges = [
    { text: "CCTV Monitored Campus", icon: ShieldCheck },
    { text: "Montessori & Play-Based", icon: Sparkles },
    { text: "Certified & Caring Staff", icon: Heart },
    { text: "Hygienic & Safe Spaces", icon: Smile },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-rose-50/70 via-amber-50/30 to-white text-slate-800 relative overflow-hidden ${bodyFont.className}`}
    >
      {/* --- BACKGROUND DECORATIVE ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft colorful blur orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

        {/* Floating clouds */}
        <FloatingCloud
          className="top-24 left-[8%] text-white"
          size={120}
          duration={8}
        />
        <FloatingCloud
          className="top-40 right-[12%] text-white"
          size={140}
          duration={9}
          delay={1}
        />
        <FloatingCloud
          className="top-[45%] left-[4%] text-white"
          size={110}
          duration={7.5}
          delay={2}
        />
        <FloatingCloud
          className="bottom-40 right-[6%] text-white"
          size={130}
          duration={8.5}
          delay={0.5}
        />
      </div>

      {/* --- MAIN WRAPPER (Spaced nicely under the fixed Navbar) --- */}
      <main className="relative z-10 pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* BREADCRUMB */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-rose-200/70 px-4 py-2 rounded-full shadow-sm text-sm"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-rose-500 font-bold transition-colors"
            >
              <Home className="w-4 h-4 text-rose-500" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-rose-600 font-extrabold">Thank You</span>
          </motion.div>
        </div>

        {/* --- HERO CONFIRMATION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-full shadow-md shadow-emerald-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
              Inquiry Received Successfully
            </span>
            <CheckCircle2 className="w-4 h-4 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 text-slate-900 ${titleFont.className}`}
          >
            Thank <span className="text-rose-500">You!</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-2xl sm:text-3xl text-rose-500 font-bold mb-4 ${handwritingFont.className}`}
          >
            Where Little Dreams Begin to Shine! ✨
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed"
          >
            Thank you for reaching out to{" "}
            <span className="text-slate-900 font-extrabold">
              Little Dreamers at Cambridge
            </span>
            . We have received your details safely, and our dedicated admissions
            team is thrilled to connect with your family!
          </motion.p>
        </div>

        {/* --- HERO CARD WITH CHARACTER & CONFIRMATION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl shadow-rose-200/40 border-2 border-rose-100 mb-16 relative overflow-hidden"
        >
          {/* Subtle Top Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Character Illustration with Namaste / Folded Hands */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-6">
                
                {/* Decorative blob background behind character */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 via-rose-100 to-pink-50 rounded-full scale-95 blur-sm" />
                <div className="absolute -inset-2 rounded-full border-4 border-dashed border-rose-200 animate-spin-slow opacity-60" />

                {/* Character Image */}
                <Image
                  src={foldedboy}
                  alt="Little Dreamer with folded hands saying Namaste and Thank You"
                  fill
                  className="object-contain relative z-10 drop-shadow-md"
                  priority
                />

                {/* Floating Hearts & Sparkles */}
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 right-4 z-20 bg-rose-500 text-white p-2.5 rounded-full shadow-lg shadow-rose-300"
                >
                  <Heart className="w-5 h-5 fill-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-4 -left-2 z-20 bg-amber-400 text-amber-950 p-2.5 rounded-full shadow-lg shadow-amber-300"
                >
                  <Sparkles className="w-5 h-5 fill-amber-950" />
                </motion.div>
              </div>

              {/* Speech bubble */}
              <div className="relative bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl px-5 py-3 shadow-sm max-w-sm">
                <p className={`text-lg sm:text-xl text-rose-600 font-bold ${handwritingFont.className}`}>
                  &ldquo;We can&apos;t wait to welcome your child with open arms!&rdquo; 💖
                </p>
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-50 border-t-2 border-l-2 border-rose-200 transform rotate-45" />
              </div>
            </div>

            {/* RIGHT COLUMN: Confirmation Details & What Happens Next */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold w-fit mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Inquiry Queued for Admissions Desk
              </div>

              <h2 className={`text-3xl sm:text-4xl text-slate-900 font-black mb-4 leading-tight ${titleFont.className}`}>
                We&apos;ve got your message!
              </h2>

              <p className="text-slate-600 font-semibold text-base sm:text-lg leading-relaxed mb-6">
                Every child is unique, and early childhood education is one of
                the biggest gifts you give them. We treat every inquiry with
                personalized attention and care.
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-slate-700 font-bold text-sm sm:text-base">
                    <span className="text-slate-900 font-extrabold">Fast Response:</span>{" "}
                    Our admissions counselor will get in touch within 24 hours.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-slate-700 font-bold text-sm sm:text-base">
                    <span className="text-slate-900 font-extrabold">Tailored Guidance:</span>{" "}
                    Curriculum details, age-wise milestones, and transparent fee schedule.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p className="text-slate-700 font-bold text-sm sm:text-base">
                    <span className="text-slate-900 font-extrabold">Campus Experience:</span>{" "}
                    Complimentary slot to visit our play areas and meet our teachers.
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS (WhatsApp & Direct Call) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919999996266?text=Hi%20Little%20Dreamers%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all text-base text-center group"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+919999996266"
                  className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-4 rounded-2xl shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition-all text-base text-center"
                >
                  <Phone className="w-5 h-5 text-amber-300" />
                  <span>Call +91 999 999 6266</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* --- SECTION 2: 3-STEP ROADMAP (WHAT HAPPENS NEXT?) --- */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-500 font-black tracking-widest uppercase text-xs sm:text-sm bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full inline-block mb-3">
              Simple & Transparent
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black text-slate-900 mb-4 ${titleFont.className}`}>
              What Happens Next?
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mx-auto mb-4" />
            <p className="text-slate-600 font-semibold text-base sm:text-lg">
              Here is what you can expect as we guide you through joining the
              Little Dreamers family:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className={`bg-white rounded-3xl p-8 border-b-8 ${item.accent} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative`}
                >
                  <div>
                    {/* Top Step Pill & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center shadow-sm`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-xs font-black px-3 py-1.5 rounded-full ${item.pill} border border-current/20`}>
                        {item.timing}
                      </span>
                    </div>

                    <div className="text-slate-400 font-black text-xs uppercase tracking-wider mb-1">
                      Step {item.step}
                    </div>

                    <h3 className={`text-2xl font-black text-slate-900 mb-3 ${titleFont.className}`}>
                      {item.title}
                    </h3>

                    <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>No waiting, fast response</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- SECTION 3: URGENT ASSISTANCE & CONTACT DESK --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 rounded-[2.5rem] p-8 sm:p-12 text-white mb-20 shadow-2xl relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-amber-300 border border-white/15 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Urgent Assistance & Instant Answers
              </span>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight ${titleFont.className}`}>
                Have an urgent question? <br />
                <span className="text-[#fad06e]">We&apos;re here right now.</span>
              </h2>

              <p className="text-purple-100 text-base sm:text-lg font-semibold max-w-xl leading-relaxed mb-6">
                Whether you need immediate fee details, branch vacancy, or
                same-day admissions counseling, our support team is ready to
                help you immediately.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-purple-200 font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Admissions Desk: Active</span>
                </div>
                <div>Mon – Sat, 9:00 AM – 6:00 PM</div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919999996266?text=Hi%20Little%20Dreamers%2C%20I%20have%20an%20urgent%20inquiry%20regarding%20preschool%20admissions!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl p-5 flex items-center justify-between shadow-lg hover:shadow-emerald-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-white">
                      Instant WhatsApp Chat
                    </h4>
                    <p className="text-emerald-100 text-xs font-semibold">
                      Replies within 5-10 minutes
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Phone Card */}
              <a
                href="tel:+919999996266"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl p-5 flex items-center justify-between backdrop-blur-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#fad06e] text-slate-900 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-white">
                      Direct Helpline
                    </h4>
                    <p className="text-purple-200 text-xs font-semibold">
                      +91 999 999 6266
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@littledreamersatcambridge.com"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl p-5 flex items-center justify-between backdrop-blur-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-400 text-slate-900 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-lg text-white truncate">
                      Email Us
                    </h4>
                    <p className="text-purple-200 text-xs font-semibold truncate">
                      info@littledreamersatcambridge.com
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

            </div>

          </div>
        </motion.section>

        {/* --- SECTION 4: TRUST BADGES & REASSURANCE --- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {trustBadges.map((badge, idx) => {
            const BadgeIcon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-3">
                  <BadgeIcon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* --- SECTION 5: EXPLORE MORE & QUICK LINKS --- */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className={`text-3xl font-black text-slate-900 mb-2 ${titleFont.className}`}>
              While You Wait, Explore More
            </h3>
            <p className="text-slate-600 font-semibold text-sm sm:text-base">
              Discover what makes learning magical at Little Dreamers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map((item, idx) => {
              const LinkIcon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white flex flex-col justify-between group ${item.color}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center mb-4">
                      <LinkIcon className="w-6 h-6" />
                    </div>
                    <h4 className={`text-xl font-black text-slate-900 mb-1 group-hover:text-rose-500 transition-colors ${titleFont.className}`}>
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-rose-600">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* --- BOTTOM HOME CTA --- */}
        <div className="text-center pt-8 border-t border-rose-200/60">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-4 shadow-xl shadow-rose-300/50 font-extrabold text-base transition-all ${bodyFont.className}`}
            >
              <Home className="w-5 h-5" />
              <span>Back to Homepage</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </motion.button>
          </Link>
          <p className="text-xs text-slate-500 font-semibold mt-4">
            Little Dreamers at Cambridge • Best Preschool, Play School & Daycare
          </p>
        </div>

      </main>

      {/* --- INLINE STYLE FOR SPECIAL KEYFRAMES --- */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
}