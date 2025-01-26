// import React from 'react';
// import Image from '../assets/hottub.jpg'; // Import the image

// const Contentsection = () => {
//   return (
//     <div id='about'
//       className="w-full h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${Image})` }}
//     >
//       <div className="bg-black bg-opacity-50 text-white p-8 rounded-md max-w-4xl text-center">
//         <h1 className="text-5xl font-bold mb-6">About Us</h1>
//         <p className="text-lg mb-4">
//           Welcome to our hotel booking platform! We are committed to providing our guests with an unparalleled experience, ensuring comfort and convenience at every step. Our team works tirelessly to curate the best hotels and amenities to make your stay truly memorable.
//         </p>
//         <p className="text-lg">
//           Whether you're planning a relaxing getaway or a business trip, we are here to assist you with personalized recommendations and seamless booking services. Thank you for choosing us as your travel companion.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contentsection;
import React from 'react';
import { Link } from 'react-router-dom';

const Contentsection = () => {
  return (
    <div id='about' className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-yellow-500 uppercase tracking-wide">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to The Grandium
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience unmatched luxury and comfort at The Grandium. Our hotel offers the perfect blend of
            modern amenities and traditional charm, ensuring an unforgettable stay for every guest.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                className="h-64 w-full object-cover rounded-lg shadow-md"
                src="https://th.bing.com/th?id=OIP.lZP809FYA4sEHj9VFsOMyQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Hotel Lobby"
              />
            </div>
            <div>
              <img
                className="h-64 w-full object-cover rounded-lg shadow-md"
                src="https://th.bing.com/th?id=OIP.I8G8xjBPrtAU3w6b5-qaBwHaFN&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Hotel Room"
              />
            </div>
            <div className="col-span-1 md:col-span-2 text-center">
              <p className="text-lg text-gray-700">
                At The Grandium, we are dedicated to providing exceptional hospitality and personalized
                service. Whether you are here for a relaxing getaway, a business trip, or a special event,
                our team is committed to making your stay as enjoyable and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contentsection;
