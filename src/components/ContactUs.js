import React from "react";
import HeroPanel from "./HeroPanel";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <HeroPanel
        imagePath={"/images/Rectangle 4.png"}
        imageAlt={"Rectangle 4"}
      />
      <div className="text-center md:p-16 sm:p-14 p-5 w-2/3 mx-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#1372A7]">
        Get in Touch!
      </div>
      <div className="container mx-auto p-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="font-bold py-5 text-2xl">Visit us at</div>
            <div>
              <div className="font-bold py-5 text-xl">
                India
                <p className="font-normal">
                  House No. Building Name, Office No. Street Name, City, State -
                  PIN Code
                </p>
              </div>
              <div className="font-bold py-5 text-xl">
                USA
                <p className="font-normal">
                  House No. Building Name, Office No. Street Name, City, State -
                  PIN Code
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold py-5 text-2xl">Locate us</div>
            <div>
              <img src="/images/image 1.png" alt="image1" />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
