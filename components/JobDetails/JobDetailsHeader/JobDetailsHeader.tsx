import Button from "@/components/shared/Button/Button";
import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import SquareSpace from "@/media/pictorial logo/squarespace.png";
import Image from "next/image";

const JobDetailsHeader = () => {
  return (
    <section>
      <div className="relative mb-24 h-64 w-full rounded-2xl bg-gradient-to-r from-primary-500  to-cyan-400">
        <Image
          src={SquareSpace}
          alt=""
          className="absolute bottom-0 left-16 h-32 w-32 translate-y-1/2 rounded-full bg-white p-5  shadow-lg shadow-primary-100"
        ></Image>
      </div>
      <div className="ml-16 flex items-end justify-between">
        <div>
          {/* First row */}
          <h1 className="mb-1 text-3xl font-bold text-primary-900">
            Associate Project Manager
          </h1>
          {/* Second row */}
          <p className="mb-2 text-lg">Microsoft Inc.</p>
          {/* Third row */}
          <div className="flex items-center gap-10">
            <p className="text-gray-500">Los Angeles, USA - 14 hours ago</p>
            <div className="flex items-center gap-2">
              <MdOutlineGroups className="text-2xl text-primary-600" />
              <div className="flex items-center">
                <span className="mr-1 font-semibold">37</span>{" "}
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
          <Button type="primary" text="Apply Now" />
        </div>
      </div>
    </section>
  );
};

export default JobDetailsHeader;
