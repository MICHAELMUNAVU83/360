import React from "react";
import Hero from "../components/about_components/Hero";
import About from "../components/about_components/About";
import Philosophy from "../components/about_components/Philosophy";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default Home;
