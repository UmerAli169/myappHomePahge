'use client';
import React from 'react';
import ContentBlock from '../../../components/contentBlock/ContentBlock';
import TestimonialCard from '../../../components/contentBlock/Testnomials';
import testimonials from './data.json';
import Button from '../../../components/navbar/Button';

const PostPilot = () => {
  return (
    <div className='  bg-[#FDF3EA] '>
      <div className='  mx-auto lg:pt-[86px] pt-[66px] '>
        <p className='  mx-auto  lg:text-[70px]   text-[26px] lg:leading-[76px] leading-[26px]  text-[#2E2F35] lg:font-bold  font-medium  text-center '>
          PostPilot makes it a <span className='text-[#009387] font-Covered By Your Grace'>cinch</span> to send
          personalized, profit-generating postcards.
        </p>
        <div className='w-full h-[663px] mt-[63.25px] flex justify-centers items-center   '>
          <div className='grid grid-col  w-[516px] h-[557px]  '>
            <ContentBlock
              title={
                <div >
                  <span className='text-[#009387]  font-bold font-Covered By Your Grace'>
                    Power{' '}
                  </span>
                  acquisition & retention
                </div>
              }
              description='Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.'
            />

            <div className='px-4'>
              {testimonials[0] && (
                <TestimonialCard
                  text={testimonials[0].text}
                  author={testimonials[0].author}
                  roleImage={testimonials[0].roleImage}
                />
              )}
            </div>
          </div>
        </div>
        <div className='w-full h-[663px]  flex justify-end items-center  '>
          <div className='grid grid-col  w-[516px] h-[557px]  '>
            <ContentBlock
              title={
                <>
                  <span className='text-[#009387] size-[80px] leading-[70px] font-normal font-Covered By Your Grace '>
                    Fight back{' '}
                  </span>
                  <span className=' lg:text-[60px] lg:leading-[70px] text-[26px] leading-[26px]'>
                    {' '}
                    against iOS updates, jacked-up CPCs & spam folders
                  </span>
                </>
              }
              description='Deliver your message to all of your customers — for less than the cost of a click.™.'
            />

            <div className='px-4'>
              {testimonials[1] && (
                <TestimonialCard
                  text={testimonials[1].text}
                  author={testimonials[1].author}
                  roleImage={testimonials[1].roleImage}
                />
              )}
            </div>
          </div>
        </div>
        <div className='w-full h-[663px]  flex justify-centers items-center  '>
          <div className='grid grid-col  w-[516px] h-[557px]  '>
            <ContentBlock
              title={
                <>
                  Done for{' '}
                  <span className='text-[#009387] size-[80px] leading-[70px] font-normal font-Covered By Your Grace'>
                    you{' '}
                  </span>
                </>
              }
              description='From design & strategy to stamp-licking, our ecom experts help you every step of the way.'
            />

            <div className='px-4'>
              {testimonials[2] && (
                <TestimonialCard
                  text={testimonials[2].text}
                  author={testimonials[2].author}
                  roleImage={testimonials[2].roleImage}
                />
              )}
            </div>
            <Button
              text='Try it RISK-free'
              className='px-4 py-2 bg-[#FF6D2C] text-[13px] border border-black  text-[#FFFFFF] h-[64px]  w-[261px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPilot;
