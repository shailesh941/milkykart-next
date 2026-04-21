'use client'

import Image from 'next/image'

const categoriesList:any = [
  { name: 'Electronic', img: '/assets/images/category/12.png' },
  { name: 'Home', img: '/assets/images/category/13.png' },
  { name: 'Sport & Outdoor', img: '/assets/images/category/14.png' },
  { name: 'Toys', img: '/assets/images/category/15.png' },
  { name: 'Grocery', img: '/assets/images/category/16.png' },
  { name: "Man's Fashion", img: '/assets/images/category/17.png' },
  { name: "Woman's Fashion", img: '/assets/images/category/18.png' },
  { name: 'Baby', img: '/assets/images/category/19.png' },
  { name: 'Health', img: '/assets/images/category/20.png' },
  { name: 'Auto & Tires', img: '/assets/images/category/21.png' },
  { name: 'Household', img: '/assets/images/category/22.png' },
  { name: 'Beauty', img: '/assets/images/category/23.png' },
]

import banner17  from '@/assets/images/banner/18.png'
import { useEffect, useState } from 'react'

export default function HomeCategory() {

  const [categories, setCategories] = useState([]);
  useEffect(() =>{
    const controller = new AbortController();
    // fetch(`https://dummyjson.com/products/categories`).then(res => res.json()).then((data) =>{
        
    // });
    setCategories(categoriesList)


    return () => {
        controller.abort(); // Cancel the request on unmount
    };
  }, [])


  return (
    <div className="py-4">

      {/* 🔘 Categories */}
      <div className="bg-white rounded-lg p-4 flex justify-between gap-6 overflow-x-auto">
        {categories.map((cat:any, i:number) => (
          <div key={i} className="flex flex-col items-center min-w-[80px]">
            <div className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
              <Image src={cat.img} alt={cat.name} width={70} height={70} />
            </div>
            <p className="text-xs font-medium mt-2 text-center">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* 🔥 Main Section */}
      <div className="grid grid-cols-12 gap-4 mt-4">

        {/* Left - Today's Deals */}
        <div className="col-span-2 bg-white rounded-lg p-1 relative overflow-hidden">
            <Image
                src="/assets/images/banner/17.jpg"
                alt="ipad"
                fill
                className="object-center"
            />
        </div>

        {/* Center - Hero Banner */}
        <div className="col-span-7 bg-white rounded-lg p-1 relative overflow-hidden h-[420px]">
          <Image
            src="/assets/images/banner/18.jpg"
            alt="watch"
            fill
            className="object-center"
          />
        </div>

        {/* Right Side */}
        <div className="col-span-3 flex flex-col gap-4">

          {/* Top Banner */}
          <div className="bg-white rounded-lg p-1 relative overflow-hidden h-[200px]">
            <Image
              src="/assets/images/banner/19.jpg"
              alt="speaker"
              fill
            className="object-center"
            />
          </div>
          <div className="bg-white rounded-lg p-1 relative overflow-hidden h-[200px]">
            <Image
              src="/assets/images/banner/19.jpg"
              alt="speaker"
              fill
            className="object-center"
            />
          </div>

          
        </div>
      </div>
    </div>
  )
}