'use client'
import { useState, useEffect} from "react";
import ProductCard from '@/components/product/ProductCard'
import { ProductsFilter } from '@/components/ui/ProductsFilter'
import { useCartStore } from '@/features/cart/cart.store'
import { useAxiosGet } from "@/shared/utility/useAxios";
// const products = Array.from({ length: 100 }, (_, i) => ({
//   id: String(i + 1),
//   title: `Product ${i + 1}`,
//   price: Math.floor(Math.random() * 90000) + 1000,
//   image: `/assets/images/products/${i + 1}.jpg`, // reuse 10 images
//   rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
// }))

export default function Page() {
    const addToCart = useCartStore((state) => state.addToCart)
    const { data, loading, error } = useAxiosGet('/products')
    const [products, setProducts] = useState<Object[]>(data);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    // useEffect(() => {
    //   const timer = setTimeout(() => { /* action */ }, 1000);

    //   setProducts(data)

    //   return () => clearTimeout(timer); // Prevents timer from firing after unmount
    // }, []);
  return (
    <div className="custom-container p-4">
        <div className="grid grid-cols-14 gap-4">
            <div className="col-span-3 pr-3">
                <ProductsFilter />
            </div>
            <div className="col-span-11">
              <div className="products-grid-container">
                  {data.length > 0 && data.map((p:any) => (
                      <ProductCard key={p.id} product={p} />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}
