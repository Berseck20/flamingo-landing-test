import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

const ProjectShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-emerald-900 mb-8">
            Why Choose Flamingo Landscaping
          </h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            We bring over 15 years of experience to every project, ensuring your landscape exceeds expectations.
          </p>
        </div>

        {/* Editorial Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              OUR DIFFERENCE
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-emerald-900 mb-6">
              Crafted with Expertise
            </h3>
            <p className="text-xl text-emerald-800 mb-8 leading-relaxed">
              Since 2010, we've transformed over 1,000 properties across South Florida with our signature attention to detail and deep understanding of local ecosystems.
            </p>
            <div className="flex items-center mb-8">
              <div className="text-6xl font-serif font-light text-emerald-900 mr-6">15+</div>
              <div>
                <h4 className="text-xl font-semibold text-emerald-900">Years of Excellence</h4>
                <p className="text-emerald-700">Creating exceptional outdoor spaces</p>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-500">
              Schedule Your Consultation
            </a>
          </div>
          <div className="h-96 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-3xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-2xl font-serif font-light">Award-Winning Design</h4>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl">
            <div className="text-4xl mb-4 text-emerald-600">🛡️</div>
            <h4 className="text-xl font-sans font-semibold text-emerald-900 mb-2">
              Licensed & Insured
            </h4>
            <p className="text-gray-700">
              Fully licensed and insured for your complete peace of mind with comprehensive coverage.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-8 rounded-2xl shadow-xl text-white">
            <div className="text-4xl mb-4 text-emerald-200">🌴</div>
            <h4 className="text-xl font-sans font-semibold mb-2">
              Local Expertise
            </h4>
            <p className="text-emerald-100">
              Deep understanding of Florida's unique landscaping needs and native plant ecosystems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4 text-emerald-600">💯</div>
            <h4 className="text-xl font-sans font-semibold text-emerald-900 mb-2">
              Quality Guarantee
            </h4>
            <p className="text-gray-700">
              We stand behind our work with a satisfaction guarantee and comprehensive warranty.
            </p>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-serif font-light text-emerald-900 mb-4">
              Sustainable Practices
            </h3>
            <p className="text-emerald-800 text-lg">
              Eco-friendly solutions that protect Florida's environment while creating stunning landscapes.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-light text-emerald-900 mb-4">
              Free Consultations
            </h3>
            <p className="text-emerald-800 text-lg">
              No-obligation consultations to discuss your project and create a customized solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;