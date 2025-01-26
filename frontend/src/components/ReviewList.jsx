// src/components/ReviewList.js
import React from "react";
import Sidebar from "./Sidebar";

const ReviewList = () => {
    const reviews = [
        { id: 1, guestName: "John Doe", hotelName: "Hotel A", rating: 4, comment: "Great stay!" },
        { id: 2, guestName: "Jane Smith", hotelName: "Hotel B", rating: 3, comment: "It was okay, needs improvement." },
        { id: 3, guestName: "Sam Wilson", hotelName: "Hotel C", rating: 5, comment: "Excellent experience!" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Sticky Header */}
                <header className="bg-white shadow-md sticky top-0 z-10 flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-700">Review List</h1>
                    
                </header>

                {/* Content Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <table className="w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border w-[25%]">Guest Name</th>
                                <th className="px-4 py-2 border w-[25%]">Hotel</th>
                                <th className="px-4 py-2 border w-[15%]">Rating</th>
                                <th className="px-4 py-2 border w-[25%]">Comment</th>
                                <th className="px-4 py-2 border w-[10%]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review.id}>
                                    <td className="px-4 py-2 border">{review.guestName}</td>
                                    <td className="px-4 py-2 border">{review.hotelName}</td>
                                    <td className="px-4 py-2 border">{review.rating}</td>
                                    <td className="px-4 py-2 border">{review.comment}</td>
                                    <td className="px-4 py-2 flex justify-center items-center gap-4 border">
                                        
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

export default ReviewList;
