'use client';
import React from 'react';
import ContentBlock from '../../../components/contentBlock/ContentBlock';
import TestimonialCard from '../../../components/contentBlock/Testnomials';
import testimonials from './data.json';
import Button from '../../../components/navbar/Button';

const PostPilot = () => {
  return (
    <div className=' h-[2373px]  bg-[#FDF3EA] '>
      <div className='w-[1290px]  mx-auto lg:pt-[86px] pt-[66px] '>
        <p className='  mx-auto  lg:text-[70px] w-[941px] text-[46px] lg:leading-[76px] leading-[56px]  text-[#2E2F35] lg:font-bold  font-medium  text-center '>
          PostPilot makes it a <span className='text-[#009387] font-Covered By Your Grace'>cinch</span> to send
          personalized, profit-generating postcards.
        </p>
        <div className='w-full h-[663px] mt-[63.25px] flex justify-centers items-center   '>
          <div className='grid grid-col  w-[516px] h-[557px]  '>
            <ContentBlock
              title={
                <>
                  <span className='text-[#009387] size-[80px] leading-[70px] font-normal font-Covered By Your Grace'>
                    Power{' '}
                  </span>
                  acquisition & retention
                </>
              }
              description='Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.'
            />

            <div>
              {testimonials[0] && (
                <TestimonialCard
                  text={testimonials[0].text}
                  author={testimonials[0].author}
                  roleImage={testimonials[0].roleImage}
                  cardStyles={{ width: '500px', height: '200px' }}
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
                  <span className='w-[626px text-[60px] leading-[70px] '>
                    {' '}
                    against iOS updates, jacked-up CPCs & spam folders
                  </span>
                </>
              }
              description='Deliver your message to all of your customers — for less than the cost of a click.™.'
            />

            <div>
              {testimonials[1] && (
                <TestimonialCard
                  text={testimonials[1].text}
                  author={testimonials[1].author}
                  roleImage={testimonials[1].roleImage}
                  cardStyles={{ width: '500px', height: '200px' }}
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

            <div>
              {testimonials[2] && (
                <TestimonialCard
                  text={testimonials[2].text}
                  author={testimonials[2].author}
                  roleImage={testimonials[2].roleImage}
                  cardStyles={{ width: '500px', height: '200px' }}
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
