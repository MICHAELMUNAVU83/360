import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <div class="relative mt-12">
      <div class="absolute w-[100%]  h-[90px] -top-12">
        <Navbar />
      </div>
      <div
        className="w-full h-screen bg-[#f5f5f5]  flex pl-12 items-center"
        style={{
          backgroundImage: "url('/Rectangle2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="flex flex-col w-[40%] items-start gap-5">
          <p class="mohave-700 leading-[72px] text-[56px]">
            Welcome to 360 Staffing!
          </p>
          <p class="ibm-300 text-[24px]">
            At 360 Staffing, we are revolutionizing the way businesses connect
            with talent. Whether you need skilled professionals for long-term
            roles, semi-skilled workers for project-based assignments, or
            end-to-end HR solutions for your organization, we’ve got you
            covered.
          </p>
          <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
            Explore Services <FaArrowRight />
          </button>
        </div>
      </div>
      <p class="bg-[#0F1D33] w-[100%] my-4 rounded-3xl h-[40px] " />
    </div>
  );
};

export default Hero;
