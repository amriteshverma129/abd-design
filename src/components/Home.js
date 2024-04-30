import React from "react";
import HeroPanel from "./HeroPanel";
import ServicesContainer from "./ServicesContainer";
import StrategyContainer from "./StrategyContainer";
import Sliders from "./Sliders";

const Home = () => {
  return (
    <div>
      <HeroPanel
        imagePath={"/images/Rectangle 3.png"}
        imageAlt={"Rectangle 3"}
      />
      <ServicesContainer />
      <StrategyContainer />
      <Sliders />
    </div>
  );
};

export default Home;
