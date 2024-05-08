"use client";
import Button from "@/components/shared/Button/Button";
import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import demo from "@/media/pictorial logo/demo.png";
import Image from "next/image";
import { JobDetailsType } from "@/utilities/types";
import { companiesLogo } from "@/utilities/CompaniesLogo";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type JobDetailsHeaderPropsType = {
  data: JobDetailsType;
};

const JobDetailsHeader = ({ data }: JobDetailsHeaderPropsType) => {
  // route
  const route = useRouter();

  // getting user email
  const session = useSession();
  const userEmail = session.data?.user?.email;

  // extracting all the data
  const { _id, company, title, location, type, date, applied, postedBy } = data;
  console.log(data);

  // handling applying to the jobs
  const handleApplyToJob = async () => {
    const toastId = toast.loading("Applying to the job!");
    const buffer = await fetch("/api/apply-for-job", {
      method: "POST",
      body: JSON.stringify({
        jobId: _id,
        userEmail,
      }),
    });

    const res = await buffer.json();

    if (res.ok) {
      toast.success("Applied to the job successfully!");
      route.push("/profile");
    } else {
      toast.error("Sorry! An error occurred during applying to the job!");
    }
    toast.dismiss(toastId);
  };

  const dateObject = new Date(date);
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <section>
      <div className="relative mb-24 h-64 w-full rounded-2xl bg-gradient-to-r from-primary-500  to-cyan-400">
        <Image
          src={companiesLogo[company.toLowerCase()] ?? demo}
          alt={`${company} Logo`}
          className="absolute bottom-0 left-16 h-32 w-32 translate-y-1/2 rounded-full bg-white p-5  shadow-lg shadow-primary-100"
        ></Image>
      </div>
      <div className="ml-16 flex items-end justify-between">
        <div>
          {/* First row */}
          <h1 className="mb-1 text-3xl font-bold text-primary-900">{title}</h1>
          {/* Second row */}
          <p className="mb-2 text-lg">{company}</p>
          {/* Third row */}
          <div className="flex items-center gap-10">
            <p className="text-gray-500">
              {location} - {dateObject.getUTCDate()}{" "}
              {monthsOfYear[dateObject.getUTCMonth() + 1].slice(0, 3)},
              {dateObject.getUTCFullYear()}
            </p>
            <div className="flex items-center gap-2">
              <MdOutlineGroups className="text-2xl text-primary-600" />
              <div className="flex items-center">
                <span className="mr-1 font-semibold">{applied.length}</span>{" "}
                <span className="">applied</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Button type="secondary">
            <div className="flex items-center gap-2">
              <BsBookmark />
              Save
            </div>
          </Button>
          {userEmail !== postedBy ? (
            applied.includes(userEmail ?? "") ? (
              <Button type="primary" text="Applied" disabled />
            ) : (
              <Button
                type="primary"
                text="Apply Now"
                onClick={handleApplyToJob}
              />
            )
          ) : (
            <Dialog>
              <DialogTrigger>
                {" "}
                <span className="text-md h-fit rounded border border-primary bg-primary px-4 py-1.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-105 hover:shadow-blue-300 active:scale-100 disabled:opacity-50">
                  See candidates
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Here is list of the candidates</DialogTitle>
                  <DialogDescription>
                    {applied.length ? (
                      applied.map((email, index) => (
                        <div className="mt-3" key={email}>
                          {index + 1}. {email}
                        </div>
                      ))
                    ) : (
                      <div className="my-10 text-center text-lg text-red-500">
                        No candidate has applied for this job yet!
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetailsHeader;
