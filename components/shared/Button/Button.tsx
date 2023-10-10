import Link from "next/link";
import React from "react";

type ButtonPropsTypes = {
  type: "primary" | "secondary";
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Button = ({
  type,
  text,
  href,
  onClick,
  className,
  children,
}: ButtonPropsTypes) => {
  // Styles
  const primaryStyle =
    "bg-primary border border-primary text-white text-md font-semibold px-4 py-1.5 rounded shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105 active:scale-100 transition " +
    className;
  const secondaryStyle =
    "bg-white border border-primary text-primary text-md font-semibold px-4 py-1.5 rounded shadow shadow-blue-100 hover:shadow-blue-200 hover:bg-blue-50 transition " +
    className;
  return href ? (
    <Link
      href={href}
      className={type === "primary" ? primaryStyle : secondaryStyle}
      onClick={onClick}
    >
      {children}
      {text}
    </Link>
  ) : (
    <button
      className={type === "primary" ? primaryStyle : secondaryStyle}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
