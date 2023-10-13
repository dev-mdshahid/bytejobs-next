"use client";
import Button from "@/components/shared/Button/Button";
import InputText from "@/components/shared/Form/InputText";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { BiError } from "react-icons/bi";

const LoginRightForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [disabled, setDisabled] = useState(false);
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  console.log(redirectUrl);

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    setErrorMessage("");

    const formElement = e.target as HTMLFormElement;

    const user = {
      email: formElement.email.value,
      password: formElement.password.value,
    };

    const res = await signIn("credentials", {
      ...user,
      redirect: false,
    });

    if (res?.error) {
      setErrorMessage(res.error);
      setDisabled(false);
    } else {
      router.push(redirectUrl);
    }
  };
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
        text={disabled ? "Logging in..." : "Submit"}
        className={"mt-3 " + (disabled ? "opacity-50" : "")}
      />
    </form>
  );
};

export default LoginRightForm;
