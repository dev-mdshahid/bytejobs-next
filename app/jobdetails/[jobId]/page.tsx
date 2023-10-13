import JobDetails from "@/components/JobDetails/JobDetails";
import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React from "react";

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
