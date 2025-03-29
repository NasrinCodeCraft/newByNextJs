import ProductList from "@/components/ProductList";

export function generateMetadata() {
    return {
        title: "Home|Your online shop",
        description: "Browse amazing Products...",
        openGraph: {
            title: "Home|Your online shop social media",
            description: "Browse amazing products social media",
        }

    }
}

export default async function Home() {
    let res = await fetch("https://fakestoreapi.com/products/");
    let products = await res.json();

    return (
        <div className="home">
            <ProductList products={products} />
        </div>
    );
}