import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';

const HomeList = () => {
  return (
    <>
    <div 
    className='flex flex-col'>
        <div className='w-full'>
            <div className='flex items-center justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-green-500' />
                
                <Link to='visualnetwork'>
                <p className='text-lg underline tracking-wide'
                >Visual Network
                </p>
                </Link>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-cyan-300' />

                <Link to='visualnetwork'>
                <p className='text-lg underline tracking-wide'
                >Auditory Network
                </p>
                </Link>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-white' />

                <p className='text-lg underline tracking-wide'
                >Motor Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-yellow-300' />

                <p className='text-lg underline tracking-wide'
                >Salience Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-orange-400' />

                <p className='text-lg underline tracking-wide'
                >Central Executive Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-5 cursor-pointer'>
                <FaCircle className='mt-1 mr-4 text-purple-400' />

                <p className='text-lg underline tracking-wide'
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