import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="bg-gray-900 text-gray-400 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar component={component} setComponent={setComponent} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {component === "My Profile" && <MyProfile />}
        {component === "Create Blog" && <CreateBlog />}
        {component === "Update Blog" && <UpdateBlog />}
        {component === "My Blogs" && <MyBlogs />}
      </main>
    </section>
  );
}

export default Dashboard;
