import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Explore = () => {
  const [showItemsEarth, setShowItemsEarth] = useState(false);
  const [showItemsBrain, setShowItemsBrain] = useState(false);
  const [showItemsPerception, setShowItemsPerception] = useState(false);
  const [showItemsMath, setShowItemsMath] = useState(false);

  const handleEarthClick = () => {
    setShowItemsEarth(!showItemsEarth);
  };
  
  const handleBrainClick = () => {
    setShowItemsBrain(!showItemsBrain);
  };

  const handlePerceptionClick = () => {
    setShowItemsPerception(!showItemsPerception);
  };

  const handleMathClick = () => {
    setShowItemsMath(!showItemsMath);
  };

  return (
    <>
    <div
    className='flex-col'>

      <div
      className='flex items-center text-center justify-center mt-12 gap-2 cursor-pointer'
      onClick={handleEarthClick}>
        {showItemsEarth ? <FaAngleDown /> : <FaAngleRight />}

        <p
        className='text-3xl font-bold text-center tracking-wide'
        >Earth</p>
      </div>

      {showItemsEarth && (
      <div
      className='flex-col'>
        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/visualsystem'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Origin of the Planet</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />

          <Link to='/lifeonearth'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Life on Earth</p>
          </Link>
        </div>
      </div>
      )}

      <div
      className='flex items-center text-center justify-center mt-12 gap-2 cursor-pointer'
      onClick={handleBrainClick}>
        {showItemsBrain ? <FaAngleDown /> : <FaAngleRight />}

        <p
        className='text-3xl font-bold text-center tracking-wide'
        >Brain</p>
      </div>

      {showItemsBrain && (

      <div
      className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'
      onClick={handlePerceptionClick}>
        {showItemsPerception ? <FaAngleDown /> : <FaAngleRight />}

        <p
        className='text-lg font-bold text-center tracking-wide'
        >Perception</p>
      </div>
      )}

      {showItemsPerception && (
      <div
      className='flex-col'>
        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/visualsystem'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Visual System</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />

          <Link to='/auditorysystem'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Auditory System</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/olfaction'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Olfaction</p>
          </Link>
        </div>
      </div>
      )}

      <div
      className='flex items-center text-center justify-center mt-12 gap-2 cursor-pointer'
      onClick={handleMathClick}>
        {showItemsMath ? <FaAngleDown /> : <FaAngleRight />}

        <p
        className='text-3xl font-bold text-center tracking-wide'
        >Math</p>
      </div>

      {showItemsMath && (
      <div
      className='flex-col'>
        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/visualsystem'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Basic Algabraic Methods</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />

          <Link to='/auditorysystem'>
            <p
            className='text-md font-medium text-center underline tracking-wide'
            >Trigonometry</p>
          </Link>
        </div>
      </div>
      )}

    </div>
    </>
  )
}

export default Explore