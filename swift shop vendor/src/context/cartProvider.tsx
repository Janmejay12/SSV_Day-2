import React, { createContext, useEffect, useState } from 'react'
interface cartItem {
  title:  string; 
  price: number;
  quantity: number;
}
    export const CartContext = createContext<any>(null)

const CartProvider = ({children} : {children:React.ReactNode}) => {
    const [cartItems,setCartIems] = useState<cartItem[]>(() =>{
      const stored = localStorage.getItem('cartItems')
      return stored ? JSON.parse(stored) : [];
    })

    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (item : cartItem) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.title === item.title); 
        if(isItemInCart){
          setCartIems(
            cartItems.map((cartItem) => {
              return cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem})
          )
        }
        else {
          setCartIems([...cartItems,{...item, quantity : 1}])
        }
    }
    
  return (
   <CartContext.Provider value = {{cartItems,addToCart}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider;
