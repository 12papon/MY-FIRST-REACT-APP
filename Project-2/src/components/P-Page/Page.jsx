import React from 'react'
import { Link } from 'react-router-dom';

const Page = ({details}) => {
    const {id, title, price ,description,category,image} = details;  
  return (
    <div>
        <div className=' p-3 border rounded m-3 flex items-center justify-center flex-col'>
            <img className='size-30' src={image} alt="" />
            <h1 className='py-4 font-bold text-button'>{title}</h1>
            <h2 className='text-[22px] font-bold'>{price} $</h2>
            <Link to={`/home/${id}`}>
                <button className='btn'>More Info</button>
            </Link>
        </div>
    </div>
  )
}

export default Page