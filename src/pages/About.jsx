import React from "react";
import { HeroLandscape } from "../assets";

function About() {
  return (
    <section name="about" className="pt-10 px-3 md:px-6 bg-[#f0f4fa]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-bold text-3xl text-center mb-6 text-[#003366]">
            About GIC Darmiyan
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            GIC Darmiyan is a rural intermediate school that provides a
            nurturing environment fostering academic excellence, creativity, and
            innovation. We are committed to empowering students with the
            knowledge and values they need to succeed in a global community.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:px-6 mb-6 md:mb-0 order-2 md:order-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We offer a comprehensive curriculum that includes the Science
              stream, Computer classes, and smart classrooms. Our dedicated
              faculty ensures the holistic development of each student,
              addressing both their academic and personal growth. We also provide
              extracurricular activities that foster creativity and teamwork,
              helping students discover their passions beyond academics. Our
              state-of-the-art facilities are designed to create a dynamic and
              engaging learning environment for all students.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              GIC Darmiyan also offers IT as a vocational subject, preparing
              students for the challenges of tomorrow by equipping them with the
              necessary technical skills and a strong moral foundation. We
              strive to provide cutting-edge education in a rural setting,
              ensuring our students are ready for the future. In addition to IT,
              GIC Darmiyan emphasizes skill-based learning through practical
              workshops and real-world projects, giving students hands-on
              experience in various fields. Our goal is to nurture well-rounded
              individuals who can excel in both their professional and personal
              lives, contributing positively to society.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full mb-5 md:mb-0 md:w-1/2 md:p-4 order-1 md:order-2">
            <img
              src={HeroLandscape}
              alt="Activities"
              className="h-64 md:h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-xl font-semibold md:font-bold">
          <div>
            <h1 className="text-center text-[#003366]">3K+</h1>
            <h2 className="text-center">Enrollments</h2>
          </div>
          <div>
            <h1 className="text-center text-[#003366]">20+</h1>
            <h2 className="text-center">Staff Members</h2>
          </div>
          <div>
            <h1 className="text-center text-[#003366]">248</h1>
            <h2 className="text-center">Current Students</h2>
          </div>
          <div>
            <h1 className="text-center text-[#003366]">95%</h1>
            <h2 className="text-center">Student Satisfaction Rate</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
