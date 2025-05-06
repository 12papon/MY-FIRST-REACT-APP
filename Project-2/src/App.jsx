import React, { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'

function App() {
  const [singleData, setSingleData] = useState([])
  const card = (cardData)=>{
    const newData = [...singleData, cardData]
    setSingleData(newData)
  }
 
  return (
    <div className='flex'>
      <Products card={card}></Products>
      <Placement item = {singleData}></Placement>
    </div>
  )
}

export default App
