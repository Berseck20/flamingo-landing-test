import React from 'react';
import Services from '../components/services';
import ServiceCategory from '../components/service-category';
import ServiceCard from '../components/service-card';

const ServicesData = () => {
  const categories = [
    {
      name: "Landscaping Services",
      services: [
        {
          title: "Landscape Design",
          description: "A landscape design puts you in control and ensures you get the most out of the investment into your landscape"
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
        },
        {
          title: "Annuals & Perennials",
          description: "We'll help you choose the flowers and plants that you love and we'll create the garden of your dreams!"
        },
        {
          title: "Plant Bed Edging",
          description: "Lawn and flower bed edging can play an important role in your landscape design plan to improve your property's overall curb appeal."
        },
        {
          title: "Natural Fences",
          description: "Both beautiful and functional, natural fences are a fragrant and attractive way of creating privacy."
        },
        {
          title: "Low Voltage Lighting",
          description: "For any occasion or event, low voltage lighting will give your yard that perfect final touch."
        },
        {
          title: "Boulders",
          description: "Boulders give your yard that natural element that is often overlooked. Let us beautify your yard by arranging them."
        }
      ]
    },
    {
      name: "Hardscaping Services",
      services: [
        {
          title: "Summer Kitchen",
          description: "Adding summer kitchens to backyard designs are modern trends that create a perfect atmosphere."
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
        },
        {
          title: "Pavers",
          description: "Transform your property with a beautifully designed pathway of pavers for your walkways, pool, patio, or driveway."
        },
        {
          title: "Polymeric Sand & Sealant",
          description: "An oft-forgotten – but very important product here at Flamingo Landscapes - is best-level polymeric sand for pavers."
        },
        {
          title: "Pool Decks",
          description: "Pool decks are essential accents that create an attractive place during parties or barbecue get-togethers."
        },
        {
          title: "Patios",
          description: "We design and build your a customized patio, fully equipped with enclosures and even an outdoor kitchen."
        },
        {
          title: "Flagstones",
          description: "Flagstone is arguably one of the oldest materials used around the world, as easy to lay as it is appealing to the eye."
        },
        {
          title: "French Drainage",
          description: "We design and build the perfect French drainage system to help with soggy yards and standing water issues."
        },
        {
          title: "Planters",
          description: "Let's help you choose from a large selection of pots and planters to beautify your yard."
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-emerald-950 mb-6">
          Premium Landscaping Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Expertly crafted outdoor experiences that transform your property into a masterpiece of landscape architecture
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((category, index) => (
          <ServiceCategory
            key={index}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesData;