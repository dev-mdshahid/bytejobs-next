// Importing icons
import { HiBriefcase } from "react-icons/hi";
import {
  TbApps,
  TbBriefcase,
  TbBuildingBank,
  TbHome,
  TbInfoSquare,
  TbPaint,
  TbReportMoney,
  TbTerminal2,
} from "react-icons/tb";
import {
  GiAirForce,
  GiBugleCall,
  GiProcessor,
  GiSlashedShield,
  GiTakeMyMoney,
} from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { VscGraphLeft } from "react-icons/vsc";

// --------------------------- Data for navigation bar ---------------------------
export const userNavInfo = {
  logoIcon: <HiBriefcase />,
  title: "ByteJobs",
  navList: [
    { id: 1, name: "Home", to: "/", icon: <TbHome /> },
    { id: 2, name: "Jobs", to: "/search", icon: <TbBriefcase /> },
    { id: 3, name: "Companies", to: "/companies", icon: <TbBuildingBank /> },
    { id: 4, name: "About Us", to: "/about", icon: <TbInfoSquare /> },
  ],
};

// --------------------------- Data for Dropdown menu ---------------------------
export const locations = [
  {
    id: 1,
    name: "Any",
  },
  {
    id: 2,
    name: "Remote",
  },
  {
    id: 3,
    name: "Dhaka",
  },
  {
    id: 4,
    name: "Chittagong",
  },
];

export const datesPosted = [
  {
    id: 1,
    name: "Latest",
  },
  {
    id: 2,
    name: "Last 1 day",
  },
  {
    id: 3,
    name: "Last 3 days",
  },
  {
    id: 4,
    name: "Last week",
  },
  {
    id: 5,
    name: "Last month",
  },
  {
    id: 6,
    name: "All time",
  },
];

export const requiredExperiences = [
  {
    id: 1,
    name: "Any",
  },
  {
    id: 2,
    name: "Fresher",
  },
  {
    id: 3,
    name: "1+ years",
  },
  {
    id: 4,
    name: "2+ years",
  },
  {
    id: 5,
    name: "3+ years",
  },
  {
    id: 6,
    name: "4+ years",
  },
  {
    id: 7,
    name: "5+ years",
  },
];

// --------------------------- Data for Search items ---------------------------
export const searchTerms = [
  "Front end developer",
  "Web Developer",
  "UI designer",
  "Django Developer",
  "Co-founder",
  "Advocate",
  "Managing director",
  "Project Manager",
  "Founding partner",
  "General Mangager",
  "Digital Marketer",
  "SEO Expert",
];

// --------------------------- Data for category ---------------------------
export const categories = [
  {
    id: 1,
    name: "Marketing & Communication",
    jobs: 125,
    icon: <GiBugleCall />,
    color: "blue",
  },
  {
    id: 2,
    name: "Business & Communication",
    jobs: 225,
    icon: <TbReportMoney />,
    color: "yellow",
  },
  {
    id: 3,
    name: "Design & Development",
    jobs: 134,
    icon: <TbTerminal2 />,
    color: "purple",
  },
  {
    id: 4,
    name: "Armforce Guide & Security",
    jobs: 19,
    icon: <GiAirForce />,
    color: "sky",
  },
  {
    id: 5,
    name: "Project Management",
    jobs: 125,
    icon: <AiOutlineProject />,
    color: "indigo",
  },
  {
    id: 6,
    name: "Internet Security & Privacy",
    jobs: 126,
    icon: <GiSlashedShield />,
    color: "red",
  },
  {
    id: 7,
    name: "Finance Management",
    jobs: 323,
    icon: <GiTakeMyMoney />,
    color: "magenta",
  },
  {
    id: 8,
    name: "Customer Care Support",
    jobs: 422,
    icon: <RiCustomerService2Line />,
    color: "orange",
  },
  {
    id: 9,
    name: "Human Resources Management",
    jobs: 265,
    icon: <MdOutlineManageAccounts />,
    color: "green",
  },
  {
    id: 10,
    name: "Artificial Intelligence",
    jobs: 89,
    icon: <GiProcessor />,
    color: "rose",
  },
  {
    id: 11,
    name: "Software Development",
    jobs: 76,
    icon: <TbApps />,
    color: "rose",
  },
  {
    id: 12,
    name: "Big Data Analysis",
    jobs: 76,
    icon: <VscGraphLeft />,
    color: "rose",
  },
];

// --------------------------- Job filter ---------------------------
export const jobFilterList = {
  types: [
    {
      id: "fulltime",
      name: "Full time jobs",
      jobCount: 335,
    },
    {
      id: "parttime",
      name: "Part time jobs",
      jobCount: 126,
    },
    {
      id: "remote",
      name: "Remote",
      jobCount: 313,
    },
    {
      id: "internship",
      name: "Internships",
      jobCount: 543,
    },
  ],
  level: [
    {
      id: "senior",
      name: "Senior level",
      jobCount: 122,
    },
    {
      id: "mid",
      name: "Mid level",
      jobCount: 234,
    },
    {
      id: "junior",
      name: "Junior level",
      jobCount: 453,
    },
    {
      id: "fresher",
      name: "Freshers",
      jobCount: 89,
    },
  ],
};
