import React from "react";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div class="pl-12 flex justify-between w-[100%] items-start">
        <div class="w-[60%] flex flex-col gap-6">
          <p class="mohave-700 text-[50px]">About Us</p>

          <div class="flex flex-col gap-5">
            <p class="ibm-300 text-[20px]">
              We are a Kenyan-based recruitment firm specializing in providing
              skilled and unskilled labor solutions both locally and
              internationally. We aim to connect businesses with top talent in
              various industries, ensuring smooth recruitment processes and
              successful outcomes for all stakeholders.
            </p>
            <p class="ibm-300 text-[20px]">
              We specialize in Fractional Talent Acquisition, HR Digitization,
              and Global Recruitment Solutions for organizations across Europe,
              Africa, Asia, and the Gulf. From managing remote tech teams in
              Kenya to executing large-scale hiring campaigns, we deliver
              tailored workforce strategies designed to meet your unique
              business goals.
            </p>

            <div class="w-[100%] mt-8">
              <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
                Explore Our Services <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div class="w-[37%]">
          <img class="w-[100%] h-[477px] object-cover" src="/aboutimg.png" />
        </div>
      </div>
      <p class="bg-[#0F1D33] w-[100%] my-4 rounded-3xl h-[40px] " />
    </div>
  );
};

export default About;
