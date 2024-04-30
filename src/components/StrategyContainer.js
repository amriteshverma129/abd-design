import React from "react";
import Startegy from "./Startegy";
import { strategies } from "../utils/variables/constants";

const StrategyContainer = () => {
  return (
    <div className="relative my-14 lg:h-[250px] md:h-[350px] sm:h-[400px] h-[500px]">
      <div className="-z-1 h-full absolute inset-0">
        <img
          src="/images/Rectangle 17.png"
          alt="Rectangle 17"
          className="object-cover h-full w-full  "
        />
      </div>
      <div className="absolute inset-0 z-10  container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-10">
        {strategies.map((startegy) => (
          <React.Fragment key={startegy.id}>
            <Startegy startegy={startegy} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StrategyContainer;
