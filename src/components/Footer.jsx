import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div>
      <p class="bg-[#0F1D33]  w-[100%] my-4 rounded-3xl h-[40px] " />
      <div class="w-[100%] py-8 flex md:flex-row flex-col gap-5  flex justify-between">
        <div class="flex flex-col gap-2 items-start">
          <img src="/logo.png" class="h-[80px] object-contain" />
          <div class="flex gap-4 text-[#E1C598] ibm-500 items-center">
            <p>Copyright</p>
            <p>Terms and Conditions</p>
          </div>
        </div>

        <div class="flex gap-3 items-start">
          <div class="pr-8 pl-2  border-r-[1px] ibm-500 border-l-[1px] border-black flex flex-col gap-2 ">
            <Link
              to="/"
              class="hover:text-[#E1C598] ease-in-out duration-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              class="hover:text-[#E1C598] ease-in-out duration-500 cursor-pointer"
            >
              About Us
            </Link>
            <a
              href="/#services"
              class="hover:text-[#E1C598] ease-in-out duration-500 cursor-pointer"
            >
              Services
            </a>
            <a
              href="/#contact"
              class="hover:text-[#E1C598] ease-in-out duration-500 cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          <div class="px-2 flex flex-col gap-4">
            <div class="flex ibm-500 gap-2 items-center">
              <FaLinkedin class="text-[#E1C598] text-3xl" />
              360 Recruit
            </div>
            <div class="flex ibm-500 gap-2 items-center">
              <FaPhone class="text-[#E1C598] text-3xl" />
              +254 793 360 360
            </div>
            <div class="flex ibm-500 gap-2 items-center">
              <MdEmail class="text-[#E1C598] text-3xl" />
              recruit@360recruit.org
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
