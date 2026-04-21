'use client'

import Image from 'next/image'
import Link from 'next/link'
type Props = {
  data: any[],
  isLeft?: boolean,
  title:string
}


export default function FlashDealSection({ data, isLeft, title }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg">

      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {title}{' '}
          <span className="text-red-500">(Up To 60% Off)</span>
        </h2>

        <button className="text-sm text-gray-600 hover:text-black">
          See all top →
        </button>
      </div>

      {/* 📦 Content */}
      <div className="grid grid-cols-12 gap-4">

        {/* Products */}
        <div className={`col-span-9 grid grid-cols-6 gap-4 ${isLeft ?  'order-last':'order-first'}`}>
          {data.map((item: any, i: number) => (
                <div key={i} className="bg-white p-3 rounded-lg text-center">
                    {/* {JSON.stringify(item)} */}
                    <Link href={`/products/${item.id}`}>
                        <div className="relative w-full h-[220px] mb-3">
                            <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                            />
                        </div>
                    </Link>

                    <h3 className="text-sm font-medium">{item.title}</h3>

                    <p className="text-green-600 text-sm mt-1">
                    {item.price}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                    {item.subtitle}
                    </p>

                </div>
            ))}
        </div>

        {/* Right Banner */}
        <div className={`col-span-3 relative bg-white rounded-lg overflow-hidden ${isLeft ? 'order-first' : 'order-last'}`}>

          <Image
            src="/assets/images/banner/b-23.jpg"
            alt="fashion banner"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="bg-white/90 p-4 text-center rounded">
              <p className="text-sm">
                Sale up to <span className="text-red-500">40%</span>
              </p>

              <h3 className="font-bold text-lg">
                <span className="bg-red-500 text-white px-2">ULTIMATE</span>{' '}
                CLOTH
              </h3>

              <p className="text-sm mt-1">
                CODE : <span className="text-red-500">FASHIO9</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}