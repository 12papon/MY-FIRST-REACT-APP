import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Info = () => {
    const info = useLoaderData();
    const {id, category, description, title, image} = info;
    
  return (
    <div>
        <div className="flex items-start pt-10 ">
            <img className='size-20 basis-2xl h-auto' src= {image} alt="" />
            <div className=''>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{description}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    </div>
  )
}

export default Info