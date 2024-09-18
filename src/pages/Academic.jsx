import React from 'react';
import { Card } from '../Components';
import { computer_Science, drawing, Information_technology, maths, science } from '../assets';

function Academic() {
  const academicDetails = [
    {
      name: "Computer Science",
      img: computer_Science, 
      description: "A field of study that focuses on the development, analysis, and implementation of software systems, covering programming, data structures, algorithms, and more."
    },
    {
      name: "Information Technology",
      img: Information_technology, 
      description: "Focuses on the use of computers and telecommunications to store, retrieve, transmit, and manipulate data, covering networking, database management, and cybersecurity."
    },
    
    {
      name: "Science",
      img: science, 
      description: "Covers topics in physics, chemistry, and biology, focusing on experimentation, observation, and scientific reasoning to understand the world around us."
    },
    {
      name: "Maths",
      img: maths, 
      description: "Involves the study of numbers, calculations, patterns, and problem-solving techniques, providing a strong foundation in algebra, geometry, and calculus."
    },
    {
      name: "Drawing",
      img: drawing, 
      description: "A creative subject that involves visual representation through sketching, painting, and other artistic techniques, enhancing students' creativity and artistic expression."
    },
  ];

  return (
    <div name="academic" className="bg-[#f0f4fa] py-12 px-1 md:px-6">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-[#003366] mb-6 pt-4">
        Academic Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {academicDetails.map((course, index) => (
          <Card key={index} cource={course} />
        ))}
      </div>
    </div>
  );
}

export default Academic;
