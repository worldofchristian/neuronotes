import React, { useEffect, useState } from 'react'
import { FaCircle, FaMinus, FaPlus } from 'react-icons/fa';
import CochleaPAC from '../components/charts/AuditorySystem/CochleaPAC';
import PACaaa from '../components/charts/AuditorySystem/PACaaa';

const AuditorySystem = () => {
  const [isSound, setIsSound] = useState(false);
  const [isEP, setIsEP] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isV, setIsV] = useState(false);

  // load to the top of the page
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className='flex items-center justify-center bg-base-100 mb-20'>  
      <div className='max-w-[370px] lg:max-w-4xl'>
          <div className='flex-col'>
            <div className='flex flex-row items-center justify-center mt-5'>
              <FaCircle className='text-xl mt-2 mr-3 text-cyan-400' />

              <h1
              className='text-3xl font-bold mt-2 text-center tracking-wide'
              >Auditory System
              </h1>
            </div>

            <div className='flex flex-row items-center justify-center gap-5 mt-10'>
              <h2 className='text-2xl text-left font-semibold tracking-wide'
              >Sound
              </h2>

              <button 
              className='btn btn-outline btn-sm rounded-full'
              onClick={() => setIsSound(!isSound)}
              >{isSound ? <>Collapse<FaMinus className='ml-2' /></> : <>Expand<FaPlus className='ml-2' /></>}
              </button>
            </div>

            {isSound &&
            <>
            <p className='text-base text-left justify-start items-start mt-2'
            >Sounds are vibrations of air molecules. Higher frequencies of vibration create higher pitched sounds, 
            while lower frequencies create deeper sounds. Frequency is measured in Hz, and the overall loudness is 
            measured in decibels. Humans perceive sound that falls between 20 and 20,000 Hz.
            </p>
            </>}

            <div className='flex items-center justify-center my-5'>
              <CochleaPAC />
            </div>

            <div className='flex flex-row items-center justify-center gap-5 mt-10'>
              <h2 className='text-2xl text-left font-semibold tracking-wide'
              >Ear Physiology
              </h2>

              <button 
              className='btn btn-outline btn-sm rounded-full'
              onClick={() => setIsEP(!isEP)}
              >{isEP ? <>Collapse<FaMinus className='ml-2' /></> : <>Expand<FaPlus className='ml-2' /></>}
              </button>
            </div>
            
            {isEP &&
            <>
            <p className='text-base text-left justify-start items-start mt-6 mx-4'
            >Sound waves are first collected by the pinna, the outer structure of the ear. Sound is then funnelled into 
            the ear canal where they reach the tympanic membrane (eardrum). This membrane is a thin sheet of skin that 
            vibrates in response to sound waves. The vibrations travel along small bones in the middle ear called ossicles. 
            Inner ear muscles tense up during certain activities such as talking, as to not overwhelm us with internally 
            generated sound.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The inner ear is where vibrations are translated into neural signals that can be interpreted by the brain. 
            Hair cells within the inner ear are neurons, much like photoreceptors in the eye. These neurons are found on a 
            spiral shaped bone called the cochlea, with different areas corresponding to different frequencies of vibration.
            </p>
            </>}

            <div className='flex items-center justify-center mt-10'>
              <PACaaa />
            </div>

            <div className='flex flex-row items-center justify-center gap-5 mt-10'>
              <h2 className='text-2xl text-left font-semibold tracking-wide'
              >Music
              </h2>

              <button 
              className='btn btn-outline btn-sm rounded-full'
              onClick={() => setIsMusic(!isMusic)}
              >{isMusic ? <>Collapse<FaMinus className='ml-2' /></> : <>Expand<FaPlus className='ml-2' /></>}
              </button>
            </div>
            
            {isMusic &&
            <>
            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Musical pitch refers to the frequencies of sound waves found in music. Pitch usually ranges between 25 and 4500 Hz. 
            Octave is a sound that is double the frequency of the previous sound. The note C4 has a frequency of 261.4 Hz, while 
            C5 is 523.2 Hz. The note itself is the same, yet the frequencies are different
            </p>
            </>}

            <div className='flex flex-row items-center justify-center gap-5 mt-10'>
              <h2 className='text-2xl text-left font-semibold tracking-wide'
              >Vestibular System
              </h2>

              <button 
              className='btn btn-outline btn-sm rounded-full'
              onClick={() => setIsV(!isV)}
              >{isV ? <>Collapse<FaMinus className='ml-2' /></> : <>Expand<FaPlus className='ml-2' /></>}
              </button>
            </div>
            
            {isV &&
            <>
            <p className='text-base text-left justify-start items-start mt-6 mx-4'
            >The vestibular system is a set of 5 organs in the inner ear that sense the motion of the head. It is used to orient 
            ourselves with respect to gravity. These organs do so by sensing gravity induced distortions of the hair cells in the 
            inner ear. This is because the hair cells contain crystals (calcium carbonate) that move in the opposite direction of 
            the head’s motion.<br /><br />
            
            Endolymph fluid aids this process by circulating within the ear. When we spin, the fluid moves in the direction of the 
            spin at a similar rate. This helps the brain adapt, yet it can continue to circulate after the spinning has stopped, 
            which explains why the sensation of spinning often persists for a while afterwards.<br /><br />
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The vestibulo-ocular reflex stabilizes the visual input by counter-rotating the eyes in order to maintain a fixation 
            on a target. This is the blur like effect that occurs when we move our head quickly.
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >When there’s a discrepancy between inputs of the various sensory organs, such as vision, motion, or orientation, 
            motion sickness can often be a result. This is a commonly reported side effect of virtual reality, as the visual 
            system can feel like the body is moving, while the endolymph fluid in the inner ear believes we are still. 
            The same effect occurs in reverse when we are in a moving vehicle.
            </p>
            </>}
          </div>
      </div>
    </div>
    </>
  )
}

export default AuditorySystem;