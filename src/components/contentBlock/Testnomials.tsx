import React from "react";

interface CardProps {
  title: string;
  description: string;
  highlight: string;
}

const Card: React.FC<CardProps> = ({ title, description, highlight }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">
        {(title || "").split(" ").map((word, index) =>
          word === highlight ? (
            <span key={index} className="text-teal-600">
              {word}{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </h2>

      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
