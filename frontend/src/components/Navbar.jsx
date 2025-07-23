import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center border-b border-gray-200">
      <h3 className="text-xl font-bold text-indigo-600">TaskSphere 🧠</h3>

      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
