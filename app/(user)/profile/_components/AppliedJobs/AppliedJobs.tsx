"use client";
import JobCard from "@/app/(main)/(ui)/search/_components/SearchResult/JobCard/JobCard";
import { useGetUser } from "@/lib/context/userContext";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { MdLibraryAddCheck, MdOutlineLibraryAddCheck } from "react-icons/md";
import { toast } from "sonner";

export default function AppliedJobs() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const session = useSession();
  const userEmail = session.data?.user?.email;

  // getting applied jobs
  const {
    user: { applied },
  } = useGetUser();

  console.log(posts);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const buffer = await fetch(`api/get-applied-jobs`, {
        method: "POST",
        body: JSON.stringify({
          list: applied,
        }),
      });
      const res = await buffer.json();

      if (res.ok) {
        setPosts(res.data);
        setLoading(false);
      } else {
        toast.error("Error loading user job posts!");
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="mt-10 text-center text-2xl font-bold text-primary-600">
        Loading job posts...
      </div>
    );
  else {
    return (
      <section className="rounded-xl border border-primary-100 p-2">
        <h2 className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl border border-primary-100 bg-primary p-2 text-center text-2xl font-extrabold text-white">
          <MdLibraryAddCheck />
          Applied Jobs
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {posts.length ? (
            posts.map((post, index) => <JobCard key={index} jobInfo={post} />)
          ) : (
            <div className="col-span-2 text-center text-red-500">
              No post has been found!
            </div>
          )}
        </div>
      </section>
    );
  }
}
