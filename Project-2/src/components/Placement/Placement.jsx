import React from 'react'
import Cart from '../cartItem/Cart';

const Placement = ({item}) => {
    
  return (
    <div>
        <h1>Placement</h1>
        {
            item.map(ele => <Cart

                key={ele.id}
                allItem = {ele}
            
            ></Cart>)
        }
    </div>
  )
}

export default Placement