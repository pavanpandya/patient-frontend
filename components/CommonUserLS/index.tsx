// Create a new component called CommonUserLS. This component will be used to redirect three users i.e. patient, doctor and insurance provider to their respective login and signup pages. The component will have the following features:
// Component will have total 3 buttons, one for each user type.
// Each button will have a unique icon and text.
// Each button will have a hover effect.
// Each button will redirect the user to their respective login or signup page.
// Component will be used in Hero component.

// Path: components/CommonUserLS/index.tsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export const CommonUserLS = () => {
  const router = useRouter();

  const handleSignUp = (userType) => {
    router.push(`/auth/signup/${userType.toLowerCase()}`);
  };

  const handleLogin = (userType) => {
    router.push(`/auth/signin/${userType.toLowerCase()}`);
  };

  const userTypes = [
    { title: "Patient", userType: "Patient" },
    { title: "Doctor", userType: "Doctor" },
    { title: "Insurance Provider", userType: "InsuranceProvider" },
  ];

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="flex justify-center">
        {userTypes.map(({ title, userType }) => (
          <div key={userType} className="bg-gray-200 p-6 rounded-lg mx-4 text-center">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="flex justify-between">
              <button
                aria-label={`${title} sign up button`}
                className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho mr-4"
                onClick={() => handleSignUp(userType)}
              >
                Sign Up
              </button>
              <button
                aria-label={`${title} login button`}
                className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                onClick={() => handleLogin(userType)}
              >
                Login
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};