import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  author: string;
  roleImage: string;
  cardStyles?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, roleImage ,cardStyles}) => {
  return (
    <div className="border border-gray-400 w-[506px]  rounded-lg p-6  flex flex-col justify-between relative " style={cardStyles}>
      <img src="/cards/acrossTrofe.svg" alt="" className="absolute -top-4 left-4 w-[48px] h-[43px]" />

      <p className="text-[16px] leading-[30px] italic text-[#58595D]">{text}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-[#A89B90] font-[14px]">{author}</p>
        <img src={roleImage} alt="Role" className="w-[88px] h-[23px]" />
      </div>
    </div>
  );
};

export default TestimonialCard;
