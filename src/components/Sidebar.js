import React from "react";
import { Link } from "react-router-dom";
import { NavContent } from "../utils/variables/constants";

const Sidebar = () => {
  return (
    <div className="bg-[white] p-5 rounded-md">
      <div className="flex flex-col font-semibold gap-8 items-center ">
        {NavContent.map((nav) => {
          return (
            <React.Fragment key={nav.id}>
              <Link
                to={nav.linkPath}
                className="p-3  w-full hover:bg-slate-100 "
              >
                {nav.name}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
