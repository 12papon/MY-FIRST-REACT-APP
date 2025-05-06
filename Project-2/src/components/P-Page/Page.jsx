import React from 'react'

const Page = ({details}) => {
    const {id, title, price ,description,category,image} = details;
    console.log(id);
    
  return (
    <div>
        <div className=' p-3 border rounded m-3 flex items-center justify-center flex-col'>
            <img className='size-30' src={image} alt="" />
            <h1 className='py-4 font-bold text-button'>{title}</h1>
            <h2 className='text-[22px] font-bold'>{price} $</h2>
            <button className='bg-purple-500 px-3 py-1 rounded text-white font-bold'>More Info</button>
        </div>
    </div>
  )
}

export default Page