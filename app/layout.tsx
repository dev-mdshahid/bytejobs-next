import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteJobs | Find your dream jobs",
  description:
    "ByteJobs is the ultimate platform for finding your dream jobs in the tech industry. Whether you are a developer, designer, marketer, or anything in between, ByteJobs has you covered. You can browse thousands of opportunities from leading companies, apply with one click, and get feedback in minutes. ByteJobs is more than just a job board, it's a community of passionate professionals who want to make a difference in the world. Join ByteJobs today and discover the career you've always wanted.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
