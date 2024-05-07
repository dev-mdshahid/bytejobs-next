import React from "react";

type InputTextPropsType = {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
};

const InputText = ({ name, placeholder, label, type }: InputTextPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-primary-900">
        {label}
      </label>
      <input
        className="rounded-lg border border-primary-100 px-4 py-2 outline-none focus:border focus:border-primary-400"
        type={type ? type : "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        min={0}
        required
      />
    </div>
  );
};

export default InputText;
