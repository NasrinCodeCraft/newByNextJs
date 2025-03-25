"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Header() {

  return (
    <header>
      <Link href="/">
        <h1>Nasrin Mokhtari Academy</h1>
      </Link>

      <Link href="/Cart" className="cartheader">
        cart
      </Link>
      <div className="social-media-links">
        <a href="https://saeed-sharifi.ir/" target="_blank" rel="noopener noreferrer">Website</a>
        <a href="https://instagram.com/shariff_saeed" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/shariff-saeed" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}