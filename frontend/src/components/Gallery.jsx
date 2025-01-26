import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Link as ScrollLink } from 'react-scroll';

const clientID = "--MQebuje7fTDcvTKQKQ2pEumYNUkLG5hP1Y2jvN5LA";
const endpoint = `https://api.unsplash.com/photos/random?client_id=${clientID}&count=30`;
const bookingAPI = `https://api.booking.com/hotel/search?client_id=${clientID}&location=London`;

const Gallery = () => {
  const [photoLinks, setPhotoLinks] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    // Fetch images from Unsplash
    fetch(endpoint)
      .then((response) => response.json())
      .then((jsonData) => {
        const links = jsonData.map((img) => img.urls.regular);
        setPhotoLinks(links);
      })
      .catch((error) => console.error('Error fetching images:', error));

    // Fetch hotel data from Booking.com API
    axios.get(bookingAPI)
      .then((response) => {
        setHotelData(response.data.hotels);
      })
      .catch((error) => console.error('Error fetching hotel data:', error));
  }, []);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  };

  return (
    <div id='gallery' className="container mx-auto">
      <div className="jumbotron bg-cover bg-center text-center p-10 mb-10" style={{ backgroundImage: `url("images/pngtree-collection-of-photos-is-seen-with-the-paris-tower-picture-image_2639822.jpg")` }}>
        <h1 className="text-4xl font-bold text-black mb-5"><b>The Gallery</b></h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photoLinks.map((imageUrl, index) => (
          <div key={index} className="mb-4">
            <div className="card shadow-lg">
              <img
                className="card-img-top object-cover h-64 w-full cursor-pointer"
                src={imageUrl}
                alt="Card image cap"
                onClick={() => openModal(imageUrl)}
              />
            </div>
          </div>
        ))}
      </div>
{/* 
      Modal  */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ height: '80vh' }}>
          <div className="modal-content border-0">
            <div className="modal-header border-0">
              <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body flex justify-center items-center h-full">
              <img id="modalImage" className="img-fluid mb-5" src={modalImage} style={{ maxWidth: '100vw', maxHeight: '90vh', position: 'fixed' }} alt="Modal" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-black mb-5">Featured Hotels</h2>
        {hotelData.map((hotel, index) => (
          <div key={index} className="mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.description}</p>
                <a href={hotel.bookingLink} className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
