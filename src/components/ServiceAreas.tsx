import { MapPin, Check } from 'lucide-react';

export default function ServiceAreas() {
  const majorCities = [
    'Jacksonville',
    'Miami',
    'Tampa',
    'Orlando',
    'St. Petersburg',
    'Hialeah',
    'Tallahassee',
    'Fort Lauderdale',
    'Port St. Lucie',
    'Cape Coral',
    'Pembroke Pines',
    'Hollywood',
  ];

  return (
    <section id="service-areas" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-[#3c53f4]/10 text-[#3c53f4] border border-[#3c53f4]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                Statewide Coverage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              We Cover <span className="text-[#3c53f4]">ALL of Florida</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              From the Panhandle to the Keys, Bin Buddy provides reliable hauling and bin services throughout the entire state of Florida.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {majorCities.map((city, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-[#3c53f4]/20 shadow-lg">
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                <span className="text-[#3c53f4] font-bold">Don't see your city?</span> We serve communities throughout Florida. Contact us to confirm service availability in your area.
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 overflow-hidden rounded-2xl">
            <img
              src="/image copy copy copy copy copy copy copy copy copy.png"
              alt="Florida Service Area Map"
              className="w-full h-auto object-contain scale-110"
            />

            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
              <div className="text-white text-center -rotate-12">
                <div className="text-2xl sm:text-3xl font-bold">100%</div>
                <div className="text-xs sm:text-sm">Coverage</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 border-2 border-gray-200">
              <div className="text-gray-900 text-center rotate-12">
                <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
