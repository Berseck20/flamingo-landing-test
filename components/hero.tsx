import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/90">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      </div>

      {/* Trust badges */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mb-8 opacity-90">
          <div className="flex items-center text-white">
            <span className="text-yellow-400 mr-1">★</span>
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center text-white">
            <span className="font-bold">1000+</span>
            <span className="ml-1">Projects Completed</span>
          </div>
          <div className="flex items-center text-white">
            <span className="font-bold">15+</span>
            <span className="ml-1">Years Experience</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Outdoor Vision
            </span>
            Into Reality
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium landscaping services for residential and commercial properties
            across Florida. Expert design, quality craftsmanship, and sustainable solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 transition-all duration-300 ease-in-out"
            >
              Explore Our Services
            </a>
          </div>

          {/* Review rating */}
          <div className="flex flex-col items-center">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-emerald-100">
              <span className="font-bold">4.9/5</span> from 200+ verified customers
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;