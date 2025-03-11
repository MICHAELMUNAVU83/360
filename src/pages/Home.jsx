import React from "react";
import Hero from "../components/home_components/Hero";
import Complete from "../components/home_components/Complete";
import Mission from "../components/home_components/Mission";
import Beyond from "../components/home_components/Beyond";
import Contact from "../components/home_components/Contact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <Complete />
      <Mission />
      <Beyond />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
