export type JobDetailsType = {
  _id: string;
  title: string;
  description: string;
  responsibilities: Array<string>;
  skills: Array<string>;
  company: string;
  location: string;
  experience: number;
  type: string;
  category: string;
  salary: number;
  date: Date;
  applied: Array<string>;
  postedBy: string;
};
