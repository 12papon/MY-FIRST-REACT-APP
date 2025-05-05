import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-pink-300 p-3'>
        <Link className='mx-5 text-lime-700' to={'/'}>Home</Link>
        <Link className='mx-5 text-lime-700' to={'/about'}>About</Link>
        <Link className='mx-5 text-lime-700' to={'/contacts'}>Contact</Link>
        <Link className='mx-5 text-lime-700' to={'/portfolio'}>Protfolio</Link>
    </div>
  )
}

export default Navbar