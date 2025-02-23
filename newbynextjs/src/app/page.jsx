import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>This is Home Page</h1>
      <Link href="/about">go to about</Link>
    </div>
  )
}