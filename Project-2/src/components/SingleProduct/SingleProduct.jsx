import React from 'react'

const SingleProduct = ({ProductData}) => {
    const {name, id , price} = ProductData
    console.log(price);
    
  return (
    <div className='border border-border m-2'>
        <h2>Name : {name}</h2>
        <p>ID : {id}</p>
        <p>Price : {price}</p>
    </div>
  )
}

export default SingleProduct