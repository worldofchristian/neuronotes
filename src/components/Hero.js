import React from 'react';
import Neurons from '../video/Neurons.mp4';

const Hero = () => {
  return (
    <>
    <div
    className="backdrop-filter bg-opacity-70 backdrop-blur-lg">
      <video
      className="w-full min-h-screen object-cover"
      autoPlay loop muted>
        <source src={Neurons} type='video/mp4' />
      </video>
    </div>
    </>
  )
}

export default Hero