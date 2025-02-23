import { productData } from "@/app/data";

export default function productDetail({params}){

    let {category, product} = params;
    let productDetail = productData[category].find(
        (p)=>p.name == product
    );

    return(
        <div>
            <h2>{productDetail.name}</h2>
            <h3>{productDetail.price}</h3>
        </div>
    )
}