import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Beyond = () => {
  return (
    <div class="flex flex-col mt-8 gap-4 w-[100%]">
      <div class="w-[100%] rounded-[50px] h-[200px] relative">
        <img
          src="/beyondback.png"
          alt=""
          class="w-[100%] absolute rounded-[50px] h-[200px] object-cover"
        />
        <div class="bg-[#862638]/90 rounded-[50px] w-[100%] h-[200px] bg-opacity-50 absolute">
          <div class="flex flex-col gap-1 items-start px-12 h-[100%] justify-center">
            <p class="mohave-700 md:leading-[56px] text-[28px] md:text-[40px] text-white">
              Beyond Filling Roles –
            </p>
            <p class="ibm-400 text-white text-[16px] md:text-[20px]">
              Shaping Careers and Driving Goals!
            </p>
          </div>
        </div>
      </div>
      <div class="w-[100%] mt-6">
        <div class="flex  w-[100%] flex-col gap-1 items-start pl-4 md:pl-12 h-[100%] justify-center">
          <p class="mohave-700 text-[40px] md:leading-[56px] md:text-[40px] ">
            Why 360 Recruit?
          </p>
          <p class="ibm-400 text-[16px]  md:text-[20px]">
            From Hiring, To Retention and Team Support
          </p>
        </div>
        <div class="w-[100%] mt-8 md:pl-12 pl-4 mb-12 grid md:grid-cols-2 gap-8">
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/why1.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] top-[30px] md:left-[100px] left-[95px] rounded-[50px] -z-10 md:h-[40px] h-[35px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                COST EFFICIENCY
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                Reduce hiring expenses significantly by accessing top-tier
                talent whenever required, without long-term commitments, and
                adapt your team to meet your needs.
              </p>
            </div>
          </div>
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/why2.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] top-[30px] md:left-[100px] left-[95px] rounded-[50px] -z-10 md:h-[40px] h-[35px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                SCALEABILITY
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                Whether you're a startup looking to grow or an established
                company navigating seasonal demands, easily scale your workforce
                up or down as needed.
              </p>
            </div>
          </div>
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/why3.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] top-[30px] md:left-[100px] left-[95px] rounded-[50px] -z-10 md:h-[40px] h-[35px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                ACCESS TO NICHE TALENT
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                Need a tech wizard for a software overhaul or a marketing guru
                for your next big campaign? Our talent pool is ready to tackle
                your challenges.
              </p>
            </div>
          </div>
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/why4.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] top-[30px] md:left-[100px] left-[95px] rounded-[50px] -z-10 md:h-[40px] h-[35px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                SPEED AND AGILITY
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                Our extensive network ensures you get the right professionals
                quickly, helping you meet tight deadlines without compromising
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
