import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";

const ItemDetail = (item) => {
  const currentItem = item.item;
  const [quantity, setQuantity] = useState(0);
  const cartContext = useContext(CartContext)

  const onAdd = (qty) => {
    // alert(`${qty} productos añadidos al carrito de compras`)
    setQuantity(qty);
    cartContext.addToCart(currentItem, qty)
  }

  return(
    <>
     {
      currentItem.img
        ?
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={currentItem.img} alt='Product Pic' className="max-w-sm rounded-lg shadow-2xl" />
            <div className="ml-5">
              <h1 className="text-5xl font-bold">{currentItem.title}</h1>
              <h1 className="text-2xl font-bold mt-3"><b>${currentItem.price}</b></h1>
              <p className="py-6">{currentItem.description}</p>
              <div className="badge badge-warning gap-2">
                {currentItem.variety}
              </div>
              <div className="badge badge-error gap-2 ml-3">
                {currentItem.process}
              </div>
              {
              quantity === 0 ?
              <ItemCount stock={currentItem.stock} initial={quantity} onAdd={onAdd}></ItemCount>
                : <Link to='/cart'><button className="btn btn-success btn-wide ml-2">Checkout</button></Link>
              }
            </div>
          </div>
        </div>
        : <div className="grid place-items-center h-screen">
            <progress className="progress progress-secondary w-56"></progress>
          </div>
     }
    </>
  )}

export default ItemDetail;
