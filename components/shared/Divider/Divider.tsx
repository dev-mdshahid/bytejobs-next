import React from "react";

type DividerPropsType = {
  type?: string;
};

const Divider = ({ type }: DividerPropsType) => {
  const horizontal = "w-full h-px bg-blue-100 my-4";
  const vertical = "w-px h-full bg-blue-100 mx-4";
  return <div className={type === "vertical" ? vertical : horizontal}></div>;
};

export default Divider;
