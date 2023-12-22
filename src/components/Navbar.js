import React, { useState } from 'react';
import { FaAngleDoubleUp, FaAngleDown, FaAngleRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div className='max-w-4xl'>
      <nav className='w-full py-4 fixed top-0 z-20 bg-base-100 backdrop-filter bg-opacity-80 backdrop-blur-xl'>
        <div className='w-full flex items-center justify-between max-w-5xl px-4'>

          <div className='flex cursor-pointer'>
            <Link to='/'>
              <FaHome className='text-xl' />
            </Link>
          </div>   

          <div 
          className='flex cursor-pointer'
          onClick={handleOpen}
          >
            <div className='flex flex-row'>
              <p className='text-md font-semibold'
              >neuronotes
              </p>

              { isOpen ? ( 
              <FaAngleDown className='text-lg ml-1 mt-1' />
              ) : (
                <FaAngleRight className='text-lg ml-1 mt-1' />
              )}
            </div>
          </div>   
        </div>
      </nav>

      { isOpen && (
        <div className='fixed top-14 left-0 right-0 flex items-center justify-center z-10 bg-base-100 backdrop-filter bg-opacity-80 backdrop-blur-xl shadow-lg'>
          <div className='flex flex-col mt-12'>
            <div className='max-w-sm'>
              <div className='flex flex-col'>
                <div className='flex flex-row cursor-pointer'>
                  <FaAngleRight className='mt-1 mr-1' />

                  <p className='text-lg'
                  >Default Mode Network
                  </p>
                </div>

                <div className='flex flex-row mt-5 cursor-pointer'>
                  <FaAngleRight className='mt-1 mr-1' />

                  <p className='text-lg'
                  >Salience Network
                  </p>
                </div>

                <div className='flex flex-row mt-5 cursor-pointer'>
                  <FaAngleRight className='mt-1 mr-1' />

                  <p className='text-lg'
                  >Central Executive Network
                  </p>
                </div>

                <div className='flex flex-row mt-5 cursor-pointer'>
                  <FaAngleRight className='mt-1 mr-1' />

                  <p className='text-lg'
                  >Sensorimotor Network
                  </p>
                </div>

                <Link to='visualnetwork'>
                  <div className='flex flex-row mt-5 cursor-pointer'>
                    <FaAngleRight className='mt-1 mr-1' />

                    <p className='text-lg'
                    >Visual Network
                    </p>
                  </div>
                </Link>

                <Link to='auditorynetwork'>
                  <div className='flex flex-row mt-5 cursor-pointer'>
                    <FaAngleRight className='mt-1 mr-1' />

                    <p className='text-lg'
                    >Auditory Network
                    </p>
                  </div>
                </Link>
              </div>

              <div className='flex items-center justify-center mt-20 mb-12'>
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

    </div>
    </>
  )
}

export default Navbar;