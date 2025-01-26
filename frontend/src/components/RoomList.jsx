import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RoomList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rooms = location.state?.rooms || [];

  const handleSelectRoom = (roomId) => {
    navigate(`/rooms/${roomId}`); // Navigate to the room details page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-gray-800">QUICKSTAYS</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Available Rooms
        </h1>

        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                {/* Room Image */}
                <img
                  src={room.images}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />

                {/* Room Details */}
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {room.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {room.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    Price: <span className="text-green-600">${room.price}</span>
                  </p>

                  {/* Select Button */}
                  <button
                    onClick={() => handleSelectRoom(room._id)}
                    className="mt-4 w-full text-white bg-green-600 hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300"
                  >
                    Select Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-16">
            No rooms available. Check back later!
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-300">
            © 2024 QUICKSTAYS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RoomList;
