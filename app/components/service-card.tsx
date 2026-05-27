import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  isFeatured?: boolean;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, description, isFeatured = false }) => {
  return (
    <div className={`p-6 rounded-xl ${isFeatured ? 'bg-emerald-800 text-white' : 'bg-white'}`}>
      <h4 className="text-xl font-sans font-semibold text-emerald-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;