import React from "react";
import { TbCalendarTime, TbClock, TbLocation, TbSearch } from "react-icons/tb";

const JobDetailsBody = () => {
  return (
    <section className="mb-10 grid grid-cols-[3fr_1fr] gap-5">
      {/* left side */}
      <div className="grid gap-10 rounded-2xl border border-primary-100 p-10">
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">
            About this job
          </h1>
          <p className=" leading-relaxed text-gray-600">
            We are looking for an associate project manager to join our team and
            help us deliver high-quality products and services to our clients.
            As an associate project manager, you will be responsible for: -
            Supporting the senior project manager in planning, executing, and
            monitoring various projects - Coordinating with internal and
            external stakeholders to ensure timely and effective communication -
            Preparing project documentation, reports, and presentations -
            Managing project risks, issues, and changes - Assisting in project
            budgeting, scheduling, and resource allocation - Contributing to the
            continuous improvement of project management processes and best
            practices
          </p>
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">
            Core Responsibilites:
          </h1>
          <ul className=" ml-2 grid gap-2 text-gray-600">
            <li>
              <span>-</span> Supporting the senior project manager in planning,
              executing, and monitoring various projects
            </li>
            <li>
              <span>-</span> Supporting the senior project manager in planning,
              executing, and monitoring various projects
            </li>
            <li>
              <span>-</span> Supporting the senior project manager in planning,
              executing, and monitoring various projects
            </li>
            <li>
              <span>-</span> Supporting the senior project manager in planning,
              executing, and monitoring various projects
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-bold text-primary-900">Skills:</h1>
          <div className="flex gap-3 text-sm">
            <span className="rounded-lg bg-primary-50 px-3 py-1 text-primary-500">
              HTML
            </span>
          </div>
        </div>
      </div>

      {/* right side */}
      <aside className="h-fit rounded-2xl bg-primary-50 bg-opacity-70 p-10 ">
        <h2 className="mb-1 flex items-end gap-1 ">
          <span className="text-3xl font-bold text-primary-900">$137,000</span>
          <span className="text-base text-gray-600">/Per Annum</span>
        </h2>

        <div className="mt-10 grid gap-5">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbLocation className="text-xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">Remote</h5>
              <p className="text-xs text-gray-600">Location</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbCalendarTime className="text-xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">Fulltime</h5>
              <p className="text-xs text-gray-600">Job Type</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary-100 p-3 text-primary-600">
              <TbLocation className="text-xl" />
            </span>
            <div>
              <h5 className="font-semibold text-primary-900">Remote</h5>
              <p className="text-xs text-gray-600">Location</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default JobDetailsBody;
