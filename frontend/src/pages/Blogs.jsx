import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          All Blogs
        </h1>

        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="relative bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-xs">{blog?.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-white text-lg">No blogs available.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blogs;
