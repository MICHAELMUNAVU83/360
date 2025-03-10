import React from "react";

const Footer = () => {
  return (
    <div>
      <p class="bg-[#0F1D33] w-[100%] my-4 rounded-3xl h-[40px] " />
      <div class="w-[100%] flex justify-between">
        <div class="flex flex-col gap-2">
          <img src="/logo.png" class="w-[184px] object-contain" alt="Group 1" />
          <div class="flex gap-4 items-center">
            <p>Copyright</p>
            <p>Terms and Conditions</p>
          </div>
          <p>@pyrauslimited. All Rights Reserved</p>
        </div>

        <div class="flex gap-3 items-start">
          <div class="px-2  border-l-[1px] border-r-[1px] flex flex-col gap-2 ">
            <p>Job Seekers</p>
            <p>Job Seekers</p>
            <p>Job Seekers</p>
            <p>Job Seekers</p>
          </div>
          <div class="px-2">
            <p>Job Seekers</p>
            <p>Job Seekers</p>
            <p>Job Seekers</p>
            <p>Job Seekers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
