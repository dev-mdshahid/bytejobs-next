import React from "react";
import ProfileBanner from "./_components/ProfileBanner/ProfileBanner";
import PostedJobs from "./_components/PostedJobs/PostedJobs";
import AppliedJobs from "./_components/AppliedJobs/AppliedJobs";

export default function ProfilePage() {
  return (
    <main className="space-y-10">
      <ProfileBanner />
      <PostedJobs />
      <AppliedJobs />
    </main>
  );
}
