"use client";
import React from "react";
import googleLogo from "@/media/pictorial logo/google.png";
import facebookLogo from "@/media/pictorial logo/facebook.png";
import Image from "next/image";
import { signIn } from "next-auth/react";

const OtherLoginProviders = () => {
  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => signIn("google")}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-primary-100 p-2 transition hover:bg-primary-50 hover:bg-opacity-50"
      >
        <Image src={googleLogo} alt="Google logo" width={25} height={25} />
        <p className="text-sm text-gray-600 ">Continue with Google</p>
      </button>
      <button
        onClick={() => signIn("facebook")}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-primary-100 p-2 transition hover:bg-primary-50 hover:bg-opacity-50"
      >
        <Image src={facebookLogo} alt="facebook logo" width={25} height={25} />
        <p className="text-sm text-gray-600 ">Continue with Facebook</p>
      </button>
    </div>
  );
};

export default OtherLoginProviders;
