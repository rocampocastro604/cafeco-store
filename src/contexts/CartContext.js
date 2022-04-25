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

  const cartQty = () => {
    let initialValue = 0;
    let qtys = cartList.map(item => item.qty);
    return qtys.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  }

  const calculateTotalPerItem = (id) => {
    let index =cartList.map(item => item.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
  }

  const calculateSubtotal = () => {
    let totalPerItem = cartList.map(item => calculateTotalPerItem(item.id));
    if(cartList.length > 0){
      return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    } else {
      return 0;
    }
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart,
      removeItem,
      cartQty,
      calculateTotalPerItem,
      calculateSubtotal
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

