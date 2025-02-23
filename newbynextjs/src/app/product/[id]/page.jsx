import Link from "next/link";

export default function ProductDetail({params}){

    const products = [
        { id: 1, name: 'Product 1', description: 'This is product 1.' },
        { id: 2, name: 'Product 2', description: 'This is product 2.' },
        { id: 3, name: 'Product 3', description: 'This is product 3.' },        
    ];

    let {id} = params;

    let goalProduct = products.find(
        (product)=> product.id == id
    )

    if(!goalProduct) {
        return(
            <div>
                <h2>محصول مورد نظر یافت نشد</h2>
            </div>
        )
    }

    return(
        <div>
            <h2>{goalProduct.name}</h2>
            <h3>{goalProduct.description}</h3>
            <Link href="/product">go to products</Link>
        </div>
    )
}