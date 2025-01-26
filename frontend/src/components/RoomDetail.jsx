import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [error, setError] = useState(null);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [validationError, setValidationError] = useState(''); // New state for validation errors

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/rooms/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch room details');
                }
                const data = await response.json();
                setRoom(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchRoomDetails();
    }, [id]);

    useEffect(() => {
        if (room && checkIn && checkOut) {
            const diffTime = new Date(checkOut) - new Date(checkIn);
            const totalNights = diffTime / (1000 * 3600 * 24);
            if (totalNights > 0) {
                const calculatedPrice = room.price * totalNights;
                setTotalPrice(calculatedPrice);
            } else {
                setTotalPrice(null);
            }
        }
    }, [checkIn, checkOut, room]);

    const validateBooking = () => {
        if (adults < 1) {
            setValidationError('At least one adult is required for booking.');
            return false;
        }
        if (!checkIn || !checkOut || totalPrice === null) {
            setValidationError('Please complete all booking details.');
            return false;
        }
        setValidationError('');
        return true;
    };

    const handleBooking = async () => {
        if (!validateBooking()) return;

        const bookingData = {
            roomId: room._id,
            checkIn,
            checkOut,
            adults,
            children,
            billingInfo: "Sample billing information",
            totalPrice,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/users/rooms/${id}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(bookingData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Booking failed');
            }

            setConfirmationMessage(
                `Booking Confirmed! You have successfully booked the room.`
            );
            setTimeout(() => setConfirmationMessage(''), 5000); // Clear message after 5 seconds
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    if (!room) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <p>Loading room details...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-200">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center py-6 px-8">
                    <h1 className="text-xl font-bold tracking-wider text-blue-800">StayEasy</h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                    >
                        Back to Listings
                    </button>
                </div>
            </header>

            {/* Room Details */}
            <main className="container mx-auto my-12">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Left: Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={room.images}
                            alt={room.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Details Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        {/* Room Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{room.name}</h2>
                            <p className="text-gray-600 mt-4">{room.description}</p>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-700">Price</h3>
                                <p className="text-2xl font-bold text-green-500">${room.price}/night</p>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-800">Book Your Stay</h3>
                            <div className="mt-4 space-y-4">
                                <label className="block text-gray-700">Check-in Date</label>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                <label className="block text-gray-700">Check-out Date</label>
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                <label className="block text-gray-700">Adults</label>
                                <input
                                    type="number"
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                <label className="block text-gray-700">Children</label>
                                <input
                                    type="number"
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                                {totalPrice !== null && (
                                    <div className="mt-4 text-lg font-semibold">
                                        <p>Total Price: ${totalPrice}</p>
                                    </div>
                                )}
                                {validationError && (
                                    <p className="text-red-600 mt-2">{validationError}</p>
                                )}
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-8">
                            <button
                                onClick={handleBooking}
                                disabled={!checkIn || !checkOut || !totalPrice || adults < 1}
                                className={`w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ${!checkIn || !checkOut || !totalPrice || adults < 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                Book Now
                            </button>
                            {confirmationMessage && (
                                <p className="mt-4 text-green-600 font-semibold">{confirmationMessage}</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RoomDetail;
