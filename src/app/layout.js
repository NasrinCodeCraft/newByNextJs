"use client"

import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <CartProvider>
            {children}
          </CartProvider>
        </SessionProvider>  
      </body>
    </html>
  );
}
