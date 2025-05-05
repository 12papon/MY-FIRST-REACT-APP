
import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (placementData)=>{
    const newPlacement = [...cart, placementData];
    setCart(newPlacement);
  }

  return (
    <div >
      <h1>All Data</h1>
      <div className='flex gap-x-5'>
          <Products addToCart = {addToCart}></Products>
          <Placement placementData = {cart}></Placement>
      </div>
      
    </div>
  )
}

export default App
