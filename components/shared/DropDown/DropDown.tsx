import React from "react";

type OptionsType = {
  id: number;
  name: string;
};

type DropDownPropsTypes = {
  title: string;
  icon: React.ReactNode;
  options: Array<OptionsType>;
  setOption: (value: string) => void;
};

const DropDown = ({ title, icon, options, setOption }: DropDownPropsTypes) => {
  return (
    <div>
      <h4 className="flex items-center gap-1 pl-4 text-sm">
        <span className="text-primary text-lg">{icon}</span>
        <span>{title}</span>
      </h4>
      <select
        onChange={(e) => setOption(e.target.value)}
        name={title}
        className="px-3 py-1.5 text-lg font-bold outline-none"
      >
        {options.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
