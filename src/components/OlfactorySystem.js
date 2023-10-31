import React, { useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OlfactorySystem = () => {
    // load to the top of the page
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div
    className='flex items-center justify-center bg-gray-200'>
        <div
        className='max-w-sm lg:max-w-4xl'>
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
            className='text-3xl font-bold mt-2 text-center tracking-wide'
            >Olfactory System</h1>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Odorants are molecules that contain chemical characteristics. These are picked up by the 
            olfactory system and translated into odors, the perception of smell. This happens in the nose, 
            where odorants travel through the olfactory cleft at the back of the nose and into the olfactory 
            epithelium. This area is a membrane is sometimes called the retina of the nose, because it contains 
            sensory neurons responsible for sending stimuli to the olfactory bulb in the brain. The bulb itself 
            is actually a pair of two bulbs, each residing in its respective hemisphere. They’re the size of a 
            blueberry, and each correspond to one of the two nostrils.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The olfactory bulb is a part of a larger system comprised of the olfactory cortex and the limbic system 
            (amygdala-hippocampal complex). This connection with the limbic system explains why scents have such strong 
            emotional associations, as this system is important for regulating emotions and forming memories.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Humans have between 5 and 10 million olfactory sensory neurons. Dogs have about a billion, and their brain 
            is more dedicated to sensing smells. This makes them much better than we are at identifying and tracking 
            various scents.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Odorants can stimulate the somatosensory (tactile) system. This is because the neurons in question are polymodal, 
            meaning they can be activated by a wider variety of stimuli. This is how things like menthol can give the sensation 
            of coolness. 
            </p>

            <h2
            className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
            >Issues with Olfaction</h2>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >An inability to perceive smell is known as anosmia. It’s most often caused by head trauma or an illness effecting 
            the sinuses. However, anything that severs the connections between the brain and the olfactory sensory neurons will 
            result in a diminished ability to smell. Some people have genetic differences in their olfactory system that results 
            in specific anosmia, an inability to perceive certain smells.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Additionally, our sense of smell towards any particular scent is diminished when we spend a lot of time in its presence. 
            This is a process called receptor adaptation. Familiarity with some scents can sometimes cause adaptation in other scents as well, 
            a process called cross-adaptation. This long term process of reduced ability to detect scents as a result of regular exposure, is 
            known as cognitive habituation.
            </p>

            <h2
            className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
            >Taste</h2>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >There are two primary ways we sense odorants in the air. First is called orthonasal olfaction. This is the typical 
            manner in which we bring air into our nostrils and smell whatever happens to be in the air. The other, is called 
            retronasal olfaction. This is when odorents make their way to the olfactory epithelium through the mouth, and 
            typically occurs when we are eating.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The perception of the stimuli can vary dramatically depending on how it was sensed. Smells can be pleasant when experienced 
            through the nose, but revolting when experienced through the mouth. One such example is freshly cut grass. The scent is commonly 
            thought to be a good one, but not in the way that you would want it in your mouth. However, the smell of a barbecue could.
            </p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default OlfactorySystem;