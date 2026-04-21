'use client'

import Image from 'next/image'
type Props = {
  data?: any
  isLeft?: boolean
}


export default function TopBanner({ data, isLeft }: Props) {
  return (
    <div className="relative w-full h-[220px] md:h-[260px] rounded-lg overflow-hidden">

    <img
        src="/assets/images/banner/banner-bg.jpg"
        alt="Summer Sale"
        className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
        
        <h2 className="text-xl md:text-3xl font-semibold">
            BIGGEST SUMMER SALE IS
        </h2>

        <h1 className="text-2xl md:text-4xl font-extrabold mt-1">
            ENDING TODAY!
        </h1>

        <p className="mt-3 text-sm md:text-base">
            Up to 
            <span className="bg-red-500 px-2 py-1 rounded text-white font-semibold">
            40% OFF
            </span>
            On All Branded Accessories
        </p>

        </div>
    </div>

    </div>
  )

}