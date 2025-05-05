import React, { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = ({addCart})=>{

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    }, []);

    return(
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
            
             {
                 products.map(singleProducts => <Product 
                    key={singleProducts.id}
                    singleProducts = {singleProducts}
                    addCart = {addCart}
                 ></Product>)
             }
        </div>
    )
}
export default Products;