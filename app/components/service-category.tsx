import React from 'react';

interface ServiceCategoryProps {
  category: {
    name: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  index: number;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category, index }) => {
  return (
    <div className={`relative py-16 ${index % 2 === 0 ? 'bg-emerald-50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-serif font-light text-emerald-900 mb-8">
          {category.name}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map((service, serviceIndex) => (
            <ServiceCard
              key={serviceIndex}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;