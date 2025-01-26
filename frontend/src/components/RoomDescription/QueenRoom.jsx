import React from 'react';
import queen from '../../assets/Queen.webp';
import { Link } from 'react-router-dom';

const QueenRoom = () => (
  <div id='queen' className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    {/* Room Title */}
    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Queen Room</h1>

    {/* Room Details Section */}
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={queen}
          alt="Queen Room"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>

      {/* Room Information Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Room Details</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Spacious room with a queen-sized bed and beautiful city views, perfect for a relaxing stay.
          </p>
          <ul className="space-y-4 text-gray-600 mb-6">
            <li className="flex items-start space-x-2">
              <span className="font-semibold">Price:</span>
              <span className="text-lg text-gray-800">$50 per night</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">Original Price:</span>
              <span className="line-through text-gray-500 text-lg">$60 per night</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">Amenities:</span>
              <span className="text-lg">Wi-Fi, AC, TV, Minibar</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">Discount:</span>
              <span className="text-xl text-yellow-600 font-bold">Save 15% this month!</span>
            </li>
          </ul>
        </div>

        {/* Book Now Button */}
        <Link to="/mypayment">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-md text-lg font-semibold transition-transform duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default QueenRoom;
