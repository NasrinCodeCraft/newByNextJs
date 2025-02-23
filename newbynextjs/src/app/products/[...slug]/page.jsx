import { productData } from "@/app/data";
import Link from "next/link";

export default function allSlugs({params}){
    let {slug} = params;
    console.log(slug);
    if(slug.length == 1) {
        let category = slug[0];
        let products = productData[category];

        return (
            <div>
                <ul>
                    {
                        products.map(
                            (product)=>(
                                <li>
                                    <Link href={`/products/${category}/${product.name}`}>{product.name}</Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    } 

    if(slug.length == 2){
        let [category, product] = slug;
        let productDetail = productData[category].find(
            (p)=> p.name == product
        )
        return (
            <div>
                <h2>{productDetail.name}</h2>
                <h3>{productDetail.price}</h3>
            </div>
        )
    }
}