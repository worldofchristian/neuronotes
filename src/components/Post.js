import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const Post = () => {
  return (
    <>
    <div
    className='flex max-w-3xl'>
            
        <div
        className='flex-col'>
            <div
            className='flex items-center text-center justify-center mt-2 gap-2'>
                <p
                className='text-xs font-normal text-center underline tracking-wide'
                >Sensation & Perception</p>

                <FaAngleRight />

                <h2
                className='text-xs font-normal underline stracking-wide'
                >Auditory System</h2>
            </div>

                <h1
                className='text-3xl font-medium mt-2 text-center tracking-wide'
                >Perception of Sound</h1>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-2'
                >Auditory perception begins with the reception of soundwaves.</p>
        </div>

    </div>
    </>
  )
}

export default Post