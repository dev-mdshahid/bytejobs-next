import React from "react";
import SuggestedJobCard from "./SuggestedJobCard/SuggestedJobCard";

const SuggestedJobs = () => {
  return (
    <section className="py-20">
      <h1 className="text-center text-5xl font-bold capitalize">
        Featured jobs <br />
        <div className="text-primary my-4">Only For You</div>
      </h1>

      <div className="max-width grid grid-cols-3 gap-6 pt-12">
        <SuggestedJobCard />
        <SuggestedJobCard />
        <SuggestedJobCard />
        <SuggestedJobCard />
        <SuggestedJobCard />
        <SuggestedJobCard />
      </div>
    </section>
  );
};

export default SuggestedJobs;
