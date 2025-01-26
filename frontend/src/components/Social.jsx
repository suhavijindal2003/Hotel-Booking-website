import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const SocialMedia = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/subscribe', { email });
      setMsg(response.data.message);
    } catch (error) {
      setMsg('Error subscribing');
    }
  };

  return (
    <div className="bg-gray-700 flex flex-col lg:flex-row justify-between p-6 lg:p-10">
      {/* Social Media Section */}
      <div className="flex flex-col text-white mb-8 lg:mb-0 lg:ms-8">
        <h2 className="text-lg lg:text-xl uppercase font-bold text-center lg:text-left">Social Media</h2>
        <p className="text-sm lg:text-base uppercase mt-2 text-center lg:text-left">Follow The Glamhour</p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-6 lg:ms-20">
          <a href="https://www.facebook.com" className="hover:scale-110 transition-transform">
            <FaFacebookF className='text-blue-500 h-9 w-10' />
          </a>
          <a href="https://www.twitter.com" className="hover:scale-110 transition-transform">
            <FaTwitter className='text-[#1DA1F2] h-10 w-10' />
          </a>
          <a href="https://www.whatsapp.com" className="hover:scale-110 transition-transform">
            <FaWhatsapp className='text-green-500 h-10 w-10' />
          </a>
          <a href="https://www.instagram.com" className="hover:scale-110 transition-transform">
            <FaInstagram className='text-pink-600 h-10 w-10' />
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col lg:items-end">
        <h2 className=" text-white text-lg lg:text-xl uppercase font-bold text-center lg:text-right">Newsletter</h2>
        <p className=" text-white text-sm lg:text-base uppercase mt-2 text-center lg:text-right">
          We love to share new offers and exclusive promotions
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row mt-6 items-center lg:items-end">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              p-2 
              w-full 
              lg:w-auto 
              lg:flex-1 
              rounded-md 
              lg:rounded-l-md 
              lg:rounded-r-none 
              focus:outline-none focus:ring focus:border-blue-300
              bg-gray-500
              text-white
              mb-4
              lg:mb-0
              lg:mr-2
            "
            required
          />
          <button
            type="submit"
            className="
              bg-orange-500 
              hover:bg-orange-600 
              text-white 
              px-6 
              py-[10px] 
              rounded-md
              lg:rounded-r-md
              lg:rounded-l-none
            "
          >
            Send
          </button>
        </form>
        {msg && <p className="text-white mt-4 text-center lg:text-right">{msg}</p>}
      </div>
    </div>
  );
};

export default SocialMedia;
