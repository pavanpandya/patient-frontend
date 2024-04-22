import { CommonUserLS } from "@/components/CommonUserLS/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Sign Up Page",
  description: "This is Sign Up page for Medilink",
  // other metadata
};

export default function Register() {
  return (
    <>
      <CommonUserLS />
    </>
  );
}
