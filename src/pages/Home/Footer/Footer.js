import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-2xl">Wire Inc.</h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi
          quidem exercitationem soluta est minima beatae mollitia recusandae?
        </p>
        <div className="flex justify-between items-center my-6 w-[50%]">
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Docummentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Job</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Career</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 pb-2">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms and conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
