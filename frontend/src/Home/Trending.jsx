import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Trending() {
  const { blogs } = useAuth();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Trending Blogs
        </h2>

        {blogs && blogs.length > 0 ? (
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} className="mb-8">
            {blogs.slice(0, 6).map((element) => (
              <div key={element._id} className="px-2">
                <Link to={`/blog/${element._id}`} className="block bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                      src={element.blogImage.url}
                      alt={element.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                      {element.category}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between h-32">
                    <h3 className="text-lg font-bold text-white mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      {element.title}
                    </h3>
                    <div className="flex items-center">
                      <img
                        src={element.adminPhoto}
                        alt={element.adminName}
                        className="w-10 h-10 rounded-full border-2 border-yellow-400"
                      />
                      <p className="ml-3 text-sm text-gray-400">{element.adminName}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex items-center justify-center h-40">
            <p className="text-white text-lg">Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Trending;
