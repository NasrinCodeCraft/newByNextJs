'use client';

import { useEffect, useState } from "react";

const products = [
    { id: 0, title: "Product 0", price: 29.99 },
    { id: 1, title: "Product 1", price: 49.99 },
    { id: 2, title: "Product 2", price: 19.99 },
    { id: 3, title: "Product 3", price: 39.99 },
    { id: 4, title: "Product 4", price: 59.99 },
    { id: 5, title: "Product 5", price: 89.99 },
    { id: 6, title: "Product 6", price: 69.99 },
    { id: 7, title: "Product 7", price: 79.99 },
    { id: 8, title: "Product 8", price: 99.99 },
    { id: 9, title: "Product 9", price: 29.99 },
    { id: 10, title: "Product 10", price: 29.99 },
    { id: 11, title: "Product 11", price: 49.99 },
    { id: 12, title: "Product 12", price: 19.99 },
    { id: 13, title: "Product 13", price: 39.99 },
    { id: 14, title: "Product 14", price: 59.99 },
    { id: 15, title: "Product 15", price: 89.99 },
    { id: 16, title: "Product 16", price: 69.99 },
    { id: 17, title: "Product 17", price: 79.99 },
    { id: 18, title: "Product 18", price: 99.99 },
    { id: 19, title: "Product 19", price: 29.99 },
    { id: 20, title: "Product 20", price: 29.99 },
    { id: 21, title: "Product 21", price: 49.99 },
    { id: 22, title: "Product 22", price: 19.99 },
    { id: 23, title: "Product 23", price: 39.99 },
    { id: 24, title: "Product 24", price: 59.99 },
    { id: 25, title: "Product 25", price: 89.99 },
    { id: 26, title: "Product 26", price: 69.99 },
    { id: 27, title: "Product 27", price: 79.99 },
    { id: 28, title: "Product 28", price: 99.99 },
    { id: 29, title: "Product 29", price: 29.99 },

];

export default function ProductList() {
    const [visibleProducts, setVisibleProducts] = useState(products.slice(0,5));

    useEffect(
        ()=>{
            let loadMore = document.getElementById("load-more");
            
            function observeHandler(entries){
                let entry = entries[0];
                if(entry.isIntersecting) {
                    setVisibleProducts(prev => [...prev, ...products.slice(prev.length, prev.length+5)]);
                }
            }
            
            new IntersectionObserver(
                observeHandler,
                { rootMargin: "100px" }
            ).observe(loadMore)
        },[visibleProducts]
    )

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {
                    visibleProducts.map(
                        (product)=><li key={product.id}>{product.title}</li>
                    )
                }
            </ul>

            <div id="load-more">
                Load more...
            </div>
        </div>
    )
}