import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionizing Event Management
            </h1>
            <p className="text-lg leading-relaxed">
              Our Event Management System streamlines event planning and
              execution with powerful features, responsive UI, and a modern tech
              stack. From small meetups to corporate conferences, our platform
              adapts to your unique needs.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1588776814546-bc8906c803f8?auto=format&fit=crop&w=1200&q=80"
            alt="Event Planning"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328f9c16?auto=format&fit=crop&w=1200&q=80"
            alt="Developer"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Meet the Developer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This project is crafted by Hassan Ali — a dedicated MERN Stack
              developer with a foundation in Physics and hands-on experience in
              industrial automation. With proficiency in React, Tailwind CSS,
              Supabase, and more, Hassan delivers dynamic, scalable
              applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Projects like a Loan Management Dashboard, Weather App, Quiz
              System, and Stopwatch illustrate his ability to deliver
              responsive, user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
