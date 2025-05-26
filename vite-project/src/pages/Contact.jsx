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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border">
          <form className="space-y-6">
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
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Contact Illustration"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
