"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import giraffeImage from "../public/giraffe.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">K</span>
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">Kidsa</div>
                <div className="text-xs text-muted-foreground">Kindergarten</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating a foundation for lifelong learning through play, creativity, and exploration.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Our Programs</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">123 Learning Lane, Kidsville, KS 12345</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">info@kidsa.school</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for updates, tips, and special events!
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full"
              />
              <Button size="icon" className="rounded-full flex-shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Kidsa Kindergarten. All rights reserved. Made with ❤️ for happy learning.
          </p>
        </div>
      </div>
      
      {/* Big Giraffe on Right Side */}
      <div className="absolute bottom-0 right-0 lg:right-10 w-48 lg:w-64 xl:w-60 pointer-events-none animate-float">
        <Image
          src={giraffeImage}
          alt="Friendly giraffe"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;