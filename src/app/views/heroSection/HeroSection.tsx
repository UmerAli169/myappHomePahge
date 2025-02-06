import React from "react";
import Button from "../../../components/navbar/Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between   bg-[#E0F8F2] overflow-hidden   ">
      <div className="my-[128px] mx-[75px] w-[1290px]  h-[380px] flex  items-center justify-between  ">
        <div>
          <div className="w-[769px] text-[82px] font-bold leading-[96px] text-[#2E2F35]">
            Meet your{" "}
            <span className="font-[CoveredByYourGrace] text-[#009387]">
              favorite
            </span>
            new (old) marketing channel.
          </div>

          <div className=" mb-6 w-[553px] size-[20px] leading-[34px]  text-[#58595D] ">
            Remarkable results. Easier than email. Postcard marketing reinvented
            for modern ecommerce.
          </div>
          <div className="flex items-center gap-4 ">
            <Button
              text="TRY IT RISK-FREE"
              className="my-12 bg-[#FF6D2C] w-[261px] h-[64px] text-[13px] border border-[#2E2F35]  text-[#FFFFFF]"
            />

            <div className="flex flex-col items-center gap-2 ">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src="/svgs/hero/star.svg"
                    className="w-5 h-5 "
                  />
                ))}
              </div>
              <span className="text-[16px] mx-[11px] text-[#2E2F35]">
                5.0 Shopify Rating
              </span>
            </div>
          </div>
        </div>

        <div className=" md:mt-0 relative w-[470px]  h-[680px] ">
          <img
            src="/svgs/hero/sidepic.svg"
            alt="Hero"
            className="absolute top-8 left-0 w-full  h-full z-10  "
          />
          <img
            src="/svgs/hero/befindpic.svg"
            alt="Hero"
            className="w-full h-full z"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
