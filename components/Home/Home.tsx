import React from "react";
import SearchJobs from "./SearchJobs/SearchJobs";
import JobCategories from "./JobCategories/JobCategories";
import SuggestedJobs from "./SuggestedJobs/SuggestedJobs";

const Home = () => {
  return (
    <>
      <main className="">
        <SearchJobs />
        <JobCategories />
        <SuggestedJobs />
      </main>
    </>
  );
};

export default Home;
