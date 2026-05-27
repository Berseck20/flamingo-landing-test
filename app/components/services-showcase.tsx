import React from 'react';
import ServiceCard from './service-card';

const ServicesShowcase: React.FC = () => {
  // Landscaping Services
  const landscapingServices = [
    {
      title: "Landscape Design",
      description: "A landscape design puts you in control and ensures you get the most out of the investment into your landscape",
      featured: true
    },
    {
      title: "Irrigation",
      description: "We design, install, and repair all kinds of irrigation systems for your home or business. Consult us now for further information."
    },
    {
      title: "Palm Trees",
      description: "Make your yard stand out with beautiful palm trees that we select and install."
    },
    {
      title: "Trees & Shrubs",
      description: "We'll recommend the most suitable shade, fruit and ornamental trees for your property."
    }
  ];

  // Hardscaping Services
  const hardscapingServices = [
    {
      title: "Summer Kitchen",
      description: "Adding summer kitchens to backyard designs are modern trends that create a perfect atmosphere",
      featured: true
    },
    {
      title: "Pergolas",
      description: "We absolutely love pergolas -- they can make a space unforgettable and enchanting. Let's build one for you."
    },
    {
      title: "Fire Pits",
      description: "The crisp autumn air and the early nightfall make things already feel cozy, so kick it up a level with an outdoor fire pit."
    },
    {
      title: "Water Features",
      description: "From fountains and sculptures to ponds and waterfalls, let us bring your vision to life and build the yard of your dreams."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="py-32 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-emerald-950 mb-6">
            Premium Outdoor Experiences
          </h2>
          <p className="text-2xl text-ivory/80 max-w-2xl mx-auto">
            Expertly crafted environments that transform your property
          </p>
        </div>
      </div>

      <div className="relative min-h-[500px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl font-serif font-light text-emerald-900">
                Landscaping Services
              </h3>
              <p className="text-lg text-emerald-700 max-w-lg">
                Creating living environments that enhance your property's natural beauty and value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {landscapingServices.map((service, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                    <h4 className="text-xl font-sans font-semibold text-emerald-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-700">
                        {service.description}
                      </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;