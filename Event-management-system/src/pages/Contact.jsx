import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">
            We’re here to answer your questions and help you plan your next
            event. Reach out via the form below or connect with us on social
            media.
          </p>
        </div>
      </section>
      <div className="container m-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <section className="py-20 px-6 w-full lg:w-1/2">
            <form className="space-y-6 ">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <div className="text-start">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          <section className="py-20 px-6 w-full lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Contact Illustration"
              className="w-full h-100 object-cover rounded-lg shadow-md"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
