import { Smartphone, Bell, Calendar, MapPin } from 'lucide-react';

export default function MobileApp() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book and manage your bin deliveries with a few taps',
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your bin delivery and pickup in real-time',
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get updates on your service status instantly',
    },
  ];

  return (
    <section id="app" className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#3c53f4] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#3c53f4] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="bg-[#3c53f4] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                Coming Soon 2026
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              The Future of Hauling is in Your Pocket
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Download the Bin Buddy mobile app for an even more convenient experience. Manage your services, track deliveries, and stay connected wherever you are.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#3c53f4] rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="bg-gray-200 text-gray-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 opacity-50 cursor-not-allowed">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download on iOS</span>
              </button>
              <button className="bg-gray-200 text-gray-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 opacity-50 cursor-not-allowed">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download on Android</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              Be the first to know when we launch! Sign up for updates below.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto w-48 h-[380px] sm:w-56 sm:h-[440px] lg:w-64 lg:h-[500px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-4 sm:border-6 lg:border-8 border-gray-800 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 sm:w-28 sm:h-5 lg:w-32 lg:h-6 bg-gray-800 rounded-b-2xl"></div>

              <div className="h-full bg-gradient-to-br from-[#3c53f4] to-[#2b42e3] flex items-center justify-center p-6 sm:p-8">
                <div className="text-center text-white">
                  <Smartphone className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6" />
                  <div className="text-xl sm:text-2xl font-bold mb-2">BinBuddy</div>
                  <div className="text-xs sm:text-sm opacity-90">Mobile App Preview</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
              <div className="bg-[#3c53f4] rounded-2xl p-6 shadow-2xl max-w-xs border-2 border-gray-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#3c53f4]" />
                  </div>
                  <div className="text-white font-bold">Coming 2026</div>
                </div>
                <p className="text-white text-sm">Get notified when we launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
