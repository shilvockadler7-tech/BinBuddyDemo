import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <img
              src="/image copy copy copy copy copy copy copy copy copy copy copy.png"
              alt="BinBuddy Logo"
              className="h-40 sm:h-48 lg:h-64 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('service-areas')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              Service Areas
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('app')}
              className="text-gray-700 hover:text-[#3c53f4] transition-colors font-medium"
            >
              Download App
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#3c53f4] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#3c53f4] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2b42e3] transition-colors"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('service-areas')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              Service Areas
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('app')}
              className="block w-full text-left text-gray-700 hover:text-[#3c53f4] transition-colors font-medium py-2"
            >
              Download App
            </button>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#3c53f4] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">(123) 456-7890</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#3c53f4] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2b42e3] transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
