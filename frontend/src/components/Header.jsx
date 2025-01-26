import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import videoSrc from '../assets/Untitled design.mp4';
import { Link as ScrollLink } from 'react-scroll';
import { RiAdminFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import Image from '../assets/Logo (2).png';
import axios from 'axios';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    adults: 0,
    children: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("Logout successfully");
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBookNow = async () => {
    const { checkin, checkout, adults, children } = formData;

    if (!checkin || !checkout || adults <= 0) {
      alert('Please fill in all required fields.');
      return;
    }

    if (new Date(checkin) >= new Date(checkout)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    try {
      // Fetch rooms from the backend
      const response = await axios.get('http://localhost:5000/api/users/rooms/search', {
        params: { checkIn: checkin, checkOut: checkout, adults, children },
      });

      const rooms = response.data;
      if (rooms.length === 0) {
        alert('No rooms available for the selected criteria.');
      } else {
        // Pass rooms to the RoomList page via navigation state
        navigate('/Roomlist', { state: { rooms } });
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      alert('Failed to fetch available rooms. Please try again later.');
    }
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-white font-sans bg-black bg-opacity-50 w-full h-full">
        <header className="absolute top-0 w-full bg-opacity-75 py-2 z-20 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center">
            <img src={Image} alt="Logo" className="h-32 w-auto" />
          </div>
          <nav className="flex items-center">
            <button className="lg:hidden w-10 h-10" onClick={toggleMenu}>
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              className={`relative m-0 bg-black lg:bg-transparent w-full lg:w-auto transition-all ${isMenuOpen ? 'block' : 'hidden'
                } lg:flex lg:items-center lg:space-x-5`}
            >
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-2xl cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <Link to="/about" className="text-2xl">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-2xl">
                  Gallery
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-2xl cursor-pointer"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-2xl cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
              {!isLoggedIn ? (
                <li className='flex justify-center gap-4'>
                  <Link to="/login" className="text-2xl">
                    Login
                  </Link>
                  <Link to="/Adminlogin" className="text-2xl flex items-center">
                    <RiAdminFill />
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    className="block rounded-md px-3 py-1 text-lg bg-red-500 text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </header>

        <main className="text-center py-12 lg:py-24 px-5">
          <section className="hero lg:mt-16 space-y-6">
            <h2 className="text-yellow-500 text-xl mt-60">WELCOME TO THE GRANDIUM</h2>
            <h1 className="text-3xl lg:text-5xl my-2 font-bold">Experience the Freedom</h1>
            <form className="flex flex-wrap justify-center mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
              <div>
                <label htmlFor="checkin" className="block text-sm">
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 text-black"
                />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-sm">
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 text-black"
                />
              </div>
              <div>
                <label htmlFor="adults" className="block text-sm">
                  Adults
                </label>
                <select
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 text-black"
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="children" className="block text-sm">
                  Children
                </label>
                <select
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="p-2 rounded border border-gray-300 text-black"
                >
                  {Array.from({ length: 7 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="p-2 w-32 bg-yellow-500 text-white font-bold rounded cursor-pointer mt-5"
                >
                  Book Now
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
