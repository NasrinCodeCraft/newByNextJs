import Link from "next/link";

export default async function Products({searchParams}) {

    let ppg = 3;

    let page = parseInt(searchParams.page) || 1;

    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let allProducts = await res.json();

    let allPages = Math.ceil(allProducts.length/ppg)

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
                {
                    page>1 && (<Link href={`?page=${page-1}`}>Previous</Link>)
                }
                <span>{page} of {allPages}</span>
                {
                    page<allPages && <Link href={`?page=${page+1}`}>Next</Link>
                }
            </div>
        </div>
    )
}