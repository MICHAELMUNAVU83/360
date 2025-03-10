import React from "react";

const Philosophy = () => {
  return (
    <div>
      <div class="pl-12 flex justify-between w-[100%] items-start">
        <div class="w-[45%] flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <p>Our Philosophy</p>
            <p>Why do we do things the way we do?</p>
          </div>
          <div class="flex gap-2 items-start">
            <div class="w-[140px] h-[140px] border-[#0F1D33] border-[1px] flex justify-center items-center">
              <img src="/Group 1.png" alt="Group 1" />
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <p>HOLISTIC APPROACH</p>
              <p>
                By understanding the unique needs of businesses and the
                aspirations of individuals, we create tailored workforce
                solutions that empower both employers and employees to thrive.
              </p>
            </div>
          </div>
          <div class="flex gap-2 items-start">
            <div class="w-[140px] h-[140px] border-[#0F1D33] border-[1px] flex justify-center items-center">
              <img src="/Group 1.png" alt="Group 1" />
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <p>HOLISTIC APPROACH</p>
              <p>
                By understanding the unique needs of businesses and the
                aspirations of individuals, we create tailored workforce
                solutions that empower both employers and employees to thrive.
              </p>
            </div>
          </div>

          <div class="w-[100%]">
            <button class="bg-[#0F1D33] text-white rounded-md p-3">
              Explore Services
            </button>
          </div>
        </div>
        <div class="w-[45%] flex flex-col gap-4">
          <div class="w-[140px] h-[140px] border-[#0F1D33] border-[1px] flex justify-center items-center">
            <img src="/Group 1.png" alt="Group 1" />
          </div>
          <div class="flex flex-col gap-2 mt-4">
            <p>HOLISTIC APPROACH</p>
            <p>
              By understanding the unique needs of businesses and the
              aspirations of individuals, we create tailored workforce solutions
              that empower both employers and employees to thrive.
            </p>
            <div class="w-[100%] relative h-[500px]">
              <img
                class="w-[100%] h-[477px]  absolute object-cover"
                src="/Rectangle2.png"
                alt="Rectangle 2"
              />
              <div class="bg-red-500/50 w-[100%] absolute h-[477px]">
                <div class="flex flex-col gap-4">
                  <p>15 Years +</p>
                  <p>Of Recruiting and HR Experience</p>
                  <p>
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

export default Philosophy;
