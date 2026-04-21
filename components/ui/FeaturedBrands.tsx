'use client'

export default function FeaturedBrands() {
  return (
    <div className="rounded-lg overflow-hidden bg-white p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold">
          Featured Brands
        </h2>

        <a href="#" className="text-sm text-gray-600 hover:text-black">
          See all features →
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Card 1 */}
        <div className="relative h-[190px] rounded-lg overflow-hidden group">
          <img
            src="/assets/images/banner/24.jpg"
            alt="ac"
            className="w-full h-full object-cover transition group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-sm">
              5-IN-1 CONVERTIBLE ACS
            </h3>
            <p className="text-xs mt-1">
              Wi-Fi Control • Inverter System
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[190px] rounded-lg overflow-hidden group">
          <img
            src="/assets/images/banner/25.jpg"
            alt="water purifier"
            className="w-full h-full object-cover transition group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-sm">
              SMART WATER PURIFIER
            </h3>
            <p className="text-xs mt-1">
              10% Instant Discount
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[190px] rounded-lg overflow-hidden group">
          <img
            src="/assets/images/banner/26.jpg"
            alt="tv"
            className="w-full h-full object-cover transition group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-sm">
              ONEPLUS TV U SERIES
            </h3>
            <p className="text-xs mt-1">
              4K Android TV
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative h-[190px] rounded-lg overflow-hidden group">
          <img
            src="/assets/images/banner/27.jpg"
            alt="washing machine"
            className="w-full h-full object-cover transition group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-sm">
              EXTRA CARE FOR EVERYTHING
            </h3>
            <p className="text-xs mt-1">
              That you wear
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}