"use client"

import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function Product({ product }) {

    let {addToCart} = useContext(CartContext);

    return (
        <div className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={()=>{addToCart(product)}}>Add to cart</button>
            <Link href={`/${product.id}`}>View more</Link>
        </div>
    );
}