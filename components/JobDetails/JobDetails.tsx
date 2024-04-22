import React from "react";
import JobDetailsHeader from "./JobDetailsHeader/JobDetailsHeader";
import SuggestedJobCard from "../Home/SuggestedJobs/SuggestedJobCard/SuggestedJobCard";
import JobDetailsBody from "./JobDetailsBody/JobDetailsBody";
import { jobPosts } from "@/utilities/SiteData";
import { jobsCollection } from "@/lib/mongoClient";
import { JobDetailsType } from "@/utilities/types";

type JobDetailsPropsType = {
  jobId: string;
};

type getJobDetailsType = {
  okay: boolean;
  data: JobDetailsType;
  message: string;
};

const getJobDetails = async (jobId: string): Promise<getJobDetailsType> => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getJobDetails?jobId=${jobId}`,
  );
  const jobDetails = await res.json();
  return jobDetails as Promise<getJobDetailsType>;
};

const JobDetails = async ({ jobId }: JobDetailsPropsType) => {
  const res = await getJobDetails(jobId);

  return (
    <main className="max-width grid ">
      <section className="grid gap-10">
        <JobDetailsHeader data={res.data} />
        <JobDetailsBody data={res.data} />
      </section>
    </main>
  );
};

export default JobDetails;
