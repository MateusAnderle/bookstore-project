import { useState, createContext } from 'react'

export const CartContext = createContext([])

export function CartContextProvider({ children }) {
  const [products, setProducts] = useState([])

  function addProductCart(object) {
    setProducts([...products, object])
  }

  function removeProductCart(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId)
    setProducts(filteredProducts)
  }

  function addQuantity(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId)

    const result = products.find((item) => item.id === productId)
    result.quantidade = result.quantidade + 1

    setProducts([...filteredProducts, result])
  }

  function subQuantity(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId)

    const result = products.find((item) => item.id === productId)
    result.quantidade = result.quantidade - 1

    if (result.quantidade <= 0) {
      setProducts([...filteredProducts])
      return
    }

    setProducts([...filteredProducts, result])
  }

  function clearCart() {
    setProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductCart,
        removeProductCart,
        addQuantity,
        clearCart,
        subQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
