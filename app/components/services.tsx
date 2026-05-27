import React from 'react';

interface Service {
  title: string;
  description: string;
  featured?: boolean;
}

interface ServiceCategory {
  name: string;
  services: Service[];
  featuredImage?: string;
}

const Services: React.FC = () => {
  // Landscaping Services
  const landscapingServices: ServiceCategory = {
    name: "Landscaping Services",
    services: [
      {
        title: "Landscape Design",
        description: "A landscape design puts you in control and ensures you get the most out of the investment into your landscape",
        featured: true
      },
      // ... other services
    ],
    featuredImage: "landscape-design.jpg"
  };

  // Hardscaping Services
  const hardscapingServices: ServiceCategory = {
    name: "Hardscaping Services",
    services: [
      {
        title: "Summer Kitchen",
        description: "Adding summer kitchens to backyard designs are modern trends that create a perfect atmosphere",
        featured: true
      },
      // ... other services
    ],
    featuredImage: "summer-kitchen.jpg"
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero section */}
      <div className="relative py-32 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-serif font-light text-center text-ivory">
            Our Premium Services
          </h2>
          <p className="text-center text-ivory/80 max-w-2xl mx-auto mt-4">
            Expertly crafted outdoor experiences that transform your property
          </p>
        </div>
      </div>

      {/* Landscaping Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landscapingServices.services.map((service, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                    <h4 className="text-xl font-sans font-semibold text-emerald-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hardscaping Section */}
      <div className="relative min-h-[500px] bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center order-2">
              <h3 className="text-4xl font-serif font-light text-emerald-900">
                Hardscaping Services
              </h3>
              <p className="text-lg text-emerald-700 max-w-lg">
                Timeless structures that create outdoor environments for living.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hardscapingServices.services.map((service, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                    <h4 className="text-xl font-sans font-semibold text-emerald-900">
                      {service.title}
                    </h4>
                    <p className="text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;