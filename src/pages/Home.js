import React, { useState } from 'react';
import { useEffect } from 'react';
import dog from '../img/dog.jpg';
import Graph from '../components/Graph';
import HomeList from '../components/HomeList';
import VisualSystem from './VisualSystem';
import AuditorySystem from './AuditorySystem';

const Home = () => {
  const [activeTab, setActiveTab] = useState('visual');

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tab) => {
    console.log('Tab clicked:', tab);
    setActiveTab(tab);
  };

  return (
    <>
    <div className='bg-base max-w-6xl mx-auto'>
      <div className='min-h-screen'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center max-h-[300px]'>
            <Graph />
          </div>
          
          <div className='flex items-center justify-center mt-5 z-50'>
            <HomeList 
            handleTabClick={handleTabClick} 
            activeTab={activeTab} 
            />
          </div>

          <div className='flex items-center justify-center'>
            {activeTab === 'visual' && <VisualSystem />}
            {activeTab === 'auditory' && <AuditorySystem />}
            {activeTab === 'motor' &&
            <>
            <div className='flex flex-col items-center mb-20'>
              <h1 className='text-3xl font-bold mt-10 text-center'>Under construction</h1>

              <img src={dog} alt='under construction dog' className='rounded-2xl w-4/6 mt-5' />
            </div>
            </>}
            {activeTab === 'executive' &&
            <>
            <div className='flex flex-col items-center mb-20'>
              <h1 className='text-3xl font-bold mt-10 text-center'>Under construction</h1>

              <img src={dog} alt='under construction dog' className='rounded-2xl w-4/6 mt-5' />
            </div>
            </>}
            {activeTab === 'defaultmode' &&
            <>
            <div className='flex flex-col items-center mb-20'>
              <h1 className='text-3xl font-bold mt-10 text-center'>Under construction</h1>

              <img src={dog} alt='under construction dog' className='rounded-2xl w-4/6 mt-5' />
            </div>
            </>}
            {activeTab === 'salience' &&
            <>
            <div className='flex flex-col items-center mb-20'>
              <h1 className='text-3xl font-bold mt-10 text-center'>Under construction</h1>

              <img src={dog} alt='under construction dog' className='rounded-2xl w-4/6 mt-5' />
            </div>
            </>}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;