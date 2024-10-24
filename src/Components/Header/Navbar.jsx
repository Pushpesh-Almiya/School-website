import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaUserTie,
  FaBook,
  FaTasks,
  FaAddressBook,
  FaImages,
  FaExclamationCircle,
} from "react-icons/fa";
import TopNav from "./TopNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For handling sidebar toggle
  const [isSticky, setIsSticky] = useState(false); // For sticky header on scroll

  // Detect scroll position and make header sticky
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // Adjust 100 or any threshold value to your need, which will trigger the sticky effect
    if (scrollTop > 100) {
      setIsSticky(true); 
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", slug: "/", icon: <FaHome /> },
    { name: "About", slug: "/about", icon: <FaInfoCircle /> },
    { name: "Faculty & Staff", slug: "/staff", icon: <FaUserTie /> },
    { name: "Academics", slug: "/academic", icon: <FaBook /> },
    { name: "Activities", slug: "/activities", icon: <FaTasks /> },
    { name: "Contact", slug: "/contact", icon: <FaAddressBook /> },
    { name: "Gallery", slug: "/gallery", icon: <FaImages /> },
    { name: "Information", slug: "/information", icon: <FaExclamationCircle /> },
  ];

  return (
    <div>
      {/* Top Navigation */}
      <TopNav /> {/* Top navigation component */}

      {/* Navbar that becomes sticky on scroll */}
      <header
        className={`bg-navy-800 text-white w-full z-50 shadow-lg transition-transform duration-300 ${
          isSticky ? "fixed top-0 left-0" : ""
        }`}
      >
        {/* Centered Hamburger Button */}
        <nav className="container mx-auto flex justify-center items-center p-4">
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle Sidebar
            className="focus:outline-none"
          >
            {/* Hamburger icon */}
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
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 md:w-1/4 bg-navy-700 text-white z-60 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="flex justify-end items-end px-6 mt-10">
          {/* Close button inside the sidebar */}
          <button
            onClick={() => setIsOpen(!isOpen)} // Close sidebar on click
            className="focus:outline-none"
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

        {/* Navigation items in sidebar */}
        <ul className="p-4">
          {navItems.map((item) => (
            <RouterLink
              key={item.slug}
              to={item.slug}
              onClick={() => {
                setIsOpen(false); // Close sidebar when an item is clicked
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on navigation
              }}
              className="py-2 px-4 text-lg font-semibold flex items-center"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </RouterLink>
          ))}
        </ul>
      </div>

      {/* Backdrop (appears when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
}

export default Navbar;
