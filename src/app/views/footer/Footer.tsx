import React from "react";
import footerLinks from  './data.json'
import Button from "@/components/navbar/Button";
interface FooterLink {
  title: string;
  links: { name: string; url: string }[];
}



const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <img src="/icons/eco-friendly.png" alt="Eco Friendly" width={80} height={80} />
          <p className="text-gray-600 text-sm">
            Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-800 font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            📩 <a href="mailto:support@postpilot.com" className="text-gray-900">support@postpilot.com</a>
          </p>
          <p className="text-gray-600 text-sm">
            Printed with ❤️ at our facility in South Carolina.
          </p>
          <div className="flex space-x-4">
            <button className="border border-gray-500 px-4 py-2 rounded-md text-sm">Login</button>
            <button className="bg-[#FF5A5F] text-white px-4 py-2 rounded-md text-sm">Try it for free</button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-gray-600 text-sm">
  <div className="flex justify-between items-center">
  <div className="flex flex-col items-start">
  <div className="flex items-center space-x-3">
    <img src="/svgs/navbar/postpilot.svg" alt="Logo" />
    <p className="text-2xl font-bold">PostPilot</p>
  </div>

  <p className="text-sm text-gray-600">© 2022 PostPilot, Inc. All rights reserved.</p>
</div>


   

    <div className="flex space-x-3">
      <Button text="Login" className="px-4 py-2 border bg-white" />
      <Button text="Create free account" className="px-4 py-2 bg-[#FF6D2C] text-[14px] text-[#FFFFFF]" />
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
