import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VisualSystem = () => {
  return (
    <>
    <div
    className='flex items-center justify-center'>
        
        <div
        className='max-w-3xl p-4'>
            <div
            className='flex-col'>
                <div
                className='flex items-center text-center justify-center mt-6 gap-2'>
                    <Link to='/'>
                        <p
                        className='text-base font-normal text-center underline tracking-wide'
                        >Home</p>
                    </Link>

                    <FaAngleRight />

                    <Link to='/explore'>
                        <h2
                        className='text-base font-normal underline tracking-wide'
                        >Perception</h2>
                    </Link>
                </div>
                
                <h1
                className='text-5xl font-bold mt-2 text-center tracking-wide'
                >Visual System</h1>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-4'
                >Depth perception is an important part of how we’re able to make sense of the world around us. 
                After the retinal image is created, the brain has to interpret where exactly the objects in the 
                image are located in 3 dimensional space. This is done through a variety of cues, some of which 
                only require the use of one eye (monocular), while others require two (binocular).</p>

                <h2
                className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-8 mx-4'
                >Monocular Depth Cues</h2>

                <p
                className='text-base text-left justify-start items-start mt-2 mx-4'
                >If we know from experience how big an object is supposed to be, we can figure out how far away 
                it is by how large it appears when we see it. This is a cue called familiar size. Because we know 
                that human beings are several feet tall, we can ascertain that a person must be very far away if 
                they only look to be a few inches tall. Cues such as these are used extensively in artwork to 
                create a sense of realism.</p>

                <div
                className='flex items-center justify-center'>
                <img
                src='https://images.unsplash.com/photo-1529876754933-9ec125d43742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                className='max-w-sm my-12 rounded-xl shadow-xl'
                alt='forced perspective' />
                </div>

                <p
                className='text-base text-left justify-start items-start mt-2 mx-4'
                >Forced perspective is an illusion based on this principle. It can be used to manipulate objects 
                and distance to make something appear smaller or larger than it really is.</p>

                <div
                className='flex items-center justify-center'>
                <img
                src='https://images.unsplash.com/photo-1589779678014-5a337ab8dcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                className='max-w-lg my-12 rounded-xl shadow-xl'
                alt='forced perspective' />
                </div>

                <p
                className='text-base text-left justify-start items-start mt-2 mx-4'
                >Gradients are also used to judge the distance of objects. We have an intuitive understanding that 
                light gets scattered by the atmosphere. Therefore, anything far off in the distance will appear 
                fainter than usual. This cue is called aerial perspective.</p>

                <div
                className='flex items-center justify-center'>
                <img
                src='https://images.unsplash.com/photo-1542378135-815e52392963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                className='max-w-lg my-12 rounded-xl shadow-xl'
                alt='forced perspective' />
                </div>

                <p
                className='text-base text-left justify-start items-start mt-2 mx-4'
                >Linear perspective is when parallel lines converge to a single point in the horizon, known 
                as the vanishing point.</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default VisualSystem