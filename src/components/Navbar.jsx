import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='w-full'>
        <div className='flex justify-between items-center flex-wrap p-4 bg-blue-700 text-white '>
            <div className='mr-6'>
                Logo
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                <div className='lg:flex-grow'>
                    <p className='block mt-4 lg:inline-block lg:mt-0 mr-4'>
                        <Link to='/'>Home</Link> 
                    </p>
                    <p className='block mt-4 lg:inline-block lg:mt-0 mr-4 mb-4 lg:mb-0'>
                            <Link to='/table'>Table</Link>
                    </p>
 
                </div>
                <div>
                    <button className='px-4 py-1 border-blue-50 rounded mr-4 border'>Register</button>
                    <button className='px-4 py-1 bg-blue-100 rounded text-blue-500'>Login</button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar