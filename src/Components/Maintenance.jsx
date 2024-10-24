import React from 'react';
import MaintenanceImg from "../assets/maintenance.png"

const MaintenancePage = () => {
  return (
    <div className=" bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">We'll Be Back Soon!</h1>
        <p className="text-gray-600 mb-6">
          Our website is currently undergoing scheduled maintenance. We appreciate your patience and understanding.
        </p>
        <p className="text-gray-600 mb-6">
          If you have any urgent inquiries, please contact us at:
        </p>
        <a 
          href="mailto:principaldarmiyan@gmail.com" 
          className="text-blue-500 hover:text-blue-700"
        >
          principaldarmiyan@gmail.com
        </a>
        <div className="mt-6">
          <img 
            src={MaintenanceImg}
            alt="Maintenance" 
            className="w-full md:w-1/2 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
