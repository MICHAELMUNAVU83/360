import React, { useState } from "react";
import { Link } from "react-router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div class="md:px-12 px-4 relative  mx-auto">
      <div class="bg-white md:h-[90px] h-[50px]  rounded-[100px] p-4 flex justify-between items-center">
        <button class="hidden sm:flex bg-[#862638] hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer ibm-500  flex gap-3 items-center uppercase text-[14px] rounded-[50px]  text-[#E1C598]  px-5 py-3">
          <img src="/startup.png" class="w-[30px] h-[30px] object-cover" />I AM
          A CANDIDATE/ JOBSEEKER
        </button>
        <div>
          <Link to="/">
            <img src="/logo.png" class=" h-[50px] object-contain" />
          </Link>
        </div>
        <div class="flex gap-8  hidden sm:flex items-center uppercase ibm-500">
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

        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose className="text-4xl" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="text-4xl" onClick={toggleNav} />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute -top-8 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-white text-black duration-300 ibm-500 ease-in-out"
            : "sm:hidden absolute -top-8 right-0 left-[-110%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-black duration-300 ibm-500 ease-in-out"
        }
      >
        <ul
          onClick={toggleNav}
          class="ibm-500 text-[20px] items-center gap-4 flex flex-col"
        >
          <img src="/logo.png" class=" h-[50px] object-contain" />
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
