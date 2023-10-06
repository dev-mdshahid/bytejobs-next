import React from "react";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/shared/Button/Button";

const JobCard = () => {
  return (
    <div className="grid gap-4 rounded-xl border border-gray-100 p-5 px-6 text-gray-500 hover:cursor-context-menu hover:border-blue-300">
      {/* Top bar */}
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <img
            src="https://seeklogo.com/images/S/squarespace-logo-8DA7EFE1C2-seeklogo.com.png"
            alt=""
            className="h-16 w-16 rounded-full p-3 shadow shadow-gray-300"
          />

          {/* Poition details next to logo */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Sr Front-end Developer
            </h3>
            <div className="flex items-center gap-1 whitespace-nowrap text-sm">
              <Link href="/" className=" font-semibold underline">
                Squarespace
              </Link>{" "}
              in <span>New York</span>
              <div className="mx-1 h-4 w-px bg-gray-400"></div>
              <span>Full-time</span>
            </div>
          </div>
        </div>

        {/* Icons on the right */}
        <div
          className="child:hover:cursor-pointer
        mt-3 flex gap-2 text-2xl"
        >
          <TiStarOutline className="text-gray-300" />
          <BsThreeDotsVertical className="text-blue-900" />
        </div>
      </div>

      {/* Company details */}
      <p className="text-sm">
        Create a customizable website or online store with an all-in-one
        solution from Squarespace. Choose a website template and start your free
        trial today.
      </p>

      {/* Salary and time */}
      <div className="flex justify-between">
        {/* Salary */}
        <div>
          <span className="text-lg font-bold text-blue-900">$235K</span>
          <span className="text-sm">/month</span>
        </div>

        {/* Time */}
        <div>
          <span>5h </span>
          ago
        </div>
      </div>

      {/* Buttons */}
      <div className="mb-1 grid grid-cols-2 gap-5">
        <Button
          type="secondary"
          text="View Details"
          className="px-auto text-center"
        />
        <Button
          type="primary"
          text="Apply Now"
          className="px-auto text-center"
        />
      </div>
    </div>
  );
};

export default JobCard;
