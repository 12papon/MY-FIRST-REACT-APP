import React from 'react'
import { useLoaderData } from 'react-router'

const Info = () => {
    const singleData = useLoaderData();
    const {id, title, description, image} = singleData;
    console.log(description);
    
  return (
    <div>
        <img src={image} alt="" />
        <div>
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Info