import PatientSignup from "@/components/Auth/PatientSignup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient - Sign Up Page",
  description: "This is Sign Up page for Medilink Patient",
  // other metadata
};

export default function Register() {
  return (
    <>
      <PatientSignup />
    </>
  );
}
