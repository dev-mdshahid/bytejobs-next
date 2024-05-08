import Link from "next/link";
import { TbSearch } from "react-icons/tb";

type SuggestedSearchTermsPropsType = {
  searchTerms: Array<string>;
};

const SuggestedSearchTerms = ({
  searchTerms,
}: SuggestedSearchTermsPropsType) => {
  return (
    <section className="mx-auto mt-20 w-[1000px]">
      <h2 className="mb-6 font-semibold text-gray-600">
        Suggested job searches
      </h2>
      <div className="flex flex-wrap justify-center gap-3 whitespace-nowrap">
        {searchTerms.slice(0, 10).map((item, index) => (
          <Link
            href={"search/" + item}
            key={index}
            className="flex flex-nowrap items-center gap-2 whitespace-nowrap rounded-2xl border border-blue-100 px-4 py-1 text-sm text-gray-600 shadow-blue-300 transition hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
          >
            <span>{item}</span>
            <span>
              <TbSearch />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SuggestedSearchTerms;
