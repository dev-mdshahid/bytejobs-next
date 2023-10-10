import Image from "next/image";
import React from "react";
import squareSpaceLogo from "@/media/pictorial logo/squarespace.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbCalendarTime, TbClock, TbLocation, TbSearch } from "react-icons/tb";
import Divider from "@/components/shared/Divider/Divider";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import Button from "@/components/shared/Button/Button";
import Link from "next/link";

const JobCard = () => {
  return (
    <Link
      href={"/jobdetails"}
      className="grid h-fit gap-5 rounded-lg border border-primary-50 p-6 transition hover:border hover:border-primary-300"
    >
      {/* Row - 1 */}
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-5">
          <Image
            className="h-12 w-12 rounded-full border border-primary-100 p-2"
            src={squareSpaceLogo}
            alt={"squarespace" + "logo"}
          />
          <div>
            <h4 className="font-semibold text-primary-900">
              Senior Fronend Developer
            </h4>
            <p className="text-sm">Squarespace</p>
          </div>
        </div>

        <BsThreeDotsVertical className="text-2xl" />
      </div>

      {/* Row - 2 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <span className="flex items-center gap-2 capitalize">
            <TbClock className="text-lg text-primary-600" /> Full Time
          </span>
          <div className="mx-5 h-3 w-px bg-primary-200"></div>
          <span className="flex items-center gap-2 capitalize">
            <TbCalendarTime className="text-lg text-primary-600" />1 - 2 year
          </span>
          <div className="mx-5 h-3 w-px bg-primary-200"></div>
          <span className="flex items-center gap-2 capitalize">
            <TbLocation className="text-lg text-primary-600" /> Remote
          </span>
        </div>
        <p className="text-sm">28 Mar 2023</p>
      </div>

      {/* Row - 3 */}
      <p className="text-sm leading-6 tracking-wide text-gray-500">
        Create a customizable website or online store with an all-in-one
        solution from Squarespace. Choose a website template and start your free
        trial today.
      </p>
      <Divider />

      {/* Row - 4 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <AiOutlineDollar className="text-2xl text-primary-600" />
            <div className="flex items-center">
              <span className="font-semibold">$30k-50k</span>{" "}
              <span className="text-sm">/month</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineGroups className="text-2xl text-primary-600" />
            <div className="flex items-center">
              <span className="mr-1 font-semibold">37</span>{" "}
              <span className="text-sm">applied</span>
            </div>
          </div>
        </div>
        <Button type="primary" text="Apply" className="px-10" />
      </div>
    </Link>
  );
};

export default JobCard;
