import React from "react";
import graphImg from "../../../assets/graph__image.jpg";

const Analytics = () => {
  return (
    <div className="w-full py-6 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <figure className="flex justify-center items-center">
          <img className="w-[80%]" src={graphImg} alt="" />
        </figure>
        <div className="text-black flex flex-col justify-center py-8 px-2 md:p-2 ">
          <p className="text-[#00df9a] font-bold uppercase">Data analytics dashboard</p>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase py-6">Manage data analytics centrally</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            quibusdam ex nesciunt sapiente quidem sit sunt qui maiores? Animi,
            voluptate. Aliquam vel ut aspernatur odit soluta fuga debitis
            voluptates quasi, natus obcaecati?
          </p>
          <button className="w-[200px] bg-[#000] text-white rounded-md my-6 py-3 font-medium">Get Started</button>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
