import React from "react";

const InputField = ({
  id,
  name,
  label,
  required,
  type,
  handleChange,
  value,
  disabled,
  inputMode,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-semibold mb-2 ">
        {label}
        {required && <span className="text-[red] ml-2">*</span>}
      </label>
      <input
        id={id}
        name={name}
        placeholder={""}
        type={type}
        onChange={(e) => handleChange(e)}
        value={value}
        disabled={disabled ? true : false}
        inputMode={inputMode ? "numeric" : "text"}
        className="h-14 p-2"
      />
      {errorMessage && <span className="">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
