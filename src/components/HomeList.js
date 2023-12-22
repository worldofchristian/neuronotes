import React from 'react';
import { FaCircle } from 'react-icons/fa';

const HomeList = () => {
  return (
    <>
    <div 
    className='grid grid-cols-2 p-2'>
        <div className='w-full'>
            <div className='flex items-center justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-green-500' />
                
                <p className='text-sm'
                >Visual Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-orange-400' />

                <p className='text-sm'
                >Executive Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-white' />

                <p className='text-sm'
                >Motor Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-yellow-300' />

                <p className='text-sm'
                >Salience Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-cyan-300' />

                <p className='text-sm'
                >Auditory Network
                </p>
            </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex items-left justify-start'>
            <div className='flex flex-row mt-2'>
                <FaCircle className='mt-1 mr-4 text-purple-400' />

                <p className='text-sm'
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