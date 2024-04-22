import InsuranceProviderSignin from "@/components/Auth/InsuranceProviderSignin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Provider - Login Page",
  description: "This is Login page for MediLink Insurance Provider",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <InsuranceProviderSignin />
    </>
  );
};

export default SigninPage;
