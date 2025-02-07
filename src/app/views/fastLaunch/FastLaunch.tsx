import React from 'react';
import steps from './data.json';

const FastLaunch = () => {
  return (
    <section className='lg:py-[96px] py-[46px] lg:px-[50px] px-[30px]  bg-[#E3F8F8]'>
      <div className=' mx-auto   '>
        <p className=' lg:text-[63px] text-[26px] lg:leading-[76px] leading-[26px]  text-[#2E2F35] lg:font-bold  font-medium  text-center lg:mb-12 mb-8'>
          Fast launch. Fast results.
          <br />
          <span className='text-[#2D7474] font-handwriting'> Here's how. </span>
        </p>

        <div className='space-y-8 mt-12'>
          {steps.map((step, index) => (
            <div key={step.number} className='flex items-start gap-4 relative'>
              <div className='relative'>
                <div className='text-[#009387] lg:text-[48px] text-[24px]   font-medium w-12'>{step.number}</div>
                {index !== steps.length - 1 && (
                  <div className='absolute lg:left-6 left-3 top-8 w-px h-24 bg-[#2E2F35] opacity-20' aria-hidden='true' />
                )}
              </div>

              <div>
                <h3 className='text-[#2E2F35]  lg:text-[36px]   text-[24px] font-bold mx-[20px]'>{step.title}</h3>
                {step.description && <p className='text-[#58595D] font-normal text-[20px] leading-[24px] mx-[20px]'>{step.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastLaunch;
