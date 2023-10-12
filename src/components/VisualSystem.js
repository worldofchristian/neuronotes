import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RetinatoV2 from './charts/VisualSystem/Retina-V2';
import DorsalVentral from './charts/VisualSystem/DorsalVentral';
import FFA from './charts/VisualSystem/FFA';

const VisualSystem = ({ defaultPosition }) => {
  return (
    <>
    <div
    className='flex items-center justify-center'>
      <div
      className='max-w-md p-4'>
          <div
          className='flex-col my-12'>
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
              >Visual System</h1>

              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >Light</h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
              >Light is a narrow portion of the electromagnetic spectrum. Humans can see light with wavelengths 
              between 400 and 800 nm. Different animals can see different portions of the spectrum. For example, 
              bees can see ultraviolet waves (100nm-400nm) which helps them with pollination. Mantis shrimp can 
              see waves between 300 and 720mm, spanning nearly the entire spectrum from ultraviolet to infrared.
              They can do this because their eyes contain more types of photoreceptors, anywhere from 12 to 16 
              compared to the 4 that are found in humans. When light hits an object, it appears a certain color 
              because the object absorbs all visible waves except that particular color. That color is reflected 
              off the object and is then able to be picked up by the photoreceptors in our eyes.</p>
              
              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >The Eye</h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
              >Light passes through a transparent window called the cornea, and into the pupil. The iris is the colored 
              part of the eye that controls how much light can enter by expanding or contracting the pupil. From there, 
              it is focused onto the back of the eye by the lens. The retina is found at the back of the eye and holds the 
              cells responsible for sensing light.<br /><br />

              The quality of the focused light can vary depending on the shape of the eye. Myopia (nearsightedness) is when 
              the shape of the retina causes a blurry image of distant objects. Hyperopia (farsightedness) is when close 
              objects become blurry. An ideal eye shape is called emmetropia.<br /><br />

              The eyes are pieces of the brain, which makes the cells in the eye neurons. Light passes through several layers of neurons. 
              Ganglion cells connect on one side to bipolar cells, and on the other they have axons that leave the eye. Bipolar cells 
              transmit signals between the ganglion cells and the photoreceptors. Often referred to as rods and cones, these neurons are 
              responsible for vision. Rods handle low light levels, while cones handle high light levels and sense color. For example, the 
              presence of light in the eyes is known to suppress melatonin. This explains why we prefer to sleep in darkness.</p>

              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >Visual Pathways</h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
              >Once light has entered the eye, the visual input travels along the optic nerve to be interpreted by the brain. The input goes 
              to the middle of the brain, reaching the lateral geniculate nuclei in the thalamus. These are found on each hemisphere of the brain 
              and act as a relay station between the retina and the visual cortex. This is known as the retinal-geniculate-striate pathway.<br /><br />

              From there, the input travels to a number of areas in the visual cortex located at the posterior (back) of the brain. Together, 
              these areas are responsible for the full representation of our visual field. This takes about 200ms, which is long enough to create a 
              lag between what happens in the world and when we perceive it. Because of this, the brain continuously predicts what will happen 200ms 
              from the present moment. </p>

              <div
              className='flex items-center justify-center my-12'>
                <RetinatoV2 />
              </div>

              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >Object Recognition
              </h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
              >Beyond the striate cortex (V1) is the etraxstriate cortex. This area handles the more complicated parts of visual processing. Within this 
              cortex the visual input forks into two streams, dorsal and ventral. The dorsal stream is known as the “where” pathway, it deals with the locations 
              of objects and how to interact with them. The ventral stream is called the “what” pathway, it handles the names and functions of objects. It’s worth 
              stating that these “what” and “where” titles are not exactly set in stone. Some “what” information can be encoded in “where” regions, and vice versa.<br /><br />
              </p>

              <div
              className='flex items-center justify-center my-12'>
                <DorsalVentral />
              </div>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'>
              However, these regions do work together to generate an image of the world around us. Damage to any of these areas can cause major alterations to how 
              we perceive our surroundings. Take the inferotemporal cortex for instance. This is a piece of the temporal lobe that belongs to the “what” (ventral) pathway, 
              damage to this region leads to Agnosia, a lack of ability to recognize objects, despite the ability to see them.<br /><br />
              
              We can get more specific about the types of objects that are recognized. Within the inferotemporal cortex are a number of sub-areas. Among them is the Fusiform 
              Place Area which handles places, such as houses. The Extrastriate Body Area perceives body parts, and the Fusiform Face Area handles faces. Damage to this area 
              causes a type of agnosia called Prosopagnosia, the inability to recognize faces.<br /><br />
              
              Sometimes the Fusiform face area can become active when no actual face is present. This is called Pareidolia, a phenomenon where we perceive a face where there is no actual face.
              </p>

              <div
              className='flex items-center justify-center my-12'>
                <FFA />
              </div>
              
              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >Color Perception</h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
              >There are 3 steps to the perception of color:<br /><br />

              1) Detection<br />
              • Photoreceptors convert light into electrical energy that can be used in the brain<br /><br />
              2) Discrimination<br />
              • Neurons compare inputs from a variety of photoreceptors to tell the difference between wavelengths of light<br /><br />
              3) Appearance<br />
              • Colors are assigned to objects. They can be recognized as having the same color under a variety of viewing conditions<br /><br />

              Cones are the photoreceptors responsible for detecting color. These cells require photopic (daylight) levels of light. That is to say 
              they require a brighter environment to operate. Scotopic (low-light) environments are handled by Rods, which cannot sense color. 
              This is why we can’t see color in the dark.<br /><br />
          
              Within the eye there are 3 types of cones, the output of which determines the color of the light. S-cones determine short and violet wavelengths, 
              M-cones detect medium and green wavelengths, and L-cones detect long and red wavelengths. Any perceptible color can be created using a combination of these 3 colors.<br /><br />
          
              Within the visual cortex, color processing occurs primarily within V4. Damage to this area leads to a condition called achromatopsia, the loss of color vision. 
              Color-anomalous individuals can still make discriminations based on wavelength, they just differ from how the majority of people are able to. There are several 
              types of color blindness, ranging from the inability to see certain colors, to the inability to see any at all. The type of color blindness is correlated with 
              the absence of it’s corresponding cone type in the retina.</p>
              
              <h2
              className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
              >Depth Perception</h2>

              <p
              className='text-base text-left justify-start items-start mt-2 mx-4'
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
  );
};

export default VisualSystem;