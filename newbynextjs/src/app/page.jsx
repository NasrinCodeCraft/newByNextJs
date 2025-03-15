import Link from "next/link";


export default function Home() {
  return(
    <div>
      <h1>آکادمی نسرین مختاری</h1>
      <Link href="/profile">
            <button>
              view profile  
            </button>  
      </Link>
    </div>
  )
}