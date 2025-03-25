import ProductList from "@/components/ProductList";
import Link from "next/link"

export default async function Home() {
    let res = await fetch("https://fakestoreapi.com/products/");
    let products = await res.json();

    return (
        <div className="home">
            <Link href="/Cart">Cart</Link>
            <ProductList products={products} />
        </div>
    );
}