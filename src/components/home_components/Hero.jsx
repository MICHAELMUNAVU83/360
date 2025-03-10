import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-[#f5f5f5]  flex pl-12 items-center"
        style={{
          backgroundImage: "url('/Rectangle 2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="flex flex-col w-[40%] items-start gap-5">
          <p>Welcome to 360 Staffing!</p>
          <p>
            At 360 Staffing, we are revolutionizing the way businesses connect
            with talent. Whether you need skilled professionals for long-term
            roles, semi-skilled workers for project-based assignments, or
            end-to-end HR solutions for your organization, we’ve got you
            covered.
          </p>
          <button class="bg-[#0F1D33] text-white rounded-md p-3">
            Explore Services
          </button>
        </div>
      </div>
      <p class="bg-[#0F1D33] w-[100%] my-4 rounded-3xl h-[40px] " />
    </div>
  );
};

export default Hero;
