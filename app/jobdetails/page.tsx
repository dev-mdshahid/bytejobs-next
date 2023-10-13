import JobDetails from "@/components/JobDetails/JobDetails";
import ProtectedRoute from "@/next-auth/ProtectedRoute";
import React from "react";

const JobDetailsPage = () => {
  return (
    <ProtectedRoute>
      <JobDetails />;
    </ProtectedRoute>
  );
};

export default JobDetailsPage;
