import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/admins/bookings', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBookings(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Loading bookings...</div>;
    }

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="p-6 bg-gray-50 min-h-screen w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Bookings Management</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-6 py-3">Room Name</th>
                                <th className="px-6 py-3">User Name</th>
                                <th className="px-6 py-3">Check-in</th>
                                <th className="px-6 py-3">Check-out</th>
                                <th className="px-6 py-3">Adults</th>
                                <th className="px-6 py-3">Children</th>
                                <th className="px-6 py-3">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 ? (
                                bookings.map((booking) => (
                                    <tr key={booking._id} className="border-b">
                                        <td className="px-6 py-4">{booking.room?.name || 'N/A'}</td>
                                        <td className="px-6 py-4">{booking.user?.username || 'N/A'}</td>
                                        <td className="px-6 py-4">{new Date(booking.checkIn).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">{new Date(booking.checkOut).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">{booking.adults}</td>
                                        <td className="px-6 py-4">{booking.children}</td>
                                        <td className="px-6 py-4">{`$${booking.totalPrice.toFixed(2)}`}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-6 text-gray-500">
                                        No bookings found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingsPage;
