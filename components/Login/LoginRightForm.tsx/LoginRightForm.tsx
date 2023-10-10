import Button from "@/components/shared/Button/Button";
import InputText from "@/components/shared/Form/InputText";
import React from "react";

const LoginRightForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <InputText
        name="email"
        label="Your Email Address"
        placeholder="Ex. mdshahidulridoy@gmail.com"
      />
      <InputText
        name="password"
        label="Your Password"
        placeholder="Enter Your Password here"
      />
      <Button type="primary" text="Submit" className="mt-3" />
    </form>
  );
};

export default LoginRightForm;
