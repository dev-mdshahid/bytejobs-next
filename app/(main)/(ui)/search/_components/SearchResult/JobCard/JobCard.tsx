import Image from "next/image";
import React from "react";
import demo from "@/media/pictorial logo/demo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbCalendarTime, TbClock, TbLocation, TbSearch } from "react-icons/tb";
import Divider from "@/components/shared/Divider/Divider";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import Button from "@/components/shared/Button/Button";
import Link from "next/link";
import { companiesLogo } from "@/utilities/CompaniesLogo";

type JobCardPropsType = {
  jobInfo: JobDetailsType;
};

type JobDetailsType = {
  _id?: string;
  title: string;
  description: string;
  responsibilities: Array<string>;
  skills: Array<string>;
  company: string;
  location: string;
  experience: number;
  type: string;
  category: string;
  salary: number;
  date: Date;
  applied: Array<string>;
};

const JobCard = ({ jobInfo }: JobCardPropsType) => {
  const {
    _id,
    title,
    company,
    type,
    experience,
    location,
    date,
    description,
    salary,
    applied,
  } = jobInfo;

  const dateObject = new Date(date);
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Link
      href={`/job-details/${_id}`}
      className="grid h-fit gap-5 rounded-lg border border-primary-50 p-6 transition hover:border hover:border-primary-300"
    >
      {/* Row - 1 */}
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center gap-5">
          <Image
            className="h-12 w-12 rounded-full border border-primary-100 p-2"
            src={companiesLogo[company?.toLowerCase()] ?? demo}
            alt={"squarespace" + "logo"}
          />
          <div>
            <h4 className="font-semibold text-primary-900">{title}</h4>
            <p className="text-sm">{company}</p>
          </div>
        </div>

        <BsThreeDotsVertical className="text-2xl" />
      </div>

      {/* Row - 2 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <span className="flex items-center gap-2 capitalize">
            <TbClock className="text-lg text-primary-600" /> {type}
          </span>
          <div className="mx-5 h-3 w-px bg-primary-200"></div>
          <span className="flex items-center gap-2 capitalize">
            <TbCalendarTime className="text-lg text-primary-600" />
            {experience} year
          </span>
          <div className="mx-5 h-3 w-px bg-primary-200"></div>
          <span className="flex items-center gap-2 capitalize">
            <TbLocation className="text-lg text-primary-600" /> {location}
          </span>
        </div>
        <p className="text-sm">
          {dateObject.getUTCDate()}{" "}
          {monthsOfYear[dateObject.getUTCMonth()].slice(0, 3)}{" "}
          {dateObject.getUTCFullYear()}
        </p>
      </div>

      {/* Row - 3 */}
      <p className="text-ellipsis text-sm leading-6 tracking-wide text-gray-500">
        {description.slice(0, 160)}...
      </p>
      <Divider />

      {/* Row - 4 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <AiOutlineDollar className="text-2xl text-primary-600" />
            <div className="flex items-center">
              <span className="font-semibold">${salary}</span>{" "}
              <span className="text-sm">/year</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineGroups className="text-2xl text-primary-600" />
            <div className="flex items-center">
              <span className="mr-1 font-semibold">{applied.length}</span>{" "}
              <span className="text-sm">applied</span>
            </div>
          </div>
        </div>
        <Button type="primary" text="See Details" className="px-10" />
      </div>
    </Link>
  );
};

export default JobCard;
