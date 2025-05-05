import React, { useState } from "react";
import './Product.css'
const Product = ({singleProduct, addToCart})=>{
    const [product, setProduct] = useState(singleProduct); 
    return(
        <div className="">

            <div className="border p-3 rounded-2xl">
                    <h1 className="text-lg font-bold text-shadow-2xs text-shadow-amber-400 text-blue-600 leading-none">Name: <span className="text-sm">{product.name}</span></h1>
                    <h3>ID : <span className="font-bold text-pink-500">{product.id}</span></h3>
                    <p>Price: <span className="font-sans text-yellow-800">{product.price} $</span></p>
                    <button onClick={()=> addToCart(product)} className="border px-2 py-1 my-3 rounded cursor-pointer bg-amber-500 hover:bg-amber-300 active:bg-amber-200 duration-200">Add TO Cart</button>
            </div>
            
        </div>
    )
}
export default Product