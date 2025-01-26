import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-center py-8">
      <div className="mb-6">
        <h1 className="text-5xl font-semibold text-white mt-12">The Grandium</h1>
        <p className="text-sm text-gray-400">HOTEL - SPA - RESTAURANT</p>
        <div className="flex justify-center space-x-1 text-orange-500">
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
      <div className="mb-16">
        <p className="text-gray-400">THE GRANDIUM HOTEL - ninetheme.com</p>
        <p className="text-gray-400 mt-8">
          📍 LONGRIDGE ROAD, EARLS COURT, LONDON &nbsp; | &nbsp; ☎ +1-800-123-45-67 &nbsp; | &nbsp; ✉ INFO@THEgrandiumHOTEL.COM
        </p>
      </div>
     
    </footer>
  );
};

export default Footer;
