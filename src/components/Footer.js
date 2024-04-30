import React from "react";
import { FooterContent } from "../utils/variables/constants";
import { Link } from "react-router-dom";

const FooterLink = ({ list }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.linkPath}>{item.name}</Link>
          </li>
        );
      })}
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col p-10">
      <div className="md:w-1/4 sm:w-2/4 w-full flex-row justify-center items-center">
        <div className="p-5 flex justify-center items-center">
          <img
            src="/images/ABD.png"
            alt="ABD Logo"
            className="object-contain h-16 w-32"
          />
        </div>
        <div className="p-5 w-3/4 mx-auto ">
          House No. Building Name, Office No. Street Name, City, State - PIN
          Code Country
        </div>
      </div>
      <div className="md:w-3/4 sm:w-2/4 w-full grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {FooterContent.map((footer) => (
          <React.Fragment key={footer.id}>
            <ul className="flex flex-col gap-4 text-center sm:text-left">
              <li className="font-semibold">{footer.heading}</li>
              <FooterLink list={footer.list} />
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Footer;
