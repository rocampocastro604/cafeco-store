import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import {collection, doc, increment, serverTimestamp, setDoc, updateDoc} from "firebase/firestore"
import db from '../utils/firebaseConfig';
const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartList = cartContext.cartList;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const validateEmptyFields = () => {
    if(name && phone && email !== false){
      createOrder();
    }
  }

  const createOrder = () => {

    cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        //Actualizar el stock de los productos del carrito
        //funcion Increment sale de documentacion de Firebase
        stock: increment(-item.qty)
      });
    });

    let order = {
      buyer: {
        name: name,
        phone: phone,
        email: email
      },
      items: cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        qty: item.qty
      })),
      date: serverTimestamp(),
      total: cartContext.calculateSubtotal()
    }

    console.log(order);
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      createOrderInFirestore()
      .then(result => alert('Your order number is: ' + result.id))
      .catch(err => console.log(err));

      cartContext.clearCart();
  }

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
        ? <div className="flex flex-col justify-center">
            <h2 className="text-xl">Subtotal: ${cartContext.calculateSubtotal()}</h2>
            <form>
              <div className="grid grid-cols-3 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <label className="input-group">
                    <span>Name</span>
                    <input type="text"
                      placeholder="John Doe"
                      className="input input-bordered"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Phone</span>
                  </label>
                  <label className="input-group">
                    <span>Phone</span>
                    <input type="number"
                      placeholder="123456788"
                      className="input input-bordered"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <label className="input-group">
                    <span>Email</span>
                    <input type="email"
                      placeholder="info@site.com"
                      className="input input-bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      />
                  </label>
                </div>
              </div>
              <div>
                <button className="btn btn-success mt-2 w-full" onClick={() => validateEmptyFields()}>Checkout</button>
              </div>
            </form>
            <br></br>
            <button className="btn btn-error mt-2" onClick={() => cartContext.clearCart()}>Clear Cart</button>
            <Link to='/'><button className="btn btn-info mt-2">Return to Shop</button></Link>
          </div>
        : <br></br>
      }
    </div>
    </div>
  );
}

export default Cart;