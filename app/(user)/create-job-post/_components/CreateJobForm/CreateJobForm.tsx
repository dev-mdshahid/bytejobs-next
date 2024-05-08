"use client";
import Button from "@/components/shared/Button/Button";
import InputText from "@/components/shared/Form/InputText";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function CreateJobForm() {
  const session = useSession();

  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    const toastLoading = toast.loading("Posting new job...");
    const form = e.target as HTMLFormElement;
    const postData = {
      title: form.jobTitle.value,
      company: form.company.value,
      location: form.location.value,
      experience: parseInt(form.experience.value),
      type: form.type.value.toLowerCase(),
      category: form.category.value,
      salary: parseInt(form.salary.value),
      description: form.description.value,
      responsibilities: form.responsibilities.value.split("."),
      skills: form.skills.value.split("."),
      date: new Date().toISOString(),
      postedBy: session.data?.user?.email,
      applied: [],
    };

    try {
      const buffer = await fetch(`/api/create-new-job`, {
        method: "POST",
        body: JSON.stringify(postData),
      });
      const res = await buffer.json();
      if (res.ok) {
        toast.success("Job posted successfully!");
        router.push("/profile");
      } else {
        toast.error("Alas! There was an error posting the job!");
      }
      console.log(res);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
    toast.dismiss(toastLoading);
    setDisabled(false);
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
      <InputText
        name="jobTitle"
        label="Job Title"
        placeholder="Write the specific job title"
      />
      <InputText
        name="company"
        label="Company name"
        placeholder="Enter the company"
      />
      <InputText
        name="location"
        label="Job Location"
        placeholder="Ex. Remote/Dhaka/Rajshahi"
      />
      <InputText
        name="experience"
        label="Experience (in years)"
        placeholder="Ex. 1/2/3"
        type="number"
      />

      <InputText
        name="type"
        label="Job type"
        placeholder="Ex. Internship/Full time/Part time"
      />

      <InputText
        name="category"
        label="Job Category"
        placeholder="Ex. Marketing, Softaware etc."
      />

      <InputText
        name="salary"
        label="Offered salary"
        placeholder="Write down the specific offered salary"
        type="number"
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor={"description"}
          className="text-sm font-semibold text-primary-900"
        >
          Description
        </label>
        <textarea
          className="rounded-lg border border-primary-100 px-4 py-2 outline-none focus:border focus:border-primary-400"
          name={"description"}
          placeholder={"Write down the details carefully..."}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={"responsibilities"}
          className="text-sm font-semibold text-primary-900"
        >
          Responsibilities
        </label>
        <textarea
          className="rounded-lg border border-primary-100 px-4 py-2 outline-none focus:border focus:border-primary-400"
          name={"responsibilities"}
          placeholder={"Write down all the core responsibilities..."}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={"skills"}
          className="text-sm font-semibold capitalize text-primary-900"
        >
          skills
        </label>
        <textarea
          className="rounded-lg border border-primary-100 px-4 py-2 outline-none focus:border focus:border-primary-400"
          name={"skills"}
          placeholder={"Write down all the core skills..."}
          required
        />
      </div>

      <div className="col-span-2 flex items-end justify-end">
        <Button type="primary" className="w-full" disabled={disabled}>
          Submit
        </Button>
      </div>
    </form>
  );
}
