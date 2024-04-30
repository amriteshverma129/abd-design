import React from "react";

const HeroPanel = ({ imagePath, imageAlt }) => {
  return (
    <div className="h-[300px] md:h-[350px] lg:h-[400px] ">
      <img
        src={imagePath}
        alt={imageAlt}
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default HeroPanel;
