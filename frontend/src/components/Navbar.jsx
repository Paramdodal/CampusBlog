import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/users/logout",
        { withCredentials: true }
      );
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <header className="border-b bg-gray-900 text-gray-400">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-xl font-bold text-white">
            <Link to="/">
              Campus<span className="text-blue-500">Blog</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-white">HOME</Link>
            <Link to="/blogs" className="hover:text-white">BLOGS</Link>
            <Link to="/creators" className="hover:text-white">CREATORS</Link>
            <Link to="/about" className="hover:text-white">ABOUT</Link>
            <Link to="/contact" className="hover:text-white">CONTACT</Link>
          </nav>

          <div className="hidden md:flex space-x-3">
            {isAuthenticated && profile?.user?.role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            )}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGOUT
              </button>
            )}
          </div>

          <div className="md:hidden" onClick={() => setShow(!show)}>
            {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {show && (
          <nav className="md:hidden bg-gray-800 text-center py-4 space-y-4">
            <Link to="/" onClick={() => setShow(false)} className="block hover:text-white">HOME</Link>
            <Link to="/blogs" onClick={() => setShow(false)} className="block hover:text-white">BLOGS</Link>
            <Link to="/creators" onClick={() => setShow(false)} className="block hover:text-white">CREATORS</Link>
            <Link to="/about" onClick={() => setShow(false)} className="block hover:text-white">ABOUT</Link>
            <Link to="/contact" onClick={() => setShow(false)} className="block hover:text-white">CONTACT</Link>
            {isAuthenticated && profile?.user?.role === "admin" && (
              <Link
                to="/dashboard"
                onClick={() => setShow(false)}
                className="block bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            )}
            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setShow(false)}
                className="block bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={(e) => { handleLogout(e); setShow(false); }}
                className="block bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGOUT
              </button>
            )}
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
