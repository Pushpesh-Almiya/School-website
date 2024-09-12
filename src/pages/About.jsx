import React from "react";

function About() {
  return (
    <section name="about" className="py-16 px-6 bg-[#FFF6EA]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-6 text-[#BF2EF0]">
            About GIC Darmiyan
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            GIC Darmiyan is a rural intermediate school that provides a
            nurturing environment fostering academic excellence, creativity, and
            innovation. We are committed to empowering students with the
            knowledge and values they need to succeed in a global community.
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 md:px-6 mb-6 md:mb-0">
            <p className="text-gray-700 text-lg leading-relaxed">
              We offer a comprehensive curriculum that includes the Science
              stream, Computer classes, and smart classrooms. Our dedicated
              faculty ensures the holistic development of each student,
              addressing both their academic and personal growth.We also provide
              extracurricular activities that foster creativity and teamwork,
              helping students discover their passions beyond academics. Our
              state-of-the-art facilities are designed to create a dynamic and
              engaging learning environment for all students.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:px-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              GIC Darmiyan also offers IT as a vocational subject, preparing
              students for the challenges of tomorrow by equipping them with the
              necessary technical skills and a strong moral foundation. We
              strive to provide cutting-edge education in a rural setting,
              ensuring our students are ready for the future.In addition to IT,
              GIC Darmiyan emphasizes skill-based learning through practical
              workshops and real-world projects, giving students hands-on
              experience in various fields. Our goal is to nurture well-rounded
              individuals who can excel in both their professional and personal
              lives, contributing positively to society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 mt-12 text-xl md:text-2xl font-semibold md:font-bold">
          <div >
            <h1 className="text-center text-[#BF2EF0]">3K+</h1>
            <h2 className="text-center">Enrollments</h2>
          </div>
          <div >
            <h1 className="text-center text-[#BF2EF0]">20+</h1>
            <h2 className="text-center">Staff Members</h2>
          </div>
          <div>
            <h1 className="text-center text-[#BF2EF0]">248</h1>
            <h2 className="text-center">Current Students</h2>
          </div>
          <div >
            <h1 className="text-center text-[#BF2EF0]">95%</h1>
            <h2 className="text-center">Student Satisfaction Rate</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
