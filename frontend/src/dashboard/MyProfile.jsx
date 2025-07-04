import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();

  const maskMobile = (number) => {
    if (!number) return "";
    const visible = number.slice(0, number.length - 4);
    return visible + "****";
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-400">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-md">
        {/* Cover Image */}
        <div className="relative">
          <img
            src={profile?.user?.photo?.url}
            alt="cover"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
            <img
              src={profile?.user?.photo?.url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-400"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-6 py-10 mt-8">
          <h2 className="text-center text-2xl font-semibold text-white">
            {profile?.user?.name}
          </h2>
          <p className="text-center text-gray-400 mt-2">
            {profile?.user?.email}
          </p>
          <p className="text-center text-gray-400 mt-2">
            {maskMobile(profile?.user?.phone)}
          </p>
          <p className="text-center text-yellow-400 mt-2">
            {profile?.user?.role}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
