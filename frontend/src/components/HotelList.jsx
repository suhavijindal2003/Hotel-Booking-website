// src/components/HotelList.js
import React from "react";
import Sidebar from "./Sidebar";

const HotelList = () => {
    // Sample data (Replace this with data from API or database)
    const hotels = [
        { id: 1, name: "Hotel A", location: "New York", rooms: 5 },
        { id: 2, name: "Hotel B", location: "Los Angeles", rooms: 10 },
        { id: 3, name: "Hotel C", location: "Chicago", rooms: 7 },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Sticky Header */}
                <header className="bg-white shadow-md sticky top-0 z-10 flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-700">
                        Hotel List
                    </h1>
                   
                </header>

                {/* Content Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <table className="w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-6 py-3 border w-[30%]">Hotel Name</th>
                                <th className="px-6 py-3 border w-[30%]">Location</th>
                                <th className="px-6 py-3 border w-[20%]">Rooms</th>
                                <th className="px-6 py-3 border w-[20%]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((hotel) => (
                                <tr key={hotel.id}>
                                    <td className="px-6 py-3 border">{hotel.name}</td>
                                    <td className="px-6 py-3 border">{hotel.location}</td>
                                    <td className="px-6 py-3 border">{hotel.rooms}</td>
                                    <td className="px-6 py-3 flex justify-center items-center gap-4 border">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                            Update
                                        </button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>

                {/* Sticky Footer */}
                <footer className="bg-gray-200 text-center py-4 sticky bottom-0">
                    <p className="text-sm text-gray-600">
                        © 2024 Hotel Booking System. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default HotelList;
