"use client";
import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

type FilterCheckboxPropsType = {
  name: string;
  jobCount: number;
  id: string;
  value: string[];
  setValue: (value: string[]) => void;
};

const FilterCheckbox = ({
  id,
  name,
  jobCount,
  value,
  setValue,
}: FilterCheckboxPropsType) => {
  const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   if (checked) {
  //     const temp = [...value, name];
  //     setValue(temp);
  //   } else {
  //     const index = value.indexOf(name);
  //     if (index) {
  //       const temp = value.splice(index, 1);
  //       setValue(temp);
  //     }
  //   }
  // }, [checked, name, value, setValue]);

  return (
    <li className="my-3 flex items-center justify-between gap-20">
      <label htmlFor={id} className="flex select-none items-center  gap-2">
        <div
          className={
            "relative h-5 w-5 rounded text-center " +
            (checked
              ? "border-0 bg-primary-500"
              : "border-2 border-gray-200 bg-white")
          }
        >
          <input
            onChange={(e) => setChecked(e.target.checked)}
            type="checkbox"
            name={id}
            id={id}
            className="my-auto h-5 w-5 appearance-none "
          />
          <BsCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white" />
        </div>

        <span className="select-none text-sm capitalize text-gray-600">
          {name}
        </span>
      </label>
      <p
        className={
          "text rounded-md bg-gray-100 px-1.5 py-1 text-xs font-semibold " +
          (checked ? "bg-primary-100 text-primary-600" : "")
        }
      >
        {jobCount}
      </p>
    </li>
  );
};

export default FilterCheckbox;
