import React from "react";
import Hero from "../components/home_components/Hero";
import Complete from "../components/home_components/Complete";
import Mission from "../components/home_components/Mission";
import Beyond from "../components/home_components/Beyond";
import Contact from "../components/home_components/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <Complete />
      <Mission />
      <Beyond />
      <Contact />
    </div>
  );
};

export default Home;
