import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Page from '../P-Page/Page';

const Home = () => {
  const products = useLoaderData();
  
  return (
    <div className='grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-3'>
      {
        products.map(single => <Page
          key={single.id}
          details = {single}
        ></Page>)
      }
    </div>
  )
}

export default Home