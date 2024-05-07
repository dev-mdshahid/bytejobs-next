"use client";
import Button from "@/components/shared/Button/Button";
import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import demo from "@/media/pictorial logo/demo.png";
import Image from "next/image";
import { JobDetailsType } from "@/utilities/types";
import { companiesLogo } from "@/utilities/CompaniesLogo";
import { useSession } from "next-auth/react";

type JobDetailsHeaderPropsType = {
  data: JobDetailsType;
};

const JobDetailsHeader = ({ data }: JobDetailsHeaderPropsType) => {
  const session = useSession();
  const userEmail = session.data?.user?.email;
  const { company, title, location, type, date, applied, postedBy } = data;
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
    <section>
      <div className="relative mb-24 h-64 w-full rounded-2xl bg-gradient-to-r from-primary-500  to-cyan-400">
        <Image
          src={companiesLogo[company.toLowerCase()] ?? demo}
          alt={`${company} Logo`}
          className="absolute bottom-0 left-16 h-32 w-32 translate-y-1/2 rounded-full bg-white p-5  shadow-lg shadow-primary-100"
        ></Image>
      </div>
      <div className="ml-16 flex items-end justify-between">
        <div>
          {/* First row */}
          <h1 className="mb-1 text-3xl font-bold text-primary-900">{title}</h1>
          {/* Second row */}
          <p className="mb-2 text-lg">{company}</p>
          {/* Third row */}
          <div className="flex items-center gap-10">
            <p className="text-gray-500">
              {location} - {dateObject.getUTCDate()}{" "}
              {monthsOfYear[dateObject.getUTCMonth() + 1].slice(0, 3)},
              {dateObject.getUTCFullYear()}
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineGroups className="text-2xl text-primary-600" />
              <div className="flex items-center">
                <span className="mr-1 font-semibold">{applied.length}</span>{" "}
                <span className="">applied</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Button type="secondary">
            <div className="flex items-center gap-2">
              <BsBookmark />
              Save
            </div>
          </Button>
          {userEmail !== postedBy ? (
            <Button type="primary" text="Apply Now" />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetailsHeader;