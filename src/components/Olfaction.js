import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Olfaction = () => {
  return (
    <>
    <div
    className='flex items-center justify-center'>
        
        <div
        className='max-w-3xl'>
            <div
            className='flex-col'>
                <div
                className='flex items-center text-center justify-center mt-12 gap-2'>
                    <Link to='/explore'>
                        <p
                        className='text-base font-normal text-center underline tracking-wide'
                        >Perception</p>
                    </Link>

                    <FaAngleRight />

                    <Link to='explore'>
                    <h2
                    className='text-base font-normal underline tracking-wide'
                    >Visual System</h2>
                    </Link>
                </div>

            <h1
            className='text-5xl font-bold mt-2 text-center tracking-wide'
            >Olfaction</h1>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Odorants are molecules that contain chemical characteristics. These are picked up by the 
            olfactory system and translated into odors, the perception of smell. This happens in the nose, 
            where odorants travel through the olfactory cleft at the back of the nose and into the olfactory 
            epithelium. This area is a membrane is sometimes called the retina of the nose, because it contains 
            sensory neurons responsible for sending stimuli to the olfactory bulb in the brain. The bulb itself 
            is actually a pair of two bulbs, each residing in its respective hemisphere. They’re the size of a 
            blueberry, and each correspond to one of the two nostrils.</p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The olfactory bulb is a part of a larger system comprised of the olfactory cortex and the limbic system 
            (amygdala-hippocampal complex). This connection with the limbic system explains why scents have such strong 
            emotional associations, as this system is important for regulating emotions and forming memories.</p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Humans have between 5 and 10 million olfactory sensory neurons. Dogs have about a billion, and their brain 
            is more dedicated to sensing smells. This makes them much better than we are at identifying and tracking 
            various scents.</p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >An inability to perceive smell is known as anosmia. It’s most often caused by head trauma or an illness effecting 
            the sinuses. However, anything that severs the connections between the brain and the olfactory sensory neurons will 
            result in a diminished ability to smell. Some people have genetic differences in their olfactory system that results 
            in specific anosmia, an inability to perceive certain smells.</p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >There are two primary ways we sense odorants in the air. First is called orthonasal olfaction. This is the typical 
            manner in which we bring air into our nostrils and smell whatever happens to be in the air. The other, is called 
            retronasal olfaction. This is when odorents make their way to the olfactory epithelium through the mouth, and 
            typically occurs when we are eating.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Olfaction