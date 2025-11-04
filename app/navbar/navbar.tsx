"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">K</span>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">Kidsa</div>
              <div className="text-xs text-muted-foreground">Kindergarten</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-blue-500 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-blue-500">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(123) 456-7890</span>
            </div>
            <Button size="sm" className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600">
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
                  className="text-foreground hover:text-blue-500 transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-blue-500 py-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(123) 456-7890</span>
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Cloud-like bottom border */}
    
    </nav>
  );
};

export default Navbar;