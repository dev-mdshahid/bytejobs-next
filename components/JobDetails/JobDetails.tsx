import React from "react";
import JobDetailsHeader from "./JobDetailsHeader/JobDetailsHeader";
import SuggestedJobCard from "../Home/SuggestedJobs/SuggestedJobCard/SuggestedJobCard";
import JobDetailsBody from "./JobDetailsBody/JobDetailsBody";

const JobDetails = () => {
  return (
    <main className="max-width grid ">
      <section className="grid gap-10">
        <JobDetailsHeader />
        <JobDetailsBody />
      </section>
    </main>
  );
};

export default JobDetails;
