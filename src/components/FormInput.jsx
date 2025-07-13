import React from "react";

const FormInput = ({ name, type, placeholder, label, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium text-slate-700 mb-2 block"
      >
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-gray-600 px-4 py-2 text-sm border border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:border-2 focus:border-black focus:outline-offset-5 focus:outline-gray-400 focus:rounded-md"
      />
    </div>
  );
};

export default FormInput;
