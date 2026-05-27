import React from 'react';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-emerald-100 text-xl">
              Get a free, no-obligation quote for your landscaping project today.
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;