import DoctorSignup from "@/components/Auth/DoctorSignup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor - Sign Up Page",
  description: "This is Sign Up page for MediLink Doctor",
  // other metadata
};

export default function Register() {
  return (
    <>
      <DoctorSignup />
    </>
  );
}
