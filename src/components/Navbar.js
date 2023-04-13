import React from 'react'

const Navbar = ({toggle}) => {
  return (
    <>
    <nav className="sticky top-0 z-10 backdrop-filter bg-opacity-30 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">

                <div 
                className="flex-none">
                  <button 
                  onClick={toggle}
                  className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </button>
                </div>
            
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar