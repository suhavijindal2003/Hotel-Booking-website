// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("Admin Logout successfully");
    navigate('/');
  };
  return (
    <div className="h-screen flex flex-col justify-between items-center w-64 bg-gray-800 text-white py-5">
      <ul className="mt-8 flex flex-col w-full justify-center text-xl">
        <li>
          <Link
            to="/Admindashboard"
            className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/roomslist"
            className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            to="/bookings"
            className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          >
            Bookings
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className="block px-6 py-3 hover:bg-gray-700 transition duration-200"
          >
            Reviews
          </Link>
        </li>
      </ul>
      <button
        className="block rounded-md text-start px-3 py-1 text-lg bg-red-500 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
};

export default Sidebar;
