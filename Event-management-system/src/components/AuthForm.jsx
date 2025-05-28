import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const AuthForm = ({ type, onSubmit }) => {
  const isSignUp = type === "signup";
  const [loading, setLoading] = useState(false);

  // ✅ Validation schema
  const schema = yup.object().shape({
    firstName: isSignUp
      ? yup
          .string()
          .required("First name is required")
          .min(2, "First name must be at least 2 characters")
          .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
      : yup.string(),
    lastName: isSignUp
      ? yup
          .string()
          .required("Last name is required")
          .min(2, "Last name must be at least 2 characters")
          .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
      : yup.string(),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/\d/, "Password must contain at least one number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Handle form submission
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);

      // Simulate delay for loader (remove this in production)
      await new Promise((res) => setTimeout(res, 1500));

      await onSubmit(data);
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        {isSignUp ? "Create Account" : "Welcome Back"}
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {isSignUp && (
          <>
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </>
        )}

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-md text-white transition ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <div className="mt-4 text-center">
        {isSignUp ? (
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </p>
        ) : (
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
