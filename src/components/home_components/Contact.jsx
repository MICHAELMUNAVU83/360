import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact">
      <div class="flex justify-between w-[100%] items-start">
        <div class="w-[60%] flex flex-col gap-4">
          <div class="pl-12 mohave-700 leading-[56px] text-[50px] ">
            Contact Us
          </div>
          <form class="w-[100%] flex flex-col gap-4 ">
            <div class="w-[100%] grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="First Name.."
                  class="w-[100%] border-[#E1C598] h-[50px] ibm-500 placeholder-black border-[1px] p-2 rounded-md"
                />
                <p class="text-[#0F1D33] text-[12px]">
                  Please enter your first name *
                </p>
              </div>
              <div class="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="w-[100%] border-[#E1C598] h-[50px] ibm-500 placeholder-black border-[1px] p-2 rounded-md"
                />
                <p class="text-[#0F1D33] text-[12px]">
                  Please enter your last name *
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <textarea
                placeholder="Message"
                class="w-[100%] border-[#E1C598]  ibm-500 placeholder-black h-[200px] border-[1px] p-2 rounded-md"
              />
              <p class="text-[#0F1D33] text-[12px]">
                Insert Your Message Here*
              </p>
            </div>
            <div class="w-[100%]">
              <button class="bg-[#0F1D33] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
                Submit Message <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
        <div class="w-[35%] flex flex-col gap-4">
          <div class="flex flex-col gap-2 mt-4">
            <div class="w-[100%] relative h-[500px]">
              <img
                class="w-[100%] h-[477px] rounded-[50px]  absolute object-cover"
                src="/contact.png"
                alt="Rectangle 2"
              />
              <div class="bg-[#822234]/80 w-[100%] rounded-[50px] absolute h-[477px]">
                <div class="flex text-white flex-col justify-center items-start px-4 h-[100%] gap-1">
                  <p class="mohave-700 leading-[56px]  text-[96px]">
                    15 Years +
                  </p>
                  <p class="mohave-700  text-[32px]">
                    Of Recruiting and HR Experience
                  </p>
                  <p class="ibm-400 text-[20px]">
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
    </div>
  );
};

export default Contact;
