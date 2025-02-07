import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconWidth, iconHeight, title, description, bgColor }) => {
  return (
    <div className={`p-6  border    h-[506px] rounded-[13px] ${bgColor}`}>
      <div className=' m-12'>
        <Image src={icon} alt={title} width={iconWidth} height={iconHeight} />
      </div>

      <div className='  text-center'>
        <p className='text-[26px] leading-[36px] text-[#2E2F35] font-bold '>{title}</p>
        <p className='text-gray-600 mt-2'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
