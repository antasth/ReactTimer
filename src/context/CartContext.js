import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (item) => {
    !checkItemInCart(item) && setCartItems((prev) => [...prev, item])
  }

  const checkItemInCart = (watch) => {
    return !!cartItems.find((item) => item.id === watch.id)
  }

  const value = {
    cartItems: cartItems,
    onAddToCart: onAddToCart,
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
