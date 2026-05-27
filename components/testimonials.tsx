import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-bold text-emerald-900">{testimonial.name}</div>
        <div className="text-gray-600 text-sm">{testimonial.role} • {testimonial.date}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      role: "Homeowners",
      content: "Flamingo Landscaping transformed our backyard into a tropical paradise. The attention to detail and quality of work exceeded our expectations. Our guests constantly compliment our garden!",
      rating: 5,
      date: "May 2023"
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Business Owner",
      content: "Professional, reliable, and creative. They designed and installed a stunning landscape for our office complex that has become a talking point for clients. Highly recommended!",
      rating: 5,
      date: "March 2023"
    },
    {
      id: 3,
      name: "Jennifer Williams",
      role: "Homeowner",
      content: "The team was punctual, professional, and cleaned up perfectly after completing our patio installation. The result is beyond what we imagined. Worth every penny!",
      rating: 5,
      date: "January 2023"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Client Testimonials</h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-2xl font-bold text-emerald-900 mr-2">4.9</span>
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-gray-600">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;