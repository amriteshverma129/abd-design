import React from "react";
import Service from "./Service";
import { ServiceList } from "../utils/variables/constants";

const ServicesContainer = () => {
  return (
    <div>
      <div className="text-center md:p-16 sm:p-14 p-5 w-2/3 mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#1372A7]">
        Offering Services for Organizational Development and Growth
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 container mx-auto">
        {ServiceList.map((service) => {
          return (
            <React.Fragment key={service.id}>
              <Service service={service} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;
