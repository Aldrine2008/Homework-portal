import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogOut, User } from "lucide-react";

const classes = [
  "Form One",
  "Form Two",
  "Form Three",
  "Form Four",
  "Form Five",
  "Form Six",
];

function ClassDashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-blue-200 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-gradient-to-br from-pink-200 to-blue-200 py-4 px-4 sm:px-6 mb-8 shadow-md flex items-center justify-between rounded-b-xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-600">
              ST. JOHN PAUL II COLLEGE
            </span>
          </h1>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="p-2 hover:bg-white/50 rounded-full transition"
              title="Profile"
            >
              <User className="text-gray-800 w-5 h-5" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/50 rounded-full transition"
              title="Logout"
            >
              <LogOut className="text-red-600 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6">
          Homework Dashboard
        </h2>

        {/* User Badge */}
        {user && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/90 rounded-full shadow-md">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-semibold text-md sm:text-lg">
                  {user.username[0].toUpperCase()}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
                    {user.role}
                  </span>
                  <span className="mx-2">·</span>
                  {user.username}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Class Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {classes.map((className, index) => (
            <Link
              key={index}
              to={`/class/${className.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-700 to-orange-500 rounded-2xl rotate-45 transform group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl sm:text-2xl font-bold -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      {className.split(" ")[1]}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl text-center text-gray-700 font-semibold mb-2">
                  {className}
                </h3>
                <div className="w-1/3 h-1 mx-auto bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-50 group-hover:w-2/3 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassDashboard;
