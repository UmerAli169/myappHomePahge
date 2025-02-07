import React from "react";

const DirectMailStats = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#F3FAFA] h-[642px]">
      <div className="max-w-5xl mx-auto text-center">
        <p className=" lg:text-[63px] text-[56px] lg:leading-[76px] leading-[56px]  text-[#2E2F35] lg:font-bold  font-medium  text-center lg:mb-12 mb-8">
          Why use direct mail?
          <br />
          <span className="">
            It <span className="text-[#2D7474] font-handwriting">works </span>{" "}
            like crazy.
          </span>
        </p>

        <div className="flex justify-around items-center lg:w-[1024px]  relative">
          <div className="text-center w-[228px]">
            <div className="lg:text-[64px] text-[44px] font-bold text-[#2E2F35]">
              28X
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#58595D]">
              Higher response rate than email & digital
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src="\mails\mail.png" alt="" className="w-[228px] h-[201px]" />
            <p className="mt-2 text-[#58595D]">Your messages get read</p>{" "}
          </div>

          <div className="text-center w-[228px]">
            <div className="lg:text-[64px] text-[44px] font-bold text-[#2E2F35]">
              17days
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#58595D]">
              Lifespan of a postcard vs. seconds for email or SMS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectMailStats;
