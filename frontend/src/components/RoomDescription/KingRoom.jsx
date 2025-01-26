import React from 'react';
import king from '../../assets/King.webp';
import { Link } from 'react-router-dom';

const KingRoom = () => {
  return (
    <div id="king" className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Room Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        King Luxury Room
      </h1>

      {/* Room Details Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={king}
            alt="King Luxury Room"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Room Information Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Room Details
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Enjoy a cocktail by the swimming pool with a stunning view of the bay of Isola Bella. This luxurious room offers the perfect blend of comfort and elegance.
            </p>
            <ul className="space-y-4 text-gray-600 mb-6">
              <li className="flex items-start space-x-2">
                <span className="font-semibold">Price:</span>
                <span className="text-lg text-gray-800">$22 per night</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">Original Price:</span>
                <span className="line-through text-gray-500 text-lg">$27 per night</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">Amenities:</span>
                <span className="text-lg">Wi-Fi, AC, TV, Pool, Wheelchair Access</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">Discount:</span>
                <span className="text-xl text-yellow-600 font-bold">20% OFF! Last Month to Book</span>
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
};

export default KingRoom;
