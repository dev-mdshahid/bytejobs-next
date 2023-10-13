import google from "@/media/pictorial logo/google.png";
import squarespace from "@/media/pictorial logo/squarespace.png";
import microsoft from "@/media/pictorial logo/microsoft.png";
import apple from "@/media/pictorial logo/apple.png";
import amazon from "@/media/pictorial logo/amazon.png";
import facebook from "@/media/pictorial logo/facebook.png";
import jira from "@/media/pictorial logo/jira.png";
import vercel from "@/media/pictorial logo/vercel.png";
import netflix from "@/media/pictorial logo/netflix.png";
import axiosbyte from "@/media/pictorial logo/axiosbyte.png";
import { StaticImageData } from "next/image";

type companiesLogoType = {
  [key: string]: StaticImageData;
};

export const companiesLogo: companiesLogoType = {
  google,
  amazon,
  facebook,
  apple,
  netflix,
  vercel,
  squarespace,
  axiosbyte,
  jira,
  microsoft,
};
