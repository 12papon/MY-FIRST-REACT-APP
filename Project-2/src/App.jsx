import React, { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [singleData, setSingleData] = useState([])
  const card = (cardData)=>{
    const newData = [...singleData, cardData]
    setSingleData(newData)
  }
 
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex'>
          <Products card={card}></Products>
          <Placement item = {singleData}></Placement>
        <h1>Hallo papon</h1>
      </div>
    </div>
  )
}

export default App
