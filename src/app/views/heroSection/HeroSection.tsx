import React from 'react';
import Button from '../../../components/navbar/Button';

const Hero = () => {
  return (
    <div
      className='flex justify-center  p-10 lg:px-[75px] lg:py-[126px] 
                 lg:justify-between h-full min-h-[800px]   sm:min-h-[780px] bg-[#E0F8F2] flex-col lg:flex-row 
                  overflow-hidden lg:overflow-visible w-full z-30'
    >
      <div className='relative'>
        <div
          className='max-w-[769px] font-bold lg:text-[82px] text-[52px] 
                        leading-[66px] lg:leading-[96px] text-[#2E2F35] '
        >
          Meet your <span className='font-[CoveredByYourGrace] text-[#009387]'>favorite</span>
          new (old) marketing channel.
        </div>

        <div className='mb-6 w-full max-w-[553px] text-[20px] leading-[34px] text-[#58595D]'>
          Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.
        </div>

        <div className='flex items-center gap-4'>
          <Button
            text='TRY IT RISK-FREE'
            className='my-12 bg-[#FF6D2C] w-[261px] h-[64px] text-[13px] 
                       border border-[#2E2F35] text-[#FFFFFF]'
          />

          <div className='flex flex-col items-center gap-2'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <img key={star} src='/svgs/hero/star.svg' className='w-5 h-5' />
              ))}
            </div>
            <span className='text-[16px] mx-[11px] text-[#2E2F35]'>5.0 Shopify Rating</span>
          </div>
        </div>
      </div>
      <div className='h-60'></div>

      {/* Image Section */}
      <div
        className='md:mt-0 top-16 lg:top-16 lg:right-[-60px] 
                  z-10 w-full max-w-[470px] bottom-0 relative'
      >
       
        <div className=' z-10  absolute lg:absolute bottom-0 '>
        <img
            src='/svgs/hero/sidepic.svg'
            alt='Hero'
            className='  z-50  '
          />
         
        </div>
        <div className=' z-0 absolute bottom-0 '>
          <img src='/svgs/hero/befindpic.svg' alt='Hero' className=' z-10 ' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
