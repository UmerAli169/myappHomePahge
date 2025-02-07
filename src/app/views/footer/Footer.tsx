import React from 'react';
import footerLinks from './data.json';
import Button from '@/components/navbar/Button';
interface FooterLink {
  title: string;
  links: { name: string; url: string }[];
}

const Footer: React.FC = () => {
  return (
   <div>
     <footer className='bg-[#FFFFFFpy-10 px-6 '>
      <div className=' mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 '>
        <div className='flex flex-col space-y-4 w-[295px] '>
          <img src='/svgs/footer/eco.svg' alt='Eco Friendly' width={120} height={169} />
          <p className='text-[#58595D] text-[14px] font-medium leading-[22px]'>
            Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-8'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-[#2E2F35] font-[18px] mb-3'>{section.title}</h4>
              <ul className='space-y-2 font-[13px]'>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} className='text-gray-600 hover:text-gray-900 text-sm'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='space-y-4'>
          <p className='text-gray-600 text-sm'>
          <img src="/svgs/footer/mail.svg" alt="" />
            
              support@postpilot.com
       
          </p>
          <p className='text-gray-600 text-sm'>Printed with ❤️ at our facility in South Carolina.</p>
       
        </div>
      </div>

      <div className='mt-10 border-t border-gray-300 pt-4 text-gray-600 text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center space-x-3'>
              <img src='/svgs/navbar/postpilot.svg' alt='Logo' />
              <p className='text-2xl font-bold'>PostPilot</p>
            </div>

            <p className='text-sm text-gray-600'>© 2022 PostPilot, Inc. All rights reserved.</p>
          </div>

          <div className='flex space-x-3'>
            <Button text='Login' className='px-4 py-2 border bg-white' />
            <Button text='Create free account' className='px-4 py-2 bg-[#FF6D2C] text-[14px] text-[#FFFFFF]' />
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
