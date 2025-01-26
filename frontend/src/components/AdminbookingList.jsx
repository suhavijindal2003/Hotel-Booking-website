// src/components/BookingList.js
import React from "react";
import Sidebar from "./Sidebar";

const Adminbookinglist = () => {
    const bookings = [
        { id: 1, guestName: "John Doe", hotelName: "Hotel A", room: "101", date: "2024-11-20", status: "Confirmed" },
        { id: 2, guestName: "Jane Smith", hotelName: "Hotel B", room: "102", date: "2024-11-21", status: "Pending" },
        { id: 3, guestName: "Sam Wilson", hotelName: "Hotel C", room: "103", date: "2024-11-22", status: "Cancelled" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Sticky Header */}
                <header className="bg-white shadow-md sticky top-0 z-10 flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-700">Booking List</h1>
                   
                </header>

                {/* Content Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <table className="w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border w-[20%]">Guest Name</th>
                                <th className="px-4 py-2 border w-[20%]">Hotel</th>
                                <th className="px-4 py-2 border w-[15%]">Room</th>
                                <th className="px-4 py-2 border w-[15%]">Date</th>
                                <th className="px-4 py-2 border w-[15%]">Status</th>
                                <th className="px-4 py-2 border w-[15%]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td className="px-4 py-2 border">{booking.guestName}</td>
                                    <td className="px-4 py-2 border">{booking.hotelName}</td>
                                    <td className="px-4 py-2 border">{booking.room}</td>
                                    <td className="px-4 py-2 border">{booking.date}</td>
                                    <td className="px-4 py-2 border">{booking.status}</td>
                                    <td className="px-4 py-2 flex justify-center items-center gap-4 border">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                            Edit
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
                    <p className="text-sm text-gray-600">© 2024 Hotel Booking System. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Adminbookinglist;
