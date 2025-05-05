import React from "react";
const SinglePlace = ({singleCart})=>{
    const {name, id, price} = singleCart
    console.log(name);
    
    return(
        <div>
             <div className="border p-3 rounded ring-2 ring-amber-400 m-2">
                <h2 className="text-lime-700 font-bold">Name: {name}</h2>
                <p>ID: {id}</p>
                <p>Price: {price}</p>
                <button className="border rounded text-sm leading-3.5 hover:bg-amber-200 duration-150 px-2 py-1 cursor-pointer">Add To Cart</button>
            </div>
        </div>
    )
}
export default SinglePlace