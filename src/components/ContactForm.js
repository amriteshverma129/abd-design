import React, { useState } from "react";
import InputField from "./InputField";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    pinCode: "",
    email: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Here we can make post request
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="my-10 p-10 h-auto w-full bg-slate-100 rounded-2xl "
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <InputField
          id="name"
          name="name"
          label="Name"
          required={true}
          type="text"
          handleChange={handleChange}
          value={form.name}
          disabled={false}
          inputMode={false}
          errorMessage={""}
        />
        <InputField
          id="company"
          name="company"
          label="Company"
          required={true}
          type="text"
          handleChange={handleChange}
          value={form.company}
          disabled={false}
          inputMode={false}
          errorMessage={""}
        />
        <InputField
          id="phone"
          name="phone"
          label="Mobile Phone"
          required={true}
          type="number"
          handleChange={handleChange}
          value={form.phone}
          disabled={false}
          inputMode={true}
          errorMessage={""}
        />
        <InputField
          id="pinCode"
          name="pinCode"
          label="Pin Code"
          required={true}
          type="number"
          handleChange={handleChange}
          value={form.pinCode}
          disabled={false}
          inputMode={true}
          errorMessage={""}
        />
        <InputField
          id="email"
          name="email"
          label={"Email"}
          required={true}
          type="text"
          handleChange={handleChange}
          value={form.email}
          disabled={false}
          inputMode={false}
          errorMessage={""}
        />
        <InputField
          id="services"
          name="services"
          label="Services"
          required={true}
          type="text"
          handleChange={handleChange}
          value={form.services}
          disabled={false}
          inputMode={false}
          errorMessage={""}
        />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label htmlFor={"message"} className="text-lg font-semibold mb-2 ">
          How can we help?
        </label>
        <textarea
          id={"message"}
          name={"message"}
          placeholder={""}
          onChange={(e) => handleChange(e)}
          value={form.message}
          disabled={false}
          rows={5}
          cols={50}
          className="p-2"
        ></textarea>
      </div>
      <div className="mt-6 w-full relative h-10">
        <div className="absolute right-0">
          <button className="rounded-full border-[#1389BB] border-2 py-2 px-5  mr-2 text-[#1389BB]">
            Cancel
          </button>
          <button
            className="rounded-full bg-[#1389BB] border-[#1389BB] border-2 py-2 px-5 text-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
