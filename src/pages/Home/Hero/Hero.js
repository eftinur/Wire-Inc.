import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
      <div className="max-w-[820px] w-full h-screen mt-[-96px]  text-center flex flex-col justify-center mx-auto">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Growing with data analytics
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
          Grow with data
        </h1>
        <div className="flex justify-center items-center md:py-6">
          <p className="text-xl sm:text-4xl md:text-5xl py-4 capitalize">
            Fast, flexible financing for
          </p>
          <Typed
          className="text-xl sm:text-4xl md:text-5xl py-4 pl-2 capitalize text-[#00df9a]"
          strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
        </div>
        <p className="text-xl md:2xl font-meduim text-gray-600 capitalize">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms
        </p>
        <button className="w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 py-3 font-medium">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
