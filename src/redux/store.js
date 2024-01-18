import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './slices/filterSlice'
import { cartSlice } from './slices/cartSlice'

const redusers = combineReducers({
  filters: filterSlice.reducer,
  cart: cartSlice.reducer,
})

export const store = configureStore({
  reducer: redusers,
})
