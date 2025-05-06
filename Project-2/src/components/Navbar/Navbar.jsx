import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mb-6'>
        <div className='text-xl font-bold bg-gray-500 px-2 py-3 '>
            <Link className='hover:text-purple-500 duration-200 mx-2' to={"/home"}>Home</Link>
            <Link className='hover:text-purple-500 duration-200 mx-2' to={"/about"}>About</Link>
            <Link className='hover:text-purple-500 duration-200 mx-2' to={"/contact"}>Contact</Link>
            <Link className='hover:text-purple-500 duration-200 mx-2' to={"/products"}>Products</Link>
        </div>

        <Outlet></Outlet>
    </div>
  )
}

export default Navbar