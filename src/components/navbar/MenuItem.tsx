import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";


const MenuItem: React.FC<{ label: string; enabled: boolean; options: string[] }> = ({
  label,
  enabled,
  options,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasDropdown = options.length > 0;

  const toggleDropdown = () => {
    if (hasDropdown) setIsDropdownOpen((prev) => !prev);
  };

  return (
    <li className="relative">
      <button className="flex items-center space-x-1" onClick={toggleDropdown}>
        <span className={enabled ? "text-black" : "text-gray-400"}>{label}</span>
        {hasDropdown && <ChevronDown size={16} />}
      </button>

      {hasDropdown && isDropdownOpen && (
        <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-md p-2">
          {options.map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {option}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};


export default MenuItem;
