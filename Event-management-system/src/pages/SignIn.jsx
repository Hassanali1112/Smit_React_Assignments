import React from "react";
import AuthForm from "../components/AuthForm";
import supabase from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../context/AuthContextProvider";

const signinImage =
  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80";

const SignIn = () => {
  const navigate = useNavigate();
  const {user,setUser} = useAuth()
  console.log(user)

  

  const handleAuthSubmit = async (credentials) => {
    console.log(credentials)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast.error("Invalid credentials. Please try again.");
        console.error("Login error:", error);
        return;
      } else {
        console.log(data)
        const { data : loggedInData , error : loginError } = await supabase.from("users").select();
         

        if(loginError){
          console.log('Login Error ==>', loginError)
        } else{
          console.log(loggedInData);
          setUser(loggedInData[0]);
          toast.success("Login successful! Redirecting to dashboard...");
          setTimeout(() => {
            navigate("/dashboard");
            
          }, 1500);
        }

       
      }

     
    } catch (err) {
      toast.error("Something went wrong.");
      console.error("Unexpected login error:", err);
    }
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
          <AuthForm type="signin" onSubmit={handleAuthSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
