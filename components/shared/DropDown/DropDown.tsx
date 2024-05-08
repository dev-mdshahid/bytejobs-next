import React from "react";

type OptionsType = {
  id: number;
  name: string;
};

type DropDownPropsTypes = {
  title: string;
  icon: React.ReactNode;
  options: Array<OptionsType>;
  setOption?: (value: string) => void;
  small?: boolean;
  value?: string;
};

const DropDown = ({
  title,
  icon,
  options,
  setOption,
  small,
  value,
}: DropDownPropsTypes) => {
  return (
    <div className={small ? "flex items-center" : ""}>
      <h4 className="flex items-center gap-1 pl-4 text-sm">
        <span className="text-primary text-lg">{icon}</span>
        <span className={small ? "hidden" : ""}>{title}</span>
      </h4>
      <select
        // onChange={setOption ? (e) => setOption(e.target.value) : () => {}}
        name={title}
        defaultValue={value ?? ""}
        className={
          "px-3 py-1.5 font-bold outline-none " +
          (small ? " text-sm" : " text-lg")
        }
      >
        {options.map((item) => (
          <option
            selected={item.id === 3 ? true : false}
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
