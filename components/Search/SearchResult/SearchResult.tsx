import React from "react";
import FilterList from "./FilterList/FilterList";
import JobCard from "./JobCard/JobCard";

const SearchResult = () => {
  return (
    <section className="max-width grid grid-cols-[auto_1fr] gap-5 pt-20">
      <FilterList />

      <div className="grid grid-cols-2 gap-5">
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
};

export default SearchResult;
