import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      if (!state.find((item) => item.id === action.payload.id)) {
        state.push(action.payload)
      }
    },
    removeFromCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1)
    },
    clearCart(state) {
      state.splice(0, state.length)
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
