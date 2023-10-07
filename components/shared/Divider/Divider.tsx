import React from "react";

type DividerPropsType = {
  type?: string;
  className?: string;
};

const Divider = ({ type, className }: DividerPropsType) => {
  const horizontal = "w-full h-px bg-blue-100 " + className;
  const vertical = "w-px h-full bg-blue-100 mx-4 " + className;
  return <div className={type === "vertical" ? vertical : horizontal}></div>;
};

export default Divider;
