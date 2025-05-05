import React from "react";
import SinglePlace from "../SinglePlace/SinglePlace";
const Placement = ({cart})=>{  
    return(
        <div>
            <h2>Place items</h2>
            
            {
                cart.map( singleCart => <SinglePlace 
                    key={singleCart.id}
                    singleCart = {singleCart}
                ></SinglePlace>)
            }
        </div>
    )
}
export default Placement;