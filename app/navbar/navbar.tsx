"use client"; 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <StarFilledIcon className="w-6 h-6 fill-accent text-accent" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">Happy Kidsa</div>
              <div className="text-xs text-muted-foreground">Kindergarten</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(123) 456-7890</span>
            </div>
            <Button size="sm" className="hidden sm:inline-flex">
              Enroll Now
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-primary py-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(123) 456-7890</span>
              </div>
              <Button className="w-full">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Cloud-like bottom border - matching Hero component */}
      {/* <div className="relative h-8 overflow-hidden bg-transparent">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30 T900,30 T1000,30 T1100,30 T1200,30 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-orange-200 dark:text-orange-300"
          />
          <path
            d="M0,40 Q60,25 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 L1200,0 L0,0 Z"
            fill="currentColor"
            className="text-orange-200 dark:text-orange-300 opacity-60"
          />
        </svg>
      </div> */}
    </nav>
  );
};

export default Navbar;