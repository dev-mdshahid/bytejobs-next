import React from 'react';
import { categories } from '../../../utilities/SiteData';
import JobCategoryCard from './JobCategoryCard/JobCategoryCard';

const JobCategories = () => {
  return (
    <section className="bg-shade py-20">
      <h1 className="text-5xl font-bold text-center capitalize">
        Choose from <br />
        <div className="text-primary my-4">Different Categories</div>
      </h1>

      <div className="max-width grid grid-cols-4 gap-6 pt-12">
        {categories.map((item) => (
          <JobCategoryCard
            key={item.id}
            title={item.name}
            icon={item.icon}
            color={item.color}
            jobsCount={item.jobs}
          />
        ))}
      </div>
    </section>
  );
};



export default JobCategories;
