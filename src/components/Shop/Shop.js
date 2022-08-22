import React, { useEffect, useState } from "react";
import Products from "../../fakeData/products.json";
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
                <div className="w-90 p-4">
                    <ul>
                        {products.map((pd) => (
                            <li>{pd.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-10 p-4"></div>
            </div>
        </div>
    );
};

export default Shop;
