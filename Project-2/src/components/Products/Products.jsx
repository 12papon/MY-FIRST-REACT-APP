import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
const Products = ({card})=> {
    const [fetchData , setFetchData] = useState([])
    useEffect(()=>{
        fetch('FakeProduct.json')
            .then(res => res.json())
            .then(data => setFetchData(data))
    },[])
    
    return(
        <div className="grid grid-cols-3 grid-rows-1 max-sm:grid-cols-1 max-md:grid-cols-2 gap-2">
           {
            fetchData.map(value => <SingleProduct
                key={value.id}
                ProductData = {value}
                card = {card}
            ></SingleProduct> )
           }
        </div>
    )
}

export default Products