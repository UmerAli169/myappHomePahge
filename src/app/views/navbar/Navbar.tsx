'use client';
import React, { useState, useEffect } from 'react'; // Import useEffect here
import { Menu, X } from 'lucide-react';
import Button from '../../../components/navbar/Button';
import MenuItem from '../../../components/navbar/MenuItem';
import data from './data.json'; // Import your data.json file

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<{ label: string; enabled: boolean; options: string[] }[]>([]);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    setMenuItems(data.menuItems);
  }, []);

  return (
    <div className="flex items-center justify-between shadow-sm px-4 py-3 md:px-8 bg-[#FFFFFF]">
      <div className="flex items-center space-x-3">
        <img src="/svgs/navbar/postpilot.svg" alt="Logo" />
        <p className="text-2xl font-bold">PostPilot</p>
      </div>

      <nav className="hidden md:flex w-full max-w-[793px] justify-between items-center">
        <ul className="flex space-x-6 h-[56px] items-center justify-between w-[487px]">
          {menuItems.map((item) => (
            <MenuItem key={item.label} label={item.label} enabled={item.enabled} options={item.options} />
          ))}
        </ul>

        <div className="flex space-x-4">
          <Button text="Login" className="px-4 py-2 border bg-white" />
          <Button text="Create free account" className="px-4 py-2 bg-[#FF6D2C] text-[14px] text-[#FFFFFF]" />
        </div>
      </nav>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} label={item.label} enabled={item.enabled} options={item.options} />
            ))}
          </ul>

          <div className="flex flex-col space-y-3 mt-4">
            <Button text="Login" className="px-4 py-2 border bg-white w-full" />
            <Button text="Create free account" className="px-4 py-2 bg-[#FF6D2C] text-[14px]  text-[#FFFFFF] w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
