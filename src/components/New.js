import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const New = () => {
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
                >Perception</p>

                <FaAngleRight />

                <h2
                className='text-xs font-normal underline stracking-wide'
                >Auditory System</h2>
            </div>

                <h1
                className='text-3xl font-medium mt-2 text-center tracking-wide'
                >Vestibular System</h1>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-4'
                >The vestibular system is a set of organs in the inner ear that sense head motion.
                First, are the semicircular canals. These organs sense acceleration, velocity, and gravity.
                They use a system of calcium carbonate (crystals) attached to hair cells, which bend in the 
                presence of force. These movements get translated into nerve impulses that the brain uses
                to orient itself.</p>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-4'
                >Balance is a neural process that evenly distributes our weight in order to keep us upright.
                Our brain is constantly sensing changes in our enviroment. Sensory reafference is when we know 
                that these changes are due to our own actions, while sensory exafference is when changes happen 
                outside of our control.</p>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-4'
                >Sensory integration is the process of combining a variety of sensory inputs to produce a more
                accurate perception of the enviroment. Motion sickness is a result of a sensory difference between
                the vestibular system and the visual system. This happens because in nature a mismatch such as this 
                would normally result from injesting a neurotoxin. The sickness is the brain attempting to
                remove the toxin from the body through vomitting. The brain can adapt to this, which can result in a 
                perceptual change called Mal de Debarquement sydrome, commonly known as sea legs. This change can last
                for a short time, a longer period of days or weeks, or in some cases it can even be permenant.</p>

                <p
                className='text-base text-left justify-start items-start mt-6 mx-4'
                ></p>
        </div>

    </div>
    </>
  )
}

export default New