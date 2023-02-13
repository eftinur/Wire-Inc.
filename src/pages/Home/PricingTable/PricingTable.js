import React from "react";

const PricingTable = () => {
  return (
    <div className="w-full py-[10rem] bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-r-lg hover:scale-105 duration-300">
          <h2 className="text-2xl text-center font-medium py-8">Single User</h2>
          <p className="text-4xl text-center font-bold">$140</p>
          <div className="text-center">
            <p className="py-2 mx-8 border-b mt-8">500 GB</p>
            <p className="py-2 mx-8 border-b">1 granted user</p>
            <p className="py-2 mx-8 border-b">send up to 2 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 py-3 font-medium text-white">Start Trial</button>
        </div>

        <div className="w-full shadow-lg flex flex-col p-4 my-8 md:my-0 rounded-r-lg hover:scale-105 duration-300 bg-gray-50">
          <h2 className="text-2xl text-center font-medium py-8">Small Business</h2>
          <p className="text-4xl text-center font-bold">$299</p>
          <div className="text-center">
            <p className="py-2 mx-8 border-b mt-8">800 GB</p>
            <p className="py-2 mx-8 border-b">10 granted users</p>
            <p className="py-2 mx-8 border-b">send up to 5 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 py-3 font-medium text-white">Start Trial</button>
        </div>
        
        <div className="w-full shadow-lg flex flex-col p-4 my-4 rounded-r-lg hover:scale-105 duration-300">
          <h2 className="text-2xl text-center font-medium py-8">Enterprise</h2>
          <p className="text-4xl text-center font-bold">$599</p>
          <div className="text-center">
            <p className="py-2 mx-8 border-b mt-8">2000 GB</p>
            <p className="py-2 mx-8 border-b">Unilimited granted user</p>
            <p className="py-2 mx-8 border-b">send up to 50 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] rounded-md mx-auto my-6 py-3 font-medium text-white">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
