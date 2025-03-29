"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Header() {

  const {data: session} = useSession();

  const [isrender, setIsrender] = useState(false);

  useEffect(
    ()=>setIsrender(true)
  ,[])

  if(!isrender){
    return null
  }


  return (
    <header>
      <Link href="/">
        <h1>Nasrin Mokhtari Academy</h1>
      </Link>

      <Link href="/Cart" className="cartheader">
        cart
      </Link>

      <div>
        {
          session ? (
            <>
              <span>Hi {session.user.name}</span>
              <button onClick={()=>{signOut()}}>signOut</button>
            </>
          ) : (
            <button onClick={()=>{signIn()}}>signIn</button>
          )
        }
      </div>

      <div className="social-media-links">
        <a href="https://portfolio-web-s-git-254439-mokhtarinasrin200-gmailcoms-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://instagram.com/frontendcoffee" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/dev-nasrin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}