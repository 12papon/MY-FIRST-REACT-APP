import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Info = () => {
  const infoData = useLoaderData();
  const {id, title, price ,description,category,image} = infoData;
  console.log(title);
  return (
    <div className='border rounded mt-5'>
        <div className='flex items-center max-sm:flex-col  justify-around p-5'>
          <img className='size-50 p-2' src={image} alt="" />
          <div className='text-left p-2'>
            <h1>{title}</h1>
            <hr />
            <h3 className='font-bold'>Description:</h3>
            <p className='tracking-normal leading-4 text-[18px]'>{description}</p>
            <p className='text-[22px] font-bold  mt-2'>Price: {price}$</p>
          </div>
        </div>
    </div>
  )
}

export default Info