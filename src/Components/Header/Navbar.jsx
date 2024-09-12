import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../index";
import "../../App.css";
import { FaHome, FaInfoCircle, FaUserTie, FaBook, FaTasks, FaAddressBook } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const navItems = [
    { name: "Home", slug: "home", icon: <FaHome /> },
    { name: "About", slug: "about", icon: <FaInfoCircle /> },
    { name: "Faculty & Staff", slug: "staff", icon: <FaUserTie /> },
    { name: "Academics", slug: "academic", icon: <FaBook /> },
    { name: "Activities", slug: "activities", icon: <FaTasks /> },
    { name: "Contact", slug: "contact", icon: <FaAddressBook /> },
  ];

  return (
    <header className="py-2 shadow-lg bg-[#BF2EF0] fixed z-50 w-full">
      <nav className="container mx-auto flex justify-between items-center text-gray-100">
        {/* Logo Section */}
        <div className="">
          <RouterLink to="/" className="flex space-x-4 items-center">
            <Logo width="80px" />
            <h1 className="text-2xl font-bold text-white">GIC Darmiyan</h1>
          </RouterLink>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block lg:hidden px-6 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none relative z-20 ${isOpen ? "open" : ""}`}
          >
            <div className={`w-6 h-1 bg-[#FEECB3] mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-1 bg-[#FEECB3] mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-1 bg-[#FEECB3] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col pb-2 lg:flex-row ml-auto space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:static bg-[#BF2EF0] lg:bg-transparent left-0 top-16 lg:top-auto w-full lg:w-auto z-10 lg:z-auto transition-transform duration-300`}
        >
          {navItems.map((item) => (
            <ScrollLink
            key={item.slug}
            smooth
            to={item.slug}
            spy={true}
            offset={-50}
            duration={500}
            onSetActive={() => handleSetActive(item.slug)}
            className="font-semibold text-lg px-4 py-2 text-[#FFF6EA] transition-colors duration-200 relative flex items-center justify-center"
          >
            <span
              className={`relative flex items-center ${
                activeSection === item.slug
                  ? "after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#FEECB3] after:absolute after:bottom-0 after:left-0 after:scale-x-100 after:transition-transform after:duration-300"
                  : ""
              }`}
            >
              <span className="mr-2">{item.icon}</span> {/* Added margin here */}
              <span>{item.name}</span>
            </span>
          </ScrollLink>
          
          
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
