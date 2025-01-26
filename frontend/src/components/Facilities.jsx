import React, { useRef } from "react";

const Facilities = () => {
  const facilityData = [
    {
      imageSrc: "https://b.zmtcdn.com/data/pictures/0/18432340/b6068e2dc59704edd63fc37bf9cce37c.jpg?fit=around|960:500&crop=960:500;",
      altText: "Sky Bar & Lounge",
      title: "Sky Bar & Lounge",
      description: "Relax and unwind at our rooftop Sky Bar & Lounge with stunning views and vibrant vibes."
    },
    {
      imageSrc: "https://hips.hearstapps.com/hmg-prod/images/sushisamba-coventgarden-private-dining-room-1544115470.jpg",
      altText: "Private Dining",
      title: "Private Dining",
      description: "Experience intimate dining with our exclusive private rooms for any special occasion."
    },
    {
      imageSrc: "https://pegasusevents.in/wp-content/uploads/2017/06/Marsh-and-Mclennan-Conference-by-Pegasus-Events-India-Pvt-Ltd-2.jpg",
      altText: "Conference & Events",
      title: "Conference & Events",
      description: "Host your meetings or events with state-of-the-art facilities and expert support."
    },
    {
      imageSrc: "https://info.ehl.edu/hubfs/AdobeStock_190029404.jpeg",
      altText: "Spa & Wellness",
      title: "Spa & Wellness",
      description: "Indulge in a rejuvenating experience at our luxury spa and wellness center."
    },
    {
      imageSrc: "https://cdn.liverez.com/5/13939/1/170540/1600/11.jpg?v=3/22/2021%208:34:00%20PM",
      altText: "Poolside Retreat",
      title: "Poolside Retreat",
      description: "Relax by our serene poolside area, a perfect escape for your leisure time."
    }
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const FacilityCard = ({ imageSrc, altText, title, description }) => (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg text-center flex-shrink-0 w-[300px] h-[400px] m-2">
      <img src={imageSrc} alt={altText} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-xs sm:text-sm text-white">{description}</p>
      </div>
    </div>
  );

  return (
    <div id="services" className="bg-gray-200 pt-12 px-4 md:px-8 lg:px-12 text-center  p-0 m-0 h-svh">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cursive text-black font-bold mb-4">
        OUR FACILITIES
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif mb-4">
        Explore The Grandium
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 mx-auto max-w-3xl font-sans">
        Discover the unique features and services that make The Grandium an extraordinary destination.
      </p>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-10 w-12"
        >
          &larr;
        </button>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-2 sm:px-4 w-[1000px] ms-48"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {facilityData.map((facility, index) => (
            <FacilityCard
              key={index}
              imageSrc={facility.imageSrc}
              altText={facility.altText}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-10 w-12"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Facilities;
