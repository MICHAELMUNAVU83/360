import React from "react";

const Mission = () => {
  return (
    <div class="flex flex-col gap-4 w-[100%]">
      <div class="w-[100%] h-[200px] relative">
        <img
          src="/Rectangle2.png"
          alt=""
          class="w-[100%] absolute h-[200px] object-cover"
        />
        <div class="bg-red-500 w-[100%] h-[200px] bg-opacity-50 absolute">
          <div class="flex flex-col gap-4 items-start">
            <p>Our Mission</p>
            <p>
              To deliver exceptional workforce solutions with integrity,
              passion, and a commitment to excellence, ensuring every
              partnership creates lasting value.
            </p>
          </div>
        </div>
      </div>
      <div class="pl-12 w-[100%]">
        <div class="w-[100%] flex flex-row items-start justify-between">
          <div class="w-[60%] flex flex-col gap-4">
            <p>
              Fractional Recruitment – Flexible Talent, On-Demand Expertise.
            </p>
            <div class="flex flex-col ">
              <button class="bg-[#0F1D33] text-white rounded-md p-3">
                Explore Services
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <p>
                In today’s fast-moving business landscape, finding the right
                talent at the right time can determine your success. Fractional
                Recruitment is a game-changing solution that gives businesses
                access to top-tier professionals on a part-time or project
                basis—without long-term commitments.
              </p>
              <p>
                At 360 Recruit, we understand that every hiring process is
                unique. Our Fractional Recruitment service allows us to step in
                at any stage, offering the tailored support you need, when you
                need it most. Whether you're struggling to source for candidates
                with specialized skills, additional support for short-term
                projects or senior-level expertise without full-time commitment,
                we act as an extension of your team—helping you hire smarter and
                faster.
              </p>
              <div class="flex flex-col ">
                <button class="bg-[#0F1D33] text-white rounded-md p-3">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
          <div class="w-[37%]">
            <img
              src="/Rectangle2.png"
              alt=""
              class="h-[650px] object-cover w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
