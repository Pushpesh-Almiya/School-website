import React from "react";
import { HeroSection } from "../Components";
import Announcement from "../Components/Announcement";

function Home() {
  return (
    <div className="mb-4">
      <Announcement/>
      <section
        id="home"
        className="w-full bg-[#f0f4fa] shadow-lg rounded-lg"
      >
        <HeroSection />
      </section>
    </div>
  );
}

export default Home;
