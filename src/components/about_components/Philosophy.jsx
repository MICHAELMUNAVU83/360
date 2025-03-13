import React from "react";

import { FaArrowRight } from "react-icons/fa";
const Philosophy = () => {
  return (
    <div>
      <div class="md:pl-12 pl-4 flex md:flex-row flex-col gap-4 justify-between w-[100%] items-start">
        <div class="md:w-[45%] w-[100%] flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <p class="mohave-700 leading-[40px]  text-[40px]">Our Philosophy</p>
            <p class="ibm-500">Why do we do things the way we do?</p>
          </div>
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
                HOLISTIC APPROACH
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                By understanding the unique needs of businesses and the
                aspirations of individuals, we create tailored workforce
                solutions that empower both employers and employees to thrive.
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
            <p class="absolute bg-[#E1C59880] top-[30px] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                GLOBAL PERSPECTIVE, LOCAL IMPACT
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                While we operate across borders, we remain deeply rooted in the
                communities we serve. By harnessing the potential of skilled and
                unskilled labor from Kenya and beyond, we contribute to building
                sustainable livelihoods and driving economic growth.
              </p>
            </div>
          </div>

          <div class="hidden md:block w-[100%]">
            <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
              Contact Us <FaArrowRight />
            </button>
          </div>
        </div>
        <div class="md:w-[40%] w-[100%] flex flex-col gap-4">
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/why2.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] top-[30px] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <div class="mt-8">
              <p class="ibm-500  uppercase text-[16px] md:text-[24px]">
                PEOPLE FIRST
              </p>
              <p class="ibm-300 md:w-[400px] w-[270px] mt-2  text-[16px] md:text-[18px]">
                We prioritize relationships over transactions. Through
                transparency, trust, and innovation, we foster meaningful
                connections that enable long-term success for our clients and
                candidates alike.
              </p>
            </div>
          </div>
          <div>
            <div class="w-[100%] relative h-[500px]">
              <div class="flex flex-col gap-2 mt-4">
                <div class="w-[100%] relative h-[500px]">
                  <img
                    class="w-[100%] h-[477px] rounded-[50px]  absolute object-cover"
                    src="/contact.png"
                    alt="Rectangle 2"
                  />
                  <div class="bg-[#822234]/80 w-[100%] rounded-[50px] absolute h-[477px]">
                    <div class="flex text-white flex-col justify-center items-start px-4 h-[100%] gap-1">
                      <p class="mohave-700 leading-[56px] text-[80px] md:text-[72px]">
                        15 Years +
                      </p>
                      <p class="mohave-700  text-[28px] ">
                        Of Recruiting and HR Experience
                      </p>
                      <p class="ibm-400 text-[18px] ">
                        Our team of experts brings over 15 years of combined
                        experience in Human Resource services, specializing in
                        International recruitment. We have built strong
                        relationships across multiple regions and industries,
                        enabling us to cater to diverse labor needs efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:hidden block w-[100%]">
            <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
              Contact Us <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
