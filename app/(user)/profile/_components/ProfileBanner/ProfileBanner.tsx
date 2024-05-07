"use client";
import Button from "@/components/shared/Button/Button";
import { useGetUser } from "@/lib/context/userContext";
import { useSession } from "next-auth/react";
import React from "react";
import { BsBookmark } from "react-icons/bs";

export default function ProfileBanner() {
  const { loading, user } = useGetUser();
  const { name, email, profession } = user;
  console.log(loading);

  if (loading)
    return (
      <div className="mt-10 text-center text-2xl font-bold text-primary-600">
        Loading user info...
      </div>
    );

  return (
    <section>
      <div className="relative mb-24 h-64 w-full rounded-2xl bg-gradient-to-r from-primary-500  to-cyan-400">
        <div className="absolute bottom-0 left-16 h-32 w-32 translate-y-1/2 rounded-full bg-white p-5  shadow-lg shadow-primary-100">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-4xl font-extrabold capitalize text-white">
            {name[0]}
          </div>
        </div>
      </div>
      <div className="ml-16 flex items-end justify-between">
        <div>
          {/* First row */}
          <h1 className="mb-1 text-3xl font-bold text-primary-900">{name}</h1>
          {/* Second row */}
          <p className="mb-2 text-lg">{profession}</p>
          {/* Third row */}
          <div className="flex items-center gap-10">
            {/* <p className="text-gray-500">
          {location} - {dateObject.getUTCDate()}{" "}
          {monthsOfYear[dateObject.getUTCMonth() + 1].slice(0, 3)},
          {dateObject.getUTCFullYear()}
        </p> */}
            <div className="flex items-center gap-2">
              {/* <MdOutlineGroups className="text-2xl text-primary-600" /> */}
              <div className="flex items-center">
                {/* <span className="mr-1 font-semibold">{applied.length}</span>{" "} */}
                {/* <span className="">applied</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          {/* <Button type="secondary">
            <div className="flex items-center gap-2">
              <BsBookmark />
              {email}
            </div>
          </Button> */}
          {/* <Button type="primary" text={email} /> */}
        </div>
      </div>
    </section>
  );
}
