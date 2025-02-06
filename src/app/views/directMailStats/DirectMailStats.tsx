// components/sections/direct-mail-stats/DirectMailStats.tsx
import React from 'react';

const DirectMailStats = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#F3FAFA]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[63px]  leading-[76px] text-[#2E2F35] font-bold text-center mb-12">
          Why use direct mail?
          <br />
          <span className="">It <span className='text-[#2D7474] font-handwriting'>works </span> like crazy.</span>
          </h2>

        <div className="flex justify-center items-center space-x-12 relative">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FF6D2C]">28X</div>
            <div className="text-lg font-medium mt-2">
              Higher response rate
              <br />than email & digital
            </div>
          </div>
          
          <div className="relative w-64 h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white opacity-50 rounded-lg"></div>
            
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                         w-24 h-40 bg-[#FF6D2C] rounded-t-lg flex flex-col 
                         justify-end items-center text-white pt-2"
            >
              <span className="text-2xl font-bold">90%</span>
              <span className="text-xs">Gets read</span>
            </div>
            
            {/* Blue Bar */}
            <div 
              className="absolute bottom-0 left-1/2 transform translate-x-1/2 
                         w-24 h-12 bg-[#2D7474] rounded-t-lg flex flex-col 
                         justify-end items-center text-white pt-2"
            >
              <span className="text-2xl font-bold">20%</span>
              <span className="text-xs">Gets read</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-[#2D7474]">17 Days</div>
            <div className="text-lg font-medium mt-2">
              Lifespan of a postcard
              <br />vs seconds for email
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default DirectMailStats;