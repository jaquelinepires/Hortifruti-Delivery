import { createContext, ReactNode, useEffect, useState } from 'react'
import produce from 'immer'
import { Product } from '../hooks/useApi'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addItemToCart: (item: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCardItem: (cartItemId: number) => void
  cleanCart: () => void
}
interface CartContextProviderProps {
  children: ReactNode
}

const PRODUCT_ITEMS_STORAGE_KEY = 'hortifrutiDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(PRODUCT_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addItemToCart(item: CartItem) {
    const itemAlreadyExcistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (itemAlreadyExcistsInCart < 0) {
        draft.push(item)
      } else {
        draft[itemAlreadyExcistsInCart].quantity += item.quantity
      }
    })
    setCartItems(newCart)
  }
  console.log(cartItems)

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (itemExistsInCart >= 0) {
        const item = draft[itemExistsInCart]
        draft[itemExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCardItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (itemExistsInCart >= 0) {
        draft.splice(itemExistsInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(PRODUCT_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addItemToCart,
        changeCartItemQuantity,
        removeCardItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
