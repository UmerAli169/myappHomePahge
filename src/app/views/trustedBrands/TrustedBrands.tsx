// components/sections/trusted-brands/TrustedBrands.tsx
import React from 'react';
import BrandCard from '../../../components/TrustedBrands/cards';
import brandsData from './data.json';

const TrustedBrands = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-[63px]  leading-[76px] text-[#2E2F35] font-bold text-center mb-12">
          Trusted by thousands
          <br /> of top DTC <span className="text-[#2D7474] font-handwriting">brands</span>.
        </h2>

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
