import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div class="px-12  mx-auto">
      <div class="bg-white h-[90px]  rounded-[100px] p-4 flex justify-between items-center">
        <button class="bg-[#862638] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
          <img src="/startup.png" class="w-[30px] h-[30px] object-cover" />I AM
          A CANDIDATE/ JOBSEEKER
        </button>
        <div>
          <Link to="/">
            <img src="/logo.png" class=" h-[50px] object-contain" />
          </Link>
        </div>
        <div class="flex gap-8 items-center uppercase ibm-500">
          <Link
            to="/about"
            class="hover:text-[#E1C598] ease-in-out duration-500 cursor-pointer"
          >
            About
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
      </div>
    </div>
  );
};

export default Navbar;
