import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Explore = () => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <>
    <div
    className='flex-col'>
      <div
      className='flex items-center text-center justify-center mt-12 gap-2 cursor-pointer'
      onClick={handleClick}>
        {showItems ? <FaAngleDown /> : <FaAngleRight />}

        <p
        className='text-3xl font-bold text-center tracking-wide'
        >Perception</p>
      </div>

      {showItems && (
      <div
      className='flex-col'>
        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/visualsystem'>
            <p
            className='text-lg font-semibold text-center underline tracking-wide'
            >Visual System</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />

          <Link to='/auditorysystem'>
            <p
            className='text-lg font-semibold text-center underline tracking-wide'
            >Auditory System</p>
          </Link>
        </div>

        <div
        className='flex items-center text-center justify-center mt-4 gap-2 cursor-pointer'>
          <FaAngleRight />
          
          <Link to='/olfaction'>
            <p
            className='text-lg font-semibold text-center underline tracking-wide'
            >Olfaction</p>
          </Link>
        </div>
      </div>
      )}

    </div>
    </>
  )
}

export default Explore