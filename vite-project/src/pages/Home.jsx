import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-12 gap-y-10 lg:gap-x-16">
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
          Plan. Promote. Manage.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
          Simplify your event planning with our intuitive platform. From
          intimate meetups to global conferences — create, manage, and succeed
          with ease.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <a
            href="/signup"
            className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl text-base font-medium transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl text-base font-medium transition duration-300"
          >
            Login
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          alt="Event Planning"
          className="w-full max-w-[500px] h-auto object-cover rounded-2xl shadow-xl transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Home;
