import InsuranceProviderSignup from "@/components/Auth/InsuranceProviderSignup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Provider - Sign Up Page",
  description: "This is Sign Up page for MediLink Insurance Provider",
  // other metadata
};

export default function Register() {
  return (
    <>
      <InsuranceProviderSignup />
    </>
  );
}
