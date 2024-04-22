import React from "react";
import FilterList from "./FilterList/FilterList";
import JobCard from "./JobCard/JobCard";

type JobListType = {
  data: JobDetailsType[];
};

type JobDetailsType = {
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

const getJobList = async (): Promise<JobListType> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getjoblist`);
  const joblist = await res.json();
  return joblist as Promise<JobListType>;
};

const SearchResult = async () => {
  const joblist = await getJobList();
  const { data } = joblist;

  return (
    <section className="max-width relative grid grid-cols-[auto_1fr] gap-5 pt-20">
      <FilterList />
      <div className="grid grid-cols-2 gap-5">
        {data.map((jobinfo, index) => (
          <JobCard key={index} jobInfo={jobinfo} />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
