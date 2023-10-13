import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import '@lottiefiles/lottie-player';

const Home = () => {
  // state for the selected category
  const [activeCategory, setActiveCategory] = useState('');

  // toggler for the categories
  const toggleCategory = (category) => {
    setActiveCategory(prevCategory => (prevCategory === category ? '' : category));
  };

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // data for the categories
  const categories = [
    {
        category: 'Perception',
        items: [
            { name: 'Visual System', path: '/visualsystem' },
            { name: 'Auditory System', path: '/auditorysystem' },
            { name: 'Vestibular System' },
            { name: 'Olfactory System' },
        ],
    },
    {
        category: 'Cognition',
        items: [
            { name: 'Learning' },
            { name: 'Memory' },
            { name: 'Attention' },
        ],
    },
    {
      category: 'Statistics',
      items: [
          { name: 'Statistical Tests', path: '/statisticaltests' }
      ],
    },
  ];

  return (
    <>
    <div 
    className="hero min-h-screen bg-white">
      <div 
      className="text-center">
        <div 
        className="max-w-lg">
          <div
          className='flex items-center justify-center'>
          <lottie-player
          src="https://lottie.host/3f24fdbb-2d8a-4aad-8272-b46e20d82282/OR4pQtL5vP.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
          ></lottie-player>
          </div>

          <h1 
          className="mb-8 text-4xl p-4 text-slate-700 font-bold"
          >neuronotes</h1>
        </div>

        <div
        className='flex items-center justify-center'>
          <div
          className='max-w-7xl'>
            <div 
            className="container px-4 py-6">
              {categories.map((category, index) => (
                  <div 
                  key={index} 
                  className="mb-6">
                      <button
                      className="flex items-center justify-between gap-8 w-full bg-slate-100 p-4 rounded-lg shadow-sm"
                      onClick={() => toggleCategory(category.category)}>

                        <span 
                        className="text-lg text-slate-800 font-medium"
                        >{category.category}</span>

                        {
                          activeCategory === category.category ? (
                            <FaAngleDown className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                          ) : (
                            <FaAngleRight className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                          )
                        }

                      </button>

                      {activeCategory === category.category && (
                        <div 
                        className="mt-2">
                          {category.items.map((item, index) => (
                            <div 
                            key={index} 
                            className="flex my-4 items-center justify-between">
                              <div>
                                <Link to={item.path}>
                                  <div
                                  className='flex'>
                                    <FaAngleRight
                                    className='ml-4 mt-4 text-slate-800'
                                    />

                                    <h3 
                                    className="text-lg text-slate-800 font-large my-2 underline cursor-pointer"
                                    >{item.name}</h3>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;