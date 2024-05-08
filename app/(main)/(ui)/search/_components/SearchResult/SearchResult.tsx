"use client";
import React, { useState } from "react";
import FilterList from "./FilterList/FilterList";
import JobCard from "./JobCard/JobCard";
import { JobDetailsType } from "@/utilities/types";

type SearchResultPropsType = {
  data: JobDetailsType[];
};

const SearchResult = ({ data }: SearchResultPropsType) => {
  const [jobType, setJobType] = useState<Array<string>>([]);
  const [seniorityLevel, setSeniorityLevel] = useState<Array<string>>([]);
  console.log(seniorityLevel);
  console.log(jobType);
  return (
    <section className="max-width relative grid grid-cols-[auto_1fr] gap-5 pt-20">
      <FilterList
        jobType={jobType}
        setJobType={setJobType}
        seniorityLevel={seniorityLevel}
        setSeniorityLevel={setSeniorityLevel}
      />
      <div className="grid grid-cols-2 gap-5">
        {data.map((jobinfo, index) => (
          <JobCard key={index} jobInfo={jobinfo} />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
