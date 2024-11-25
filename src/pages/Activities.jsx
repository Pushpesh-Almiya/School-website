import React from "react";
import { Activities } from "../assets";

const ActivitiesPage = () => {
  const activities =[
    {
      activityName :"School Activities",
      about :"In our school, there are various activities that engage students both academically and creatively, such as quizzes, essay writing, sports, and drawing."
    },
    {
      activityName :"Sports Events",
      about :"Our sports events encourage teamwork and physical development, offering students the chance to participate in a wide range of games and competitions."
    },
    {
      activityName :"Creative Contests",
      about :"Activities such as drawing competitions and essay writing provide students with a platform to express their creativity and intellectual skills."
    },

  ]
  return (
    <div name="activities" className="bg-[#f0f4fa]  my-4 md:px-6 ">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#003366] text-center mb-6 pt-4">
        Student Life and Activities
      </h1>

      <div className="flex flex-col md:flex-row w-full bg-[#f0f4fa] rounded-lg overflow-hidden">
        
        {/* Image: Display second on mobile, first on desktop */}
        <div className="w-full md:w-1/2 p-1 md:p-8 order-2 md:order-1">
          <img
            src={Activities}
            alt="Activities"
            className="h-64 md:h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Heading and Activities List */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col order-1 md:order-2">
          {/* Activities List */}
          <ul className="space-y-6">
            {activities.map ((activity,index)=>(
              <li key={index} className="relative pl-8 md:pl-10">
              <span className="absolute left-0 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-[#003366] rounded-full shadow-lg flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white md:w-2 md:h-2 bg-transparent border border-white rounded-full"></span>
              </span>
              <h2 className="text-xl font-semibold text-[#003366]">
                {activity.activityName}
              </h2>
              <p className="text-base text-gray-700">
                {activity.about}
              </p>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
