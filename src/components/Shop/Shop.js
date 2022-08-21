import React, { useEffect, useState } from 'react';
import Products from "../../fakeData/products.json";


const Shop = () => {
    useEffect( () => {
       const allProducts =  Products.slice(0, 10);
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default Shop;