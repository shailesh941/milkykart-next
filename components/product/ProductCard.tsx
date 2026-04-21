// src/components/product/ProductCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/features/cart/cart.store'
import { Product } from '@/shared/utility/modals'


export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="rounded-sm p-4 shadow-xs hover:shadow-md transition bg-white">
      
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        {product.rating && (
          <p className="text-yellow-500 text-sm mt-1">
            ⭐ {product.rating}
          </p>
        )}

        {/* Price */}
        <p className="text-lg font-bold mt-1">
          ₹{product.price}
        </p>
      </div>

      {/* Actions */}
      <button
        onClick={() =>
          addToCart(product)
        }
        className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  )
}