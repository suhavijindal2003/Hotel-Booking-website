// src/components/CreateRoom.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

const CreateRoom = () => {
    const [roomData, setRoomData] = useState({
        name: "",
        description: "",
        price: "",
        maxGuests: "",
        images: "",
        amenities: "",
    });
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoomData({ ...roomData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedData = {
                ...roomData,
                images: [roomData.images],
                amenities: roomData.amenities.split(","),
            };
            await axios.post(
                "http://localhost:5000/api/admins/rooms",
                formattedData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Room created successfully!");
            navigate("/rooms");
        } catch (err) {
            alert("Error creating room. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Create Room</h1>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-lg bg-white p-6 shadow-md rounded-lg"
                >
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Room Name</label>
                        <input
                            type="text"
                            name="name"
                            value={roomData.name}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            name="description"
                            value={roomData.description}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={roomData.price}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Max Guests</label>
                        <input
                            type="number"
                            name="maxGuests"
                            value={roomData.maxGuests}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Images (URL)</label>
                        <input
                            type="text"
                            name="images"
                            value={roomData.images}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Amenities (comma-separated)</label>
                        <input
                            type="text"
                            name="amenities"
                            value={roomData.amenities}
                            onChange={handleInputChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                    >
                        Create Room
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateRoom;
