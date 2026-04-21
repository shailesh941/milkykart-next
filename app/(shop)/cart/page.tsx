'use client'

import CartSummary from "@/components/cart/CartSummary"

export default function Page() {
  const closeSideBar = (data:string) =>{
    console.log(data)
  }
  return (
    <CartSummary onSend={closeSideBar} />
  )

}