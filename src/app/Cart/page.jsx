"use client"

import { useContext } from "react";
import {CartContext} from "@/contexts/CartContext";

export default function Cart() {

    let {cart, removeFromCart} = useContext(CartContext);

    return (
        <div className="cart">
            <h1>Cart Items</h1>
            {
                cart.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    cart.map((product) => (
                        <div key={product.id}> {/* Ensure `product.id` is unique */}
                            <img src={product.image} alt={product.title} /> {/* Add alt attribute for accessibility */}
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                                <button onClick={ ()=> {removeFromCart(product.id)} }>Remove</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}