"use client";
import Button from "@/components/shared/Button/Button";
import DropDown from "@/components/shared/DropDown/DropDown";
import InputText from "@/components/shared/Form/InputText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiError } from "react-icons/bi";

const SignupRightForm = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handler function
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    setErrorMessage("");
    const form = e.target as HTMLFormElement;
    const user = {
      name: form.fullname.value,
      profession: form.profession.value,
      email: form.email.value,
      password: form.password.value,
    };

    // POST the data
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.okay) {
        router.push("/login");
      } else {
        setErrorMessage(data.message);
        setDisabled(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-5">
      {errorMessage ? (
        <p className="fixed bottom-10 right-10 flex items-center gap-2 rounded-lg bg-red-100 px-5 py-3 text-red-600">
          <span>
            <BiError className="text-xl" />
          </span>
          {errorMessage}
        </p>
      ) : (
        ""
      )}

      <InputText
        name="fullname"
        label="Your Name"
        placeholder="Ex. Md. Shahidul Islam"
      />
      <InputText
        name="profession"
        label="Your Profession"
        placeholder="Ex. Software Engineer"
      />
      <InputText
        type="email"
        name="email"
        label="Your Email Address"
        placeholder="Ex. mdshahidulridoy@gmail.com"
      />
      <InputText
        type="password"
        name="password"
        label="Your Password"
        placeholder="Enter Your Password here"
      />

      <Button
        disabled={disabled}
        type="primary"
        text={disabled ? "Creating account..." : "Create Account"}
        className={"mt-3 " + (disabled ? "opacity-50" : "")}
      />
    </form>
  );
};

export default SignupRightForm;
