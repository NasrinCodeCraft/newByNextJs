let products = [
    {name: "product a", price: "100"},
    {name: "product b", price: "200"},
]

export async function GET(request) {
    try{
        return new Response(
            JSON.stringify(products),
            {status: 200, header:{"Content-Type":"application/json"}}
        )

    }catch(error){
        return new Response(
            JSON.stringify({"error":error}),
            {status:500, header:{"Content-Type":"application/json"}}
        )
    }
}

export async function POST(request) {
    try{
        let newProduct = await request.json()
        products.push(newProduct)
        return new Response(
            JSON.stringify(products),
            {status: 201, header:{"Content-Type":"application/json"}}
        )
    }catch(error){
        return new Response(
            JSON.stringify({"alert": "invalid data"}),
            {status: 400, header:{"Content-Type":"application/json"}}
        )
    }
    
}

export async function PUT(request) {
    
    try{
        let updatedProduct = await request.json();
        let index = products.findIndex(
            (product) => product.name == updatedProduct.name
        )
        if(index==-1){
            return new Response(
                JSON.stringify({"alert":"not found"}),
                {status:404}
            )
        }
        products[index] = updatedProduct
        return new Response(
            JSON.stringify(products),
            {status:200}
        )
    }catch(error){
        return new Response(
            JSON.stringify({"alert":"invalid data"}),
            {status:400}
        )
    }
}

export async function DELETE(request) {
    let deletedProduct = await request.json()
    products = products.filter(
        (product)=>product.name != deletedProduct.name
    )
    return new Response(
        JSON.stringify(products),
        {status:200}
    )       
}