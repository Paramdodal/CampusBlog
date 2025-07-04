import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Hero() {
  const { blogs } = useAuth();

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Latest Blogs
        </h2>

        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.slice(0, 4).map((element) => (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow hover:shadow-lg"
              >
                <div className="relative group">
                  <img
                    src={element.blogImage.url}
                    alt={element.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
                  <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {element.title}
                  </h3>
                </div>

                <div className="flex items-center p-4">
                  <img
                    src={element.adminPhoto}
                    alt={element.adminName}
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />
                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      {element.adminName}
                    </p>
                    <p className="text-xs text-gray-400">New</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-white text-lg">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
