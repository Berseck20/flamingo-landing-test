import React from 'react';

const Footer = () => {
  return (
    <div className="bg-emerald-900 text-white py-8 text-center">
      <div className="text-3xl font-bold text-emerald-300 mb-4">
        Flamingo Landscaping
      </div>
      <div className="text-lg text-emerald-100">
        &copy; {new Date().getFullYear()} Flamingo Landscaping. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;