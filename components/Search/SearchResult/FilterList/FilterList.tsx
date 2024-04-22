import { jobFilterList } from "@/utilities/SiteData";
import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import InputRange from "@/components/shared/Form/InputRange";

const FilterList = () => {
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
            <FilterCheckbox key={id} id={id} name={name} jobCount={jobCount} />
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-bold text-primary-900">Expertise Level</h4>

        <ul>
          {jobFilterList.level.map(({ id, name, jobCount }) => (
            <FilterCheckbox key={id} id={id} name={name} jobCount={jobCount} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterList;
