import React from "react";
import { Link } from "react-scroll";
import { Logo } from "../index";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle,FaUserTie, FaBook, FaTasks, FaAddressBook } from "react-icons/fa";

function Footer() {
  const navItems = [
    { name: "Home", slug: "home", icon: <FaHome /> },
    { name: "About", slug: "about", icon: <FaInfoCircle /> },
    { name: "Faculty & Staff", slug: "staff", icon: <FaUserTie /> },
    { name: "Academics", slug: "academic", icon: <FaBook /> },
    { name: "Activities", slug: "activities", icon: <FaTasks /> },
    { name: "Contact", slug: "contact", icon: <FaAddressBook /> },
  ];

  return (
    <footer className="bg-[#BF2EF0] py-10 text-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-4">
        {/* Left Column: Logo and Navigation Links */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-4 justify-center md:justify-start">
            <Link to="/">
              <Logo width="90px" />
            </Link>
            <h1 className="text-2xl font-bold text-white">GIC Darmiyan</h1>
          </div>
          <ul className="flex w-full flex-col space-y-2 items-center md:items-start px-20 md:px-28">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  smooth
                  to={item.slug}
                  spy={true}
                  offset={-50}
                  duration={500}
                  className="text-[#FFF6EA] text-xl font-semibold hover:text-[#FEECB3] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <div className="flex items-center space-x-2 mb-2">
            <FaPhoneAlt className="text-white" />
            <span className="text-[#FFF6EA]">+91 9927259263</span>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <FaEnvelope className="text-white" />
            <span className="text-[#FFF6EA]">principaldarmiyan@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-white mb-6" />
            <div className="flex flex-col text-center items-center justify-center">
              <h1 className="text-[#FFF6EA]">
                GIC Darmiyan Block-Takula, Almora
              </h1>
              <h1>Uttarakhand, 263638</h1>
            </div>
          </div>
        </div>

        {/* Right Column: Social Media (Placeholder for Future Use) */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <p className="text-[#FFF6EA]">Stay connected for updates!</p>
          <div className="mt-4">
            <div className="flex space-x-4">
              <span className="bg-[#FEECB3] p-2 rounded-full text-[#BF2EF0]">
                <a href="tel:+919927259263">
                  <FaPhoneAlt />
                </a>
              </span>
              <span className="bg-[#FEECB3] p-2 rounded-full text-[#BF2EF0]">
                <a href="mailto:almiyapushpesh55@gmail.com">
                  <FaEnvelope />
                </a>
              </span>
              <span className="bg-[#FEECB3] p-2 rounded-full text-[#BF2EF0]">
                <a
                  href="https://maps.app.goo.gl/uocRWj33sp9joHEA6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-8">
        <p>&copy; {new Date().getFullYear()} GIC Darmiyan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
