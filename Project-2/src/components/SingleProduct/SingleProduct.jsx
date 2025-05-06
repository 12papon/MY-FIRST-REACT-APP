import React from 'react'

const SingleProduct = ({ProductData, card}) => {
    const {name, id , price} = ProductData
    
  return (
    <div className='border border-border rounded-xl p-4  hover:bg-amber-200 cursor-pointer duration-300 group '>
        <h2>Name : {name}</h2>
        <p>ID : {id}</p>
        <p>Price : {price}</p>
        <button onClick={()=> card(ProductData)} className='bg-progress px-3 py-1 hover:not-focus:bg-purple-700 rounded font-normal text-write group-hover:bg-primary cursor-pointer'>Add Cart</button>
    </div>
  )
}

export default SingleProduct