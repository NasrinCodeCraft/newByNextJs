import Link from "next/link";

export default function Product(){
    return(
      <div>
        <h1>Our Product</h1>
        <ul>
          <li><Link href="/product/1">Product 1</Link></li>
          <li><Link href="/product/2">Product 2</Link></li>
          <li><Link href="/product/3">Product 3</Link></li>
        </ul>
        <Link href="/">back to home page</Link>
      </div>
    )
  }