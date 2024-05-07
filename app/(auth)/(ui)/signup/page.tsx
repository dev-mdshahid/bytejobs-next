import React from "react";
import Image from "next/image";

import logo from "@/media/icons/job.png";
import SignupLeftBanner from "./_components/SignupLeftBanner/SignupLeftBanner";
import SignupRightForm from "./_components/SignupRightForm/SignupRightForm";
import Divider from "@/components/shared/Divider/Divider";
import OtherLoginProviders from "../login/_components/LoginRightForm/OtherLoginProviders/OtherLoginProviders";
import AuthProtectedRoute from "@/next-auth/AuthProtectedRoute";

const Signup = () => {
  return (
    <main className="py-5">
      <section className="max-width my-auto grid grid-cols-2 place-items-center gap-10 rounded-xl border border-primary-50 p-2">
        {/* Left side */}
        <SignupLeftBanner />

        {/* Right side */}
        <section className="w-full max-w-[500px] p-10">
          {/* Top content */}
          <div className="mb-10 flex flex-col items-center">
            <Image src={logo} alt="Bytejobs logo" width={50} height={50} />
            <h1 className="mb-2 mt-3 text-3xl font-bold text-primary-900">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500">
              Provide your credentials & you&apos;re good to go!
            </p>
          </div>

          {/* Form */}
          <SignupRightForm />

          {/* divider */}
          <Divider text="OR" className="my-10" />

          {/* Other providers */}
          <OtherLoginProviders />
        </section>
      </section>
    </main>
  );
};

export default Signup;
