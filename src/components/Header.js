import React from "react";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";

const Header = () => {
  return (
    <div className="h-14 bg-[#1389BB] text-white flex items-center md:text-lg text-sm ">
      <div className="container mx-auto flex flex-row items-center md:justify-center justify-start relative p-2 ">
        <div className="flex flex-row items-center md:gap-5 sm:gap-2 gap-1">
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
          <LinkedInIcon />
        </div>
        <div className="flex flex-row items-center absolute right-0 md:gap-5 sm:gap-2 gap-1 p-2">
          <div className="flex flex-row items-center">
            <UserIcon />
            SignIn
          </div>
          <div>
            <button className="rounded-full border-[white] border-2 py-1 px-5  mr-2 ">
              Join
            </button>
          </div>
          <div className="flex flex-row items-center">
            <CartIcon />
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
