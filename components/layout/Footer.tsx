'use client'

import {
    Phone,
    MapPin,
    Mail,
    Pin,
    BadgeDollarSign,
    Headphones,
    CreditCard,
    Truck,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f1114] text-gray-300">

      {/* 🔶 Top Feature Bar */}
      <div className="bg-[#1a1d21] py-8">
      <div className="custom-container grid grid-cols-1 md:grid-cols-4 gap-6 px-4">

        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <Truck className="text-yellow-400" size={32} />
          <div>
            <h4 className="text-white font-semibold text-sm">
              Free shipping & Return
            </h4>
            <p className="text-gray-400 text-xs">
              Free shipping on all orders over $99
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <BadgeDollarSign className="text-yellow-400" size={32} />
          <div>
            <h4 className="text-white font-semibold text-sm">
              Money back guarantee
            </h4>
            <p className="text-gray-400 text-xs">
              100% money back guarantee
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <Headphones className="text-yellow-400" size={32} />
          <div>
            <h4 className="text-white font-semibold text-sm">
              Online Support 24/7
            </h4>
            <p className="text-gray-400 text-xs">
              Help you provide 24/7 support
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-3">
          <CreditCard className="text-yellow-400" size={32} />
          <div>
            <h4 className="text-white font-semibold text-sm">
              Secure payment
            </h4>
            <p className="text-gray-400 text-xs">
              Secured via Secure Sockets Layer
            </p>
          </div>
        </div>

      </div>
    </div>

      {/* 🔷 Main Footer */}
      <div className="custom-container py-10 px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>

          <div className="flex items-center gap-2 mb-2">
            <Phone /> <span>(603) 555-0123</span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <MapPin /> <span>3228 Bicetown Road NY</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Mail /> <span>kartify@contact.com</span>
          </div>

          <div className="flex gap-3">
            {/* <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest /> */}
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Collection</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Offer</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Mobile Phones</li>
            <li>Television</li>
            <li>Washing Machine</li>
            <li>Women Fashion</li>
            <li>Laptop</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-white font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Tracking Order</li>
          </ul>
        </div>

        {/* App */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get Shopping App</h3>
          <p className="text-sm mb-3">Download app for better experience</p>

          <div className="flex gap-3">
            <img src="/images/app/google-play.png" className="h-10" />
            <img src="/images/app/app-store.png" className="h-10" />
          </div>
        </div>

      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center px-4">

          <h2 className="text-white text-xl font-bold">Kartify</h2>

          <div className="flex gap-2 mt-3 md:mt-0">
            <img src="/images/payments/visa.png" className="h-6" />
            <img src="/images/payments/mastercard.png" className="h-6" />
            <img src="/images/payments/paypal.png" className="h-6" />
            <img src="/images/payments/discover.png" className="h-6" />
          </div>

        </div>
      </div>

    </footer>
  )
}