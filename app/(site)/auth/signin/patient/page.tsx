import PatientSignin from "@/components/Auth/PatientSignin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient - Login Page",
  description: "This is Login page for MediLink Patient",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <PatientSignin />
    </>
  );
};

export default SigninPage;
