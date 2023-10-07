import React from "react";
import { searchTerms } from "../../../utilities/SiteData";
import SuggestedSearchTerms from "./SuggestedSearchTerms/SuggestedSearchTerms";
import JobSearchBox from "./HomeSearchBox/HomeSearchBox";

const SearchJobs = () => {
  return (
    <section className="relative py-20 pb-24">
      <div className="text-center text-7xl font-extrabold capitalize leading-[100px] text-gray-700">
        <h1 className="">Get the job you deserve</h1>
        <h1>
          With <span className="text-primary">ByteJobs</span>
        </h1>
      </div>

      <h2 className="mb-8 mt-10 text-center font-semibold">
        19,235+ jobs are waiting. Search for your dream job!
      </h2>

      <JobSearchBox />
      <SuggestedSearchTerms searchTerms={searchTerms} />
    </section>
  );
};

export default SearchJobs;
