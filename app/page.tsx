"use client"
import FeaturedBrands from "@/components/ui/FeaturedBrands";
import FlashDealSection from "@/components/ui/FlashDealSection";
import HomeCategory from "@/components/ui/HomeCategory";
import TopBanner from "@/components/ui/TopBanner";
import Image from "next/image";
import { useState } from "react";

const products:any = [
  {
    id:'121',
    title: 'Puma, Adidas & More',
    subtitle: 'Top Rated Collection!',
    price: 'From $99.00',
    img: '/assets/images/products/24.jpg',
  },
  {
    id:'122',
    title: 'Peter England, Allen...',
    subtitle: "Men's Shoes, Sandals...",
    price: 'Min. 10% Off',
    img: '/assets/images/products/25.jpg',
  },
  {
    id:'123',
    title: 'Puma, Adidas & More',
    subtitle: 'Clothing And...',
    price: 'Min. 30% Off',
    img: '/assets/images/products/26.jpg',
  },
  {
    id:'124',
    title: 'Puma, Adidas & More',
    subtitle: 'Groversons Paris Beau...',
    price: 'Min. 10% Off',
    img: '/assets/images/products/27.jpg',
  },
  {
    id:'125',
    title: 'Puma, Adidas & More',
    subtitle: 'Running, Walking..',
    price: 'From $100',
    img: '/assets/images/products/28.jpg',
  },
  {
    id:'126',
    title: 'Puma, Adidas & More',
    subtitle: 'Happy Shopping',
    price: 'Min. 30% Off',
    img: '/assets/images/products/29.jpg',
  },
]

export default function Home() {
  //const [data, setData] = useState({products:products})
  return (
    <>
    <div className="custom-container">
      <div className="py-2">
        <HomeCategory />
      </div>
      <div className="py-2">
        <FlashDealSection data={products} isLeft={false} title={'Top Flash Deal on Fashion'} />
      </div>
      <div className="py-2">
        <FlashDealSection data={products} isLeft={false} title={'Most Wishes for Mobile and laptop'} />
      </div>
       <div className="py-2">
          <TopBanner />
       </div>
       <div className="py-2">
        <FeaturedBrands />
       </div>
       <div className="py-2">
        <FlashDealSection data={products} isLeft={true} title={'Sports, Healthcare & More'} />
      </div>
    </div>
    </>
    
  );
}
