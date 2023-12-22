import React from 'react';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';
import HomeList from '../components/HomeList';
import HomeCard from '../components/HomeCard';
import dmn from '../img/dmn.jpg';
import sn from '../img/sn.jpg';
import cen from '../img/cen.webp';
import sms from '../img/sms.jpg';
import vn from '../img/vn.jpg';
import as from '../img/as.jpg'

const Home = () => {
  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef(null);

  const handleBtnClick = () => {
    console.log('button click', scrollRef.current)
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Navbar />

    <div className="bg-base">
      <div className='max-w-6xl mx-auto'>
        <div className='min-h-screen'>
          <div className='flex flex-col'>
            
            <div className='flex items-center justify-center mt-10'>
              <HomeList />
            </div>

            <div className='flex items-center justify-center max-h-[450px]'>
              <Graph 
              handleBtnClick={handleBtnClick}
              />
            </div>
            
          </div>
        </div>

        <div 
        className='flex items-center justify-center'
        ref={scrollRef}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-20'> 
            <HomeCard 
            SystemName={'Default Mode Network'}
            SystemImage={dmn}
            SystemDescription={'Internal thinking, introspection, and imagination'}
            className='mr-[20%]'
            />

            <HomeCard
            SystemName={'Salience Network'}
            SystemImage={sn}
            SystemDescription={'Prioritizing external stimuli and internal thoughts'}
            className='ml-[20%]'
            />

            <HomeCard
            SystemName={'Central Executive Network'}
            SystemImage={cen}
            SystemDescription={'Problem solving, decision making, and working memory'}
            className='mr-[20%]'
            />

            <HomeCard
            SystemName={'Sensorimotor Network'}
            SystemImage={sms}
            SystemDescription={'Processing sensory input and planning motor actions'}
            className='ml-[20%]'
            />

            <HomeCard
            SystemName={'Visual Network'}
            SystemImage={vn}
            SystemDescription={'Processing and interpreting visual input'}
            className='mr-[20%]'
            />

            <HomeCard
            SystemName={'Auditory Network'}
            SystemImage={as}
            SystemDescription={'Processing and interpreting sound input'}
            className='ml-[20%]'
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;