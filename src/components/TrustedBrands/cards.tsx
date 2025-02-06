// components/sections/trusted-brands/BrandCard.tsx
import React from 'react';
import Image from 'next/image';

interface BrandCardProps {
  logo: string;
  image: string;
  name: string;
  width?: string;
  height?: string;
  imgWidth?: string;
  imgHeight?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({
  logo,
  image,
  name,
  width = '100%', 
  height = '200px', 
  imgWidth = '120px', 
  imgHeight = '40px'
}) => {
  return (
    <div className={`flex flex-col items-center ${width} ${height}`}>
      <div className="relative w-full h-48 mb-4  overflow-hidden">
        <img
          src={image}
          alt={`${name} marketing example`}
          className="w-full h-full object-cover"
        />
      </div>
      <img
        src={logo}
        alt={name}
        className={`object-contain ${imgWidth} ${imgHeight}`}
      />
    </div>
  );
};

export default BrandCard;
