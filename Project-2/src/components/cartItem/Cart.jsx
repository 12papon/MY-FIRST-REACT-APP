import React from 'react'

const Cart = ({allItem}) => {
    const {name, id, price} = allItem;
  
  return (
    <div className='border p-2 m-2'>
        <h2>Name : {name}</h2>
        <p>ID : {id}</p>
        <p>Price : {price}</p>
    </div>
  )
}

export default Cart