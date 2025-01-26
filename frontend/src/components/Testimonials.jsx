import React, { useRef, useState } from 'react';
import Image1 from '../assets/profile1webp.webp';
import Image2 from '../assets/profile2.jpg';
import Image3 from '../assets/profile3.jpeg';

// Define your TestimonialCard component
const TestimonialCard = ({ text, authorImage, authorName, authorLocation }) => (
  <div className="w-96 h-72 m-8 p-5 bg-white rounded-lg shadow-lg text-left">
    <h2 className="font-serif text-left ml-2 mb-5 leading-relaxed text-sm">
      {text}
    </h2>
    <div className="flex items-center mt-10 ml-2">
      <img src={authorImage} alt={authorName} className="w-16 h-16 rounded-full mr-4 mt-2" />
      <div>
        <h3 className="text-lg mb-1">{authorName}</h3>
        <p className="text-sm text-gray-600">{authorLocation}</p>
      </div>
    </div>
  </div>
);

// Define the data for testimonials
const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
    authorImage: Image1,
    authorName: "JOHN FEDERICO",
    authorLocation: "UK, BRIGHTON"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
    authorImage: Image2,
    authorName: "JACK MASON",
    authorLocation: "UK, BRIGHTON"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisl consequat, semper non, convallis neque. Phasellus id dictum libero. Etiam nunc libero feugiat vel sem non.",
    authorImage: Image3,
    authorName: "JACK MASON",
    authorLocation: "UK, BRIGHTON"
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350, // Adjust scroll distance to match card width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350, // Adjust scroll distance to match card width
      behavior: 'smooth',
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    setShowReviewForm(false);
  };

  return (
    <div id='review' className="  px-5 py-20 bg-gray-300 rounded-lg shadow-lg text-center m-0">
      <h1 className="text-amber-500 text-3xl font-bold mb-2 font-serif">TESTIMONIALS</h1>
      <h2 className="text-7xl font-bold mb-5 font-cursive">Happy Clients</h2>
      <p className="leading-relaxed text-gray-700 font-serif max-w-lg mx-auto mb-8 mt-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo orci.
        Integer varius nibh eu mattis porta. Pellentesque dictum sem eget cursus semper. Nullam quis
        blandit lorem.
      </p>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-10 w-12"
        >
          &larr;
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-6 scrollbar-hide w-full max-w-5xl mx-auto"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              authorImage={testimonial.authorImage}
              authorName={testimonial.authorName}
              authorLocation={testimonial.authorLocation}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-10 w-12"
        >
          &rarr;
        </button>
      </div>

      <button
        onClick={() => setShowReviewForm(true)}
        className="mt-8 bg-amber-500 text-white py-2 px-4 rounded shadow-md hover:bg-amber-600"
      >
        Add Review
      </button>

      {showReviewForm && (
        <form onSubmit={handleReviewSubmit} className="mt-8 bg-white p-8 rounded shadow-md max-w-lg mx-auto">
          <h3 className="text-2xl mb-4">Add Your Review</h3>
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" required />
          <input type="text" placeholder="Your Location" className="w-full p-2 mb-4 border rounded" required />
          <textarea placeholder="Your Review" className="w-full p-2 mb-4 border rounded" rows="4" required></textarea>
          <input type="file" className="w-full mb-4" />
          <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded shadow-md hover:bg-amber-600">
            Submit
          </button>
          <button
            onClick={() => setShowReviewForm(false)}
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded shadow-md hover:bg-gray-600 m-12"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Testimonials;
