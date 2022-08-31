import React, { useEffect, useState } from "react";
import Products from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./shop.css";

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleProduct = (product) => {
        console.log("product added,", product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    useEffect(() => {
        const allProducts = Products.slice(0, 10);
        setproducts(allProducts);
    }, []);

    return (
        <div>
            <div className="flex">
                <div className="w-80 p-4">
                    <div className="all-pruducts">
                        {products.map((pd) => (
                            <Product handleProduct={handleProduct} prd={pd}></Product>
                        ))}
                    </div>
                </div>
                <div className="w-20 p-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
