import React from "react";

interface ContentBlockProps {
  title: any;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <div className="w-full min-w-[255px] px-4 " >
      <p className="lg:text-[60px]  text-[26px]  min-w-[285px]   text-[#2E2F35] lg:font-bold  font-medium   ">{title}</p>
      <p className=" min-w-[255px] font-medium text-sm lg:text-[14px] leading-[34px] mb-10 text-[#58595D]">{description}</p>
    </div>
  );
};

export default ContentBlock;
