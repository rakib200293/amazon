import React from "react";
import "./cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if (total > 350) {
        shipping = 4.99;
    } else if (total > 290) {
        shipping = 8.99;
    } else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total * 5) / 100;
    const ToNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    };
    const gramdTotal = ToNumber(total + shipping + ToNumber(tax));
    return (
        <div>
            <div className="">
                <h3>Order Summary</h3>
                <p>
                    Items added: <strong>{cart.length}</strong>
                </p>
                <p>
                    Product Price: <strong>${ToNumber(total)}</strong>{" "}
                </p>
                <p>
                    Shipping: <strong>${shipping}</strong>
                </p>
                <p>Tax : {ToNumber(tax)}</p>
                <p>
                    Total Price: <strong>${gramdTotal}</strong>
                </p>
            </div>
        </div>
    );
};

export default Cart;
