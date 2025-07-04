import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          Devotional Blogs
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          The concept of gods varies widely across different cultures,
          religions, and belief systems.
        </p>

        {devotionalBlogs && devotionalBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {devotionalBlogs.map((blog, index) => (
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
                  <h3 className="text-lg font-semibold">{blog?.title}</h3>
                  <p className="text-xs">{blog?.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-white text-lg">No devotional blogs available.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Devotional;
