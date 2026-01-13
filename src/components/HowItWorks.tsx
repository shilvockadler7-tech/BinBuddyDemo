import { Calendar, Truck, Package, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Schedule a BinBuddy',
      description: 'Book online or call us to schedule your bin delivery at your convenience.',
      step: '01',
    },
    {
      icon: Truck,
      title: 'A Buddy Delivers a Bin',
      description: 'Our professional team delivers a clean bin directly to your location.',
      step: '02',
    },
    {
      icon: Package,
      title: 'You Load & Fill It Up',
      description: 'Take your time filling the bin with your debris, junk, or materials.',
      step: '03',
    },
    {
      icon: CheckCircle,
      title: 'We Haul It Away',
      description: 'Once ready, we pick up and haul away your bin. Simple and stress-free.',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple four-step process makes hauling and bin services effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-[#3c53f4]">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#3c53f4] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#3c53f4]/10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#3c53f4]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#3c53f4]/30 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
