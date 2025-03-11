import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="flex justify-between w-[100%] items-start">
        <div class="w-[45%] flex flex-col gap-4">
          <div class="pl-12">Contact Us</div>
          <form class="w-[100%] flex flex-col gap-4 ">
            <div class="w-[100%] grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="First Name"
                  class="w-[100%] border-[#0F1D33] border-[1px] p-2 rounded-md"
                />
              </div>
              <div class="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="First Name"
                  class="w-[100%] border-[#0F1D33] border-[1px] p-2 rounded-md"
                />
              </div>
            </div>
            <textarea
              placeholder="Message"
              class="w-[100%] border-[#0F1D33] border-[1px] p-2 rounded-md"
            />
            <div class="w-[100%]">
              <button class="bg-[#0F1D33] text-white rounded-md p-3">
                Explore Services
              </button>
            </div>
          </form>
        </div>
        <div class="w-[45%] flex flex-col gap-4">
          <div class="flex flex-col gap-2 mt-4">
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

export default Contact;
