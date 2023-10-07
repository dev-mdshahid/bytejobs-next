import DropDown from "@/components/shared/DropDown/DropDown";
import {
  datesPosted,
  locations,
  requiredExperiences,
} from "@/utilities/SiteData";
import { TbCalendarTime, TbClock, TbLocation, TbSearch } from "react-icons/tb";

const SearchBox = () => {
  return (
    <form className="max-width mx-auto flex rounded-xl border border-primary-100 bg-white p-4 px-6 shadow-lg shadow-primary-50">
      {/* Dropdown menus */}
      <div className="mr-5 flex gap-5">
        <DropDown
          title="Location"
          icon={<TbLocation />}
          options={locations}
          small
        />

        <DropDown
          title="Date Posted"
          icon={<TbCalendarTime />}
          options={datesPosted}
          small
        />

        <DropDown
          title="Experience"
          icon={<TbClock />}
          options={requiredExperiences}
          small
        />
      </div>

      {/* Search bar */}
      <div className="flex w-full items-center gap-5">
        <input
          name="keywords"
          type="text"
          className="h-fit w-full min-w-[200px] border-l border-primary-100 py-2 pl-5 pr-3 text-sm font-bold capitalize outline-none"
          placeholder="Type Job Title, Company or Location"
        />
        <button
          type="submit"
          className="bg-primary rounded-full p-4 text-white"
        >
          <TbSearch className="text-lg" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
