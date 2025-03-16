import { Suspense } from "react";
import ProductList from "./ProductList";
import LoadingSpinner from "./LoadingSpinner";


export default function Home(){
    return(
        <div>
            <h1>Product Page</h1>
            <Suspense fallback={<LoadingSpinner />}>
                <ProductList />
            </Suspense>
        </div>
    )
}