import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
const Products = ()=> {
    const [fetchData , setFetchData] = useState([])
    useEffect(()=>{
        fetch('FakeProduct.json')
        .then(res => res.json())
        .then(data => setFetchData(data))
    },[])
    
    return(
        <div>
           {
            fetchData.map(value => <SingleProduct
                key={value.id}
                ProductData = {value}
            ></SingleProduct> )
           }
        </div>
    )
}

export default Products