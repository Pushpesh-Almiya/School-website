import React, { useEffect, useState } from "react";
import { ProfilePhoto } from "../assets";
import { Pushpesh, PalSir, HnSir, ManojSir, KdSir, ManishSir, VijaySir, MunniMaam, NiralaSir, LohaniSir, SurendraSir, LataMaam, BoraSir, SanjaySir, ManojSirBio, BhandariSir, HemaMaam, DeepaMaam } from "../assets/Staff/index.js";
import useWindowSize from "../utils/useWindowSize";
import { Link } from "react-router-dom";

function Staff() {
  const [showAll, setShowAll] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 768) {
      // Tailwind 'md' breakpoint is 768px
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [width]);

  const Educator = [
    {
      img: SanjaySir,
      name: "Mr. Sanjay Joshi",
      title: "Principal",
      quote: "Leading with wisdom and care",
    },
    {
      img: PalSir,
      name: "Mr. Suryanath Pal",
      title: "Hindi Educator",
      quote: "Empowering through language",
    },
    {
      img: ManojSirBio,
      name: "Mr. Manoj Kumar",
      title: "Biology Educator",
      quote: "Understanding life through biology",
    },
    {
      img: BhandariSir,
      name: "Mr. Harish Singh Bhandari",
      title: "Sports Trainer",
      quote: "Training minds and bodies for excellence",
    },
    {
      img: NiralaSir,
      name: "Mr. Jay Prakash",
      title: "Social Science Educator",
      quote: "Economics for a better tomorrow",
    },
    {
      img: LohaniSir,
      name: "Mr. Girish Chandra Lohani",
      title: "Maths Educator",
      quote: "Exploring the laws of the universe",
    },
    {
      img: HnSir,
      name: "Mr. Hemwati Nandan",
      title: "Sanskrit Educator",
      quote: "Preserving ancient wisdom",
    },
    {
      img: SurendraSir,
      name: "Mr. Surendra Kumar",
      title: "English Educator",
      quote: "Crafting skills for life through language",
    },
    {
      img: ManojSir,
      name: "Mr. Manoj Kumar",
      title: "Social Science Educator",
      quote: "Shaping perspectives on society",
    },
    {
      img: KdSir,
      name: "Mr. Keshav Dutt Joshi",
      title: "Hindi Educator",
      quote: "Enriching minds through Hindi",
    },
    {
      img: MunniMaam,
      name: "Mrs. Munni Tamta",
      title: "Science Educator",
      quote: "Unveiling the wonders of science",
    },
    {
      img: LataMaam,
      name: "Lata Verma ma'am",
      title: "Drawing Educator",
      quote: "Expressing creativity through art",
    },
    {
      img: BoraSir,
      name: "Mr. Gopal Singh Bora",
      title: "Sociology Educator",
      quote: "Understanding society's fabric",
    },
    {
      img: ManishSir,
      name: "Mr. Manish Pandey",
      title: "Political Science Educator",
      quote: "Empowering through political insight",
    },
    {
      img: VijaySir,
      name: "Mr. Vijay Shankar Joshi",
      title: "Sanskrit Educator",
      quote: "Reviving the essence of Sanskrit",
    },
    {
      img: ProfilePhoto,
      name: "Mrs. Minakshi Sah",
      title: "Chemistry Educator",
      quote: "Discovering the magic of chemistry",
    },
    {
      img: HemaMaam,
      name: "Mrs. Hema Arya",
      title: "English Educator",
      quote: "Mastering communication through English",
    },
  ];
  const OfficeStaff = [
    {
      img:ProfilePhoto,
      name: "Mr. Manoj Kumar Kandpal",
      designation: "Chief Assistant",
    },
    {
      img: DeepaMaam,
      name: "Miss Deepa Kaira",
      designation: "Junior Assistant",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Diwan Singh",
      designation: "Attendant",
    },
    {
      img: ProfilePhoto,
      name: "Mr. Kiran Prakash Singh Papola",
      designation: "Attendant",
    },
  ];

  const PushpeshAlmiya = {
    img: Pushpesh,
    name: "Mr. Pushpesh Almiya",
    title: "Information Technology Trainer",
    quote: "Innovation through technology",
    portfolioLink: "https://pushpesh-portfolio.netlify.app/",
  };

  // Show either top 5 or all depending on 'showAll' state
  const displayedEducators = showAll ? Educator : Educator.slice(0, 5);

  return (
    <div name="staff" className="  my-4 md:px-6 bg-[#f0f4fa]">
      <h1
        id="educators"
        className="text-3xl font-bold text-[#003366] text-center pt-2"
      >
        Educators
      </h1>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-5 justify-center items-center">
        {displayedEducators.map((teacher, index) => (
          <div
            key={index}
            className="bg-[#f0f4fa] h-full shadow-lg rounded-lg overflow-hidden w-80 mx-auto transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col"
          >
            {/* Profile Photo */}
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-3/4 object-cover object-top rounded-full border border-blue-5npm 00 p-1"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold">{teacher.name}</h3>
              <h4 className="text-sm text-[#003366] mb-2">{teacher.title}</h4>
              <p className="text-gray-600 italic">"{teacher.quote}"</p>
            </div>
          </div>
        ))}

        {/* View All Button (only visible on small screens) */}
        {!showAll && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 bg-[#00264d] font-semibold text-white rounded-lg hover:bg-navy-800 transition-colors duration-300"
            >
              View All
            </button>
          </div>
        )}

        {/* Pushpesh Almiya's card */}
        <div className="bg-[#f0f4fa] shadow-lg rounded-lg overflow-hidden w-80 mx-auto transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col">
          <img
            src={PushpeshAlmiya.img}
            alt={PushpeshAlmiya.name}
            className="w-3/4 object-cover object-top rounded-full border border-green-500 p-1"
          />
          <div className="p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg  font-bold">{PushpeshAlmiya.name}</h3>
            <h4 className="text-sm text-[#003366] mb-2">
              {PushpeshAlmiya.title}
            </h4>
            <p className="text-gray-600 italic">"{PushpeshAlmiya.quote}"</p>
            <Link
              to={PushpeshAlmiya.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-white bg-[#00264d] hover:bg-navy-800 font-semibold px-4 py-2 rounded-md transition-colors duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* View Less Button (only visible on small screens) */}
        {showAll && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(false)}
              className="px-4 py-2 bg-[#00264d] font-semibold text-white rounded-lg hover:bg-navy-800 transition-colors duration-300"
            >
              View Less
            </button>
          </div>
        )}
      </div>

      <h1 className="text-3xl font-bold text-[#003366] text-center mt-10 mb-6">
        Administrative Staff
      </h1>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-5">
        {OfficeStaff.map((staff, index) => (
          <div
            key={index}
            className="shadow-lg h-full rounded-lg overflow-hidden w-80 mx-auto transform hover:scale-105 transition-transform duration-300 flex justify-center items-center flex-col"
          >
            {/* Profile Photo */}
            <img
              src={staff.img}
              alt={staff.name}
              className="w-3/4 object-cover object-top rounded-full border border-purple-500 p-1"
            />

            {/* Card Content */}
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-center">{staff.name}</h3>
              <h4 className="text-sm text-[#003366] mb-2">
                {staff.designation}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;
