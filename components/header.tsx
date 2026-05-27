import React from 'react';

const Header = () => {
  return (
    <div className="bg-emerald-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-300">Flamingo Landscaping</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-emerald-300">Services</a></li>
            <li><a href="#contact" className="hover:text-emerald-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
