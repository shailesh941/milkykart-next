// src/components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { useCartStore } from '@/features/cart/cart.store'
import { useAuthStore } from '@/features/auth/auth.store';
import { ShoppingCart, Heart, User, Phone, Search, Menu } from 'lucide-react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CartSummary from '../cart/CartSummary';
import CloseIcon from '@mui/icons-material/Close';
import LoginPage from '../auth/Login';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems())
  const {fetchCart} = useCartStore()
  const { user, logout } = useAuthStore();
  const [openDrawer, setDrawer] = useState(false)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer =(open: boolean) =>(event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawer(open);
  };
  const closeSideBar = (data:any) =>{
    setDrawer(false)
  }
  const closeLogin = (data:any) =>{
    console.log('login close', data)
    setOpen(false)
  }
  useEffect(() =>{
    fetchCart()
  }, [])


  return (
    <>
    <div className="w-full">

      {/* 🔵 Top Bar */}
      <div className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between  custom-container">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-1">
            <Link href="/" className="text-xl text-white font-bold">
             🛒 MyStore Lala
            </Link>
          {/* <span className="bg-yellow-400 text-blue-700 px-2 rounded">K</span>
          <span>Kartify</span> */}
        </div>

        {/* Search */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-[40%]">
          <select className="px-3 py-2 text-gray-600 outline-none">
            <option>All Category</option>
          </select>

          <input
            type="text"
            placeholder="I'm searching for..."
            className="flex-1 px-3 py-2 outline-none text-black"
          />

          <button className="bg-blue-500 px-4 py-2">
            <Search size={18} />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-sm">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <div>
              <p className="text-xs">Call us now</p>
              <p className="font-semibold">+1 917 376 8944</p>
            </div>
          </div>

          {/* Icons */}
          <User className="cursor-pointer" onClick={handleClickOpen} />
          <Heart className="cursor-pointer" />

          <div className="relative cursor-pointer" onClick={toggleDrawer(true)}>
            <ShoppingCart />
             {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
                {totalItems}
                </span>
            )}
            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
              5
            </span> */}
          </div>
        </div>
      </div>

      {/* ⚪ Bottom Navigation */}
      <div className="bg-white px-6 py-3 flex items-center justify-between custom-container">

        {/* Categories Button */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2">
          <Menu size={18} />
          Shop By Categories
        </button>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/products">Home ▾</Link>
          <span>Shop ▾</span>
          <span>Product ▾</span>
          <span>Sales ▾</span>
          <span>Features ▾</span>
          <span>Pages ▾</span>
          <span>Seller ▾</span>
          <span>Blog ▾</span>
        </nav>

        {/* Right Links */}
        <div className="flex items-center gap-4 text-sm">
          <span>Recent Viewer ▾</span>
          <span>|</span>
          <span>Order Tracking (Shailesh Kumar)</span>
        </div>
      </div>
    </div>

    <Drawer
      anchor={'right'}
      slotProps={{
        paper: {
          sx: {
            width: 400,
          },
        },
      }}
      open={openDrawer}
      onClose={toggleDrawer(false)}
    >
      <CartSummary onSend={closeSideBar} />
    </Drawer>

    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <LoginPage closeLogin={closeLogin} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>


    {/* <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">
        🛒 MyStore
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/products">Products</Link>
        <Link href="/cart" className="relative">
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button
              onClick={logout}
              className="bg-black text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-black text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
      </nav>
    </header> */}
    </>
  )
}