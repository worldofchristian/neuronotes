import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';

const HomeList = () => {
  return (
    <>
    <div 
    className='grid grid-cols-2 p-2'>
        <div className='w-full'>
            <div className='flex items-center justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-green-500' />
                
                <Link to='visualnetwork'>
                <p className='text-md underline'
                >Visual Network
                </p>
                </Link>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-orange-400' />

                <p className='text-md underline'
                >Central Executive Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-white' />

                <p className='text-md underline'
                >Motor Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-yellow-300' />

                <p className='text-md underline'
                >Salience Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-cyan-300' />

                <Link to='visualnetwork'>
                <p className='text-md underline'
                >Auditory Network
                </p>
                </Link>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-purple-400' />

                <p className='text-md underline'
                >Default Mode Network
                </p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeList