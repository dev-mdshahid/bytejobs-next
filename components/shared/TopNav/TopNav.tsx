import React from "react";
import { userNavInfo } from "@/utilities/SiteData";
import Link from "next/link";
import Button from "../Button/Button";


type UserType = {
  name: string;
  img: string;
};

type TopNavPropsType = {
  mode: string;
  user?: UserType;
};



const TopNav = ({ mode, user }: TopNavPropsType) => {
  // Extracting information
  const { title, logoIcon, navList } = userNavInfo;

  // Styles
  const navStyle = "text-gray-500 px-3 py-1 flex items-center gap-1";
  const activeNavStyle =
    "text-primary font-semibold px-3 py-1 flex items-center gap-1";

  return (
    <nav className="max-width flex items-center justify-between p-4">
      {/* Logo */}
      <Link
        href="/"
        className="text-primary logo flex items-center gap-2 text-3xl"
      >
        <span className="mb-1 text-4xl">{logoIcon}</span>
        <h2>{title}</h2>
      </Link>

      {/* Navigations links */}
      <ol className="flex gap-5">
        {navList.map((item) => (
          <Link
            key={item.id}
            href={item.to}
            className={navStyle}
          >
            <span className="mb-1 text-2xl">{item.icon}</span>
            <span className="whitespace-nowrap">{item.name}</span>
          </Link>
        ))}
      </ol>

      {/* Buttons/profile */}
      {user ? (
        <div></div>
      ) : (
        <div className="flex gap-4">
          <Button type="secondary" text="Login" href="login" />
          <Button type="primary" text="Sign Up" href="signup" />
        </div>
      )}
    </nav>
  );
};

export default TopNav;
