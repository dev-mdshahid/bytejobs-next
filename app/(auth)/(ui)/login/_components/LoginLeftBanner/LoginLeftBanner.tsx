import React from "react";
import loginIllustration from "@/media/illustration/login.png";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";

const LoginLeftBanner = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-evenly rounded-xl  bg-primary-500 p-10">
      <h1 className="text-cente mb-5 text-center  text-4xl font-extrabold capitalize text-white">
        Please login <br />{" "}
        <span className="mt-2 inline-block">To your account </span>{" "}
      </h1>
      <Image src={loginIllustration} alt="Login to your account illustration" />
      <div className="w-full">
        <div className="flex items-center justify-between rounded-xl bg-primary-50 p-5 ">
          <p className="ml-3 font-bold text-primary-500">
            Don&apos;t have an account?{" "}
          </p>
          <Button
            type="primary"
            href={"signup"}
            className="rounded-lg bg-white px-3 py-2 text-primary-500"
          >
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginLeftBanner;
