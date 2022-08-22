import React, { useEffect, useState } from "react";
import Products from "../../fakeData/products.json";
import Product from "../Product/Product"
import "./shop.css";

const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const allProducts = Products.slice(0, 10);
        setproducts(allProducts);
    }, []);

    return (
        <div>
            <div className="flex">
                <div className="w-80 p-4">
                    <ul>
                        {products.map((pd) => (
                            
                            <Product prd={pd}></Product>
                        ))}
                    </ul>
                </div>
                <div className="w-20 p-4"></div>
            </div>
        </div>
    );
};

export default Shop;
