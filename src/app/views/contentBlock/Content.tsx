"use client";
import React from "react";
import CTAButton from "../../../components/navbar/Button";

import ContentBlock from "../../../components/contentBlock/ContentBlock";

import TestimonialCard from "../../../components/contentBlock/Testnomials";

import testimonials from "./data.json";

const PostPilot = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ContentBlock
        title="CPCs & spam folders"
        description="Deliver your message to all your customers—less than the cost of a click."
      />

      {/* <div className="mt-6">
        {testimonials.map((t: any, index: any) => (
          <TestimonialCard key={index} text={t.text} author={t.author} />
        ))}
      </div> */}

      {/* <div className="mt-8">
        <CTAButton text="TRY IT RISK FREE" onClick={() => alert("Clicked!")} />
      </div> */}
    </div>
  );
};

export default PostPilot;
