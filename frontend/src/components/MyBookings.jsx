// import React, { useState, useEffect } from "react";

// const MyBooking = () => {
//     // Sample data (Replace this with data fetched from API or database)
//     const [bookings, setBookings] = useState([]);

//     useEffect(() => {
//         // Fetch booking data from API
//         const fetchBookings = async () => {
//             // Replace with your API call
//             const response = await fetch("/api/user/bookings"); 
//             const data = await response.json();
//             setBookings(data);
//         };

//         fetchBookings();
//     }, []);

//     return (
//         <div id="mybooking" className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
//             {bookings.length > 0 ? (
//                 <table className="w-full table-auto bg-white shadow-md rounded-lg">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="px-6 py-3 border">Booking ID</th>
//                             <th className="px-6 py-3 border">Hotel Name</th>
//                             <th className="px-6 py-3 border">Check-In</th>
//                             <th className="px-6 py-3 border">Check-Out</th>
//                             <th className="px-6 py-3 border">Total Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {bookings.map((booking) => (
//                             <tr key={booking.id} className="hover:bg-gray-100">
//                                 <td className="px-6 py-3 border">{booking.id}</td>
//                                 <td className="px-6 py-3 border">{booking.hotelName}</td>
//                                 <td className="px-6 py-3 border">{booking.checkIn}</td>
//                                 <td className="px-6 py-3 border">{booking.checkOut}</td>
//                                 <td className="px-6 py-3 border">${booking.totalPrice}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p className="text-gray-500 mt-4">No bookings found.</p>
//             )}
//         </div>
//     );
// };

// export default MyBooking;


import React, { useState, useEffect } from "react";

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Simulate fetching booking data with dummy data
        const fetchBookings = async () => {
            // Replace this with your API call in production
            const dummyData = [
                {
                    id: "B001",
                    hotelName: "Hotel Sunshine",
                    checkIn: "2024-11-25",
                    checkOut: "2024-11-28",
                    totalPrice: 450,
                },
                {
                    id: "B002",
                    hotelName: "Hotel Grand",
                    checkIn: "2024-12-01",
                    checkOut: "2024-12-05",
                    totalPrice: 800,
                },
                {
                    id: "B003",
                    hotelName: "Hotel Paradise",
                    checkIn: "2024-11-30",
                    checkOut: "2024-12-03",
                    totalPrice: 600,
                },
            ];
            setBookings(dummyData);
        };

        fetchBookings();
    }, []);

    return (
        <div id="mybooking" className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
            {bookings.length > 0 ? (
                <table className="w-full table-auto bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 border">Booking ID</th>
                            <th className="px-6 py-3 border">Hotel Name</th>
                            <th className="px-6 py-3 border">Check-In</th>
                            <th className="px-6 py-3 border">Check-Out</th>
                            <th className="px-6 py-3 border">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-100">
                                <td className="px-6 py-3 border">{booking.id}</td>
                                <td className="px-6 py-3 border">{booking.hotelName}</td>
                                <td className="px-6 py-3 border">{booking.checkIn}</td>
                                <td className="px-6 py-3 border">{booking.checkOut}</td>
                                <td className="px-6 py-3 border">${booking.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500 mt-4">No bookings found.</p>
            )}
        </div>
    );
};

export default MyBooking;
