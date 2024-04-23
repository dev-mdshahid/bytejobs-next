import { JobDetailsType } from "@/utilities/types";
import React from "react";
import {
  TbArrowBigUpLines,
  TbCalendarTime,
  TbClock,
  TbLocation,
  TbSearch,
} from "react-icons/tb";

type JobDetailsBodyPropsType = {
  data: JobDetailsType;
};

const JobDetailsBody = ({ data }: JobDetailsBodyPropsType) => {
  const {
    description,
    responsibilities,
    skills,
    salary,
    location,
    type,
    experience,
  } = data;
  return (
    <section className="mb-10 grid grid-cols-[3fr_1fr] gap-5">
      {/* left side */}
      <div className="grid gap-10 rounded-2xl border border-primary-100 p-10">
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">
            About this job
          </h1>
          <p className=" leading-relaxed text-gray-600">{description}</p>
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">
            Core Responsibilites:
          </h1>
          <ul className=" ml-2 grid gap-2 text-gray-600">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>
                <span>-</span> {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">Skills:</h1>
          <div className="flex gap-3 text-sm">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-primary-50 px-3 py-1 text-primary-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <aside className="h-fit rounded-2xl bg-primary-50 bg-opacity-70 p-10 ">
        <h2 className="mb-1 flex items-end gap-1 ">
          <span className="text-3xl font-bold text-primary-900">${salary}</span>
          <span className="text-base text-gray-600">/Per Annum</span>
        </h2>

        <div className="mt-6 grid gap-5">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbLocation className="text-2xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">{location}</h5>
              <p className="text-xs text-gray-600">Location</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbCalendarTime className="text-2xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">{type}</h5>
              <p className="text-xs text-gray-600">Job Type</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbClock className="text-2xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">
                {experience} Years
              </h5>
              <p className="text-xs text-gray-600">Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbArrowBigUpLines className="text-2xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">Mid Level</h5>
              <p className="text-xs text-gray-600">Seniority</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default JobDetailsBody;
