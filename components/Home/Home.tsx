import React from 'react';
import SearchJobs from './SearchJobs/SearchJobs';
import JobCategories from './JobCategories/JobCategories';
import SuggestedJobs from './SuggestedJobs/SuggestedJobs';
import TopNav from '../shared/TopNav/TopNav';

const Home = () => {
  return (
    <>
      <TopNav mode="user" />
      <main className="">
        <SearchJobs />
        <JobCategories />
        <SuggestedJobs/>
      </main>
    </>
  );
};

export default Home;
