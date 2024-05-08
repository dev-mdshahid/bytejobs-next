import JobCategories from "./_components/JobCategories/JobCategories";
import SearchJobs from "./_components/SearchJobs/SearchJobs";
import SuggestedJobs from "./_components/SuggestedJobs/SuggestedJobs";

export default function HomePage() {
  return (
    <main className="">
      <SearchJobs />
      <JobCategories />
      <SuggestedJobs />
    </main>
  );
}
