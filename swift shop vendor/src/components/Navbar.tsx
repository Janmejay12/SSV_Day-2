import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-6 '>
        <div>
            Swift Shop Vendor
        </div>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            Home
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            About Us
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'>
            get Help
        </button>
        <button className='text-black-200 hover:bg-gray-600 hover:text-white px-3 py-2'     >
            products
        </button>
    </nav>
      
    
  )
}

export default Navbar
