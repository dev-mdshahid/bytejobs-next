import React from "react";
import signupIllustration from "@/media/illustration/signup.png";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";

const SignupLeftBanner = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-evenly rounded-xl  bg-primary-500 p-10">
      <h1 className="text-cente mb-5 text-center  text-4xl font-extrabold capitalize text-white">
        Create account <br />{" "}
        <span className="mt-2 inline-block">Within a Minute </span>{" "}
      </h1>
      <div className="px-10">
        <Image
          src={signupIllustration}
          alt="Login to your account illustration"
        />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between rounded-xl bg-primary-50 p-5 ">
          <p className="ml-3 font-bold text-primary-500">
            Already have an account?{" "}
          </p>
          <Button
            type="primary"
            href={"login"}
            className="rounded-lg bg-white px-3 py-2 text-primary-500"
          >
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignupLeftBanner;
