import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import SearchResult from "./SearchResult/SearchResult";
import { JobDetailsType } from "@/utilities/types";

const getJobList = async (): Promise<JobListType> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getjoblist`);
  const joblist = await res.json();
  return joblist as Promise<JobListType>;
};

type JobListType = {
  data: JobDetailsType[];
};

const Search = async () => {
  const joblist = await getJobList();
  const { data } = joblist;
  return (
    <main className="">
      <section className="relative m-5 mt-0 rounded-lg bg-gradient-to-r from-primary-500  to-cyan-400 px-10 pb-24 pt-16">
        <h1 className="text-center text-5xl font-bold text-white">
          Search for your dream job!
        </h1>
        <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 translate-y-1/2">
          <SearchBox />
        </div>
      </section>
      <SearchResult data={data} />
    </main>
  );
};

export default Search;
