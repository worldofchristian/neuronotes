import React from 'react';
import { FaCircle } from 'react-icons/fa';

const HomeList = ({ handleTabClick, activeTab }) => {
  return (
    <>
    <div className='grid grid-cols-2 gap-2 mr-4 mb-5'>
        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'visual' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('visual')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-green-500' />
                
                    <p className='text-xs lg:text-sm'
                    >Visual Network
                    </p>
                </div>
            </div>
        </button>

        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'executive' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('executive')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-orange-400' />

                    <p className='text-xs lg:text-sm'
                    >Executive Network
                    </p>
                </div>
            </div>
        </button>

        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'motor' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('motor')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-white' />

                    <p className='text-xs lg:text-sm'
                    >Motor Network
                    </p>
                </div>
            </div>
        </button>

        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'salience' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('salience')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-yellow-300' />

                    <p className='text-xs lg:text-sm'
                    >Salience Network
                    </p>
                </div>
            </div>
        </button>

        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'auditory' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('auditory')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-cyan-400' />

                    <p className='text-xs lg:text-sm'
                    >Auditory Network
                    </p>
                </div>
            </div>
        </button>

        <button 
        className={`bg-base-300 cursor-pointer ${activeTab === 'defaultmode' ? 'border-violet-500 border-2' : ''} mx-2 p-2 rounded-full w-full`}
        onClick={() => handleTabClick('defaultmode')}
        >
            <div className='flex items-left justify-start'>
                <div className='flex flex-row items-center'>
                    <FaCircle className='text-xs lg:text-sm ml-1 mr-2 text-purple-400' />

                    <p className='text-xs lg:text-sm'
                    >Default Mode Network
                    </p>
                </div>
            </div>
        </button>
    </div>
    </>
  )
}

export default HomeList