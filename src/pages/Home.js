import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
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
  const cognitiveItems = [
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
          { name: 'Hypothesis Testing', path: '/hypothesistesting' }
      ],
  },
  ];

  return (
    <>
    <div 
    className="hero min-h-screen">
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
          >Interactive diagrams for brain systems</h1>
        </div>

        <div
        className='flex items-center justify-center'>
          <div
          className='max-w-7xl'>
            <div 
            className="container px-4 py-6">
              {cognitiveItems.map((category, index) => (
                  <div 
                  key={index} 
                  className="mb-6">
                      <button
                      className="flex items-center justify-between gap-8 w-full bg-base-300 px-4 py-4 rounded-md"
                      onClick={() => toggleCategory(category.category)}>

                        <span 
                        className="text-lg font-medium"
                        >{category.category}</span>

                        <svg
                        className={`w-6 h-6 transition-transform duration-300 transform ${
                          activeCategory === category.category ? 'rotate-90' : 'rotate-0'
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor">

                          <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        </svg>
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
                                    className='ml-4 mt-4'
                                    />

                                    <h3 
                                    className="text-lg font-large my-2 underline cursor-pointer"
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