// src/features/cart/cart.store.ts

import { create } from 'zustand'
import { CartItem } from '@/shared/utility/modals'
import { api } from '@/shared/lib/api'
import { useAuthStore } from '../auth/auth.store'

type CartState = {
  items: CartItem[]
  loading: boolean
  cartId:string
  fetchCart: () => Promise<void>
  addToCart: (item: CartItem) => Promise<void>
  removeFromCart: (id: string) => Promise<void>

  increaseQty: (id: string) => Promise<void>
  decreaseQty: (id: string) => Promise<void>

  totalItems: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  loading: false,
  cartId:'',
  // ✅ Fetch cart
  fetchCart: async () => {
    try {
      const res:any = await api.get(`/cart/my-cart`)
       console.log(res)
      set({cartId:res.data.id,  items: res.data.items })
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ Add item (UPDATED PAYLOAD)
  addToCart: async (item) => {
    try {
      const user = useAuthStore.getState().user

      if (!user) {
        console.error('User not logged in')
        return
      }

      await api.post('/cart', {
        userId: user.id,
        items: [
          {
            productId: item.id,
            quantity: 1,
          },
        ],
      })

      // ✅ local update
      set((state) => {
        const existing = state.items.find((i) => i.id === item.id)

        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          }
        }

        return {
          items: [...state.items, { ...item, quantity: 1 }],
        }
      })
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ Increase qty
  increaseQty: async (id) => {
    const item = get().items.find((i) => i.id === id)
    if (!item) return

    const newQty = item.quantity + 1

    try {
      await api.patch(`/cart/item/${id}`, { quantity: newQty })

      set((state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: newQty } : i
        ),
      }))
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ Decrease qty
  decreaseQty: async (id) => {
    const item = get().items.find((i) => i.id === id)
    if (!item) return

    const newQty = item.quantity - 1

    try {
      if (newQty <= 0) {
        await api.delete(`/cart/item/${id}`)

        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }))
      } else {
        await api.patch(`/cart/item/${id}`, { quantity: newQty })

        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: newQty } : i
          ),
        }))
      }
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ Remove item
  removeFromCart: async (id) => {
    try {
      await api.delete(`/cart/item/${id}`)

      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      }))
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ Total items
  totalItems: () => get().items.reduce((t, i) => t + i.quantity, 0),
}))