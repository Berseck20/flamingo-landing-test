import React from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({
  icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-4xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-emerald-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
