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
    value: 123,
  },
  {
    id: 2,
    name: "Fresher",
    value: 0,
  },
  {
    id: 3,
    name: "1+ years",
    value: 1,
  },
  {
    id: 4,
    name: "2+ years",
    value: 2,
  },
  {
    id: 5,
    name: "3+ years",
    value: 3,
  },
  {
    id: 6,
    name: "4+ years",
    value: 4,
  },
  {
    id: 7,
    name: "5+ years",
    value: 5,
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
      name: "Full time",
      jobCount: 335,
    },
    {
      id: "parttime",
      name: "Part time",
      jobCount: 126,
    },
    {
      id: "internship",
      name: "Internship",
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

export const jobPosts = [
  // Job 1
  {
    title: "Digital Marketing Specialist",
    description:
      "Join our team at Microsoft as a Digital Marketing Specialist. You will be responsible for creating and executing digital marketing campaigns, analyzing data, and optimizing strategies for our products and services.",
    responsibilities: [
      "Plan and execute digital marketing campaigns on various platforms.",
      "Analyze campaign performance and make data-driven recommendations.",
      "Collaborate with design and content teams to create engaging ad content.",
      "Identify target audiences and develop customer personas.",
      "Stay updated with digital marketing trends and tools.",
    ],
    skills: [
      "Digital Marketing",
      "Data Analysis",
      "SEO",
      "Content Creation",
      "Audience Targeting",
    ],
    company: "Microsoft",
    location: "Dhaka",
    experience: 2,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 55000,
    date: new Date("2023-10-15T09:00:00"),
    applied: [],
  },
  // Job 2
  {
    title: "Content Writer",
    description:
      "As a Content Writer at Amazon, you will create engaging and informative content for various marketing channels. Your writing skills will play a crucial role in promoting our products and engaging our customers.",
    responsibilities: [
      "Write high-quality and SEO-optimized content for websites and blogs.",
      "Craft product descriptions, promotional materials, and social media posts.",
      "Proofread and edit content to ensure accuracy and consistency.",
      "Collaborate with the marketing team to align content with marketing strategies.",
    ],
    skills: [
      "Content Writing",
      "SEO",
      "Editing",
      "Marketing Content",
      "Collaboration",
    ],
    company: "Amazon",
    location: "Remote",
    experience: 1,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 45000,
    date: new Date("2023-10-20T10:30:00"),
    applied: [],
  },
  // Job 3
  {
    title: "Social Media Manager",
    description:
      "Join Facebook as a Social Media Manager. You will be responsible for developing and executing social media strategies, managing content, and engaging with the online community.",
    responsibilities: [
      "Develop and execute social media strategies to increase brand visibility.",
      "Create and manage content for social media platforms.",
      "Monitor social media engagement and respond to comments and messages.",
      "Analyze social media data to identify trends and opportunities.",
    ],
    skills: [
      "Social Media Management",
      "Content Creation",
      "Community Engagement",
      "Data Analysis",
    ],
    company: "Facebook",
    location: "Chittagong",
    experience: 3,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 60000,
    date: new Date("2023-10-25T11:00:00"),
    applied: [],
  },
  // Job 4
  {
    title: "Public Relations Specialist",
    description:
      "Netflix is looking for a Public Relations Specialist to manage our public image and maintain positive relationships with the media and the public.",
    responsibilities: [
      "Develop and execute PR strategies to enhance the company's image.",
      "Craft press releases and manage media interactions.",
      "Monitor and analyze media coverage and public sentiment.",
      "Build and maintain positive relationships with the media and stakeholders.",
    ],
    skills: [
      "Public Relations",
      "Media Management",
      "Press Releases",
      "Stakeholder Relations",
    ],
    company: "Netflix",
    location: "Remote",
    experience: 2,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 55000,
    date: new Date("2023-10-30T09:30:00"),
    applied: [],
  },
  // Job 5
  {
    title: "Content Marketing Manager",
    description:
      "Join Apple as a Content Marketing Manager. You will lead the content marketing team to create and promote engaging content to drive brand awareness and customer engagement.",
    responsibilities: [
      "Develop and implement content marketing strategies.",
      "Lead a team of content creators and designers.",
      "Create and manage content for various marketing channels.",
      "Analyze content performance and adjust strategies accordingly.",
    ],
    skills: [
      "Content Marketing",
      "Team Leadership",
      "Content Creation",
      "Data Analysis",
    ],
    company: "Apple",
    location: "Dhaka",
    experience: 4,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 65000,
    date: new Date("2023-11-05T09:00:00"),
    applied: [],
  },
  // Job 6
  {
    title: "Marketing Analyst",
    description:
      "Squarespace is looking for a Marketing Analyst to gather and analyze marketing data, provide insights, and support data-driven decision-making in marketing campaigns.",
    responsibilities: [
      "Gather, clean, and analyze marketing data.",
      "Create reports and dashboards to track campaign performance.",
      "Provide insights to optimize marketing strategies.",
      "Collaborate with the marketing team to align data with marketing goals.",
    ],
    skills: [
      "Data Analysis",
      "Marketing Analytics",
      "Data Visualization",
      "Collaboration",
    ],
    company: "Squarespace",
    location: "Chittagong",
    experience: 2,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 55000,
    date: new Date("2023-11-10T10:30:00"),
    applied: [],
  },
  // Job 7
  {
    title: "Copywriter",
    description:
      "Join Jira as a Copywriter. You will be responsible for crafting persuasive and effective copy for marketing materials, product descriptions, and advertising campaigns.",
    responsibilities: [
      "Write clear and compelling copy for marketing materials.",
      "Proofread and edit copy to ensure accuracy and consistency.",
      "Collaborate with designers and marketers to create engaging content.",
    ],
    skills: ["Copywriting", "Editing", "Marketing Copy", "Collaboration"],
    company: "Jira",
    location: "Remote",
    experience: 1,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 45000,
    date: new Date("2023-11-15T11:00:00"),
    applied: [],
  },
  // Job 8
  {
    title: "Event Coordinator",
    description:
      "Vercel is seeking an Event Coordinator to plan and organize marketing events, webinars, and conferences to promote our brand and engage with our audience.",
    responsibilities: [
      "Plan and execute marketing events and webinars.",
      "Coordinate logistics, including venues, speakers, and materials.",
      "Promote events to target audiences through various channels.",
      "Analyze event performance and gather feedback for improvements.",
    ],
    skills: [
      "Event Coordination",
      "Logistics Management",
      "Event Promotion",
      "Data Analysis",
    ],
    company: "Vercel",
    location: "Dhaka",
    experience: 2,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 45000,
    date: new Date("2023-11-15T11:00:00"),
    applied: [],
  },
  // Job 9
  {
    title: "Marketing Intern",
    description:
      "Axiosbyte is offering a Marketing Internship. As a Marketing Intern, you will get hands-on experience in various aspects of marketing, including content creation, social media management, and marketing campaign analysis.",
    responsibilities: [
      "Assist in content creation for marketing materials and social media.",
      "Support in managing social media accounts and online communities.",
      "Analyze and report on marketing campaign performance.",
      "Collaborate with the marketing team to execute strategies.",
    ],
    skills: [
      "Marketing Internship",
      "Content Creation",
      "Social Media Management",
      "Data Analysis",
    ],
    company: "Axiosbyte",
    location: "Remote",
    experience: 0,
    type: "Internship",
    category: "Marketing & Communication",
    salary: 25000,
    date: new Date("2023-11-20T09:00:00"),
    applied: [],
  },
  // Job 10
  {
    title: "Email Marketing Specialist",
    description:
      "Join our team at Netflix as an Email Marketing Specialist. You will be responsible for crafting engaging and effective email marketing campaigns to drive user engagement and subscriptions.",
    responsibilities: [
      "Plan and execute email marketing campaigns.",
      "Create compelling email content and designs.",
      "Segment and target email lists for maximum engagement.",
      "Analyze email campaign performance and optimize strategies.",
    ],
    skills: [
      "Email Marketing",
      "Content Creation",
      "Email Campaigns",
      "Data Analysis",
    ],
    company: "Netflix",
    location: "Chittagong",
    experience: 2,
    type: "Full time",
    category: "Marketing & Communication",
    salary: 55000,
    date: new Date("2023-11-25T09:30:00"),
    applied: [],
  },
  // Continue adding similar structures for the remaining job posts.
];
