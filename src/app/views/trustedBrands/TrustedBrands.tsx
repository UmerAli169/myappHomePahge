import React from "react";
import BrandCard from "../../../components/TrustedBrands/cards";
import brandsData from "./data.json";

const TrustedBrands = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#FFFFFF]">
      <div className="w-full mx-auto">
        <p className=" lg:text-[63px] text-[56px] lg:leading-[76px] leading-[56px]  text-[#2E2F35] lg:font-bold  font-medium  text-center lg:mb-12 mb-8">
          Trusted by thousands
          <br /> of top DTC{" "}
          <span className="text-[#2D7474] font-handwriting">brands</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {brandsData.map((brand) => (
            <BrandCard
              key={brand.id}
              logo={brand.logo}
              image={brand.image}
              name={brand.name}
              width="w-full"
              height="h-56"
              imgWidth="w-32"
              imgHeight="h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
