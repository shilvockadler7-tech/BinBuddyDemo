import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-8 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#3c53f4] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#3c53f4] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-[#3c53f4]/10 text-[#3c53f4] border border-[#3c53f4]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                Serving All of Florida
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Reliable Tech-Driven{' '}
              <span className="text-[#3c53f4]">Hauling & Bin Services</span> in Florida
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Prompt, efficient hauling from scheduling to bin pickup. Professional service for homeowners, roofers, and contractors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-[#3c53f4] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2b42e3] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Order A Bin</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 border-gray-300 hover:border-[#3c53f4] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Become A Buddy</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Jobs Completed</div>
              </div>
              <div className="text-center border-x border-gray-300">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0 lg:translate-x-0 xl:translate-x-8 2xl:translate-x-16">
            <div className="hidden lg:block relative flex items-center justify-center lg:justify-start scale-110 sm:scale-125 lg:scale-[1.5] xl:scale-[1.7]">
              <img
                src="/image copy copy copy copy copy copy copy copy.png"
                alt="Professional Dump Trailer"
                className="w-full max-w-[600px] lg:w-[1000%] h-auto object-contain"
              />
            </div>
            <div className="lg:hidden -mx-4 sm:-mx-6">
              <img
                src="/image copy copy copy copy copy copy copy copy copy copy.png"
                alt="Professional Dump Trailer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gray-900 rounded-2xl shadow-xl items-center justify-center z-10">
              <div className="text-white text-center">
                <div className="text-2xl sm:text-3xl font-bold">Fast</div>
                <div className="text-xs sm:text-sm">Pickup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
