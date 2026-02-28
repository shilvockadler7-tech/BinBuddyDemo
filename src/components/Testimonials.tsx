import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mike Johnson',
      role: 'Roofing Contractor',
      location: 'Tampa, FL',
      rating: 5,
      text: 'Bin Buddy has been a game-changer for our roofing business. Fast delivery, reliable pickup, and excellent customer service. Highly recommend to any contractor in Florida.',
      avatar: 'MJ',
    },
    {
      name: 'Sarah Martinez',
      role: 'Homeowner',
      location: 'Orlando, FL',
      rating: 5,
      text: 'We used Bin Buddy for our home renovation project. The process was so simple and the team was professional. They made our cleanup stress-free. Will definitely use again!',
      avatar: 'SM',
    },
    {
      name: 'David Chen',
      role: 'General Contractor',
      location: 'Miami, FL',
      rating: 5,
      text: 'Outstanding service from start to finish. The scheduling was flexible, the bins were delivered on time, and pickup was quick. This is exactly what contractors need.',
      avatar: 'DC',
    },
    {
      name: 'Jennifer Williams',
      role: 'Property Manager',
      location: 'Jacksonville, FL',
      rating: 5,
      text: 'I manage multiple properties and Bin Buddy has become my go-to for all hauling needs. Their tech-driven approach makes everything seamless. Five stars all the way!',
      avatar: 'JW',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 relative border-2 border-[#3c53f4]/10">
            <Quote className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 text-[#3c53f4]/20" />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#3c53f4] to-[#2b42e3] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                  {currentTestimonial.avatar}
                </div>
              </div>

              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#3c53f4] fill-[#3c53f4]" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 text-center mb-6 sm:mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="text-center">
                <div className="font-bold text-base sm:text-lg text-gray-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{currentTestimonial.role}</div>
                <div className="text-xs sm:text-sm text-gray-500">{currentTestimonial.location}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 hover:text-[#3c53f4] border-2 border-gray-200 hover:border-[#3c53f4]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#3c53f4] w-6 sm:w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 hover:text-[#3c53f4] border-2 border-gray-200 hover:border-[#3c53f4]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
