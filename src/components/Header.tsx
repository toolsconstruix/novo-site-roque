
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@roquegservices.com</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/3fbb8511-922a-4d94-af51-e8c8ccbdf4ce.png" 
              alt="Roque G Services Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-white">
              Get Free Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-primary transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-white w-full">
                Get Free Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
