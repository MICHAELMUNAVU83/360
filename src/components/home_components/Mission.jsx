import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Mission = () => {
  return (
    <div class="flex flex-col gap-4 w-[100%]">
      <div class="w-[100%] rounded-[50px] h-[200px] relative">
        <img
          src="/missionback.png"
          alt=""
          class="w-[100%] absolute rounded-[50px] h-[200px] object-cover"
        />
        <div class="bg-[#862638]/90 rounded-[50px] w-[100%] h-[200px] bg-opacity-50 absolute">
          <div class="flex flex-col gap-1 items-start px-12 h-[100%] justify-center">
            <p class="mohave-700 md:leading-[56px] text-[28px] md:text-[50px] text-white">
              Our Mission
            </p>
            <p class="ibm-400 text-white text-[16px] md:text-[24px]">
              To deliver exceptional workforce solutions with integrity,
              passion, and a commitment to excellence, ensuring every
              partnership creates lasting value.
            </p>
          </div>
        </div>
      </div>
      <div class="md:pl-12 pl-4 mt-4 w-[100%]">
        <div class="w-[100%] md:flex-row flex-col-reverse gap-8 flex  items-start justify-between">
          <div class="md:w-[60%] w-[100%] flex flex-col gap-4">
            <p class="mohave-700 md:leading-[56px] leading-[40px] text-[40px] md:text-[50px]">
              Fractional Recruitment – Flexible Talent, On-Demand Expertise.
            </p>
            <div class="flex flex-col w-[100%]">
              <div>
                <button class="bg-[#862638] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
                  <img
                    src="/startup.png"
                    class="w-[30px] h-[30px] object-cover"
                  />
                  Startup Approved
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <p class="ibm-300 text-[18px] md:text-[20px]">
                In today’s fast-moving business landscape, finding the right
                talent at the right time can determine your success. Fractional
                Recruitment is a game-changing solution that gives businesses
                access to top-tier professionals on a part-time or project
                basis—without long-term commitments.
              </p>
              <p class="ibm-300 text-[18px] md:text-[20px]">
                At 360 Recruit, we understand that every hiring process is
                unique. Our Fractional Recruitment service allows us to step in
                at any stage, offering the tailored support you need, when you
                need it most. Whether you're struggling to source for candidates
                with specialized skills, additional support for short-term
                projects or senior-level expertise without full-time commitment,
                we act as an extension of your team—helping you hire smarter and
                faster.
              </p>
              <div class="flex flex-col  w-[100%]">
                <div>
                  <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
                    Explore Our Services <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-[37%] w-[100%]">
            <img
              src="/missionimg.png"
              alt=""
              class="md:h-[650px] h-[400px] object-cover md:object-center object-top  w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
