import React from 'react';

function Card({ cource }) {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg m-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 border border-gray-200">
      {/* Image */}
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${cource.img})` }}>
      </div>

      {/* Content */}
      <div className="px-6 py-4 bg-gradient-to-b from-gray-50 to-white">
        {/* Academic Name */}
        <h2 className="font-bold text-2xl mb-2 text-gray-900 text-center">
          {cource.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base text-justify">
          {cource.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
