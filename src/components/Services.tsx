import { Hammer, Users, Home } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: 'Roofers',
      description: 'Specialized bin services for roofing projects. Fast delivery and pickup to keep your job site clean and efficient.',
      features: ['Quick turnaround', 'Multiple bin sizes', 'Flexible scheduling'],
    },
    {
      icon: Users,
      title: 'Contractors',
      description: 'Reliable hauling solutions for construction and renovation projects. We handle all your debris removal needs.',
      features: ['Commercial rates', 'Regular pickups', 'Heavy-duty bins'],
    },
    {
      icon: Home,
      title: 'Homeowners',
      description: 'Perfect for home cleanouts, landscaping, and renovation projects. Make your cleanup project simple and stress-free.',
      features: ['Residential pricing', 'Weekend availability', 'Easy booking'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional hauling and bin services tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#3c53f4]"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3c53f4] to-[#2b42e3] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#3c53f4] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#3c53f4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2b42e3] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
