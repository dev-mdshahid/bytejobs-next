import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

type JobCategoryCardPropsType = {
  icon: React.ReactNode;
  color: string;
  title: string;
  jobsCount: number;
};

const JobCategoryCard = ({
  icon,
  color,
  title,
  jobsCount,
}: JobCategoryCardPropsType) => {
  const style = `flex justify-between items-center gap-4 bg-white p-5 rounded-xl text-blue-900 shadow-md shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 hoer:bg-[#3361ff] transition`;
  return (
    <Link href="categories" className={style}>
      <div className="flex items-center gap-4">
        <div
          className={`text-primary bg-shade-darker mt-1 h-fit rounded-full p-2.5 text-3xl`}
        >
          {icon}
        </div>
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="mt-1 text-sm">{jobsCount} jobs available</p>
        </div>
      </div>

      <div>
        <SlArrowRight className="text-3xl text-gray-300" />
      </div>
    </Link>
  );
};

export default JobCategoryCard;
