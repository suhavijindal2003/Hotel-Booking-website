import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalRooms: 0,
    totalBookings: 0,
    recentlyAddedRooms: [],
    recentlyAddedUsers: [],
  });

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admins/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure proper authentication
        },
      });
      const data = await response.json();
      if (response.ok) {
        setDashboardData(data);
      } else {
        console.error("Failed to fetch dashboard data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);


  return (
    <div className="flex w-screen h-screen items-center bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-col w-full bg-gray-100 h-full p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </header>

        {/* Metrics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-gray-500 text-sm uppercase">Total Users</h2>
            <p className="text-4xl font-bold mt-2">{dashboardData.totalUsers}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-gray-500 text-sm uppercase">Total Rooms</h2>
            <p className="text-4xl font-bold mt-2">{dashboardData.totalRooms}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-gray-500 text-sm uppercase">Total Bookings</h2>
            <p className="text-4xl font-bold mt-2">{dashboardData.totalBookings}</p>
          </div>
        </section>

        {/* Recently Added Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recently Added Rooms */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Recently Added Rooms</h2>
            <ul className="divide-y divide-gray-200">
              {dashboardData.recentlyAddedRooms.map((room) => (
                <li key={room._id} className="py-2">
                  <p className="text-gray-800 font-medium">{room.name}</p>
                  <p className="text-gray-500 text-sm">Price : {room.price}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Recently Added Users */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Recently Added Users</h2>
            <ul className="divide-y divide-gray-200">
              {dashboardData.recentlyAddedUsers.map((user) => (
                <li key={user._id} className="py-2">
                  <p className="text-gray-800 font-medium">{user.username}</p>
                  <p className="text-gray-500 text-sm">Email: {user.email}</p>
                  <p className="text-gray-500 text-sm">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
