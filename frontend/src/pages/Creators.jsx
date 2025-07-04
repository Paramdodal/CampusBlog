import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          All Creators
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {creators.map((creator) => (
            <div
              key={creator._id}
              className="bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={creator.photo.url}
                  alt={creator.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
                  <img
                    src={creator.photo.url}
                    alt={creator.name}
                    className="w-16 h-16 rounded-full mx-auto border-4 border-yellow-400"
                  />
                </div>
              </div>

              <div className="px-4 pt-8 pb-6 mt-4">
                <h3 className="text-center text-lg font-semibold text-white">
                  {creator.name}
                </h3>
                <p className="text-center text-gray-400 mt-1">{creator.email}</p>
                <p className="text-center text-gray-400 mt-1">{creator.phone}</p>
                <p className="text-center text-yellow-400 mt-1">{creator.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Creators;
