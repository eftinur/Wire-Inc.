import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase">
            Want tips and tricks to optimize your flow?
          </h2>
          <p className="py-6">Sign up to our newsletter and stay upto date</p>
        </div>
        <div className="">
          <div className="w-full flex flex-col justify-start items-start sm:flex-row sm:justify-between sm:items-center px-2">
            <input className="p-3 w-full rounded-md" type="text" name="" id="" placeholder="Enter email" />
            <button className="w-[200px] bg-[#00df9a] rounded-md my-6 py-3 ml-0 sm:ml-3 font-medium">
              Get Started
            </button>
          </div>
          <p className="px-2">
            We care about your data. Read our{" "}
            <span className="text-[#00df9a]">privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
