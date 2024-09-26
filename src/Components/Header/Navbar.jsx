import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../index";
import "../../App.css";
import { FaHome, FaInfoCircle, FaUserTie, FaBook, FaTasks, FaAddressBook } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSetActive = (to) => {
    setIsOpen(false);
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

  // Scroll event listener to detect scrolling and toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down or up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsNavbarVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add event listener on scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`px-4 shadow-lg bg-navy-800 fixed z-50 w-full transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto flex justify-between lg:justify-between items-center text-gray-100">
        {/* Logo Section */}
        <div className="flex-1 lg:flex-none">
          <RouterLink
            to="/"
            className="flex justify-center lg:justify-start space-x-4 items-center"
          >
            <Logo width="70px" />
            <h1 className="text-xl font-bold text-white">GIC Darmiyan</h1>
          </RouterLink>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block lg:hidden px-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none relative z-20 ${isOpen ? "open" : ""}`}
          >
            <div
              className={`w-6 h-1 bg-white mb-1 transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:my-0 pb-2 lg:flex-row ml-auto space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:static bg-navy-800 lg:bg-transparent left-0 top-16 lg:top-auto w-full lg:w-auto z-10 lg:z-auto transition-transform duration-300`}
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
              className="font-semibold text-sm px-4 lg:py-2 md:px-0 text-[#FFFFFF] transition-colors duration-200 relative flex items-center justify-center"
            >
              <span
                className={`relative flex items-center ${
                  activeSection === item.slug
                    ? "after:content-[''] after:block after:w-full after:h-0.5 after:bg-navy-200 after:absolute after:bottom-0 after:left-0 after:scale-x-100 after:transition-transform px-1 after:duration-300 "
                    : ""
                }`}
              >
                <span className="m-2">{item.icon}</span>
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
