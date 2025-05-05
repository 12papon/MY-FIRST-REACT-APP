import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products =({addToCart})=>{
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('fackData.json')
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[]);
    return(
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-2 h-100%"> {}

            {
                product.map(ele => <Product
                    key = {ele.id}
                    singleProduct = {ele}
                    addToCart = {addToCart}
                ></Product>)
            }

        </div>
    )
}
export default Products