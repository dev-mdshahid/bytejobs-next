import React from "react";
import CreateJobForm from "./_components/CreateJobForm/CreateJobForm";
import ProtectedRoute from "@/next-auth/ProtectedRoute";
import Divider from "@/components/shared/Divider/Divider";

export default function CreateJobPostPage() {
  return (
    <ProtectedRoute>
      <main className="max-width px-3">
        <section className=" rounded-2xl border border-primary-100 p-10">
          <h1 className=" text-3xl font-bold text-primary-900">
            Create a new job post
          </h1>
          <Divider className="my-8" />
          <CreateJobForm />
        </section>
      </main>
    </ProtectedRoute>
  );
}
