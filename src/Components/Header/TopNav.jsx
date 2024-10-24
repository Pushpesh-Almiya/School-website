import React from "react";
import { Logo } from "../index";

function TopNav() {
  return (
    <div className="bg-navy-800 text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* First Div: Logo */}
        <div className="flex items-center">
          <Logo width="100px" />
        </div>

        {/* Second Div: School Name */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold font-serif">Government Inter College Darmiyan, Almora</h1>
          <h1 className="text-xl font-bold font-serif">राजकीय इंटर कॉलेज दड़मिया, अल्मोड़ा</h1>
        </div>

        {/* Third Div: Contact Info */}
        <div className="text-center md:text-right my-3 md:my-0">
          <h3 >Phone No. : +91 9927259263</h3>
          <h3 >E-Mail : principaldarmiyan@gmail.com</h3>
        </div>

      </div>
    </div>
  );
}

export default TopNav;
