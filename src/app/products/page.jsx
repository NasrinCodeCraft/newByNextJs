import Link from "next/link";

const allProducts = [
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
];

export default function Products({searchParams}) {

    let ppg = 3;

    let page = parseInt(searchParams.page) || 1;

    let firstIndex = (page-1) * ppg;
    let endIndex = firstIndex + 3;

    let showProduct = allProducts.slice(firstIndex,endIndex);

    return(
        <div>
            <h1>Available Products</h1>
            <ul>
                {
                    showProduct.map(
                        (Product,index)=><li key={index}>{Product.title} - {Product.price}</li>
                    )
                }
            </ul>

            <div>
                <Link href={`?page=${page-1}`}>Previous</Link>
                <span>......</span>
                <Link href={`?page=${page+1}`}>Next</Link>
            </div>
        </div>
    )
}