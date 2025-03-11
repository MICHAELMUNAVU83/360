import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <div className="relative mt-12">
      <div className="absolute w-[100%]   h-[90px] -top-8 md:-top-12">
        <Navbar />
      </div>
      <div
        className="w-full md:h-screen h-[90vh] bg-[#f5f5f5] bg-[70%]  md:bg-center  flex  items-center"
        style={{
          backgroundImage: "url('/homebg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="md:bg-black/40 bg-black/60 text-white h-[100%] flex items-center w-[100%] pl-12">
          <div className="flex flex-col md:w-[50%] items-start gap-5">
            <p className="mohave-700 md:leading-[72px] text-[40px] md:text-[64px]">
              Revolutionizing Recruitment, One Match at a Time
            </p>
            <p className="ibm-300 text-[24px]">
              Whether you need skilled professionals for long-term roles,
              semi-skilled workers for project-based assignments, or end-to-end
              HR solutions for your organization, we’ve got you covered.
            </p>
            <button className="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
              Explore Services <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
