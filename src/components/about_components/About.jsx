import React from "react";

const About = () => {
  return (
    <div>
      <div class="pl-12 flex justify-between w-[100%] items-start">
        <div class="w-[60%] flex flex-col gap-6">
          <p>About Us</p>

          <div class="flex flex-col gap-3">
            <p>
              We are a Kenyan-based recruitment firm specializing in providing
              skilled and unskilled labor solutions both locally and
              internationally. We aim to connect businesses with top talent in
              various industries, ensuring smooth recruitment processes and
              successful outcomes for all stakeholders.
            </p>
            <p>
              We specialize in Fractional Talent Acquisition, HR Digitization,
              and Global Recruitment Solutions for organizations across Europe,
              Africa, Asia, and the Gulf. From managing remote tech teams in
              Kenya to executing large-scale hiring campaigns, we deliver
              tailored workforce strategies designed to meet your unique
              business goals.
            </p>

            <div class="w-[100%]">
              <button class="bg-[#0F1D33] text-white rounded-md p-3">
                Explore Services
              </button>
            </div>
          </div>
        </div>

        <div class="w-[37%]">
          <img
            class="w-[100%] h-[477px] object-cover"
            src="/Rectangle2.png"
            alt="Rectangle 2"
          />
        </div>
      </div>
      <p class="bg-[#0F1D33] w-[100%] my-4 rounded-3xl h-[40px] " />
    </div>
  );
};

export default About;
