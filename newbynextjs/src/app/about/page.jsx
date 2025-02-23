import Link from "next/link";

export default function About(){
    return(
      <div>
        <h1>This is About Page</h1>
        <Link href="/product">go to product</Link>
      </div>
    )
  }