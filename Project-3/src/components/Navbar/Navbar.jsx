import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <div>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Navbar