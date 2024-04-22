import DoctorSignin from "@/components/Auth/DoctorSignin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor - Login Page",
  description: "This is Login page for MediLink Doctor",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <DoctorSignin />
    </>
  );
};

export default SigninPage;
