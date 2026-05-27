import React from 'react';

const ProjectGallery = () => {
  // In a real implementation, these would be actual project images
  const projects = [
    { id: 1, title: "Modern Backyard Oasis", category: "Residential" },
    { id: 2, title: "Commercial Garden", category: "Commercial" },
    { id: 3, title: "Tropical Paradise", category: "Residential" },
    { id: 4, title: "Xeriscaping Project", category: "Residential" },
    { id: 5, title: "Pool Landscaping", category: "Residential" },
    { id: 6, title: "Corporate Campus", category: "Commercial" }
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Recent Projects</h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Explore our portfolio of stunning landscape transformations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;