export default function Cart() {
    let cart = [
        {
            "id": 1,
            "title": "aasddad",
            "price": 109.95,
            "description": "SDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            "category": "fdffd",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "zczsxcxzczc",
            "price": 109.95,
            "description": "ascfffffffffffffddddddddddddddddddd",
            "category": "sddddddddddd",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 6.9,
                "count": 100
            }
        }
    ]; // Assuming this is a placeholder for actual cart items

    return (
        <div className="cart">
            <h1>Cart Items</h1>
            {
                cart.length === 0 ? (
                    <p>No items in cart</p>
                ) : (
                    cart.map((product) => (
                        <div key={product.id}> {/* Ensure `product.id` is unique */}
                            <img src={product.image} alt={product.title} /> {/* Add alt attribute for accessibility */}
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                                <button>Remove</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}