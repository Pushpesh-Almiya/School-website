import React from "react";
import { HeroSection } from "../Components";

function Home() {
  return (
    <div>
      <section
        id="home"
        className="w-full bg-[#f0f4fa] shadow-lg rounded-lg mb-8"
      >
        <HeroSection />
      </section>
    </div>
  );
}

export default Home;
