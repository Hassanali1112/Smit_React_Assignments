import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

const signinImage =
  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-6xl border bg-white rounded-xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-6 bg-indigo-100">
          <img
            src={signinImage}
            alt="Sign In Visual"
            className="w-full h-auto object-cover rounded-md max-h-[400px] md:max-h-full"
          />
        </div>
        <div className="flex items-center justify-center p-6">
          <AuthForm
            type="signin"
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
