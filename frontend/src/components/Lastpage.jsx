import React from 'react'
import videoSrc from '../assets/bg1 (1).mp4';

const Lastpage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className='text-6xl text-white font-bold mb-10'>Enjoy Your</h1>
        <h1 className='text-6xl text-white font-bold mb-10'>Dream Vacations</h1>
      </div>
    </div>
  )
}

export default Lastpage
