import React from "react";

type DividerPropsType = {
  type?: string;
  className?: string;
  text?: string;
};

const Divider = ({ type, className, text }: DividerPropsType) => {
  const horizontal = "w-full h-px bg-primary-100 " + className;
  const vertical = "w-px h-full bg-primary-100 mx-4 " + className;
  return text ? (
    <div className="flex items-center gap-2">
      <div className={type === "vertical" ? vertical : horizontal}></div>
      <span className="text-sm text-primary-300">{text}</span>
      <div className={type === "vertical" ? vertical : horizontal}></div>
    </div>
  ) : (
    <div className={type === "vertical" ? vertical : horizontal}></div>
  );
};

export default Divider;
