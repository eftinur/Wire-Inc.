import React, { useState } from "react";
import "./Header.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <nav className="flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4">
      {/* large screen */}
      <h1 className="text-2xl">Wire Inc.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="py-4 pl-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
      </div>
      {/* small screen */}
      <div className={ nav ? 'fixed top-0 left-0 w-[60%] h-full bg-[#000300] border-r border-r-gray-900 pt-8 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="text-2xl pl-4">Wire Inc.</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Services</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
