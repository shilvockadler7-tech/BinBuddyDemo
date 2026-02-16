import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8 sm:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12 mb-8 sm:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <img
              src="/image copy copy copy copy copy copy copy copy copy copy copy.png"
              alt="BinBuddy Logo"
              className="h-48 sm:h-64 lg:h-80 w-auto mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Florida's premier tech-driven hauling and bin service. Fast, reliable, and professional.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3c53f4] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3c53f4] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3c53f4] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3c53f4] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:contents">
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('service-areas')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Service Areas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Roofers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Contractors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Homeowners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Book Now
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-[#3c53f4] transition-colors text-left"
                  >
                    Become a Buddy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#3c53f4] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-[#3c53f4] transition-colors">
                    (123) 456-7890
                  </a>
                  <div className="text-xs sm:text-sm text-gray-500">24/7 Available</div>
                </div>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#3c53f4] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@binbuddy.com" className="hover:text-[#3c53f4] transition-colors">
                  info@binbuddy.com
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#3c53f4] mt-0.5 flex-shrink-0" />
                <span>Serving All of Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              {currentYear} BinBuddy. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-[#3c53f4] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#3c53f4] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#3c53f4] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
