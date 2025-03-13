import React from "react";

const Complete = () => {
  return (
    <div id="services" class="md:pl-12 pl-4 mt-5 w-[100%]">
      <div class="w-[100%] flex flex-col items-start gap-0">
        <p class="mohave-700 leading-[56px] text-[40px]">
          Your Complete HR Solution -
        </p>
        <p class="ibm-500 text-[20px]">
          From Hiring, To Retention and Team Support
        </p>
        <div class="w-[100%] mt-8 mb-12 grid md:grid-cols-2 gap-12">
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/complete1.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase md:w-[400px] w-[300px] ibm-500 text-[18px]">
              End to End Recruitment
            </p>
          </div>
          <div class="flex relative gap-2 items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/complete2.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase md:w-[400px] w-[300px] ibm-500 text-[18px]">
              Employer of Record (HR support for Teams)
            </p>
          </div>
          <div class="flex gap-2 relative items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/complete3.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 md:w-[400px] w-[300px] text-[18px]">
              HR Digitization
            </p>
          </div>
          <div class="flex gap-2  relative items-center">
            <div class="border-[3px] border-[#862638] rounded-[25px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
              <img
                src="/complete4.png"
                class="md:h-[70px] md:w-[70px] h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <p class="absolute bg-[#E1C59880] left-[100px] rounded-[50px] -z-10 h-[40px] w-[200px]" />
            <p class="uppercase ibm-500 md:w-[400px] w-[300px] text-[18px]">
              IMMIGRATION AND RELOCATION SERVICES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
