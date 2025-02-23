import { productData } from "@/app/data";
import Link from "next/link";

export default function CategoryPage({params}){

    let {category} = params;
    let products = productData[category];

    return(
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