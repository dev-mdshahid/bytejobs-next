"use client";
import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";

// Importing site data

// Importing icons
import { TbLocation, TbCalendarTime, TbClock } from "react-icons/tb";
import {
  datesPosted,
  locations,
  requiredExperiences,
} from "@/utilities/SiteData";
import Divider from "@/components/shared/Divider/Divider";
import DropDown from "@/components/shared/DropDown/DropDown";

const JobSearchBox = () => {
  const [location, setLocation] = useState("Any");
  const [datePosted, setDatePosted] = useState("Latest");
  const [experience, setExperience] = useState("Any");

  return (
    <form className="mx-auto w-[800px] rounded-xl border border-blue-100 bg-white p-4 px-6 shadow-xl shadow-blue-100">
      {/* Search bar */}
      <div className="flex w-full items-center gap-3">
        <input
          type="text"
          className="h-fit w-full px-3 py-2 text-lg font-bold capitalize outline-none"
          placeholder="Any Job Title, Company or Location"
        />
        <button className="bg-primary rounded-full p-4 text-white">
          <TbSearch className="text-lg" />
        </button>
      </div>

      <Divider />

      {/* Dropdown menus */}
      <div className="flex justify-around">
        <DropDown
          title="Location"
          icon={<TbLocation />}
          options={locations}
          setOption={setLocation}
        />

        <DropDown
          title="Date Posted"
          icon={<TbCalendarTime />}
          options={datesPosted}
          setOption={setDatePosted}
        />

        <DropDown
          title="Experience"
          icon={<TbClock />}
          options={requiredExperiences}
          setOption={setExperience}
        />
      </div>
    </form>
  );
};

export default JobSearchBox;
