import React from 'react'
import { Link } from 'react-router-dom'

const NavDropdown = ({isOpen, toggle}) => {
  return (
    <>
    <div
    className={
      isOpen ? 'grid grid-rows-3 sticky top-16 z-10 text-center items-center justify-center' : 'hidden' }
    
    onClick={toggle}>

          <Link to='/'>
            <p
            className='p-4' href='/'
            >Home</p>
          </Link>

          <a
          className='p-4' href='/ex'>
          Explore Topics</a>

          
          <div
          className='flex items-center justify-center my-6'>

            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            style={{ height: 36, width: 36 }}
            onClick={toggle}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>
        
    </div>
    </>
  )
}

export default NavDropdown