import React from 'react'
import { Link } from 'react-router-dom';
import cyanobacteria from '../../img/cyanobacteria.jpg';
import finch from '../../img/finch.jpeg';
import ostrich from '../../img/ostrich.jpg';
import volcano from '../../img/volcano.jpg';
import { FaAngleRight } from 'react-icons/fa';
import TestYourselfLifeonEarth from './TestYourselfLifeonEarth';

const LifeonEarth = () => {
  return (
    <>
    <div
    className='flex items-center justify-center'>
        
        <div
        className='max-w-6xl mx-auto my-12'>
            <div
            className='flex-col'>
                <div
                className='flex items-center text-center justify-center gap-2'>
                    <Link to='/'>
                        <p
                        className='text-base font-normal text-center underline tracking-wide'
                        >Home</p>
                    </Link>

                    <FaAngleRight />

                    <Link to='/explore'>
                    <h2
                    className='text-base font-normal underline tracking-wide'
                    >Earth</h2>
                    </Link>
                </div>

            <h1
            className='text-5xl font-bold mt-2 text-center tracking-wide'
            >Life on Earth</h1>
            
            <div
            className='flex items-center justify-center my-12'>
                <div
                className='max-w-3xl'>
                    <img 
                    className='rounded-lg shadow-xl'
                    src={cyanobacteria} alt='blue green algae top down view' />
                </div>
            </div>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >The first life forms on the planet appeared 3.8 to 4 billion years ago. They consisted of 
            single celled organisms such as cyanobacteria, a type of algae. Cyanobacteria are photosynthetic 
            organisms that release oxygen as a byproduct of photosynthesis. They are thought to have been 
            responsible for gradually increasing the amount of oxygen in the atmosphere over hundreds of 
            millions of years, known as the great oxygenation event.</p>

            <h2
            className='text-2xl text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
            >Species</h2>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >It is difficult to set a precise definition on what a species is. Most definitions do have some 
            criteria in common. It’s generally agreed that there needs to be a group of organisms with shared attributes. 
            The varieties of life can be organized using the Linnaean system of classification.<br /><br />
            
            This states that every species has a parent group called genus that contains other related species. 
            For example, the horse belongs to the Equus genus which also contains the donkey and zebra. Genus 
            also has a parent group, and there are several more layers of classification as the number of species on Earth 
            is enormous. There are 2 million that are known, and an estimated 8 million more yet to be discovered.<br /><br />

            At the top level, we have Domain. Yet, there’s more than one of these as well. Domains are classified 
            based on the type of cell in the organism. Prokaryotic cells are found in single celled organisms and 
            have free flowing DNA, while Eukaryotic cells are found in multi celled organisms and has its DNA within 
            a nucleus.<br /><br />
            </p>

            <h2
            className='text-2xl text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
            >Natural Selection</h2>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Many variants exist between species. The species whose variants make them more capable of reproducing, 
            or surviving therefore reproducing more, will have the highest probability of creating a new generation 
            of its species. A changing environment leads to a change in the life forms that inhabit it. If enough 
            changes accumulate, a new species is formed. This is known as genetic drift.<br /><br />
            
            This concept was developed by both Charles Darwin and Alfred Wallace. They didn’t work together, rather 
            they independently came to the same conclusions. Darwin published first and provided more evidence, which 
            explains why he is often credited as the one who discovered this concept. This concept consists of a number 
            of observations.
            </p>

            <div
            className='flex flex-col items-center justify-center md:flex-row my-12'>
                <div 
                className="card h-96 w-96 bg-base-100 shadow-xl my-6 md:my-0 md:mr-12">
                    <figure><img src={finch} alt="different beaks of finches" /></figure>
                    <div 
                    className="card-body">
                        <p>
                        Finches have different beaks that correspond to different lifestyles</p>
                    </div>
                </div>

                <div 
                className="card h-96 w-96 bg-base-100 shadow-xl my-6 md:my-0">
                    <figure><img src={ostrich} alt="Vestigial wings on ostrich" /></figure>
                    <div 
                    className="card-body">
                        <p>
                        Vestigial features, body parts that appear to serve no particular function, but do in other creatures</p>
                    </div>
                </div>
            </div>

            <h2
            className='text-2xl text-left justify-start items-start font-semibold tracking-wide mt-6 mx-4'
            >Extinction</h2>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Defined by a loss of 30% of all species, a number of large scale events have the capacity to cause mass extinctions.<br /><br />

            Massive volcanic events can produce large amounts of sulphur dioxide, which combine with water to form sulphuric acid and cool the planet. 
            Volcanism can also produce carbon dioxide, which combines with water to form carbonic acid and warms the planet. The end result of either 
            is the acidification of the oceans causing the death of marine life, and a changing climate.
            </p>

            <div
            className='flex items-center justify-center my-12'>
                <div
                className='max-w-3xl'>
                    <img 
                    className='rounded-lg shadow-xl'
                    src={volcano} alt='volcanic eruption' />
                </div>
            </div>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >A changing climate itself can cause mass extinctions by altering the environment present life depends on. A colder climate leads to 
            regression of sea levels, reducing the area for benthic organisms to survive in. A warming climate leads to melting polar ice, rising sea levels, 
            and a subsequent hypoxia or de-oxygenation of the oceans. This makes it difficult for marine life to survive. 
            </p>

            <p
            className='text-base text-left justify-start items-start mt-6 mx-4'
            >Additionally, the climate of an environment can change simply due to the movement of the tectonic plates from one area of the planet to another.  
            </p>

            <div
            className='flex items-center justify-center my-12'>
                <TestYourselfLifeonEarth />
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default LifeonEarth