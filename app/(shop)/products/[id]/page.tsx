'use client'
import React, { useEffect, useState } from 'react';
import { Star, Truck, HelpCircle, ShoppingCart, MessageSquare, Share2, Plus, Minus } from 'lucide-react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { useCartStore } from '@/features/cart/cart.store';
import { useParams, useRouter } from 'next/navigation';
import { Product } from '@/shared/utility/modals';

export default function Page() {
    const params = useParams();
    const router = useRouter()
    const id = params.id;
    const addToCart = useCartStore((state) => state.addToCart)
    const [details, setDetails] = useState<Product>();
    const tabConfig:any = { borderBottom: 1, borderColor: 'divider' };
    const [selectedStorage, setSelectedStorage] = useState('512 GB');
    const [quantity, setQuantity] = useState(1);
    const [value, setTabValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then((data) =>{
            setDetails(data)
            console.log('data', data)
        });


        return () => {
            controller.abort(); // Cancel the request on unmount
        };
    }, [id]);

    const buyNow = (item:Product) =>{
        item.quantity = quantity;
        addToCart(item)
        router.push('/cart')
    }



    return (
        <div className="custom-container p-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12">
                    {details != null &&
                    <>
                    <div className="lg:col-span-4 bg-white p-4">
                    <div className="p-5 flex items-center justify-center">
                        <img src={details.thumbnail}
                        className="w-full h-auto object-contain mix-blend-multiply"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {details.images.map((i) => (
                            <div key={i} className={`aspect-square rounded-xl border-0 transition-all p-1 bg-[#F8F9FB] cursor-pointer`}>
                                <img src={i} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                    </div>

                    {/* --- CENTER: PRODUCT DETAILS --- */}
                    <div className="lg:col-span-5 bg-white p-4">
                    <div className="flex gap-4 items-center mb-4">
                        <span className="text-[#F59E0B] text-[13px] flex items-center gap-1.5">
                        <span className="text-lg">⚡</span> 10 Customers Ordered
                        </span>
                        <span className="text-[#FBBF24] text-[13px] flex items-center gap-1.5">
                        <span className="text-lg">👁️</span> 22 Active View in this item
                        </span>
                    </div>

                    <div className='mb-5'>
                        <p className="text-[#EF4444] text-xs font-bold mb-4 underline cursor-pointer">Visit Thrifting_store</p>
                        <h1 className="text-[28px] font-semibold">
                            {details?.title}
                        </h1>
                        <div className="flex items-center gap-2 mt-2 text-[13px]">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <span className="text-gray-500">{details.rating} Ratings • {details.reviews.length} Reviews</span>
                        </div>
                    </div>

                    <p className="text-[14px] leading-relaxed mb-5">
                        {details?.description}
                    </p>

                    <div className="space-y-3 mb-5">
                        <h3 className="font-bold text-gray-800 text-sm tracking-wide">Choose Storage :</h3>
                        <div className="flex flex-wrap gap-2">
                        {['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'].map((size) => (
                            <button
                            key={size}
                            onClick={() => setSelectedStorage(size)}
                            className={`px-4 py-2 text-[11px] font-bold rounded border transition-all ${
                                selectedStorage === size 
                                ? 'bg-orange-500 border-orange-500 text-white' 
                                : 'bg-white border-gray-200 text-gray-400 hover:border-orange-400'
                            }`}
                            >
                            {size}
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold text-gray-800 text-sm tracking-wide">Choose Color :</h3>
                        <div className="flex gap-2.5">
                        {['#D1D5DB', '#FBCFE8', '#FEF3C7', '#DCFCE7', '#374151'].map((color, i) => (
                            <div key={i} className={`p-0.5 rounded border ${i === 0 ? 'border-orange-400' : 'border-transparent'}`}>
                            <div style={{backgroundColor: color}} className="w-7 h-7 rounded-[4px] cursor-pointer border border-black/5 shadow-inner" />
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="space-y-2 pt-2 mb-5">
                        <p className="text-sm font-bold text-gray-800">
                        There are just <span className="text-orange-500">5 left</span> in stock, so please act immediately.
                        </p>
                        <div className="w-full bg-gray-100 h-[6px] rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full w-[65%]" />
                        </div>
                    </div>

                    <div className="flex gap-8 pt-4 border-t border-gray-100 text-[13px] font-bold text-gray-500">
                        <button className="flex items-center gap-2 hover:text-black transition"><Truck size={18} /> Delivery & Return</button>
                        <button className="flex items-center gap-2 hover:text-black transition"><HelpCircle size={18} /> Ask a question</button>
                    </div>
                    </div>

                    {/* --- RIGHT: ASSIGN ORDER SIDEBAR --- */}
                    <div className="lg:col-span-3 px-4">
                    <div className="bg-white p-4 mb-6">
                        <h2 className="text-[22px] font-medium mb-6">Assign Order</h2>
                        
                        <div className="flex gap-4 items-center mb-6">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl p-1 border border-gray-100">
                            <img src={details.thumbnail} alt={details.title} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-[11px] font-bold">Selected Option</p>
                            <p className="font-black text-[14px] text-gray-700 leading-tight">{details.title}</p>
                        </div>
                        </div>

                        <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center border border-gray-200 rounded-lg h-10">
                            <button onClick={() => setQuantity(Math.max(0, quantity - 1))} className="w-10 flex justify-center text-gray-400 hover:text-orange-500"><Minus size={14}/></button>
                            <span className="w-10 text-center font-bold text-gray-700 border-x border-gray-200">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="w-10 flex justify-center text-gray-400 hover:text-orange-500"><Plus size={14}/></button>
                        </div>
                        <p className="text-[12px] font-bold text-gray-400">Stock: <span className="text-gray-800">{details.stock}</span></p>
                        </div>

                        <div className="flex justify-between items-baseline mb-8">
                        <span className="text-gray-400 text-[13px] font-bold">Total Price:</span>
                        <span className="text-[26px] font-black text-gray-800 tracking-tighter">${details.price}</span>
                        </div>

                        <div className="space-y-3">
                        <button onClick={() => buyNow(details)} className="w-full bg-orange-500 text-white py-4 rounded font-black shadow-lg shadow-orange-100 hover:bg-orange-600 transition tracking-wide text-sm">
                            Buy now
                        </button>
                        <button onClick={() =>
                            addToCart(details)
                            } className="w-full border-2 border-orange-500 text-orange-500 py-4 rounded font-black flex items-center justify-center gap-2 hover:bg-orange-50 transition text-sm">
                            <ShoppingCart size={18} /> Add to bag
                        </button>
                        </div>

                        <div className="flex justify-between mt-8 pt-5 border-t border-gray-50">
                        <button className="flex items-center gap-2 text-[12px] font-bold text-gray-500 hover:text-black">
                            <MessageSquare size={16} /> Chat Seller
                        </button>
                        <button className="flex items-center gap-2 text-[12px] font-bold text-gray-500 hover:text-black">
                            <Share2 size={16} /> Share Product
                        </button>
                        </div>
                    </div>
                    
                    {/* Promo Card */}
                    <div className="bg-[#111827] p-5 rounded relative overflow-hidden group">
                        <div className="relative z-10">
                        <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-1">Collection</p>
                        <h4 className="text-[17px] font-black text-white leading-tight mb-4">NEW & EXCLUSIVE OFFER HEADPHONE</h4>
                        <button className="bg-orange-500 text-white text-[10px] font-black px-4 py-2 rounded hover:bg-orange-600 uppercase">Order Now $220</button>
                        </div>
                        <div className="absolute -right-2 -bottom-2 w-28 h-28 bg-white/5 rounded blur-2xl group-hover:bg-orange-500/10 transition" />
                    </div>
                    </div>
                    </>
                }
            </div>
            <div className="w-full bg-white mt-5">
                <TabContext value={value}>
                    <Box sx={tabConfig}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Description" value="1" />
                            <Tab label="Additional info" value="2" />
                            <Tab label="Care Instructions" value="3" />
                            <Tab label="Review" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item 4</TabPanel>
                </TabContext>
            </div>
        </div>
    );
}