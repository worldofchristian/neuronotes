import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaAngleDoubleLeft, FaAngleDoubleUp, FaAngleRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='w-full py-4 fixed top-0 z-20 bg-slate-700 backdrop-filter bg-opacity-30 backdrop-blur-xl'>
        <div className='w-full flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-0'>
          <div className='flex flex-row justify-start'>
            <FaAngleDoubleLeft className='mr-2 mt-1 text-lg' />
          </div>

          <div className='flex justify-center'>
            <div className='flex flex-row'>
              <p className='text-md font-semibold'>neuronotes</p>

              <FaAngleRight className='text-lg mt-1' />
            </div>
          </div>

          <div className='flex justify-end'>
            <HiMenuAlt3 className='text-lg text-white' />
          </div>
        </div>
    </nav>

    { isOpen && (
      <div className='fixed top-16 left-0 right-0 flex items-center justify-center z-10 bg-base-100 shadow-lg'>
        <div className='flex flex-col mt-12'>
          <div className='max-w-sm'>
            <div className='flex flex-col'>
              <p className='text-md mb-1 ml-1'
              >Email</p>

              <input 
              className='input input-bordered'
              placeholder='Type here'
              />

              <p className='text-md mb-1 ml-1 mt-4'
              >Message</p>

              <textarea
              className='textarea textarea-bordered' 
              placeholder='Type here'
              />

              <button 
              className='btn btn-accent mt-2'
              >send</button>
            </div>

            <div className='flex items-center justify-center my-12'>
              <p className='text-xl font-bold cursor-pointer tracking-wide'
              onClick={() => {
                setIsOpen(false);
              }}
              >Close</p>

              <FaAngleDoubleUp className='ml-2 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Navbar;