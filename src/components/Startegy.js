import React from "react";

const Startegy = ({ startegy }) => {
  return (
    <div className="text-[white] flex justify-center items-center md:text-2xl sm:text-xl text-md font-bold bg-black bg-opacity-50 p-5 ">
      {startegy.topic}
    </div>
  );
};

export default Startegy;
