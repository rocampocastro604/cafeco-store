import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let foundItem = cartList.find(product => product.id === item.id)
    foundItem === undefined
    ? setCartList([...cartList, {
      id: item.id,
      title:item.title,
      img: item.img,
      price: item.price,
      qty: qty
    }
  ])
  : foundItem.qty += qty
  }

  const clearCart = () => {
    setCartList([]);
  }

  const removeItem = (id) => {
    let result = cartList.filter(item => item.id !== id)
    setCartList(result)
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart,
      removeItem
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

