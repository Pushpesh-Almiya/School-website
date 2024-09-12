import React, { useEffect, useState } from "react";
import { ProfilePhoto } from "../assets";
import { Pushpesh } from "../assets/Staff";
import useWindowSize from "../utils/useWindowSize";

function Staff() {
  const [showAll, setShowAll] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 768) { // Tailwind 'md' breakpoint is 768px
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [width]);

  const Educator = [
    {
      img: ProfilePhoto,
      name: "Mr. Sanjay Joshi Sir",
      title: "Principal",
      quote: "Leading with wisdom and care",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Suryanath Pal Sir",
      title: "Hindi Educator",
      quote: "Empowering through language",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Manoj Kumar Sir",
      title: "Biology Educator",
      quote: "Understanding life through biology",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Harish Singh Bhandari Sir",
      title: "Sports Trainer",
      quote: "Training minds and bodies for excellence",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Jay Prakash Sir",
      title: "Social Science Educator",
      quote: "Economics for a better tomorrow",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Girish Chandra Lohani Sir",
      title: "Maths Educator",
      quote: "Exploring the laws of the universe",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Hemwati Nandan Sir",
      title: "Sanskrit Educator",
      quote: "Preserving ancient wisdom",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Surendra Kumar Sir",
      title: "English Educator",
      quote: "Crafting skills for life through language",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Manoj Kumar Sir",
      title: "Social Science Educator",
      quote: "Shaping perspectives on society",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Keshav Datt Joshi Sir",
      title: "Hindi Educator",
      quote: "Enriching minds through Hindi",
    },
    {
      img: ProfilePhoto,
      name: "Mrs. Munni Devi Ma'am",
      title: "Science Educator",
      quote: "Unveiling the wonders of science",
    },
    {
      img: ProfilePhoto,
      name: "Lata Verma Ma'am",
      title: "Drawing Educator",
      quote: "Expressing creativity through art",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Gopal Singh Bora Sir",
      title: "Sociology Educator",
      quote: "Understanding society's fabric",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Manish Pandey Sir",
      title: "Political Science Educator",
      quote: "Empowering through political insight",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Vijay Shankar Joshi Sir",
      title: "Sanskrit Educator",
      quote: "Reviving the essence of Sanskrit",
    },
    {
      img: ProfilePhoto,
      name: "Mrs. Minakshi Sah Ma'am",
      title: "Chemistry Educator",
      quote: "Discovering the magic of chemistry",
    },
    {
      img: ProfilePhoto,
      name: "Mrs. Hema Arya Ma'am",
      title: "English Educator",
      quote: "Mastering communication through English",
    },
  ];
  const OfficeStaff = [
    {
      img: "https://via.placeholder.com/150",
      name: "Mr. Manoj Kumar Kandpal",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Miss Deepa Kaira",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Mr. Diwan Singh",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Mr. Kiran Prakash Singh Papola",
    },
  ];

  const PushpeshAlmiya = {
    img: Pushpesh,
    name: "Mr. Pushpesh Almiya",
    title: "Information Technology Trainer",
    quote: "Innovation through technology",
  };

  // Show either top 5 or all depending on 'showAll' state
  const displayedEducators = showAll ? Educator : Educator.slice(0, 5);

  return (
    <div name="staff" className="py-16 px-6">
      <h1
        id="educators"
        className=" text-3xl md:text-4xl font-bold text-[#BF2EF0] text-center pt-2"
      >
        Educators
      </h1>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-5">
        {displayedEducators.map((teacher, index) => (
          <div
            key={index}
            className="bg-[#FFF6EA] shadow-lg rounded-lg overflow-hidden w-80 mx-4 transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col"
          >
            {/* Profile Photo */}
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-3/4 h-52 object-cover object-top"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">{teacher.name}</h3>
              <h4 className="text-lg text-[#88227A] mb-2">{teacher.title}</h4>
              <p className="text-gray-600 italic">"{teacher.quote}"</p>
            </div>
          </div>
        ))}

        {/* View All Button (only visible on small screens) */}
        {!showAll && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 bg-[#BF2EF0] font-semibold text-white rounded-lg hover:bg-[#9c1fca] transition-colors duration-300"
            >
              View All
            </button>
          </div>
        )}

        {/* Pushpesh Almiya's card */}
        <div className="bg-[#FFF6EA] shadow-lg rounded-lg overflow-hidden w-80 mx-4 transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col">
          <img
            src={PushpeshAlmiya.img}
            alt={PushpeshAlmiya.name}
            className="w-3/4 h-52 object-cover object-top"
          />
          <div className="p-4 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">{PushpeshAlmiya.name}</h3>
            <h4 className="text-lg text-[#88227A] mb-2">
              {PushpeshAlmiya.title}
            </h4>
            <p className="text-gray-600 italic">"{PushpeshAlmiya.quote}"</p>
          </div>
        </div>

        {/* View Less Button (only visible on small screens) */}
        {showAll && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(false)}
              className="px-4 py-2 bg-[#BF2EF0] font-semibold text-white rounded-lg hover:bg-[#9c1fca] transition-colors duration-300"
            >
              View Less
            </button>
          </div>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#BF2EF0] text-center mt-10 mb-6">
        Administrative Staff
      </h1>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5">
        {OfficeStaff.map((staff, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden w-80 mx-4 transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col"
          >
            {/* Profile Photo */}
            <img
              src={ProfilePhoto}
              alt={staff.name}
              className="w-3/4 h-52 object-cover object-top"
            />

            {/* Card Content */}
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">{staff.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;