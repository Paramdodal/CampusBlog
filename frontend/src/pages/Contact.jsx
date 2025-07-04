import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-900 text-gray-400 py-10 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Contact Me
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-pink-500" />
                  <span className="text-gray-300">paramsdodal@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span className="text-gray-300">Nashik, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
