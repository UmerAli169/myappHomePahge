import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button 
      className={`rounded-lg drop-shadow-custom Inter cursor-pointer ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
