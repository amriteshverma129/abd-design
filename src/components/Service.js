import React from "react";

const Service = ({ service }) => {
  return (
    <div className="h-full w-full relative rounded-xl">
      <img
        src={service.imagePath}
        alt={service.imageAlt}
        className="object-cover h-full w-full z-10"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3  rounded-b-xl m-4 sm:m-3 text-[white]  bg-black bg-opacity-50 z-20 flex justify-center items-center">
        <div>{service.heading}</div>
      </div>
    </div>
  );
};

export default Service;
