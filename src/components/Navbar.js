import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import Sidebar from "./Sidebar";
import { NavContent } from "../utils/variables/constants";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flex flex-row justify-between h-20 items-center container mx-auto">
      <div className="p-10">
        <img
          src="/images/ABD.png"
          alt="ABD Logo"
          className="object-cover md:h-10 h-8 w-full"
        />
      </div>
      <div className="flex-row font-semibold gap-8 h-full items-center md:flex hidden  ">
        {NavContent.map((nav) => {
          return (
            <React.Fragment key={nav.id}>
              <Link
                to={nav.linkPath}
                className="border-y-4 border-white  h-full text-center hover:border-b-orange-300 flex items-center "
              >
                {nav.name}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
      <div
        className="block md:hidden p-10 relative"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <MenuIcon />
      </div>
      {showSideBar && (
        <>
          <div
            className="absolute inset-0 bg-black opacity-0"
            onClick={() => setShowSideBar(false)}
          ></div>
          <div className="block md:hidden absolute w-[250px] top-16 right-16">
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
