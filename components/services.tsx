"use client";

import React, { useState } from 'react';

interface Service {
  title: string;
  description: string;
  featured?: boolean;
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'landscaping' | 'hardscaping'>('landscaping');

  // Landscaping Services
  const landscapingServices: Service[] = [
    {
      title: "Landscape Design",
      description: "A landscape design puts you in control and ensures you get the most out of the investment into your landscape",
      featured: true
    },
    {
      title: "Irrigation",
      description: "We design, install, and repair all kinds of irrigation systems for your home or business."
    },
    {
      title: "Palm Trees",
      description: "Make your yard stand out with beautiful palm trees that we select and install."
    },
    {
      title: "Trees & Shrubs",
      description: "We'll recommend the most suitable shade, fruit and ornamental trees for your property."
    },
    {
      title: "Annuals & Perennials",
      description: "We'll help you choose the flowers and plants that you love and we'll create the garden of your dreams!"
    }
  ];

  // Hardscaping Services
  const hardscapingServices: Service[] = [
    {
      title: "Summer Kitchen",
      description: "Adding summer kitchens to backyard designs are modern trends that create a perfect atmosphere",
      featured: true
    },
    {
      title: "Pergolas",
      description: "We absolutely love pergolas -- they can make a space unforgettable and enchanting."
    },
    {
      title: "Fire Pits",
      description: "The crisp autumn air and the early nightfall make things already feel cozy, so kick it up a level."
    },
    {
      title: "Water Features",
      description: "From fountains and sculptures to ponds and waterfalls, let us bring your vision to life."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-emerald-900 mb-6">
            Premium Outdoor Services
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Expertly crafted environments that transform your property into a masterpiece
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-emerald-50 rounded-full p-1 shadow-inner">
            <button
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-500 ease-out ${
                activeTab === 'landscaping'
                  ? 'bg-white text-emerald-900 shadow-md transform scale-105'
                  : 'text-emerald-700 hover:text-emerald-900'
              }`}
              onClick={() => setActiveTab('landscaping')}
            >
              Landscaping Services
            </button>
            <button
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-500 ease-out ${
                activeTab === 'hardscaping'
                  ? 'bg-white text-emerald-900 shadow-md transform scale-105'
                  : 'text-emerald-700 hover:text-emerald-900'
              }`}
              onClick={() => setActiveTab('hardscaping')}
            >
              Hardscaping Services
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'landscaping'
              ? landscapingServices.map((service, index) => (
                  <div
                    key={index}
                    className={`group transition-all duration-700 ease-out ${
                      service.featured
                        ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-3'
                        : ''
                    }`}
                  >
                    <div className={`h-full rounded-2xl transition-all duration-500 ${
                      service.featured
                        ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 p-10 shadow-xl'
                        : 'bg-white p-8 shadow-lg hover:shadow-xl'
                    }`}>
                      <h4 className={`${
                        service.featured
                          ? 'text-3xl font-serif font-light text-emerald-900 mb-6'
                          : 'text-xl font-sans font-semibold text-emerald-900 mb-4'
                      }`}>
                        {service.title}
                      </h4>
                      <p className={`${
                        service.featured
                          ? 'text-emerald-800 text-lg leading-relaxed'
                          : 'text-gray-700'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))
              : hardscapingServices.map((service, index) => (
                  <div
                    key={index}
                    className={`group transition-all duration-700 ease-out ${
                      service.featured
                        ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-3'
                        : ''
                    }`}
                  >
                    <div className={`h-full rounded-2xl transition-all duration-500 ${
                      service.featured
                        ? 'bg-gradient-to-br from-emerald-800 to-emerald-900 p-10 shadow-xl'
                        : 'bg-white p-8 shadow-lg hover:shadow-xl'
                    }`}>
                      <h4 className={`${
                        service.featured
                          ? 'text-3xl font-serif font-light text-white mb-6'
                          : 'text-xl font-sans font-semibold text-emerald-900 mb-4'
                      }`}>
                        {service.title}
                      </h4>
                      <p className={`${
                        service.featured
                          ? 'text-emerald-100 text-lg leading-relaxed'
                          : 'text-gray-700'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
