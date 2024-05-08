import React from "react";
import { TbSearch } from "react-icons/tb";

// Importing site data
import {
  datesPosted,
  locations,
  requiredExperiences,
} from "@/app/(main)/(lib)/SiteData";
// Importing icons
import { TbLocation, TbCalendarTime, TbClock } from "react-icons/tb";

import Divider from "@/components/shared/Divider/Divider";
import DropDown from "@/components/shared/DropDown/DropDown";

const JobSearchBox = () => {
  return (
    <form
      action={"search"}
      className="mx-auto w-[800px] rounded-xl border border-blue-100 bg-white p-4 px-6 shadow-xl shadow-blue-100"
    >
      {/* Search bar */}
      <div className="flex w-full items-center gap-3">
        <input
          name="keywords"
          type="text"
          className="h-fit w-full px-3 py-2 text-lg font-bold capitalize outline-none"
          placeholder="Any Job Title, Company or Location"
        />
        <button
          type="submit"
          className="bg-primary rounded-full p-4 text-white"
        >
          <TbSearch className="text-lg" />
        </button>
      </div>

      <div className="my-4">
        <Divider />
      </div>

      {/* Dropdown menus */}
      <div className="flex justify-around">
        <DropDown title="Location" icon={<TbLocation />} options={locations} />

        <DropDown
          title="Date Posted"
          icon={<TbCalendarTime />}
          options={datesPosted}
        />

        <DropDown
          title="Experience"
          icon={<TbClock />}
          options={requiredExperiences}
        />
      </div>
    </form>
  );
};

export default JobSearchBox;
