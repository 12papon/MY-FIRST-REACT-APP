import React from 'react'
import './About.css'
import { Link, useLoaderData } from 'react-router'

const About = () => {
  const products = useLoaderData();

  
  return (
    <div className='grid'>
      
      {
        products.map(single => {
          return(

          <div className='product'>
              <img src={single.image} alt={single.title} />
              <h1>{single.id}</h1>
              <p>Price : {single.price} $</p>
              <Link to={`/about/${single.id}`}>
                  <button>More info</button>
              </Link>
              
          </div>
        )
      })
      }
    </div>
  )
}

export default About