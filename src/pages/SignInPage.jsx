import React from "react";
import SignInForm from "../components/auth/SignInForm";
import LeftSection from "../components/auth/LeftSection";

const SignInPage = () => {
  return (
    <div className="grid grid-cols-2 bg-[linear-gradient(180deg,rgba(29,122,133,0.731)_34.85%,rgba(244,249,253,0.85)_100%)]">
      <LeftSection />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
