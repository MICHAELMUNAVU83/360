import React from "react";

const Complete = () => {
  return (
    <div id="services" class="pl-12 mt-5 w-[100%]">
      <div class="w-[100%] flex flex-col items-start gap-0">
        <p class="mohave-700 leading-[56px] text-[50px]">
          Your Complete HR Solution -
        </p>
        <p class="ibm-500 text-[24px]">
          From Hiring, To Retention and Team Support
        </p>
        <div class="w-[100%] mt-8 mb-12 grid grid-cols-2 gap-12">
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[120px] h-[120px] flex items-center justify-center">
              <img src="/complete1.png" class="h-[70px] w-[70px]" alt="" />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 text-[20px]">End to End Recruitment</p>
          </div>
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[120px] h-[120px] flex items-center justify-center">
              <img src="/complete2.png" class="h-[70px] w-[70px]" alt="" />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 text-[20px]">
              HR SUPPORT FOR REMOTE TEAMS
            </p>
          </div>
          <div class="flex gap-2 relative items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[120px] h-[120px] flex items-center justify-center">
              <img src="/complete2.png" class="h-[70px] w-[70px]" alt="" />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 text-[20px]">HR Digitization</p>
          </div>
          <div class="flex gap-2  relative items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[120px] h-[120px] flex items-center justify-center">
              <img src="/complete2.png" class="h-[70px] w-[70px]" alt="" />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 text-[20px]">
              IMMIGRATION AND RELOCATION SERVICES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
