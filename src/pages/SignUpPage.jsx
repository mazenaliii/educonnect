import React from "react";
import LeftSection from "../components/auth/LeftSection";
import SignUpForm from "../components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-2 bg-[linear-gradient(180deg,rgba(29,122,133,0.731)_34.85%,rgba(244,249,253,0.85)_100%)]">
      <LeftSection />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
