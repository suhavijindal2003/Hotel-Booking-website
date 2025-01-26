import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room }) => (
  <div className="flex border p-4 mb-4">
    <img src={room.image} alt={room.name} className="w-32 h-32 object-cover" />
    <div className="w-2/3 pl-4">
      <h2 className="text-xl font-bold">{room.name}</h2>
      <p className="text-gray-700">{room.description}</p>
      <div className="flex items-center mt-2">
        {room.amenities.map((amenity, index) => (
          <span key={index} className="mr-2">{amenity}</span>
        ))}
      </div>
      {room.discountMessage && (
        <div className="bg-green-100 text-green-700 p-2 mt-2">
          {room.discountMessage}
        </div>
      )}
      <div className="flex items-center mt-4">
        <span className="text-2xl font-bold text-red-600">${room.price}</span>
        {room.originalPrice && (
          <span className="text-gray-500 line-through ml-2">${room.originalPrice}</span>
        )}
        <Link to={room.link}>
          <button className="ml-auto bg-black text-white px-4 py-2 ms-12">SELECT</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Room;
