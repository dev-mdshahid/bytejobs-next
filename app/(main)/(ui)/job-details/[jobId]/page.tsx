import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React from "react";
import JobDetails from "./_components/JobDetails/JobDetails";

type JobDetailsPagePropsType = {
  params: {
    jobId: string;
  };
};

const JobDetailsPage = ({ params }: JobDetailsPagePropsType) => {
  return (
    <ProtectedRoute>
      <JobDetails jobId={params.jobId} />;
    </ProtectedRoute>
  );
};

export default JobDetailsPage;
