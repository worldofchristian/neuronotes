import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
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

  return (
    <>
    <Navbar />

    <div 
    className="min-h-screen bg-base">
      <div
      className='flex items-center justify-center'>
        <div
        className='max-w-6xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-20'> 
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