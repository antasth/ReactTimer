import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = (item) => {
    !checkItemInCart(item) && setCartItems((prev) => [...prev, item])
  }

  const onDelFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }
  const checkItemInCart = (watch) => {
    return !!cartItems.find((item) => item.id === watch.id)
  }

  const value = {
    cartItems,
    onAddToCart,
    onDelFromCart,
    clearCart,
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
