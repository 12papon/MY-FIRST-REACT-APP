import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])
  const addCart = (cartData)=>{
    const newCart = [...cart, cartData]
    setCart(newCart)
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
        <h1 className='text-2xl font-bold text-lime-700 text-shadow-2xs text-shadow-pink-400'>All Data </h1>
        <div className='border border-amber-300 rounded my-5 p-2 grid grid-cols-2 h-[400px] overflow-scroll'>
          <Products addCart= {addCart}></Products>
          <Placement cart ={cart} ></Placement>
        </div>
    <h5>Hallo world</h5>
    </div>
  )
}

export default App
