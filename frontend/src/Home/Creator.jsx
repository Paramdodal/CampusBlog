import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setAdmin(data.admins);
      } catch (error) {
        console.log("Error fetching admins:", error);
      }
    };
    fetchAdmins();
  }, []);

  return (
    <section className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Popular Creators
        </h2>

        {admin && admin.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {admin.slice(0, 4).map((element) => (
              <div
                key={element._id}
                className="flex flex-col items-center bg-gray-800 rounded-lg shadow hover:shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={element.photo.url}
                  alt={element.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 mb-4"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">{element.name}</p>
                  <p className="text-xs text-gray-400">{element.role}</p>
                </div>
              </div>
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

export default Creator;
