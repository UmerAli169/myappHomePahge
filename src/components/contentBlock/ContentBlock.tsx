import React from "react";

interface ContentBlockProps {
  title: string;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ContentBlock;
