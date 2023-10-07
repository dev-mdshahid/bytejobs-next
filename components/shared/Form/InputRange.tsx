"use client";
import React, { useState } from "react";

type InputRangeTypes = {
  name: string;
  range: number;
};

const InputRange = ({ name, range }: InputRangeTypes) => {
  const [inputRange, setInputRange] = useState<string>("0");
  const minValue = Math.ceil(range * (parseInt(inputRange) / 100));
  const maxValue = range;

  return (
    <div>
      <input
        defaultValue={0}
        type="range"
        name={name}
        id={name}
        onChange={(e) => setInputRange(e.target.value)}
      />
      <div className="flex justify-between text-sm font-semibold text-gray-500 ">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};

export default InputRange;
