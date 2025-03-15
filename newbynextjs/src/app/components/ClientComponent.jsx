"use client"

import { useState } from "react"

export default function ClientComponent() {

    let [counter, setCounter] = useState(0);

    return(
        <div>
            <h2>Client component</h2>
            <h3>The value of counter is: {counter}</h3>
            <button onClick={ ()=> {setCounter(counter+1)}}>add to cart</button>
        </div>
    )
}