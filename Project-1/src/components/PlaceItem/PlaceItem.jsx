import React from "react";

const PlaceItem = ({singleCart})=>{
    const {name, id, price} = singleCart;
    console.log(name);
    

    return(
        <div>
                <div className="border p-3 rounded-2xl">

                    <h1 className="text-lg font-bold text-shadow-2xs text-shadow-amber-400 text-blue-600 leading-none">Name: <span className="text-sm">{name}</span></h1>
                    <h3>ID : <span className="font-bold text-pink-500">{id}</span></h3>
                    <p>Price: <span className="font-sans text-yellow-800">{price} $</span></p>
                    <button onClick={()=> addToCart(product)} className="border px-2 py-1 my-3 rounded cursor-pointer bg-amber-500 hover:bg-amber-300 active:bg-amber-200 duration-200">Add TO Cart</button>

                </div>
        </div>
    )
    
    
}
export default PlaceItem