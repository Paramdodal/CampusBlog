import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-4 text-white">Param Dodal</h2>
            <p>
              Full Stack Developer | AI & ML Learner | Coding Blogger.
              Building impactful projects and sharing knowledge.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white">Blogs</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">About Me</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          
          </div>
      </footer>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Param Dodal. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
