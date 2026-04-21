'use client'

import Image from 'next/image'
import { X, Trash2, Plus, Minus } from 'lucide-react'
import { useCartStore } from '@/features/cart/cart.store'
import { useEffect } from 'react'

type Props = {
  onSend: (value: string) => void
}

export default function Cart({ onSend }: Props) {
  const {
    items,
    cartId,
    removeFromCart,
    addToCart,
    increaseQty,
    decreaseQty,
    fetchCart
  } = useCartStore()

  // useEffect(() =>{
  //   fetchCart()
  // }, [])

  const totalPrice = items.reduce(
  (total, item: any) =>
    total + Number(item.product?.price || 0) * (item.quantity || 0),
  0
)

  const closeModal = () => {
    onSend('close')
  }
  const getCart = () =>{
    console.log('items', items)
  }

  if (items.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
        <button
          onClick={closeModal}
          className="mt-4 text-blue-500"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-white h-full flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button onClick={closeModal}>
          <X size={20} />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {items.map((item:any) => (
          <div key={item.id} className="flex gap-4 border-b pb-4">

            {/* Image */}
            <div className="w-20 h-20 relative bg-gray-100 rounded">
              <Image
                src={item?.product?.thumbnail}
                alt={item?.product?.title}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-medium">{item?.product?.title}</h3>

              <p className="text-green-600 font-semibold text-sm">
                ₹{item?.product?.price}
              </p>

              {/* Controls */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <div className="font-semibold text-sm">
                    Total ₹{item?.product?.price * item.quantity}
                  </div>
                </div>
                

                <div className="flex items-center gap-2 border px-2 py-1 rounded">
                  <button onClick={() => decreaseQty(item.id)}>
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={16} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Item Total */}
            
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t space-y-3">

        {/* Total */}
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button onClick={getCart} className="flex-1 bg-black text-white py-2 rounded">
            Checkout
          </button>

          <button
            onClick={closeModal}
            className="flex-1 border py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}