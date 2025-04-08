import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import UserManagement from "./Admin/UserManagement";
import ContentManagement from "./Admin/ContentManagement";
import Analytics from "./Admin/Analytics";
import AIManagement from "./Admin/AIManagement";
import FeedbackSupport from "./Admin/FeedbackSupport";
import Logo from "../Images/Logo.png";
import Skinspect from "../Images/Skinspect.png";
import BackgroundImage from "../Images/BackgroundImage.png"; // Import background image here

const Admin = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 shadow-md p-4 flex flex-col">
        {/* Logo and SkinSpect */}
        <div className="logo flex items-center mb-10">
          {" "}
          {/* Adjusted margin */}
          <img src={Logo} className="logo-image h-16 mr-3" alt="Logo" />
          <img src={Skinspect} className="logo-text h-9" alt="Skinspect" />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow">
          <ul className="nav-links font-poppins text-base font-medium flex flex-col gap-12">
            <li>
              <Link
                to="/admin/dashboard"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/dashboard" ? "bg-blue-100" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/users" ? "bg-blue-100" : ""
                }`}
              >
                User Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/content"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/content" ? "bg-blue-100" : ""
                }`}
              >
                Content Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/analytics"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/analytics" ? "bg-blue-100" : ""
                }`}
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/admin/aimanagement"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/aimanagement"
                    ? "bg-blue-100"
                    : ""
                }`}
              >
                AI Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/feedback"
                className={`flex items-center p-2 rounded text-blue-500 text-lg hover:bg-gray-200 ${
                  location.pathname === "/admin/feedback" ? "bg-blue-100" : ""
                }`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area with Background */}
      <main
        className="flex-1 p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/content" element={<ContentManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/aimanagement" element={<AIManagement />} />
          <Route path="/feedback" element={<FeedbackSupport />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;
