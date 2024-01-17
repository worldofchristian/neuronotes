import React, { useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Almost = () => {
  // load to the top of the page
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />

    <div className='max-w-sm lg:max-w-4xl bg-base-100 mx-auto'>
        <div className='flex items-center justify-center mt-20'>
            <div className='flex flex-col'>
                <p className='text-xl font-semibold text-center'
                >The only one I have so far is the visual network 
                </p>

                <div className='flex items-center justify-center'>
                <Link to='/visualnetwork'>
                    <button className='btn btn-neutral mt-5 text-white'
                    >check it out <FaAngleDoubleRight className='ml-2' />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Almost;