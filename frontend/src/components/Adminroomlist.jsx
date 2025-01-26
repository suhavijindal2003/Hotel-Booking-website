// src/components/RoomList.js
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const fetchRooms = async (pageNumber = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/api/admins/rooms`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRooms(response.data.rooms);
            setTotalPages(response.data.totalPages);
            setPage(response.data.page);
            setLoading(false);
        } catch (err) {
            setError("Error fetching rooms. Please try again later.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms(page);
    }, [page]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/admins/rooms/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            fetchRooms(page); // Refresh room list after deletion
        } catch (err) {
            alert("Error deleting room. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-blue-600 text-white shadow-md sticky top-0 z-10 flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-bold">Manage Rooms</h1>
                    <button
                        onClick={() => navigate("/create-room")}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Create Room
                    </button>
                </header>

                {/* Main Content */}
                <div className="flex-grow p-6 overflow-auto">
                    {loading ? (
                        <div className="text-center text-lg text-gray-500">Loading...</div>
                    ) : error ? (
                        <div className="text-center text-red-500">{error}</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto bg-white shadow-md rounded-lg">
                                <thead>
                                    <tr className="bg-gray-200 text-left">
                                        <th className="px-4 py-3">Room Name</th>
                                        <th className="px-4 py-3">Price Per Night</th>
                                        <th className="px-4 py-3">Max Guests</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room) => (
                                        <tr key={room._id} className="border-b">
                                            <td className="px-4 py-3">{room.name}</td>
                                            <td className="px-4 py-3">${room.price}</td>
                                            <td className="px-4 py-3">{room.maxGuests}</td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => navigate(`/edit-room/${room._id}`)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded mx-2"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(room._id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination */}
                            <div className="flex justify-center items-center gap-4 mt-6">
                                <button
                                    onClick={() => setPage(page - 1)}
                                    disabled={page === 1}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <span className="text-gray-700">
                                    Page {page} of {totalPages}
                                </span>
                                <button
                                    onClick={() => setPage(page + 1)}
                                    disabled={page === totalPages}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomList;
