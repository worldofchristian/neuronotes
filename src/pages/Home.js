import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';
import HomeList from '../components/HomeList';

const Home = () => {
  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-base">
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            
          <div className='flex items-center justify-center max-h-[520px]'>
            <Graph />
          </div>

          <div 
          className='flex items-center justify-center mb-20'>
            <HomeList />
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Home;