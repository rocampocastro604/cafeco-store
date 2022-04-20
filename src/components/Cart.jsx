import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartList = cartContext.cartList;

  return(
    <div className="p-10">
    <div className="flex justify-between">
      <h1 className="text-3xl">Your Cart</h1>
      <button className="btn btn-error" onClick={() => cartContext.clearCart()}>Clear Cart</button>
    </div>
    <div>
      {
        (cartList.length > 0)
        ? cartList.map(product =>
            <div className="card card-side bg-base-100 shadow-xl h-48 mb-3 mt-2">
              <figure><img className="h-48" src={product.img} alt="Coffee pic" /></figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>Quantity: {product.qty}</p>
                <h3>Price per unit: ${product.price}</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-error" onClick={() => cartContext.removeItem(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          )
        :
        <div className="flex justify-center">
          <h1 className="text-2xl">Your cart is empty</h1>
        </div>
      }
    </div>
    </div>
  );
}

export default Cart;