import React from "react";

interface ContentBlockProps {
  title: any;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <div >
      <p className="lg:text-[60px] text-[36px] lg:leading-[70px] leading-[60px]  text-[#2E2F35] lg:font-bold  font-medium   ">{title}</p>
      <p className=" w-[485px] font-medium size-[20px] leading-[34px] mb-10 text-[#58595D]">{description}</p>
    </div>
  );
};

export default ContentBlock;
