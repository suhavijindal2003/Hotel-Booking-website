import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRoom = () => {
    const { id } = useParams(); // Room ID from URL
    const [room, setRoom] = useState(null); // Room data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    // Fetch room details
    useEffect(() => {
        const fetchRoom = async () => {
            console.log("Room ID:", id);
            try {
                const response = await axios.get(`http://localhost:5000/api/admins/rooms/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setRoom(response.data);
                setLoading(false);
            } catch (err) {
                setError("Error fetching room details. Please try again.");
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoom((prevRoom) => ({
            ...prevRoom,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/api/admins/rooms/${id}`, room, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // alert("Room updated successfully!");
            navigate("/roomslist");
        } catch (err) {
            console.log(err);
            alert("Error updating room. Please try again."+err);
        }
    };

    if (loading) {
        return <div className="text-center mt-10">Loading room details...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Room</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Room Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={room.name || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price Per Night
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={room.price || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="maxGuests" className="block text-gray-700 font-bold mb-2">
                        Max Guests
                    </label>
                    <input
                        type="number"
                        id="maxGuests"
                        name="maxGuests"
                        value={room.maxGuests || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Update Room
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/rooms")}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditRoom;
