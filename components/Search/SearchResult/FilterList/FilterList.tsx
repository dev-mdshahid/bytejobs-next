"use client";
import { jobFilterList } from "@/utilities/SiteData";
import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import InputRange from "@/components/shared/Form/InputRange";

type FilterListPropsType = {
  jobType: string[];
  setJobType: (value: string[]) => void;
  seniorityLevel: string[];
  setSeniorityLevel: (value: string[]) => void;
};

const FilterList = ({
  jobType,
  setJobType,
  seniorityLevel,
  setSeniorityLevel,
}: FilterListPropsType) => {
  return (
    <section className="sticky top-6 flex h-fit flex-col gap-5 rounded-lg border border-primary-50 bg-white p-6">
      <div className="mb-3">
        <h4 className="mb-4 font-bold text-primary-900">Salary Range</h4>
        <InputRange name="salary" range={100000} />
      </div>
      <div>
        <h4 className="mb-4  font-bold text-primary-900">Job Type</h4>

        <ul>
          {jobFilterList.types.map(({ id, name, jobCount }) => (
            <FilterCheckbox
              key={id}
              id={id}
              name={name + " Jobs"}
              jobCount={jobCount}
              value={jobType}
              setValue={setJobType}
            />
          ))}{" "}
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-bold text-primary-900">Seniority Level</h4>

        <ul>
          {jobFilterList.level.map(({ id, name, jobCount }) => (
            <FilterCheckbox
              key={id}
              id={id}
              name={name}
              jobCount={jobCount}
              value={seniorityLevel}
              setValue={setSeniorityLevel}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterList;
