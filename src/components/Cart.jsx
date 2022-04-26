import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartList = cartContext.cartList;
  // console.log(cartContext.calculateTotalPerItem());
  return(
    <div className="p-10">
    <div className="flex justify-between">
      <h1 className="text-3xl">Your Cart</h1>
    </div>
    <div>
      {
        (cartList.length > 0)
        ? cartList.map(product =>
            <div className="">
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
            </div>
          )
        :
        <div className="grid justify-items-center">
          <h1 className="text-2xl">Your cart is empty!</h1>
          <br></br>
          <button className="btn btn-info"><Link to='/'>Return to Shop</Link></button>
        </div>
      }
      {
        (cartList.length > 0)
        ? <div className="flex flex-col">
            <h2 className="text-xl">Subtotal: ${cartContext.calculateSubtotal()}</h2>
            <button className="btn btn-success mt-2" onClick={()=>console.log('clicked!')}><Link to="/">Checkout</Link></button>
            <br></br>
            <button className="btn btn-error mt-2" onClick={() => cartContext.clearCart()}>Clear Cart</button>
            <button className="btn btn-info mt-2"><Link to='/'>Return to Shop</Link></button>
          </div>
        : <br></br>
      }
    </div>
    </div>
  );
}

export default Cart;