"use client"

import { useEffect, useState } from "react"

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");


    function fetchProduct(){
        fetch("http://localhost:3000/api/products")
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(error=>console.error(error))
    }

    function handleAddProduct(){
         fetch("http://localhost:3000/api/products",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name:newName, price:newPrice})
         })
         .then(fetchProduct)
         .catch(error=>console.error(error))
    }

    useEffect(
        ()=>{
            fetchProduct();
        }, [])

    return(
        <div>
            <h1>Products List: </h1>
            <ul>
                {
                    products.map(
                        (product, index)=> <li key={index}>{product.name} - {product.price}</li>
                    )
                }
            </ul>
            <div>
                <h2>Add new product</h2>
                <input type="text"
                placeholder="type product name..."
                value={newName}
                onChange={()=>setNewName(event.target.value)}/>

                <input type="text"
                placeholder="type product price..."
                value={newPrice}
                onChange={()=>setNewPrice(event.target.value)}/>

                <button onClick={()=>{
                    handleAddProduct();
                    setNewName("");
                    setNewPrice("");
                }}>Add new product</button>
            </div>
        </div>
    )
}